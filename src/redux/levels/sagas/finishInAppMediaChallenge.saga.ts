import { put, select, call } from "redux-saga/effects";
import { challengeCancelAction, challengeEndSuccessAction, finishInAppMediaChallengeAction } from "../levels.actions";
import updateQuestMapLevelChallenge from "@graphql/challenges/updateQuestMapLevelChallenge.gql";
import { logErrorActionCreator, logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import moment from "moment";
import { getInAppDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { updateInAppMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { IAppDailyMeditationProps } from "@redux/daily-meditation/daily-meditation.reducer";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";
import { Style } from "@styles";
import { Storage, StorageKey } from "@utils/storage";
import { getActiveLevel } from "../levels.selectors";
import { store } from "@redux/_core/store";

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
    const inAppMeditation: IAppDailyMeditationProps = yield select(getInAppDailyMeditation);

    const payloadToSend = {
      levelSlotId: activeLevel.levelSlotId,
      contentId: video.id,
      payload: { value: video.duration },
    };

    const { data } = yield call(updateQuestMapLevelChallenge, {
      levelSlotId: activeLevel.levelSlotId,
      payload: { value: video.duration },
      contentId: video.id,
    });

    const challenge = data?.updateQuestMapLevelChallenge?.challenge;

    if (!challenge) {
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

    if (eventType === "mindfullness") {
      if (moment().diff(inAppMeditation.lastUpdated, "minutes") < MEDITATION_ANTI_CHEAT_MINUTES) {
        yield put(logMixpanelEventActionCreator("media_challenge_anti_cheat", { inAppMeditation }));
      } else {
        yield put(updateInAppMeditation({ duration: video.duration, createdAt: challenge.createdAt }));
      }
    }

    yield call(Navigation.popTo, ROUTES.quests);

    yield put(
      logMixpanelEventActionCreator("media_challenge_end", {
        levelSlotId: activeLevel.levelSlotId,
        duration: video.duration,
        contentId: video.id,
      })
    );
  } catch (err) {
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
