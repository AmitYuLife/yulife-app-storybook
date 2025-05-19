import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { updateHealthSmokingStateAction } from "@redux/health-smoking/health-smoking.actions";
import { useLazyQuery, useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { showFloatingModal, SmokingStreakCheckInOverlay } from "@modals";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { MODALS, ROUTES } from "@navigation/constants";
import { getRouteState } from "@redux/app/app.selectors";
import { navigateToCommitmentScreen } from "../helpers/navigateToCommitmentScreen";
import { VoidFunction } from "@utils";
import { getUserDataStart, refreshUserProfileEvents } from "@redux/user/user.actions";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import { AppDataType } from "@redux/user/user.types";

export const useStreakCheckIn = (
  smokingState: HealthSmokingState,
  onSmokingStreakCelebrationClose: VoidFunction,
  onLapse: VoidFunction,
  setInitialSmokingState: (state: Partial<HealthSmokingState>) => void
) => {
  const [queryHealthSmokingState, { loading }] = useLazyQuery(gql("GetHealthSmokingStateDocument"), {
    fetchPolicy: "no-cache",
  });
  const [setUpdateSmokingStreakDocument] = useMutation(gql("UpdateSmokingStreakDocument"));

  const currentScreen = useSelector(getRouteState);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [dispatchStreakLapsedAction, setDispatchStreakLapsedAction] = useState(false);
  const [showCommitmentScreen, setShowCommitmentScreen] = useState(false);
  const isOverlayOpen = useRef(false);

  const dismissOverlay = useCallback(async () => {
    isOverlayOpen.current = false;
    await Navigation.dismissOverlayWithChild();
  }, []);

  const querySmokingState = useCallback(async () => {
    try {
      const state = await queryHealthSmokingState();
      const healthSmokingState = state.data?.getHealthSmokingState;

      if (!healthSmokingState) {
        throw new Error();
      }

      dispatch(updateHealthSmokingStateAction(healthSmokingState as HealthSmokingState));

      if (healthSmokingState.showStreakCheckInOverlay) {
        if (isOverlayOpen.current) {
          dismissOverlay();
        }

        showSmokingCheckInOverlay(healthSmokingState as HealthSmokingState);
      }

      setInitialSmokingState({ updatedToday: state.data?.getHealthSmokingState.updatedToday });
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    querySmokingState();
  }, []);

  useEffect(() => {
    if (currentScreen !== ROUTES.smoking) {
      return;
    }

    if (dispatchStreakLapsedAction) {
      dispatch(smokingState?.streakLapsedAction);
      setDispatchStreakLapsedAction(false);
      return;
    }

    if (showCommitmentScreen) {
      navigateToCommitmentScreen(smokingState);
      setShowCommitmentScreen(false);
    }
  }, [currentScreen]);

  const onContinueStreakPress = useCallback(async () => {
    try {
      await dismissOverlay();
      const success = await setUpdateSmokingStreakDocument({
        variables: {
          failed: false,
        },
      });

      const healthSmokingState = success.data?.updateSmokingStreak;
      dispatch(updateHealthSmokingStateAction(healthSmokingState as HealthSmokingState));

      // As the streak has now been updated, we need to update the events so the hero card for smoking updates to latest day
      dispatch(refreshUserProfileEvents());
      dispatch(refreshTotalCoins());
      dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));

      await showYuModal({
        component: {
          id: MODALS.smokingStreakCelebration,
          name: MODALS.smokingStreakCelebration,
          passProps: {
            onPress: () => {
              Navigation.dismissAllModals();
              onSmokingStreakCelebrationClose();
            },
            smokingData: healthSmokingState,
          },
        },
      });
    } catch {
      setError(true);
    }
  }, []);

  const showSmokingCheckInOverlay = useCallback(
    // to prevent a race condition which occurs if the `smokingData` state is not updated by the time this function is called, pass the data to this function as an argument
    async (currentSmokingData: HealthSmokingState) => {
      if (isOverlayOpen.current) {
        await dismissOverlay();
      }

      isOverlayOpen.current = true;

      await showFloatingModal({
        modalId: MODALS.smokingCheckInOverlay,
        showButton: false,
        showCloseIcon: false,
        closeOnBlur: false,
        children: (
          <SmokingStreakCheckInOverlay
            title={currentSmokingData.streakCheckInOverlay.title}
            failCta={currentSmokingData.streakCheckInOverlay.failCta}
            continueCta={currentSmokingData.streakCheckInOverlay.continueCta}
            onPressNo={onContinueStreakPress}
            onPressYes={() => {
              onLapse();
              dismissOverlay();
              Navigation.push(ROUTES.smoking, {
                component: {
                  id: ROUTES.smokingStreakLapsed,
                  name: ROUTES.smokingStreakLapsed,
                  passProps: {
                    onClose: () => {
                      Navigation.popTo(ROUTES.smoking);
                    },
                    onSubmit: () => {
                      if (currentSmokingData.streakLapsedAction) {
                        setDispatchStreakLapsedAction(true);
                      }

                      setShowCommitmentScreen(true);

                      Navigation.popTo(ROUTES.smoking);
                    },
                  },
                },
              });
            }}
          />
        ),
      });
    },
    [onContinueStreakPress]
  );

  return {
    loading,
    error,
  };
};
