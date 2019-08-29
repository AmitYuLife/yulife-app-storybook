import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    labelsWrapper: {
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(51),
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
        height: Style.SCALE_UP_AND_DOWN(60),
        flex: 1,
        justifyContent: "flex-end"
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(70),
        justifyContent: "flex-start",
        width: Style.SCALE_UP_AND_DOWN(280)
    } as ViewStyle,
    outerWrapper: {
        justifyContent: "flex-end"
    } as ViewStyle
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
