import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
    } as ViewStyle,
    scrollViewContentWrapper: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
    } as ViewStyle,
    rewardTabsWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(17),
    } as ViewStyle,
});
