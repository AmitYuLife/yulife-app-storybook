import { Style } from "@styles/index";
import { Platform, StyleSheet } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

export function platformAdjust(os: "ios" | "android" | "macos" | "windows" | "web", iphonex: boolean) {
    if (iphonex || os === "android") {
        return 100;
    } else {
        return 0;
    }
}

export function platformAdjustPosition(os: "ios" | "android" | "macos" | "windows" | "web", iphonex: boolean) {
    if (iphonex || os === "android") {
        return -50;
    } else {
        return 0;
    }
}

export default StyleSheet.create({
    svg: {
        left: platformAdjustPosition(Platform.OS, isIphoneX())
    },
    wrapper: {
        alignItems: "stretch",
        height: Style.DEVICE_HEIGHT,
        justifyContent: "center",
        width: Style.DEVICE_WIDTH + platformAdjust(Platform.OS, isIphoneX())
    }
});

export const width = Style.DEVICE_WIDTH + platformAdjust(Platform.OS, isIphoneX());

export const height = Style.DEVICE_HEIGHT;
