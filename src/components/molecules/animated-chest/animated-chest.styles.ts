import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    chestBaseWrapper: {
        marginTop: "auto"
    } as ViewStyle,
    chestCoinWrapper: {
        alignItems: "center"
    } as ViewStyle,
    chestWrapper: {
        borderColor: "transparent",
        borderWidth: 1,
        height: Style.SCALE_UP_AND_DOWN(200),
        overflow: "hidden",
        position: "absolute",
        top: 0
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(25),
        marginBottom: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    imageWrapper: {
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(250),
        justifyContent: "center",
        overflow: "hidden",
        width: "100%"
    } as ViewStyle,
    lidWrapper: {
        bottom: 0,
        position: "absolute"
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
