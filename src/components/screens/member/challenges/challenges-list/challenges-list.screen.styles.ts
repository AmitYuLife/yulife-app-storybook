import {
    ImageStyle,
    Platform,
    StyleSheet,
    ViewStyle
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    background: {
        borderColor: "transparent",
        borderWidth: 1,
        height: "100%"
    } as ImageStyle,
    backgroundWrapper: {
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    challengeSetWrapper: {
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(
            isIphoneX()
                ? 40
                : Platform.OS === "android"
                    ? 0
                    : 20
        )
    } as ViewStyle,
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(18),
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        width: "100%"
    } as ViewStyle,
    topBarWrapper: {
        left: 0,
        position: "absolute",
        right: 0
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
