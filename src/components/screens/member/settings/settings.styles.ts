import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    leaderboardItemsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(15),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(40)
    } as ViewStyle,
    notificationsItemsWrapper: {
        flexDirection: "column",
        justifyContent: "center",
        marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
        marginTop: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    scrollView: {
        flex: 1
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
