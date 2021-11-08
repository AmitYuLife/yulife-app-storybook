import React, { FC, useState, useCallback, memo } from "react";
import {
  GQL_MUTATION_CREATE_ACTIVE_CHALLENGE,
  CreateActiveChallengeMutationTuple,
  GQL_QUERY_GET_QUEST_MAP_LEVEL,
} from "@graphql/challenges";
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

interface IProps {
  componentId: string;
  level: number;
}

type Props = IProps;

const ChallengesListContainer: FC<Props> = ({ level, componentId }) => {
  const [error, setErrorState] = useState(null as string);
  const [slot, setSlot] = useState(null as GetQuestMapLevel_getQuestMapLevel_slots);
  const [submitting, setSubmittingState] = useState(false);
  const dispatch = useDispatch();
  const { authoriseFitKitTypes } = useFitKit();

  const [createActiveChallenge]: CreateActiveChallengeMutationTuple = useMutation(GQL_MUTATION_CREATE_ACTIVE_CHALLENGE);

  const { loading, data } = useQuery<GetQuestMapLevel>(GQL_QUERY_GET_QUEST_MAP_LEVEL, {
    variables: { level },
    fetchPolicy: "cache-and-network",
  });

  const currentWorld = getCurrentWorld(level);

  const setError = useCallback(() => {
    setErrorState("Sorry, there was a problem starting your challenge. \n Please try again!");
  }, []);

  const handleNavPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const handleSubmitChallenge = useCallback(async () => {
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

      const activeChallenge = await createActiveChallenge({ variables: { levelSlotId: slot.id } });

      if (activeChallenge?.data?.createActiveChallenge) {
        dispatch(
          challengeStartSuccessAction({
            ...activeChallenge.data,
            levelSlotId: slot.id,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slot?.id, createActiveChallenge, dispatch, handleNavPress, setError]);

  const slots = data?.getQuestMapLevel?.slots || [];

  return (
    <BlurProvider
      render={({ showOverlay }: IToggleBlur) => (
        <>
          {loading ? (
            <ChallengesLoading currentLevel={level} />
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
                      await Navigation.showModal({
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
              name={`level ${level}`}
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
