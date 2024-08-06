import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { updateHealthSmokingStateAction } from "@redux/health-smoking/health-smoking.actions";
import { useLazyQuery, useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { showFloatingModal, SmokingStreakCheckInOverlay } from "@modals";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";

export const useStreakCheckIn = () => {
  const [queryHealthSmokingState] = useLazyQuery(gql("GetHealthSmokingStateDocument"), {
    fetchPolicy: "no-cache",
  });
  const [setUpdateSmokingStreakDocument] = useMutation(gql("UpdateSmokingStreakDocument"));

  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [showStreakLapsed, setShowStreakLapsed] = useState(false);
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
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    querySmokingState();
  }, []);

  const onFailedStreakPress = useCallback(async () => {
    dismissOverlay();
    setShowStreakLapsed(true);
  }, []);

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

      await showYuModal({
        component: {
          id: MODALS.smokingStreakCelebration,
          name: MODALS.smokingStreakCelebration,
          passProps: {
            onPress: () => {
              Navigation.dismissAllModals();
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
            onPressYes={onFailedStreakPress}
          />
        ),
      });
    },
    [onContinueStreakPress, onFailedStreakPress]
  );

  return {
    showStreakLapsed,
    hideStreakLapsed: () => setShowStreakLapsed(false),
    error,
  };
};
