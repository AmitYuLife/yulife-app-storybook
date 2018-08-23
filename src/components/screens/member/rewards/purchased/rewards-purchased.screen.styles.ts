import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        flex: 1,
    } as ViewStyle,
    rewardTabsWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(17),
    } as ViewStyle,
    listWrapper: {
        flex: 1,
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
    } as ViewStyle,
    navBarWrapper: {
        alignItems: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(18),
    } as ViewStyle,
});
