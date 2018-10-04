import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
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
        width: "100%"
    } as ViewStyle,
    scrollView: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(20),
        width: "100%"
    } as ViewStyle,
    wrapper: {
        backgroundColor: "white",
        flex: 1
    } as ViewStyle
});
