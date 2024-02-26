import React, { FC, useState, useCallback, memo, useMemo, useEffect } from "react";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "@graphql/challenges";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import {
  GetQuestMapLevel,
  GetQuestMapLevel_getQuestMapLevel_slots,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent as InternalContentProps,
} from "@graphql/_core/schema";
import { challengeStartAction } from "@redux/levels/levels.actions";
import { BlurProvider, IToggleBlur } from "@atoms";
import { ChallengesListScreen, ChallengeDetailsScreen } from "@screens";
import { useQuery } from "@apollo/client";
import { handleLinkPress } from "@services/app-link";
import { getCurrentWorld, isSamsung } from "@utils";
import { ChallengesLoading } from "@components/molecules";
import { DETOX_ENABLED } from "@services/socket";
import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { ROUTES } from "@navigation/constants";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { t } from "@locale";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { YUNIVERSAL_LEVEL_SLOTS } from "@components/screens/member/quests/quests-scroll-screen/yuniversal/level/level-slots";
import { usePopToQuestsRootOnNewDate } from "@hooks";
import { getActiveChallengeState } from "@redux/levels/levels.selectors";
import { ActiveLevelState } from "@redux/levels/levels.types";
import { onPressChallengeTile } from "@utils/challenges";

interface IProps {
  componentId: string;
  level: number;
  levelName: string;
  yuniversalMap?: number;
}

type Props = IProps;

const ChallengesListOldContainer: FC<Props> = ({ level, levelName, yuniversalMap, componentId }) => {
  const activeChallengeState = useSelector(getActiveChallengeState);
  const [error, setErrorState] = useState(null as string);
  const [slot, setSlot] = useState(null as GetQuestMapLevel_getQuestMapLevel_slots);
  const [submitting, setSubmittingState] = useState(false);
  const dispatch = useDispatch();
  const { authoriseFitKitTypes } = useFitKit();

  usePopToQuestsRootOnNewDate(level);

  const { loading, data } = useQuery<GetQuestMapLevel>(GQL_QUERY_GET_QUEST_MAP_LEVEL, {
    variables: { level, yuniversalMap },
    fetchPolicy: "cache-and-network",
  });

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
    setErrorState(t("create_challenge_error"));
  }, []);

  const handleNavPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const createChallenge = async () => {
    try {
      setSubmittingState(true);
      if (slot.fitKitTypes?.length && !DETOX_ENABLED) {
        // if we'll add new challenges that will require diff permissions that we ask for
        // Step, Mindfulness and FiiT challenges we should ask permissions fro Samsung as well
        if (!isSamsung()) {
          await authoriseFitKitTypes(slot.fitKitTypes);
        }
      }

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
  };

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
              },
            },
          });
        }
      }
    },
    [componentId, createChallenge, level, slot]
  );

  const navigateToQuestScreen = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const slots = data?.getQuestMapLevel?.slots || [];

  return (
    <BlurProvider
      render={({ showOverlay }: IToggleBlur) => (
        <>
          {loading ? (
            <ChallengesLoading onBackPress={handleNavPress} currentLevel={level} yuniversalMap={yuniversalMap} />
          ) : (
            <ChallengesListScreen
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
              yuniversalMap={yuniversalMap}
              name={name}
              onPressLeftIcon={handleNavPress}
            />
          )}
        </>
      )}
      renderOverlay={({ hideOverlay }: IToggleBlur) => (
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
      )}
    />
  );
};

export default memo(ChallengesListOldContainer);
