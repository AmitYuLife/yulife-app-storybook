import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

export default StyleSheet.create({
    shadow: {
        backgroundColor: Colours.darkHotPinkShadow,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(85),
        position: "absolute",
        top: Style.SCALE_UP_AND_DOWN(4),
        width: Style.SCALE_UP_AND_DOWN(306),
    } as ViewStyle,
    shadowGrey: {
        backgroundColor: "rgb(150,150,150)",
    },
    shadowMedium: {
        top: Style.SCALE_UP_AND_DOWN(3),
        width: Style.SCALE_UP_AND_DOWN(210),
    } as ViewStyle,
    shadowSmall: {
        top: Style.SCALE_UP_AND_DOWN(2),
        width: Style.SCALE_UP_AND_DOWN(170),
    } as ViewStyle,
    textGreyscale: {
        color: "rgb(85,85,85)",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
    } as TextStyle,
    textLink: {
        color: Colours.button.link,
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(23),
        textAlign: "center",
    } as TextStyle,
    textPrimary: {
        color: "white",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
        textAlign: "center",
    } as TextStyle,
    textSecondary: {
        color: Colours.darkHotPink,
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
        textAlign: "center",
    } as TextStyle,
    textSecondaryMedium: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
    } as TextStyle,
    wrapperLink: {
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(306),
    } as ViewStyle,
    wrapperPrimary: {
        backgroundColor: Colours.darkHotPink,
        borderColor: Colours.darkHotPink,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        shadowColor: Colours.darkHotPinkShadow,
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(4),
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        width: Style.SCALE_UP_AND_DOWN(306),
    } as ViewStyle,
    wrapperPrimaryGreyscale: {
        backgroundColor: "white",
        borderColor: "white",
        shadowColor: "rgb(150,150,150)",
    } as ViewStyle,
    wrapperPrimaryMedium: {
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(3),
        },
        width: Style.SCALE_UP_AND_DOWN(210),
    } as ViewStyle,
    wrapperPrimarySmall: {
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(2),
        },
        width: Style.SCALE_UP_AND_DOWN(170),
    } as ViewStyle,
    wrapperSecondary: {
        borderColor: Colours.darkHotPink,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(306),
    } as ViewStyle,
    wrapperMedium: {
        width: Style.SCALE_UP_AND_DOWN(210),
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(3),
        },
    } as ViewStyle,
});
