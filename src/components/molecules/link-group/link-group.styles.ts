import { StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "../../../styles";

export default StyleSheet.create({
    wrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    } as ViewStyle,
    divider: {
        height: Style.SCALE_UP_AND_DOWN(12),
        width: 1,
        backgroundColor: Colours.divider,
    } as ViewStyle,
    buttonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
    } as ViewStyle,
    button: {
        width: "auto",
        marginHorizontal: Style.SCALE_UP_AND_DOWN(33),
    } as ViewStyle,
});
