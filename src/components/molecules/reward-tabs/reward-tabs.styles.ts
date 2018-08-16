import { StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "../../../styles";

export default StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        alignItems: "center",
        width: Style.SCALE_UP_AND_DOWN(345),
        flexDirection: "row",
    } as ViewStyle,
    dividerWrapper: {
        paddingBottom: Style.SCALE_UP_AND_DOWN(16),
    } as ViewStyle,
    divider: {
        height: Style.SCALE_UP_AND_DOWN(12),
        borderLeftWidth: 1,
        borderColor: Colours.rewardsTabs.divider,
    } as ViewStyle,
    bottomBorder: {
        position: "absolute",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colours.rewardsTabs.inactiveTransparent,
        bottom: 0,
        width: "100%",
        zIndex: -1,
    } as ViewStyle,
});
