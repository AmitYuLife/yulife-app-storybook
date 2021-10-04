import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";

export function showEarnRateOverlay() {
  showYuModal({
    component: {
      id: MODALS.earnRate,
      name: MODALS.earnRate,
    },
  });
}
