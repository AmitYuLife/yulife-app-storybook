import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
    } as ViewStyle,
    descriptionHeadingWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(55),
        width: "100%",
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
    } as TextStyle,
    descriptionWrapper: {
        width: "100%",
        marginTop: Style.SCALE_UP_AND_DOWN(16),
    } as ViewStyle,
    paragraph: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(23),
    } as TextStyle,
    instructionsHeadingWrapper: {
        width: "100%",
        marginTop: Style.SCALE_UP_AND_DOWN(32),
    } as ViewStyle,
    instructionsWrapper: {
        width: "100%",
        marginTop: Style.SCALE_UP_AND_DOWN(20),
    } as ViewStyle,
    primaryWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 30 : 41),
        alignItems: "center",
        alignSelf: "center",
    } as ViewStyle,
    secondaryWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(18),
        alignItems: "center",
        alignSelf: "center",
    } as ViewStyle,
    tertiaryWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(8),
        alignItems: "center",
        alignSelf: "center",
    },
});
