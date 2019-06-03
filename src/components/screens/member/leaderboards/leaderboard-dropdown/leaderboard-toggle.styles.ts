import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    leaderboardButtonWrapper: {
        backgroundColor: "white",
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    leaderboardButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    leaderboardButtonText: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15)
    } as TextStyle,
    text: {
        fontSize: 18,
        lineHeight: 20,
        textAlign: "center"
    } as TextStyle
});
