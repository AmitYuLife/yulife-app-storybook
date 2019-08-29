import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    backgroundImage: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        width: "100%"
    } as ImageStyle,
    instructionWrapper: {
        flex: 1,
        flexBasis: Style.SCALE_UP_AND_DOWN(40),
        marginLeft: Style.SCALE_UP_AND_DOWN(16),
        marginTop: Style.SCALE_UP_AND_DOWN(-30),
        borderRightWidth: 1,
        paddingRight: Style.SCALE_UP_AND_DOWN(20),
        borderRightColor: "black"
    } as ViewStyle,
    instructionHeading: {
        fontSize: Style.SCALE_UP_AND_DOWN(40),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
        marginBottom: -6,
        color: "black"
    } as TextStyle,
    instructionSubheading: {
        color: "black",
        fontSize: Style.SCALE_UP_AND_DOWN(25)
    } as TextStyle,
    instructionText: {
        fontSize: Style.SCALE_UP_AND_DOWN(14),
        lineHeight: Style.SCALE_UP_AND_DOWN(20),
        width: Style.SCALE_UP_AND_DOWN(190),
        textAlignVertical: "bottom",
        color: "black"
    } as TextStyle,
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 37 : 27),
        position: "absolute",
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    progressBarWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(6)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle,
    logo: {
        height: Style.SCALE_UP_AND_DOWN(60),
        width: Style.SCALE_UP_AND_DOWN(60)
    } as ImageStyle,
    headspaceBorder: {
        borderWidth: 1,
        borderColor: "rgba(230, 230, 230, 0.6)",
        borderRadius: Style.SCALE_UP_AND_DOWN(16),
        marginRight: 10
    } as ImageStyle,
    logoWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: Style.SCALE_UP_AND_DOWN(5)
    } as ViewStyle,
    meditationInstructionsWrapper: {
        width: "100%",
        marginTop: -40,
        flexDirection: "row"
    } as ViewStyle
});
