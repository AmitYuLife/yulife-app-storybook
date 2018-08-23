import {
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Style, Colours } from "../../../styles";

const wrapperPrimaryBodyHeight = Style.SCALE_UP_AND_DOWN(50);
const wrapperPrimaryBodyWidth = Style.SCALE_UP_AND_DOWN(306);
const wrapperPrimaryShadowOffset = Style.SCALE_UP_AND_DOWN(4);
const wrapperPrimaryTotalHeight = wrapperPrimaryBodyHeight + wrapperPrimaryShadowOffset;

export default StyleSheet.create({
    wrapperSecondary: {
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        borderColor: Colours.darkHotPink,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: Style.SCALE_UP_AND_DOWN(50),
        width: Style.SCALE_UP_AND_DOWN(306),
        justifyContent: "center",
    } as ViewStyle,
    textSecondary: {
        textAlign: "center",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        color: Colours.darkHotPink,
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
    } as TextStyle,
    textSecondaryMedium: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
    } as TextStyle,
    wrapperPrimary: {
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        borderColor: Colours.button.primary.default.body,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: wrapperPrimaryBodyHeight,
        width: wrapperPrimaryBodyWidth,
        backgroundColor: Colours.button.primary.default.body,
        justifyContent: "center",
    } as ViewStyle,
    wrapperOverlayPrimaryDisabled: {
        ...StyleSheet.absoluteFillObject,
        left: -3,
        height: wrapperPrimaryTotalHeight,
        width: wrapperPrimaryBodyWidth + 8,
        borderRadius: wrapperPrimaryTotalHeight / 2,
        backgroundColor: "rgba(255,255,255,0.8)",
    } as ViewStyle,
    wrapperPrimaryPressed: {
        borderColor: Colours.button.primary.pressedIn.body,
        backgroundColor: Colours.button.primary.pressedIn.body,
    } as ViewStyle,
    wrapperPrimaryGreyscale: {
        borderColor: "white",
        backgroundColor: "white",
        shadowColor: "rgb(150,150,150)",
    } as ViewStyle,
    wrapperMedium: {
        width: Style.SCALE_UP_AND_DOWN(210),
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(3),
        },
    } as ViewStyle,
    wrapperPrimarySmall: {
        width: Style.SCALE_UP_AND_DOWN(170),
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(2),
        },
    } as ViewStyle,
    textPrimary: {
        textAlign: "center",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        color: "white",
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
    } as TextStyle,
    textGreyscale: {
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        color: "rgb(85,85,85)",
    } as TextStyle,
    wrapperLink: {
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: Style.SCALE_UP_AND_DOWN(50),
        width: Style.SCALE_UP_AND_DOWN(306),
        justifyContent: "center",
    } as ViewStyle,
    textLink: {
        textAlign: "center",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        color: Colours.button.link,
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(23),
    } as TextStyle,
    shadow: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(85),
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: Style.SCALE_UP_AND_DOWN(50),
        width: Style.SCALE_UP_AND_DOWN(306),
        backgroundColor: Colours.darkHotPinkShadow,
        justifyContent: "center",
        position: "absolute",
        top: wrapperPrimaryShadowOffset,
    } as ViewStyle,
    shadowPressed: {
        backgroundColor: Colours.button.primary.pressedIn.shadow,
    } as ViewStyle,
    shadowGrey: {
        backgroundColor: "rgb(150,150,150)",
    },
    shadowMedium: {
        width: Style.SCALE_UP_AND_DOWN(210),
        top: Style.SCALE_UP_AND_DOWN(3),
    } as ViewStyle,
    shadowSmall: {
        width: Style.SCALE_UP_AND_DOWN(170),
        top: Style.SCALE_UP_AND_DOWN(2),
    } as ViewStyle,
});
