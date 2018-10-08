import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    leaderboardItemsWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(15),
        width: "100%"
    } as ViewStyle,
    scrollView: {
        flex: 1
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
