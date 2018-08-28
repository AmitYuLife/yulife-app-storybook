import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    listWrapper: {
        flex: 1
    } as ViewStyle,
    navBarWrapper: {
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)",
        paddingBottom: Style.SCALE_UP_AND_DOWN(15),
        paddingTop: Style.SCALE_UP_AND_DOWN(25)
    } as ViewStyle,
    rewardTabsWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(17)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
