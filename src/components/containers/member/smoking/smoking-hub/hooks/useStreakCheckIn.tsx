import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { updateHealthSmokingStateAction } from "@redux/health-smoking/health-smoking.actions";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GetHealthSmokingStateQuery, gql } from "@graphql/__generated";
import { showFloatingModal, SmokingStreakCelebrationModal, SmokingStreakCheckInOverlay } from "@modals";
import { Navigation } from "@navigation/main";
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
  const initialSmokingStateStreak = useRef<number | null>(null);

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

      initialSmokingStateStreak.current = healthSmokingState.currentStreak;
      setInitialSmokingState({
        updatedToday: healthSmokingState.updatedToday,
        currentStreak: healthSmokingState.currentStreak,
      });
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

      const yuCoinAwarded = healthSmokingState?.streakCheckInOverlay?.celebration?.yuCoinAwarded;
      const initialStreakAfterMax =
        initialSmokingStateStreak.current === null || initialSmokingStateStreak.current > healthSmokingState.maxStreak;
      const currentStreakAfterMax = healthSmokingState.currentStreak > healthSmokingState.maxStreak;

      if (initialStreakAfterMax && currentStreakAfterMax && !yuCoinAwarded) {
        onSmokingStreakCelebrationClose();
        return;
      }

      showSmokingStreakCelebrationModal(healthSmokingState, onSmokingStreakCelebrationClose);
    } catch {
      setError(true);
    }
  }, [dismissOverlay, onSmokingStreakCelebrationClose]);

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

function showSmokingStreakCelebrationModal(
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"],
  onClose: VoidFunction
) {
  Navigation.showOverlayWithChild({
    children: <SmokingStreakCelebrationModal onClose={onClose} smokingData={smokingData} />,
    wrapperStyle: { flexDirection: "column-reverse" },
    modalId: MODALS.smokingStreakCelebration,
    closeOnBlur: false,
    passProps: {
      blurType: "light",
      blurAmount: 8,
      backgroundColor: "rgba(0,0,0,.8)",
    },
  });
}
