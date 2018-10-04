// import { Platform } from "react-native";
import { Style } from "../../../../../../../../styles";

export const platformAdjustments = {
    scale: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -30 : 0
};

export const episode1PathPlatformAdjustments = {
    translateX: -5
};

export const episode2PathPlatformAdjustments = {
    translateX: -5
};

export const episode3PathPlatformAdjustments = {
    scale: !(Style.isShortAndroid() || Style.isShortAndWideAndroid()) ? 1 : 1.1,
    translateX: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -50 : -10
};

export const episode4PathPlatformAdjustments = {
    scale: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -42 : -5,
    translateY: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -120 : 0
};

export const episode5PathPlatformAdjustments = {
    translateX: -5
};

export const episode6PathPlatformAdjustments = {
    translateX: -5
};

export const episode7PathPlatformAdjustments = {
    scale: Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndWideAndroid() ? -30 : -5,
    translateY: Style.isShortAndWideAndroid() ? 0 : 0
};
