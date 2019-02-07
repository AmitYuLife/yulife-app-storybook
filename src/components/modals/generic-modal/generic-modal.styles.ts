import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    buttonWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(44)
    } as ViewStyle,
    buttonWrapperSecondary: {
        marginTop: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    heading: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(35),
        textAlign: "center"
    } as TextStyle,
    subheading: {
        color: "rgb(96,96,96)",
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginLeft: Style.SCALE_UP_AND_DOWN(35),
        marginRight: Style.SCALE_UP_AND_DOWN(35),
        marginTop: Style.SCALE_UP_AND_DOWN(20),
        textAlign: "center"
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.9)",
        flex: 1,
        justifyContent: "center"
    } as ViewStyle
});
