import {
    Platform,
    StyleSheet,
    ViewStyle
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

interface IGetScrollViewWrapperTopValueProps {
    platform: string;
    iPhoneX: boolean;
}

function getScrollViewWrapperTopValue({
    platform,
    iPhoneX
}: IGetScrollViewWrapperTopValueProps) {
    if (iPhoneX) {
        return 0;
    } else if (platform === "android") {
        return 0;
    } else {
        return Style.SCALE_UP_AND_DOWN(-11);
    }
}

export function platformAdjust(
    os: "ios" | "android" | "macos" | "windows" | "web",
    iphonex: boolean
) {
    if (iphonex || os === "android") {
        return 100;
    } else {
        return 0;
    }
}

export function platformAdjustPosition(
    os: "ios" | "android" | "macos" | "windows" | "web",
    iphonex: boolean
) {
    if (iphonex || os === "android") {
        return -50;
    } else {
        return 0;
    }
}

export default StyleSheet.create({
    platformAdjust: {
        bottom: isIphoneX() ? -20 : 0,
        position: "absolute",
        top: isIphoneX() || Platform.OS === "android" ? 0 : 10
    } as ViewStyle,
    scrollViewWrapper: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        top: getScrollViewWrapperTopValue({
            iPhoneX: isIphoneX(),
            platform: Platform.OS
        })
    } as ViewStyle,
    wrapper: {
        flex: 1,
        height: "100%"
    } as ViewStyle

});
