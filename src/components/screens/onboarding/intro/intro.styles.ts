import { Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(18),
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0
    } as ViewStyle,
    scrollView: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0
    } as ViewStyle,
    topBarWrapper: {
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 50 : Platform.OS === "ios" ? 20 : 0)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
