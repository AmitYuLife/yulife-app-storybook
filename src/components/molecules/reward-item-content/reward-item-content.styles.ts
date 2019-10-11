import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    descriptionHeadingWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(55),
        width: "100%"
    } as ViewStyle,
    descriptionWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(16),
        width: "100%"
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    instructionsHeadingWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(32),
        width: "100%"
    } as ViewStyle,
    instructionsWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(20),
        width: "100%"
    } as ViewStyle,
    paragraph: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(23)
    } as TextStyle,
    pickerWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(10),
        width: "100%"
    } as ViewStyle,
    primaryWrapper: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 30 : 41)
    } as ViewStyle,
    secondaryWrapper: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(18)
    } as ViewStyle,
    tertiaryWrapper: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(8)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
