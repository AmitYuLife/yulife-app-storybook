import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    labelsWrapper: {
        flexDirection: "row",
        height: "100%",
        position: "absolute",
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
        height: 80,
        justifyContent: "flex-start",
        width: 280
    } as ViewStyle
});

export function getLabelAdjustment(index: number) {
    switch (index) {
        case 0:
            return { marginRight: 4 } as TextStyle;
        case 1:
            return { marginRight: 0 } as TextStyle;
        case 2:
            return { marginRight: -4 } as TextStyle;
        default:
            return null;
    }
}

export default styles;
