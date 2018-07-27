import {
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Colours, Style } from "../../../styles";

const styles = StyleSheet.create({
    activeText: {
        color: Colours.navBar.active,
    } as TextStyle,
    inactiveText: {
        color: Colours.navBar.inactive,
    } as TextStyle,
    labelsWrapper: {
        flexDirection: "row",
        height: "100%",
        position: "absolute",
        width: "100%",
    } as ViewStyle,
    pressed: {
        color: Colours.navBar.pressed,
    } as TextStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        textAlign: "center",
        width: "100%",
    } as TextStyle,
    textWrapper: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
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
