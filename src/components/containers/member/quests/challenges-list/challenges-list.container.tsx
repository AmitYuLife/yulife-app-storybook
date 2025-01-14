import React, { FC, useState, useCallback, memo, useMemo, useEffect, useRef } from "react";
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
import { getCurrentWorld, gqlCapabilityToCapability } from "@utils";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { YUNIVERSAL_LEVEL_SLOTS } from "@components/screens/member/quests/quests-scroll-screen/yuniversal/level/level-slots";
import {
  useConsumableModal,
  usePopToQuestsRootOnNewDate,
  useScreenReaderChange,
  useUserFeatures,
  useVerifyAndAuthorizeCapability,
} from "@hooks";
import { getActiveChallengeState, getCreateChallengeError } from "@redux/levels/levels.selectors";
import { handleInternalContentChallenge, onPressChallengeTile } from "@utils/challenges";
import { ActiveLevelState } from "@redux/levels/levels.types";
import { GetQuestMapLevelQuery, gql } from "@graphql/__generated";
import { getChallengeDetailsToggle } from "@graphql/challenges/getChallengeDetails.gql";
import { t } from "@locale";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";

type Slot = GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][0];

export interface IChallengesListContainerProps {
  componentId: string;
  level: number;
  levelName: string;
  yuniversalMap?: number;
}

const ChallengesListContainer: FC<IChallengesListContainerProps> = ({
  level,
  levelName,
  yuniversalMap,
  componentId,
}) => {
  usePopToQuestsRootOnNewDate(level);
  const dispatch = useDispatch();
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId });
  const { authoriseFitKitTypes } = useFitKit();
  const {
    tempGameEnableReleaseYuHealthV2,
    tempGameUseSettingsConfigForQuestMapV3,
    gameHideMeditationInternalContent,
    gameHideWorkoutInternalContent,
  } = useUserFeatures();
  const { hasDonationBattlepass } = useSelector(getRewardsTabSettings);
  const [submitting, setSubmittingState] = useState(false);
  const [error, setErrorState] = useState<string | null>(null);
  const activeChallengeState = useSelector(getActiveChallengeState);
  const createChallengeError = useSelector(getCreateChallengeError);
  const [slot, setSlot] = useState<Slot | null>(null);
  const isScreenReaderEnabled = useScreenReaderChange();

  const currentWorld = getCurrentWorld(level);

  const { loading, data, refetch } = useQuery(gql("GetQuestMapLevelDocument"), {
    variables: { level, yuniversalMap },
    fetchPolicy: "cache-and-network",
  });

  const { openConsumables } = useConsumableModal(refetch);

  const currentLevelName = useMemo(() => {
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

      await getChallengeDetailsToggle({
        tempGameUseSettingsConfigForQuestMapV3,
        getDetailsToggleVariables: {
          levelSlotTemplateId: slot.levelSlotTemplateId,
          yuniversalMap,
          level,
        },
        levelSlotId: slot.id,
      });

      dispatch(
        challengeStartAction({
          levelSlotId: slot.id,
          createQuestMapLevelChallengeVariables: { levelSlotId: slot.id },
          createMobileQuestLevelChallengeVariables: {
            level,
            levelSlotTemplateId: slot.levelSlotTemplateId,
            yuniversalMap,
          },
        })
      );

      const lowerCaseLevelSlotTemplateId = slot.levelSlotTemplateId.toLowerCase();

      const isMeditation = lowerCaseLevelSlotTemplateId.includes("meditation");
      const isWorkout = lowerCaseLevelSlotTemplateId.includes("workout");

      if ((isMeditation && gameHideMeditationInternalContent) || (isWorkout && gameHideWorkoutInternalContent)) {
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
  }, [dispatch, setError, level, yuniversalMap, slot, tempGameUseSettingsConfigForQuestMapV3]);

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

  const challengeListState = useMemo(
    () => ({
      level,
      componentId,
      createChallenge,
      authoriseFitKitTypes,
      setActiveSlot: setSlot,
      verifyAndAuthorizeCapability,
      showOverlay: showOverlayRef?.current,
    }),
    [authoriseFitKitTypes, componentId, createChallenge, level, verifyAndAuthorizeCapability]
  );

  const handleSubmitChallenge = useCallback(
    async (levelSlot?: Slot) => {
      const challengeSlot = levelSlot || slot;
      const internalContent = challengeSlot?.details?.internalContent;

      if (internalContent?.length) {
        dispatch(
          logMixpanelEventActionCreator("challenge_selected", {
            subtype: internalContent[0].contentType === "meditopia" ? "meditation" : internalContent[0].contentType,
            levelSlotId: challengeSlot.id,
            levelSlotTemplateId: challengeSlot.levelSlotTemplateId,
            level,
            yuniversalMap,
          })
        );
        return handleInternalContentChallenge({ ...challengeListState, levelSlot: challengeSlot, internalContent });
      }

      return createChallenge();
    },
    [slot, createChallenge, dispatch, challengeListState, level, yuniversalMap]
  );

  const navigateToQuestScreen = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const showOverlayRef = useRef<() => void>();

  const slots = useMemo(() => {
    return data?.getQuestMapLevel?.slots.map((levelSlot) => {
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
          const capability = gqlCapabilityToCapability(levelSlot.yuHealth?.capabilities);

          await onPressChallengeTile({
            level,
            levelSlot,
            capability,
            componentId,
            createChallenge: handleSubmitChallenge,
            authoriseFitKitTypes,
            setActiveSlot: setSlot,
            tempGameEnableReleaseYuHealthV2,
            verifyAndAuthorizeCapability,
            showOverlay: showOverlayRef?.current,
            isScreenReaderEnabled,
          });
        },
      };
    }, []);
  }, [
    level,
    componentId,
    currentWorld,
    authoriseFitKitTypes,
    tempGameEnableReleaseYuHealthV2,
    verifyAndAuthorizeCapability,
    data?.getQuestMapLevel?.slots,
    isScreenReaderEnabled,
    handleSubmitChallenge,
    setSlot,
  ]);

  const resetErrorAndHideOverlay = useCallback(
    (hideOverlay: IToggleBlur["hideOverlay"]) => () => {
      setErrorState("");
      dispatch(clearChallengeStartErrorAction());
      hideOverlay?.();
    },
    [dispatch]
  );

  const renderContent = useCallback(
    ({ showOverlay }: IToggleBlur) => {
      const onLayout = () => {
        showOverlayRef.current = showOverlay;
      };

      return (
        <ChallengesListScreen
          challenges={slots}
          onLayout={onLayout}
          currentLevel={level}
          yuniversalMap={yuniversalMap}
          name={currentLevelName}
          onPressLeftIcon={handleNavPress}
          loading={loading}
          openConsumables={hasDonationBattlepass ? openConsumables : undefined}
        />
      );
    },
    [slots, level, yuniversalMap, currentLevelName, handleNavPress, loading, openConsumables, hasDonationBattlepass]
  );

  const renderOverlay = useCallback(
    ({ hideOverlay }: IToggleBlur) => {
      return (
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
      );
    },
    [currentWorld, error, handleSubmitChallenge, navigateToQuestScreen, resetErrorAndHideOverlay, slot, submitting]
  );

  return <BlurProvider render={renderContent} renderOverlay={renderOverlay} />;
};

export default memo(ChallengesListContainer);
