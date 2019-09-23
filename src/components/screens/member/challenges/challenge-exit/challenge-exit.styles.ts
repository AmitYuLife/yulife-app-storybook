import { Style } from "@styles/index";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: "rgba(255,255,255,0.9)",
        flex: 1,
        alignItems: "center"
    } as ViewStyle,
    image: {
        width: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? 248 : 268),
        height: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? 248 : 268)
    } as ImageStyle,
    headingText: {
        fontSize: Style.SCALE_UP_AND_DOWN(25),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
        color: "rgb(51, 51, 51)",
        marginBottom: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    descriptionText: {
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        lineHeight: Style.SCALE_UP_AND_DOWN(20),
        paddingHorizontal: 60,
        color: "rgb(51, 51, 51)"
    } as TextStyle,
    exitChallengeWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(40)
    } as ViewStyle,
    buttonStyle: {
        marginBottom: Style.SCALE_UP_AND_DOWN(20)
    } as ViewStyle
});
