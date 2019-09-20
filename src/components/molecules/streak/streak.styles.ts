import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Colours, Style } from "../../../styles";
import { IProps } from "./streak";

export function getColour(type: IProps["type"], isFinished: boolean, isPressed: boolean, isOnline: boolean) {
    if (!isOnline) {
        return Colours.streak.offline;
    }
    if (isFinished) {
        if (isPressed) {
            return Colours.streak.finished[type].pressed;
        } else {
            return Colours.streak.finished[type].unpressed;
        }
    } else {
        if (isPressed) {
            return Colours.streak.unfinished.pressed;
        } else {
            return Colours.streak.unfinished.unpressed;
        }
    }
}

export default StyleSheet.create({
    dim: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#000000",
        opacity: 0.2,
        borderBottomLeftRadius: Style.SCALE_UP_AND_DOWN(55),
        borderTopLeftRadius: Style.SCALE_UP_AND_DOWN(55)
    } as ViewStyle,
    text: {
        color: "white",
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginRight: Style.SCALE_UP_AND_DOWN(12),
        marginTop: Platform.OS === "ios" ? Style.SCALE_UP_AND_DOWN(4) : 0
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        borderBottomLeftRadius: Style.SCALE_UP_AND_DOWN(55),
        borderTopLeftRadius: Style.SCALE_UP_AND_DOWN(55),
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(55),
        justifyContent: "flex-end",
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(isIphoneX() ? -15 : 0),
        top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 120 : 80)
    } as ViewStyle
});
