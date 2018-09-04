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
        width: getImageWidth()
    } as ImageStyle,
    imageWrapper: {
        alignItems: "center",
        justifyContent: "flex-end",
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: Style.DEVICE_WIDTH
    } as ViewStyle
});

function getImageWidth() {
    if (Platform.OS === "android") {
        if (Style.PIXEL_RATIO < 3) {
            return Style.DEVICE_WIDTH * 0.75;
        } else if (Style.DEVICE_HEIGHT < 600) {
            return Style.DEVICE_WIDTH * 0.75;
        } else {
            return Style.DEVICE_WIDTH;
        }
    } else {
        return 350;
    }
}

function getImageHeight() {
    if (Platform.OS === "android") {
        if (Style.PIXEL_RATIO < 3) {
            return 490;
        } else if (Style.DEVICE_HEIGHT < 600) {
            return 490 * 0.9;
        } else {
            return 490;
        }
    } else {
        return 490;
    }
}

function getContentWrapperHeight() {
    if (Platform.OS === "android") {
        if (Style.DEVICE_HEIGHT < 600) {
            return 490 * 0.9;
        } else {
            return 490;
        }
    } else {
        return 490;
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
        return 60;
    }
}
