import { useCallback } from "react";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { MODALS } from "@navigation/constants";
import { showFloatingModal, SmokingOptOutModal } from "@modals";
import { Style } from "@styles";
import { SMOKING_OPT_OUT_HALF_MODAL } from "@ids";

export const useOptOut = (smokingState: HealthSmokingState) => {
  const showOptOutOverlay = useCallback(async () => {
    if (smokingState?.optOutModal) {
      await showFloatingModal({
        modalId: MODALS.smokingOptOutModal,
        showButton: false,
        showCloseIcon: false,
        height: Style.adjust(240),
        children: <SmokingOptOutModal optOutModal={smokingState.optOutModal} />,
        testID: SMOKING_OPT_OUT_HALF_MODAL,
      });
    }
  }, [smokingState]);

  return {
    showOptOutOverlay,
  };
};
