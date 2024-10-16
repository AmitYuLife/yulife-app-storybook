import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";

export function onClosePress() {
  Navigation.dismissModal(MODALS.voucherProgress);
}
