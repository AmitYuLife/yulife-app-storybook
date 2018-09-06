import { Platform } from "react-native";
import { Style } from "../../../../../../../../styles";

export const platformAdjustments = {
    scale: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -30 : 0
};

export const episode1PathPlatformAdjustments = {
    translateX: Platform.OS === "ios" ? 0 : -6,
    y: Platform.OS === "ios" ? -80 : 10
};

export const episode2PathPlatformAdjustments = {
    translateX: Platform.OS === "ios" ? 0 : -5,
    y: Platform.OS === "ios" ? -100 : 0
};

export const episode3PathPlatformAdjustments = {
    scale: !(Style.isShortAndroid() || Style.isShortAndWideAndroid())
        ? 1
        : 1.1,
    translateX: Platform.OS === "ios" ? 0 :
        (Style.isShortAndroid() || Style.isShortAndWideAndroid())
            ? -50
            : -8
};

export const episode4PathPlatformAdjustments = {
    scale: (Style.isShortAndroid() || Style.isShortAndWideAndroid()) ? 1.1 : 1,
    translateX: (Style.isShortAndroid() || Style.isShortAndWideAndroid()) ? -42 : 0,
    translateY: (Style.isShortAndroid() || Style.isShortAndWideAndroid()) ? -120 : 0
};

export const episode5PathPlatformAdjustments = {
    translateX: Platform.OS === "ios" ? 0 : -4
};

export const episode6PathPlatformAdjustments = {
    translateX: Platform.OS === "ios" ? 0 : -4
};

export const episode7PathPlatformAdjustments = {
    scale: Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndWideAndroid() ? -30 : 0,
    translateY: Style.isShortAndWideAndroid() ? 0 : 0
};
