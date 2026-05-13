import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { updateHealthSmokingStateAction } from "@redux/health-smoking/health-smoking.actions";
import { useLazyQuery, useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { showFloatingModal, SmokingStreakCheckInOverlay } from "@modals";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { getRouteState } from "@redux/app/app.selectors";
import { navigateToCommitmentScreen } from "../helpers/navigateToCommitmentScreen";
import { VoidFunction } from "@utils";
import { getUserDataStart, refreshHeroCards } from "@redux/user/user.actions";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import { AppDataType } from "@redux/user/user.types";
import { showSmokingStreakCelebrationModal } from "../helpers/showSmokingStreakCelebrationModal";

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
  const dispatchStreakLapsedActionRef = useRef(false);
  const showCommitmentScreenRef = useRef(false);
  const prevScreenRef = useRef(currentScreen);
  const isOverlayOpen = useRef(false);
  const initialSmokingStateStreak = useRef<number | null>(null);
  const showSmokingCheckInOverlayRef = useRef<(data: HealthSmokingState) => void>(() => {});

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

        showSmokingCheckInOverlayRef.current(healthSmokingState as HealthSmokingState);
      }

      initialSmokingStateStreak.current = healthSmokingState.currentStreak;
      setInitialSmokingState({
        updatedToday: healthSmokingState.updatedToday,
        currentStreak: healthSmokingState.currentStreak,
      });
    } catch {
      setError(true);
    }
  }, [dispatch, queryHealthSmokingState, dismissOverlay, setInitialSmokingState]);

  useEffect(() => {
    querySmokingState();
  }, [querySmokingState]);

  useEffect(() => {
    const enteredSmoking = prevScreenRef.current !== ROUTES.smoking && currentScreen === ROUTES.smoking;
    prevScreenRef.current = currentScreen;

    if (!enteredSmoking) {
      return;
    }

    if (dispatchStreakLapsedActionRef.current) {
      dispatch(smokingState?.streakLapsedAction);
      dispatchStreakLapsedActionRef.current = false;
      return;
    }

    if (showCommitmentScreenRef.current) {
      navigateToCommitmentScreen(smokingState);
      showCommitmentScreenRef.current = false;
    }
  }, [currentScreen, dispatch, smokingState]);
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

      dispatch(refreshHeroCards());
      dispatch(refreshTotalCoins());
      dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));

      const yuCoinAwarded = healthSmokingState?.streakCheckInOverlay?.celebration?.yuCoinAwarded;
      const initialStreakAfterMax =
        initialSmokingStateStreak.current === null ||
        initialSmokingStateStreak.current > (healthSmokingState?.maxStreak ?? 0);
      const currentStreakAfterMax = (healthSmokingState?.currentStreak ?? 0) > (healthSmokingState?.maxStreak ?? 0);

      if (initialStreakAfterMax && currentStreakAfterMax && !yuCoinAwarded) {
        onSmokingStreakCelebrationClose();
        return;
      }

      showSmokingStreakCelebrationModal(healthSmokingState, onSmokingStreakCelebrationClose);
    } catch {
      setError(true);
    }
  }, [dismissOverlay, onSmokingStreakCelebrationClose, dispatch, setUpdateSmokingStreakDocument]);

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
                        dispatchStreakLapsedActionRef.current = true;
                      }

                      showCommitmentScreenRef.current = true;

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
    [onContinueStreakPress, dismissOverlay]
  );

  showSmokingCheckInOverlayRef.current = showSmokingCheckInOverlay;

  return {
    loading,
    error,
  };
};
