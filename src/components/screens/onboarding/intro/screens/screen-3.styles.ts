import {
    ImageStyle,
    Platform,
    StyleSheet,
    ViewStyle
} from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    button: {
        height: 40
    } as ImageStyle,
    buttonsWrapper: {
        marginTop: "auto",
        width: "100%"
    } as ViewStyle,
    contentWrapper: {
        height: getContentWrapperHeight(),
        marginBottom: getContentWrapperMarginBottom(),
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    image: {
        height: getImageHeight(),
        width: "100%"
    } as ImageStyle,
    imageWrapper: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        height: "100%",
        justifyContent: "flex-end",
        width: "100%"
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: Style.DEVICE_WIDTH
    } as ViewStyle
});

function getContentWrapperHeight() {
    if (Platform.OS === "android") {
        if (Style.DEVICE_HEIGHT < 600) {
            return 490 * 0.9;
        } else {
            return 490;
        }
    } else {
        return 550;
    }
}

function getContentWrapperMarginBottom() {
    if (Platform.OS === "android") {
        if (Style.DEVICE_HEIGHT < 600 || Style.PIXEL_RATIO < 3) {
            return 110;
        } else {
            return 100;
        }
    } else {
        return 150;
    }
}

function getImageHeight() {
    if (Platform.OS === "ios") {
        if (Style.DEVICE_WIDTH > 375) {
            return Style.DEVICE_HEIGHT * 0.73;
        } else {
            return 490;
        }
    } else {
        if (Style.PIXEL_RATIO < 3) {
            return 550;
        }
        return 490;
    }
}
