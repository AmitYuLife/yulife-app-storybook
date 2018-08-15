import {
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    } as ViewStyle,
    text: {
        textAlign: "center",
        width: "100%",
        fontSize: Style.SCALE_UP_AND_DOWN(16),
    } as TextStyle,
    labelsWrapper: {
        width: "100%",
        height: "100%",
        position: "absolute",
        flexDirection: "row",
    } as ViewStyle,
});

export function getLabelAdjustment(index: number) {
    switch (index) {
        case 0:
            return { marginRight: 4 } as TextStyle;
        case 1:
            return { marginRight: 8 } as TextStyle;
        case 2:
            return { marginRight: 6 } as TextStyle;
        default:
            return null;
    }
}

export default styles;
