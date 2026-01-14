import { put, select, call } from "redux-saga/effects";
import {
  challengeCancelAction,
  challengeEndSuccessAction,
  finishInAppMediaChallengeAction,
  setChallengeSubmissionStatus,
} from "../levels.actions";
import { logErrorActionCreator, logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import moment from "moment";
import { getInAppDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { updateInAppMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { IAppDailyMeditationProps } from "@redux/daily-meditation/daily-meditation.types";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";
import { Style } from "@styles";
import { Storage, StorageKey } from "@utils/storage";
import { getActiveLevel } from "../levels.selectors";
import { store } from "@redux/_core/store";
import { updateMobileQuestLevelChallenge } from "@graphql/challenges/updateChallenge.gql";
import { isApolloError } from "@apollo/client";
import { ChallengeSubmissionStatus } from "../levels.types";

const MEDITATION_ANTI_CHEAT_MINUTES = 2;

export default function* finishInAppMediaChallengeSaga({
  payload,
}: ReturnType<typeof finishInAppMediaChallengeAction>) {
  const { video, eventType } = payload;
  const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  if (!activeLevel) {
    return;
  }

  try {
    yield put(setChallengeSubmissionStatus(ChallengeSubmissionStatus.Loading));

    const inAppMeditation: IAppDailyMeditationProps = yield select(getInAppDailyMeditation);

    const payloadToSend = {
      contentId: video.id,
      payload: { value: video.duration },
      challengeId: activeLevel.id,
    };

    const { data }: Awaited<ReturnType<typeof updateMobileQuestLevelChallenge>> = yield call(
      updateMobileQuestLevelChallenge,
      payloadToSend
    );

    const challenge = data?.updateMobileQuestLevelChallenge?.challenge;

    if (!challenge) {
      yield put(setChallengeSubmissionStatus(ChallengeSubmissionStatus.Error));
      yield put(logMixpanelEventActionCreator("media_challenge_missing", payloadToSend));
      return;
    }

    yield put(
      challengeEndSuccessAction({
        milestonesLog: challenge?.milestoneLog,
        coins: challenge?.yuCoinAwarded,
        level: challenge?.level,
        rating: challenge?.rating,
        incomingData: challenge?.incomingData,
      })
    );

    if (eventType === "mindfulness") {
      if (moment().diff(inAppMeditation.lastUpdated, "minutes") < MEDITATION_ANTI_CHEAT_MINUTES) {
        yield put(logMixpanelEventActionCreator("media_challenge_anti_cheat", { inAppMeditation }));
      } else {
        yield put(updateInAppMeditation({ duration: video.duration, createdAt: challenge.createdAt }));
      }
    }

    yield call(Navigation.popTo, ROUTES.quests);

    yield put(
      logMixpanelEventActionCreator("media_challenge_end", {
        challengeId: activeLevel.id,
        level: activeLevel.level,
        levelSlotTemplateId: activeLevel.levelSlotTemplateId,
        duration: video.duration,
        contentId: video.id,
      })
    );
  } catch (err) {
    if (isApolloError(err)) {
      yield put(setChallengeSubmissionStatus(ChallengeSubmissionStatus.Error));
    }

    yield put(logErrorActionCreator(err, { file: "media-player.container" }));
    yield call(showYuModal, {
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps: {
          isPrimaryOnePressOnly: true,
          heading: t("modals.generic_modal.on_media_challenge_end_error.heading"),
          ctaLabel: t("modals.generic_modal.on_media_challenge_end_error.cta_label"),
          subheading: t("modals.generic_modal.on_media_challenge_end_error.subheading"),
          image: {
            source: require("@assets/media-screen/media-failed-modal-hero.png"),
            width: Style.adjust(200),
            height: Style.adjust(200),
          },
          onPress: async () => {
            store.dispatch(challengeCancelAction());
            await Navigation.dismissAllModals();
            await Navigation.popTo(ROUTES.quests);
          },
        },
      },
    });
  } finally {
    yield call(Storage.removeItem, StorageKey.mediaPlayerProgress);
  }
}
