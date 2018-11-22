import { ImageStyle, Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";

const getTop = () => {
    if (isIphoneX()) {
        return 40;
    }

    if (Platform.OS === "ios") {
        return 15;
    }

    return 0;
};

export default StyleSheet.create({
    arrowImageWrapper: {
        bottom: 0 - Style.SCALE_UP_AND_DOWN(1),
        flex: 0,
        left: "50%",
        position: "absolute",
        transform: [{ translateX: 0 - Style.SCALE_UP_AND_DOWN(12) }],
        width: Style.SCALE_UP_AND_DOWN(57)
    } as ViewStyle,
    backgroundImageBase: {
        width: "100%"
    } as ImageStyle,
    backgroundImageWrapper: {
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        width: "100%"
    } as ViewStyle,
    giraffeImageWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: Style.SCALE_UP_AND_DOWN(15),
        position: "relative",
        width: "100%"
    } as ViewStyle,
    header: {
        position: "absolute",
        top: getTop(),
        width: "100%"
    } as ViewStyle,
    scrollView1: {
        flex: 1,
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        width: "100%"
    } as ViewStyle,
    scrollView2: {
        height: Style.DEVICE_HEIGHT - Style.SCALE_UP_AND_DOWN(230),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        width: "100%"
    } as ViewStyle,
    wrapper: {
        backgroundColor: "white",
        flex: 1
    } as ViewStyle
});
