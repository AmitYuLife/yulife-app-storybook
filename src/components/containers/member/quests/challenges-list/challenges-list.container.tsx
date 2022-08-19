import React, { FC, useState, useCallback, memo, useMemo } from "react";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "@graphql/challenges";
import { Navigation } from "react-native-navigation";
import { useDispatch } from "react-redux";
import { GetQuestMapLevel, GetQuestMapLevel_getQuestMapLevel_slots } from "@graphql/_core/schema";
import { challengeStartSuccessAction } from "@redux/levels/levels.actions";
import { BlurProvider, IToggleBlur } from "@atoms";
import { ChallengesListScreen, ChallengeDetailsScreen } from "@screens";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { handleLinkPress } from "@services/app-link";
import { getCurrentWorld, isSamsung } from "@utils";
import { ChallengesLoading } from "@components/molecules";
import { DETOX_ENABLED } from "@services/socket";
import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import RNFitKit from "@yu-life/react-native-fitkit";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import {
  CreateQuestMapLevelChallengeMutationTuple,
  GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE,
} from "@graphql/challenges/createQuestMapLevelChallenge.gql";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";

interface IProps {
  componentId: string;
  level: number;
  levelName: string;
  yuniversalMap?: number;
}

type Props = IProps;

const ChallengesListContainer: FC<Props> = ({ level, levelName, yuniversalMap, componentId }) => {
  const [error, setErrorState] = useState(null as string);
  const [slot, setSlot] = useState(null as GetQuestMapLevel_getQuestMapLevel_slots);
  const [submitting, setSubmittingState] = useState(false);
  const dispatch = useDispatch();
  const { authoriseFitKitTypes } = useFitKit();

  const [createQuestMapLevelChallengeMutation]: CreateQuestMapLevelChallengeMutationTuple = useMutation(
    GQL_MUTATION_CREATE_QUEST_MAP_LEVEL_CHALLENGE
  );

  const { loading, data } = useQuery<GetQuestMapLevel>(GQL_QUERY_GET_QUEST_MAP_LEVEL, {
    variables: { level, yuniversalMap },
    fetchPolicy: "cache-and-network",
  });

  const currentWorld = getCurrentWorld(level);

  const name = useMemo(() => levelName || `level ${level}`, [level, levelName]);

  const setError = useCallback(() => {
    setErrorState(t("createChallengeError"));
  }, []);

  const onDismissFitkitConnect = useCallback(() => {
    Navigation.pop(ROUTES.onboardingFitKitConnect);
  }, []);

  const handleNavPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const createChallenge = async (hideExternalLinks?: boolean) => {
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

      const activeChallenge = await createQuestMapLevelChallengeMutation({ variables: { levelSlotId: slot.id } });

      if (activeChallenge?.data?.createQuestMapLevelChallenge) {
        dispatch(
          challengeStartSuccessAction({
            ...activeChallenge.data,
            levelSlotId: slot.id,
            hideExternalLinks,
          })
        );
        handleNavPress();
      } else {
        setError();
      }
    } catch (e) {
      setError();
    } finally {
      setSubmittingState(false);
    }
  };

  const handleSubmitChallenge = useCallback(async () => {
    const internalContent = slot?.details?.internalContent?.[0];
    if (internalContent) {
      return Navigation.push(componentId, {
        component: {
          id: ROUTES.mediaList,
          name: ROUTES.mediaList,
          passProps: {
            createChallenge,
            levelSlotId: slot.id,
            ...internalContent,
            tutorialUrl: slot.details.tutorialUrl,
          },
        },
      });
    }

    return createChallenge(slot.fitKitTypes.includes(FitKitType.StepCount));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slot?.id, createQuestMapLevelChallengeMutation, dispatch, handleNavPress, setError]);

  const slots = data?.getQuestMapLevel?.slots || [];

  return (
    <BlurProvider
      render={({ showOverlay }: IToggleBlur) => (
        <>
          {loading ? (
            <ChallengesLoading currentLevel={level} yuniversalMap={yuniversalMap} />
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
                };

                return {
                  ...formattedSlot,
                  currentWorld,
                  onPress: async () => {
                    if (levelSlot.isLocked) {
                      return;
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
                    const isOtherTypesThenSteps = levelSlot.fitKitTypes.some((type) =>
                      nonSamsungHealthTypesThatRequirePermissions.includes(type)
                    );
                    if (!activityFromGoogleFitAuthorised && isOtherTypesThenSteps && isSamsung()) {
                      await showYuModal({
                        component: {
                          id: MODALS.switchToGoogleFit,
                          name: MODALS.switchToGoogleFit,
                          passProps: {
                            onConnect: async () => {
                              await authoriseFitKitTypes(levelSlot.fitKitTypes);
                            },
                            onConnected: () => {
                              setSlot(levelSlot);
                              showOverlay();
                            },
                          },
                        },
                      });
                      return;
                    }

                    if (
                      isSamsung() &&
                      levelSlot.fitKitTypes.includes(FitKitType.StepCount) &&
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
                              setSlot(levelSlot);
                              showOverlay();
                            },
                          },
                          options: { bottomTabs },
                        },
                      });
                      return;
                    }

                    setSlot(levelSlot);
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
      renderOverlay={({ hideOverlay }: IToggleBlur) => (
        <ChallengeDetailsScreen
          heading={slot?.details?.heading}
          currentWorld={currentWorld}
          error={error}
          isLoading={submitting}
          milestones={slot?.details?.milestones}
          onPressCta={handleSubmitChallenge}
          onPressClose={hideOverlay}
          onPressSetUp={!slot?.details?.tutorialUrl ? null : handleLinkPress(slot.details.tutorialUrl)}
          imageUri={slot?.details?.image?.uri}
        />
      )}
    />
  );
};

const nonSamsungHealthTypesThatRequirePermissions = [
  FitKitType.MindfulSession,
  FitKitType.Flexibility,
  FitKitType.HIIT,
  FitKitType.Pilates,
  FitKitType.Sleep,
  FitKitType.Strength,
  FitKitType.Swimming,
  FitKitType.Yoga,
];

export default memo(ChallengesListContainer);
