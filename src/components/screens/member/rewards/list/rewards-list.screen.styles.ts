import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
    } as ViewStyle,
    navBarWrapper: {
        backgroundColor: "rgb(255,255,255)",
        alignItems: "center",
        paddingTop: Style.SCALE_UP_AND_DOWN(25),
        paddingBottom: Style.SCALE_UP_AND_DOWN(15),
    } as ViewStyle,
    rewardTabsWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(17),
    } as ViewStyle,
    listWrapper: {
        flex: 1,
    } as ViewStyle,
});
