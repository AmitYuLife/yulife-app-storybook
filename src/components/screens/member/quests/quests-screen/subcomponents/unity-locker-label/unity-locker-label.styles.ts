import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../../../styles";

export const padHeight = Style.DEVICE_HEIGHT / 6;

const styles = StyleSheet.create({
    cloudsWrapper: {
        height: Style.DEVICE_HEIGHT * 0.15
    } as ViewStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(17)
    } as TextStyle,
    textWrapper: {
        alignItems: "center",
        height: Style.DEVICE_HEIGHT * 0.5,
        width: "100%"
    } as ViewStyle,
    wrapper: {
        backgroundColor: "white",
        bottom: 0,
        height: Style.DEVICE_HEIGHT / 1.5,
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.DEVICE_HEIGHT / 1.5
    } as ViewStyle
});

export default styles;
