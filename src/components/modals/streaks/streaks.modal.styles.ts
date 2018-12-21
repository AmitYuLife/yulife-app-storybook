import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    buttonPrimaryWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(35)
    } as ViewStyle,
    buttonSecondaryWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(25)
    } as TextStyle,
    headingWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(18)
    } as ViewStyle,
    null: {},
    streak: {
        ...StyleSheet.absoluteFillObject
    } as ImageStyle,
    streakLabel: {
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        lineHeight: Style.SCALE_UP_AND_DOWN(15),
        textAlign: "center",
        width: Platform.select({ android: Style.SCALE_UP_AND_DOWN(37), ios: Style.SCALE_UP_AND_DOWN(41) })
    } as TextStyle,
    streakLabelLast: {
        fontSize: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? 11 : 12),
        lineHeight: Style.SCALE_UP_AND_DOWN(11),
        marginTop: 0
    } as TextStyle,
    streakWrapper: {
        alignItems: "flex-start",
        height: Style.SCALE_UP_AND_DOWN(41),
        justifyContent: "center",
        marginRight: Style.SCALE_UP_AND_DOWN(10),
        width: Style.SCALE_UP_AND_DOWN(41)
    } as ViewStyle,
    streakWrapperLast: {
        marginRight: 0
    } as ViewStyle,
    streaksWrapper: {
        flexDirection: "row",
        marginTop: Style.SCALE_UP_AND_DOWN(17)
    } as ViewStyle,
    subHeading: {
        color: "rgb(96,96,96)",
        fontSize: Style.SCALE_UP_AND_DOWN(15)
    } as TextStyle,
    subHeadingWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.9)",
        flex: 1,
        justifyContent: "center"
    } as ViewStyle
});
