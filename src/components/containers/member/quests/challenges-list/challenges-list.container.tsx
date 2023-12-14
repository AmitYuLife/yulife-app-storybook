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
import { ChallengesListScreen, ChallengeDetailsScreenV2, ChallengeDetailsScreenV1 } from "@screens";
import { useQuery } from "@apollo/client";
import { handleLinkPress } from "@services/app-link";
import { getCurrentWorld, isSamsung } from "@utils";
import { ChallengesLoading } from "@components/molecules";
import { DETOX_ENABLED } from "@services/socket";
import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import RNFitKit from "@yu-life/react-native-fitkit";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { usePopToQuestsRootOnNewDate, useUserFeatures } from "@hooks";
import { ActiveLevelState, getActiveChallengeState } from "@redux/levels/levels.selectors";

interface IProps {
  componentId: string;
  level: number;
  levelName: string;
  yuniversalMap?: number;
}

type Props = IProps;

const ChallengesListContainer: FC<Props> = ({ level, levelName, yuniversalMap, componentId }) => {
  const features = useUserFeatures();
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

  const name = useMemo(() => levelName || `level ${level}`, [level, levelName]);

  const setError = useCallback(() => {
    setErrorState(t("create_challenge_error"));
  }, []);

  const onDismissFitkitConnect = useCallback(() => {
    Navigation.pop(ROUTES.onboardingFitKitConnect);
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
    [slot?.id]
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
                    if (levelSlot.isLocked) {
                      return;
                    }

                    setSlot(levelSlot);

                    if (levelSlot.type === "brainGame") {
                      switch (levelSlot.subtype) {
                        case "sudoku": {
                          return Navigation.push(componentId, {
                            component: {
                              id: ROUTES.sudokuStaging,
                              name: ROUTES.sudokuStaging,
                              passProps: {
                                slot: levelSlot,
                                createChallenge,
                                level,
                              },
                            },
                          });
                        }
                      }
                    }

                    // Check for isAuthorised only for samsung, for other devices the default will be true so the switchToGoogleFit modal will not be shown
                    let activityFromGoogleFitAuthorised;
                    let samsungHealthStepsAuthorised;
                    if (isSamsung()) {
                      activityFromGoogleFitAuthorised = await RNFitKit.isAuthorised({
                        read: [],
                        platform: "GoogleFit",
                      });
                      samsungHealthStepsAuthorised = await RNFitKit.isAuthorised({
                        read: [],
                        platform: "SamsungHealth",
                      });
                    }

                    // TODO: show this popup for other devices if not authorised for the challenges that user select to start
                    const isNotStepsAndMediationTypes = levelSlot.fitKitTypes.some((type) =>
                      nonSamsungHealthTypesThatRequirePermissions.includes(type)
                    );
                    const isStepsAndMeditation = levelSlot.fitKitTypes.some((type) =>
                      samsungHealthAvailablePermissions.includes(type)
                    );
                    if (!activityFromGoogleFitAuthorised && isNotStepsAndMediationTypes && isSamsung()) {
                      await showYuModal({
                        component: {
                          id: MODALS.switchToGoogleFit,
                          name: MODALS.switchToGoogleFit,
                          passProps: {
                            onConnect: async () => {
                              await authoriseFitKitTypes(levelSlot.fitKitTypes);
                            },
                            onConnected: () => {
                              showOverlay();
                            },
                          },
                        },
                      });
                      return;
                    }

                    if (
                      isSamsung() &&
                      isStepsAndMeditation &&
                      !(samsungHealthStepsAuthorised || activityFromGoogleFitAuthorised)
                    ) {
                      const route = ROUTES.onboardingFitKitConnect;
                      Navigation.push(componentId, {
                        component: {
                          id: route,
                          name: route,
                          passProps: {
                            dismissButtonLabel: "Cancel",
                            onDismiss: onDismissFitkitConnect,
                            navigateToNext: () => {
                              Navigation.pop(route);
                              showOverlay();
                            },
                          },
                          options: { bottomTabs },
                        },
                      });
                      return;
                    }

                    showOverlay();
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
      renderOverlay={({ hideOverlay }: IToggleBlur) =>
        features?.newChallengeList ? (
          <ChallengeDetailsScreenV2
            slot={slot}
            error={error}
            isLoading={submitting}
            onPressBack={hideOverlay}
            currentWorld={currentWorld}
            onPressCta={handleSubmitChallenge}
            onPressClose={navigateToQuestScreen}
            onPressSetUp={!slot?.details?.tutorialUrl ? null : handleLinkPress(slot.details.tutorialUrl)}
          />
        ) : (
          <ChallengeDetailsScreenV1
            error={error}
            isLoading={submitting}
            onPressClose={hideOverlay}
            currentWorld={currentWorld}
            heading={slot?.details?.heading}
            onPressCta={handleSubmitChallenge}
            imageUri={slot?.details?.image?.uri}
            milestones={slot?.details?.milestones}
            onPressSetUp={!slot?.details?.tutorialUrl ? null : handleLinkPress(slot.details.tutorialUrl)}
          />
        )
      }
    />
  );
};

const nonSamsungHealthTypesThatRequirePermissions = [
  FitKitType.Flexibility,
  FitKitType.HIIT,
  FitKitType.Pilates,
  FitKitType.Sleep,
  FitKitType.Strength,
  FitKitType.Swimming,
  FitKitType.Yoga,
];

const samsungHealthAvailablePermissions = [FitKitType.StepCount, FitKitType.MindfulSession];

export default memo(ChallengesListContainer);
