import { StyleSheet, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

export default StyleSheet.create({
    divider: {
        borderColor: Colours.rewardsTabs.divider,
        borderLeftWidth: 1,
        height: Style.SCALE_UP_AND_DOWN(12)
    } as ViewStyle,
    dividerWrapper: {
        paddingBottom: Style.SCALE_UP_AND_DOWN(16)
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: Style.SCALE_UP_AND_DOWN(345)
    } as ViewStyle
});
