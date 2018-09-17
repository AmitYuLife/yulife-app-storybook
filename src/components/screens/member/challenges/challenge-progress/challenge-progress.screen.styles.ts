import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    backgroundImage: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        width: "100%"
    } as ImageStyle,
    progressBarWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(48)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
