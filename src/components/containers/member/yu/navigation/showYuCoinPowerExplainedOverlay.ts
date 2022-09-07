import { ComponentProps } from "react";
import { MODALS } from "@navigation/constants";
import YuCoinPowerExplained from "../yu-coin-power-explained/yu-coin-power-explained";
import { showYuModal } from "@navigation/root";

export function showYuCoinPowerExplainedOverlay(passProps?: ComponentProps<typeof YuCoinPowerExplained>) {
  showYuModal({
    component: {
      id: MODALS.yuCoinPowerExplained,
      name: MODALS.yuCoinPowerExplained,
      passProps,
    },
  });
}
