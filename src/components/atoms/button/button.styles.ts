import {
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Colours, Style } from "../../../styles";

const wrapperPrimaryBodyHeight = Style.SCALE_UP_AND_DOWN(50);
const wrapperPrimaryBodyWidth = Style.SCALE_UP_AND_DOWN(306);
const wrapperPrimaryShadowOffset = Style.SCALE_UP_AND_DOWN(4);
const wrapperPrimaryTotalHeight = wrapperPrimaryBodyHeight + wrapperPrimaryShadowOffset;

export default StyleSheet.create({
    shadow: {
        backgroundColor: Colours.darkHotPinkShadow,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(85),
        position: "absolute",
        top: wrapperPrimaryShadowOffset,
        width: Style.SCALE_UP_AND_DOWN(306)
    } as ViewStyle,
    shadowGrey: {
        backgroundColor: "rgb(150,150,150)"
    },
    shadowMedium: {
        top: Style.SCALE_UP_AND_DOWN(3),
        width: Style.SCALE_UP_AND_DOWN(210)
    } as ViewStyle,
    shadowPressed: {
        backgroundColor: Colours.button.primary.pressedIn.shadow
    } as ViewStyle,
    shadowSmall: {
        top: Style.SCALE_UP_AND_DOWN(2),
        width: Style.SCALE_UP_AND_DOWN(170)
    } as ViewStyle,
    textGreyscale: {
        color: "rgb(85,85,85)",
        fontFamily: Style.FONT_FAMILY_PRIMARY
    } as TextStyle,
    textLink: {
        color: Colours.button.link,
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(23),
        textAlign: "center"
    } as TextStyle,
    textPrimary: {
        color: "white",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
        textAlign: "center"
    } as TextStyle,
    textSecondary: {
        color: Colours.darkHotPink,
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        lineHeight: Style.SCALE_UP_AND_DOWN(40),
        textAlign: "center"
    } as TextStyle,
    textSecondaryMedium: {
        fontSize: Style.SCALE_UP_AND_DOWN(16)
    } as TextStyle,
    wrapperLink: {
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(306)
    } as ViewStyle,
    wrapperMedium: {
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(3)
        },
        width: Style.SCALE_UP_AND_DOWN(210)
    } as ViewStyle,
    wrapperOverlayPrimaryDisabled: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: wrapperPrimaryTotalHeight / 2,
        height: wrapperPrimaryTotalHeight,
        left: -3,
        width: wrapperPrimaryBodyWidth + 8
    } as ViewStyle,
    wrapperPrimary: {
        backgroundColor: Colours.button.primary.default.body,
        borderColor: Colours.button.primary.default.body,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        height: wrapperPrimaryBodyHeight,
        justifyContent: "center",
        width: wrapperPrimaryBodyWidth
    } as ViewStyle,
    wrapperPrimaryGreyscale: {
        backgroundColor: "white",
        borderColor: "white",
        shadowColor: "rgb(150,150,150)"
    } as ViewStyle,
    wrapperPrimaryPressed: {
        backgroundColor: Colours.button.primary.pressedIn.body,
        borderColor: Colours.button.primary.pressedIn.body
    } as ViewStyle,
    wrapperPrimarySmall: {
        shadowOffset: {
            height: Style.SCALE_UP_AND_DOWN(2)
        },
        width: Style.SCALE_UP_AND_DOWN(170)
    } as ViewStyle,
    wrapperSecondary: {
        borderColor: Colours.darkHotPink,
        borderRadius: Style.SCALE_UP_AND_DOWN(50),
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(306)
    } as ViewStyle
});
