import { Style } from "@styles/index";

export const platformAdjustments = {
    scale: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -30 : 0
};
