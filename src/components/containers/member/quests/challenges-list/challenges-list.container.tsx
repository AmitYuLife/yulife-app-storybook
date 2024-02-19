import React, { FC, useState, useCallback, memo, useMemo, useEffect, useRef } from "react";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "@graphql/challenges";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { GetQuestMapLevel, GetQuestMapLevel_getQuestMapLevel_slots } from "@graphql/_core/schema";
import { challengeStartAction } from "@redux/levels/levels.actions";
import { BlurProvider, IToggleBlur } from "@atoms";
import { ChallengesListScreen, ChallengeDetailsScreen } from "@screens";
import { useQuery } from "@apollo/client";
import { handleLinkPress } from "@services/app-link";
import { getCurrentWorld, gqlCapabilityToCapability } from "@utils";
import { ChallengesLoading } from "@components/molecules";
import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { t } from "@locale";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { YUNIVERSAL_LEVEL_SLOTS } from "@components/screens/member/quests/quests-scroll-screen/yuniversal/level/level-slots";
import { usePopToQuestsRootOnNewDate, useVerifyAndAuthorizeCapability } from "@hooks";
import { ActiveLevelState, getActiveChallengeState } from "@redux/levels/levels.selectors";
import { handleInternalContentChallenge, onPressChallengeTile } from "@utils/challenges";

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
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability();
  const { authoriseFitKitTypes } = useFitKit();
  const [submitting, setSubmittingState] = useState(false);
  const [error, setErrorState] = useState<string | null>(null);
  const activeChallengeState = useSelector(getActiveChallengeState);
  const [slot, setSlot] = useState<GetQuestMapLevel_getQuestMapLevel_slots | null>(null);

  const currentWorld = getCurrentWorld(level);

  const { loading, data } = useQuery<GetQuestMapLevel>(GQL_QUERY_GET_QUEST_MAP_LEVEL, {
    variables: { level, yuniversalMap },
    fetchPolicy: "cache-and-network",
  });

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
    setErrorState(t("create_challenge_error"));
  }, []);

  const handleNavPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const createChallenge = useCallback(async () => {
    try {
      setSubmittingState(true);

      await getChallengeDetails(slot.id);

      dispatch(
        challengeStartAction({
          levelSlotId: slot.id,
          createQuestMapLevelChallengeVariables: { levelSlotId: slot.id },
        })
      );
    } catch (e) {
      setError();
      setSubmittingState(false);
    }
  }, [dispatch, setError, slot]);

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

  const handleSubmitChallenge = useCallback(async () => {
    const internalContent = slot?.details?.internalContent;

    if (internalContent?.length) {
      dispatch(
        logMixpanelEventActionCreator("challenge_selected", {
          subtype: internalContent[0].contentType === "meditopia" ? "meditation" : internalContent[0].contentType,
          levelSlotId: slot.id,
        })
      );
      return handleInternalContentChallenge({ ...challengeListState, levelSlot: slot, internalContent });
    }

    return createChallenge();
  }, [slot, createChallenge, dispatch, challengeListState]);

  const navigateToQuestScreen = useCallback(() => {
    Navigation.pop(componentId);
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
      };

      return {
        ...formattedSlot,
        currentWorld,
        onPress: async () => {
          const capability = gqlCapabilityToCapability(levelSlot.yuHealth?.capabilities);

          await onPressChallengeTile({
            level,
            levelSlot,
            componentId,
            createChallenge,
            authoriseFitKitTypes,
            setActiveSlot: setSlot,
            verifyAndAuthorizeCapability,
            showOverlay: showOverlayRef?.current,
            capability,
          });
        },
      };
    }, []);
  }, [
    level,
    componentId,
    currentWorld,
    createChallenge,
    authoriseFitKitTypes,
    verifyAndAuthorizeCapability,
    data?.getQuestMapLevel?.slots,
  ]);

  const renderContent = useCallback(
    ({ showOverlay }: IToggleBlur) => {
      const onLayout = () => {
        showOverlayRef.current = showOverlay;
      };

      if (loading) {
        return <ChallengesLoading onBackPress={handleNavPress} currentLevel={level} yuniversalMap={yuniversalMap} />;
      }

      return (
        <ChallengesListScreen
          challenges={slots}
          onLayout={onLayout}
          currentLevel={level}
          yuniversalMap={yuniversalMap}
          name={currentLevelName}
          onPressLeftIcon={handleNavPress}
        />
      );
    },
    [handleNavPress, level, loading, currentLevelName, slots, yuniversalMap]
  );

  const renderOverlay = useCallback(
    ({ hideOverlay }: IToggleBlur) => {
      return (
        <ChallengeDetailsScreen
          slot={slot}
          error={error}
          isLoading={submitting}
          onPressBack={hideOverlay}
          currentWorld={currentWorld}
          onPressCta={handleSubmitChallenge}
          onPressClose={navigateToQuestScreen}
          onPressSetUp={!slot?.details?.tutorialUrl ? null : handleLinkPress(slot.details.tutorialUrl)}
        />
      );
    },
    [currentWorld, error, handleSubmitChallenge, navigateToQuestScreen, slot, submitting]
  );

  return <BlurProvider render={renderContent} renderOverlay={renderOverlay} />;
};

export default memo(ChallengesListContainer);
