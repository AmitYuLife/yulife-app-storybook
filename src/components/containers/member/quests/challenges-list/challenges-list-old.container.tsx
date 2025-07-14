import React, { FC, useState, useCallback, memo, useMemo, useEffect } from "react";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import {
  challengeStartAction,
  clearChallengeStartErrorAction,
  updateChallengeAppButton,
} from "@redux/levels/levels.actions";
import { BlurProvider, IToggleBlur } from "@atoms";
import { ChallengesListScreen, ChallengeDetailsScreen } from "@screens";
import { useQuery } from "@apollo/client";
import { handleLinkPress } from "@services/app-link";
import { getCurrentWorld, isSamsung } from "@utils";
import { DETOX_ENABLED } from "@services/socket";
import { ROUTES } from "@navigation/constants";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { YUNIVERSAL_LEVEL_SLOTS } from "@components/screens/member/quests/quests-scroll-screen/yuniversal/level/level-slots";
import { usePopToQuestsRootOnNewDate, useUserFeatures, useConsumableModal, useScreenReaderChange } from "@hooks";
import { getActiveChallengeState, getCreateChallengeError } from "@redux/levels/levels.selectors";
import { ActiveLevelState } from "@redux/levels/levels.types";
import { onPressChallengeTile } from "@utils/challenges";
import { GetQuestMapLevelQuery, gql } from "@graphql/__generated";
import { getMobileQuestLevelDetails } from "@graphql/challenges/getChallengeDetails.gql";
import { t } from "@locale";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";

interface IProps {
  componentId: string;
  level: number;
  levelName: string;
  yuniversalMap?: number;
}

type Props = IProps;

type InternalContentProps = GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][0]["details"]["internalContent"][0];

const ChallengesListOldContainer: FC<Props> = ({ level, levelName, yuniversalMap, componentId }) => {
  const activeChallengeState = useSelector(getActiveChallengeState);
  const createChallengeError = useSelector(getCreateChallengeError);
  const { hasDonationBattlepass } = useSelector(getRewardsTabSettings);
  const [error, setErrorState] = useState(null as string);
  const [slot, setSlot] = useState(null as GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][0]);
  const [submitting, setSubmittingState] = useState(false);
  const dispatch = useDispatch();
  const { authoriseFitKitTypes } = useFitKit();
  const features = useUserFeatures();
  const isScreenReaderEnabled = useScreenReaderChange();

  usePopToQuestsRootOnNewDate(level);

  const { loading, data, refetch } = useQuery(gql("GetQuestMapLevelDocument"), {
    variables: { level, yuniversalMap },
    fetchPolicy: "cache-and-network",
  });

  const { openConsumables } = useConsumableModal(refetch);

  const currentWorld = getCurrentWorld(level);

  const name = useMemo(() => {
    if (yuniversalMap > 0) {
      const yuniversalLevel = YUNIVERSAL_LEVEL_SLOTS.find((yuniversalSlot) => yuniversalSlot.level === level);

      if (yuniversalLevel) {
        return yuniversalLevel.name;
      }
    }

    return levelName || `level ${level}`;
  }, [level, levelName, yuniversalMap]);

  const setError = useCallback(() => {
    setErrorState(createChallengeError);
  }, [createChallengeError]);

  const handleNavPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const createChallenge = useCallback(async () => {
    try {
      setSubmittingState(true);
      if (slot.fitKitTypes?.length && !DETOX_ENABLED) {
        // if we'll add new challenges that will require diff permissions that we ask for
        // Step, Mindfulness and FiiT challenges we should ask permissions fro Samsung as well
        if (!isSamsung()) {
          await authoriseFitKitTypes(slot.fitKitTypes);
        }
      }

      await getMobileQuestLevelDetails({
        levelSlotTemplateId: slot.levelSlotTemplateId,
        yuniversalMap,
        level,
      });

      dispatch(
        challengeStartAction({
          levelSlotId: slot.id,
          createMobileQuestLevelChallengeVariables: {
            levelSlotTemplateId: slot.levelSlotTemplateId,
            yuniversalMap,
            level,
          },
        })
      );

      const lowerCaseLevelSlotTemplateId = slot.levelSlotTemplateId.toLowerCase();

      const isWorkout = lowerCaseLevelSlotTemplateId.includes("workout");

      if (isWorkout && features?.gameHideWorkoutInternalContent) {
        const label = isWorkout
          ? "screens.challenge_progress.workout_with_other_apps"
          : "screens.challenge_progress.how_meditate_with_other_apps_label";
        dispatch(
          updateChallengeAppButton({
            appButton: {
              title: t(label),
              tutorialUrl: slot.details.tutorialUrl,
            },
          })
        );
      }
    } catch (e) {
      setError();
      setSubmittingState(false);
    }
  }, [authoriseFitKitTypes, setError, dispatch, slot, level, yuniversalMap]);

  useEffect(() => {
    if (!submitting) {
      return;
    }

    switch (activeChallengeState) {
      case ActiveLevelState.START_CHALLENGE_SUCCEED: {
        handleNavPress();
        return;
      }

      case ActiveLevelState.START_CHALLENGE_FAILED: {
        setError();
        setSubmittingState(false);
        return;
      }
    }
  }, [activeChallengeState, submitting, setError, handleNavPress]);

  const handleSubmitChallenge = useCallback(async () => {
    const internalContent = slot?.details?.internalContent;

    if (internalContent?.length) {
      dispatch(
        logMixpanelEventActionCreator("challenge_selected", {
          subtype: internalContent[0].contentType === "meditopia" ? "meditation" : internalContent[0].contentType,
          levelSlotId: slot.id,
          levelSlotTemplateId: slot.levelSlotTemplateId,
          level,
          yuniversalMap,
        })
      );
      return handleInternalContentChallenge(internalContent);
    }

    return createChallenge();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slot?.id, dispatch, handleNavPress, setError]);

  const handleInternalContentChallenge = useCallback(
    (internalContent: InternalContentProps[]) => {
      switch (internalContent[0].contentType) {
        case "meditopia": {
          return Navigation.push(componentId, {
            component: {
              id: ROUTES.meditopiaMediaList,
              name: ROUTES.meditopiaMediaList,
              passProps: {
                createChallenge,
                levelSlotId: slot.id,
                fitKitTypes: slot.fitKitTypes,
                tutorialUrl: slot.details.tutorialUrl,
                ...internalContent[0],
                level,
                levelSlotTemplateId: slot.levelSlotTemplateId,
              },
            },
          });
        }

        case "fiit":
        case "workout-content": {
          return Navigation.push(componentId, {
            component: {
              id: ROUTES.fiitMediaCategoryList,
              name: ROUTES.fiitMediaCategoryList,
              passProps: {
                createChallenge,
                levelSlotId: slot.id,
                fitKitTypes: slot.fitKitTypes,
                tutorialUrl: slot.details.tutorialUrl,
                content: internalContent,
                reward: slot.reward,
                level,
                levelSlotTemplateId: slot.levelSlotTemplateId,
              },
            },
          });
        }
      }
    },
    [componentId, createChallenge, level, slot]
  );

  const navigateToQuestScreen = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const slots = data?.getQuestMapLevel?.slots || [];

  const resetErrorAndHideOverlay = useCallback(
    (hideOverlay: IToggleBlur["hideOverlay"]) => () => {
      setErrorState("");
      dispatch(clearChallengeStartErrorAction());
      hideOverlay?.();
    },
    [dispatch]
  );

  if (isScreenReaderEnabled && slot) {
    return (
      <ChallengeDetailsScreen
        slot={slot}
        error={error}
        isLoading={submitting}
        onPressBack={() => setSlot(null)}
        currentWorld={currentWorld}
        onPressCta={handleSubmitChallenge}
        onPressClose={navigateToQuestScreen}
        onPressSetUp={!slot?.details?.tutorialUrl ? null : handleLinkPress(slot.details.tutorialUrl)}
      />
    );
  }

  return (
    <BlurProvider
      render={({ showOverlay }: IToggleBlur) => (
        <>
          <ChallengesListScreen
            openConsumables={hasDonationBattlepass ? openConsumables : undefined}
            challenges={slots.map((levelSlot) => {
              const formattedSlot = {
                heading: levelSlot.heading,
                duration: levelSlot.duration,
                id: levelSlot.id,
                reward: levelSlot.reward,
                imageUri: levelSlot.image.uri,
                availableAtLevel: levelSlot.availableAtLevel || 1,
                isLocked: levelSlot.isLocked,
                isCompleted: levelSlot.isCompleted,
                hasSurge: levelSlot.hasSurge,
                hasBonus: levelSlot.hasBonus,
                extraChallenges: levelSlot.extraChallenges,
              };

              return {
                ...formattedSlot,
                currentWorld,
                onPress: async () => {
                  await onPressChallengeTile({
                    levelSlot,
                    setActiveSlot: setSlot,
                    componentId,
                    createChallenge,
                    level,
                    authoriseFitKitTypes,
                    showOverlay,
                  });
                },
              };
            })}
            currentLevel={level}
            loading={loading}
            yuniversalMap={yuniversalMap}
            name={name}
            onPressLeftIcon={handleNavPress}
          />
        </>
      )}
      renderOverlay={({ hideOverlay }: IToggleBlur) => (
        <ChallengeDetailsScreen
          slot={slot}
          error={error}
          isLoading={submitting}
          onPressBack={resetErrorAndHideOverlay(hideOverlay)}
          currentWorld={currentWorld}
          onPressCta={handleSubmitChallenge}
          onPressClose={navigateToQuestScreen}
          onPressSetUp={!slot?.details?.tutorialUrl ? null : handleLinkPress(slot.details.tutorialUrl)}
        />
      )}
    />
  );
};

export default memo(ChallengesListOldContainer);
