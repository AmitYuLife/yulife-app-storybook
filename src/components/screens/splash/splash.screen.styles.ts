import { Colours, Style } from "@styles/index";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
    wrapper: {
        flex: 1
    } as ViewStyle,
    logoWrapper: {
        marginTop:  Style.SCALE_UP_AND_DOWN(135),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    iconWrapper: {
        height: Style.SCALE_UP_AND_DOWN(100),
        width: Style.SCALE_UP_AND_DOWN(100)
    } as ViewStyle,
    icon: {
        height: Style.SCALE_UP_AND_DOWN(100),
        width: Style.SCALE_UP_AND_DOWN(100)
    } as ImageStyle,
    lifeImageText: {
        height: Style.SCALE_UP_AND_DOWN(48)
    } as ImageStyle,
    textWrapper: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    } as ViewStyle,
    bottomWrapper: {
        flex: 1,
        marginBottom: Style.SCALE_UP_AND_DOWN(80),
        justifyContent: "flex-end",
        alignItems: "center"
    } as ViewStyle,
    dotsWrapper: {
        width: Style.SCALE_UP_AND_DOWN(80),
        justifyContent: "space-around",
        flexDirection: "row"
    } as ViewStyle,
    dot: {
        height: Style.SCALE_UP_AND_DOWN(10),
        width: Style.SCALE_UP_AND_DOWN(10),
        backgroundColor: Colours.darkHotPink,
        borderRadius: Style.SCALE_UP_AND_DOWN(11)
    } as ViewStyle
});
