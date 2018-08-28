import { StyleSheet, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

export default StyleSheet.create({
    button: {
        marginHorizontal: Style.SCALE_UP_AND_DOWN(33),
        width: "auto"
    } as ViewStyle,
    buttonWrapper: {
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "center"
    } as ViewStyle,
    divider: {
        backgroundColor: Colours.divider,
        height: Style.SCALE_UP_AND_DOWN(12),
        width: 1
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    } as ViewStyle
});
