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
        return Style.SCALE_Y_UP_AND_DOWN(-50);
    } else if (platform === "android") {
        return 0;
    } else {
        return Style.SCALE_Y_UP_AND_DOWN(-20);
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
    navBarWrapper: {
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)",
        bottom: 0,
        left: 0,
        paddingBottom: Style.SCALE_UP_AND_DOWN(15),
        paddingTop: Style.SCALE_UP_AND_DOWN(10),
        position: "absolute",
        right: 0
    } as ViewStyle,
    platformAdjust: {
        bottom: isIphoneX() ? -20 : 0,
        position: "absolute",
        top: isIphoneX() || Platform.OS === "android" ? 0 : 10
    } as ViewStyle,
    scrollViewWrapper: {
        ...StyleSheet.absoluteFillObject,
        bottom: getScrollViewWrapperTopValue({
            iPhoneX: isIphoneX(),
            platform: Platform.OS
        })
    } as ViewStyle,
    topBarWrapper: {
        left: 0,
        paddingBottom: Style.SCALE_UP_AND_DOWN(8),
        paddingTop: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 30 : Platform.OS === "android" ? 0 : 20),
        position: "absolute",
        right: 0,
        top: 0
    } as ViewStyle,
    wrapper: {
        flex: 1,
        height: "100%"
    } as ViewStyle

});
