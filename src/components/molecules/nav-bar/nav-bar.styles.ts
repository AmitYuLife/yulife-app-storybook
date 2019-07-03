import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    labelsWrapper: {
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(62),
        position: "absolute",
        bottom: 0,
        width: "100%"
    } as ViewStyle,
    text: {
        fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
        fontSize: Style.SCALE_UP_AND_DOWN(12),
        textAlign: "center",
        width: "100%"
    } as TextStyle,
    textWrapper: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end"
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(78),
        justifyContent: "flex-start",
        width: Style.SCALE_UP_AND_DOWN(280)
    } as ViewStyle,
    outerWrapper: {
        justifyContent: "flex-end"
    } as ViewStyle,
    image: {
        height: Style.SCALE_UP_AND_DOWN(113),
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: Style.DEVICE_WIDTH
    } as ImageStyle
});

export function getLabelAdjustment(index: number) {
    switch (index) {
        case 0:
            return { marginLeft: 12 };
        case 1:
            return null;
        case 2:
            return null;
        case 3:
            return { marginRight: 12 };
        default:
            return null;
    }
}

export default styles;
