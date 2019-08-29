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
        height: Style.DEVICE_HEIGHT,
        width: Style.DEVICE_WIDTH
    } as ImageStyle,
    backgroundWrapper: {
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    buttonsWrapper: {
        alignItems: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_Y_UP_AND_DOWN(
            400 * (
                Style.DEVICE_HEIGHT > (Platform.OS === "ios" ? 750 : 690)
                    ? 0.95
                    : 1
            )
        )
    } as ViewStyle,
    challengeSetWrapper: {
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 20,
        justifyContent: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(30),
        marginHorizontal: Style.SCALE_UP_AND_DOWN(45),
        marginTop: Style.SCALE_Y_UP_AND_DOWN(
            Platform.OS === "android" && (Style.DEVICE_HEIGHT < 600 || Style.PIXEL_RATIO <= 3) ? 30 : 50
        ),
        paddingBottom: Style.SCALE_Y_UP_AND_DOWN(40)
    } as ViewStyle,
    historyLink: {
        marginVertical: Style.SCALE_UP_AND_DOWN(25)
    } as ViewStyle,
    imagesWrapper: {
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_Y_UP_AND_DOWN(
            Platform.OS === "android" && (Style.DEVICE_HEIGHT < 600 || Style.PIXEL_RATIO <= 3)
                ? 46
                : Style.DEVICE_HEIGHT > 800
                    ? 88
                    : 78
        )
    } as ViewStyle,
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 37 : 27),
        position: "absolute",
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
