import { t } from "@locale";

export function getCardBackgroundColor(currentWorld: number) {
  switch (currentWorld) {
    case 3:
      return "rgb(255, 239, 239)";
    case 2:
      return "rgb(255, 253, 231)";
    case 0:
      return "rgb(235, 255, 244)";
    default:
      return "rgb(237, 251, 248)";
  }
}

export const data = {
  ctaLabel: t("screens.challenges.details.cta_label"),
  footer: t("screens.challenges.details.footer"),
  loading: t("screens.challenges.details.loading"),
  setUpLabel: t("screens.challenges.details.set_up_label"),
};
