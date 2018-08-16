import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Style, Colours } from "../../../../styles";

export default StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: Style.SCALE_UP_AND_DOWN(16),
        flex: 1,
    } as ViewStyle,
    flipped: {
        flexDirection: "row-reverse",
    } as ViewStyle,
    couponWrapperFlipped: {
        marginLeft: Style.SCALE_UP_AND_DOWN(12),
    } as ImageStyle,
    couponWrapper: {
        marginRight: Style.SCALE_UP_AND_DOWN(12),
    } as ImageStyle,
    active: {
        borderBottomWidth: 1,
        borderBottomColor: Colours.rewardsTabs.active,
    } as ViewStyle,
    textActive: {
        color: Colours.rewardsTabs.active,
    } as TextStyle,
    text: {
        color: Colours.rewardsTabs.inactive,
    },
});
