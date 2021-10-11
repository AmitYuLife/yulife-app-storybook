import { ComponentProps } from "react";
import { MODALS } from "@navigation/constants";
import YuEarnRateModal from "../yu-earn-rate-modal/yu-earn-rate-modal";
import { showYuModal } from "@navigation/root";

export function showEarnRateOverlay(passProps?: ComponentProps<typeof YuEarnRateModal>) {
  showYuModal({
    component: {
      id: MODALS.earnRate,
      name: MODALS.earnRate,
      passProps,
    },
  });
}
