import { useCallback } from "react";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";

export const useEditState = (smokingState: HealthSmokingState) => {
  const showEditStateModal = useCallback(
    async ({ type }: { type: "triggers" | "reasons" }) => {
      const isTriggers = type === "triggers";

      const copy = isTriggers ? smokingState.triggersCopy : smokingState.reasonsCopy;

      await showYuModal({
        component: {
          id: MODALS.smokingEditStateModal,
          name: MODALS.smokingEditStateModal,
          passProps: {
            editType: type,
            title: copy.edit.title,
            description: copy.edit.description,
            cta: copy.edit.cta,
            selectedValues: isTriggers ? smokingState.triggers : smokingState.reasons,
            defaultValues: isTriggers ? smokingState.defaultTriggers : smokingState.defaultReasons,
            customValues: isTriggers ? smokingState.customTriggers : smokingState.customReasons,
          },
        },
      });
    },
    [smokingState]
  );

  return {
    showEditStateModal,
  };
};
