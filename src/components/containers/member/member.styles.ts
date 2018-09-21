import { Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../styles";

export const styles = StyleSheet.create({
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(17),
        position: "absolute",
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    topBarWrapper: {
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 40 : Platform.OS === "android" ? 0 : 20)
    } as ViewStyle
});
