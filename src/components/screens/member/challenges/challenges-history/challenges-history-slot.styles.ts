import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    challengeWrapper: {
        width: Style.SCALE_UP_AND_DOWN(80),
        flex: 1
    } as ViewStyle,
    challengeTypeText: {
        fontSize: Style.SCALE_UP_AND_DOWN(16)
    } as ViewStyle,
    durationText: {
        marginTop: Style.SCALE_UP_AND_DOWN(4),
        fontSize: Style.SCALE_UP_AND_DOWN(16)
    } as ViewStyle,
    hasRating: {
        marginLeft: Style.SCALE_UP_AND_DOWN(-4)
    } as ViewStyle,
    lockedWrapper: {
        opacity: 0.5
    } as ViewStyle,
    resultsWrapper: {
        flex: 1,
        flexDirection: "column",
        marginTop: Style.SCALE_UP_AND_DOWN(24),
        marginLeft: "auto"
    } as ViewStyle,
    challengeResultWrapper: {
        flex: 1,
        flexDirection: "row",
        marginBottom: Style.SCALE_UP_AND_DOWN(8)
    } as ViewStyle,
    rewardText: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginRight: Style.SCALE_UP_AND_DOWN(8),
        height: Style.SCALE_UP_AND_DOWN(Platform.OS === "ios" ? 16 : 20)
    } as TextStyle,
    slotWrapper: {
        display: "flex",
        flexDirection: "row",
        flex: 1
    } as ViewStyle,
    challengeSetWrapper: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0.32)",
        borderRadius: 16,
        paddingTop: Style.SCALE_Y_UP_AND_DOWN(14),
        paddingRight: Style.SCALE_Y_UP_AND_DOWN(25),
        paddingLeft: Style.SCALE_UP_AND_DOWN(75),
        paddingBottom: Style.SCALE_Y_UP_AND_DOWN(8),
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        borderColor: "#FFFFFF",
        flex: 1,
        width: "100%",
        overflow: "hidden"
    } as ViewStyle,
    challengeSetWrapperMountain: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0.32)",
        borderRadius: 16,
        paddingTop: Style.SCALE_Y_UP_AND_DOWN(14),
        paddingRight: Style.SCALE_Y_UP_AND_DOWN(35),
        paddingBottom: Style.SCALE_Y_UP_AND_DOWN(8),
        paddingLeft: Style.SCALE_UP_AND_DOWN(93),
        borderWidth: Style.SCALE_UP_AND_DOWN(1),
        borderColor: "#FFFFFF",
        flex: 1,
        width: "100%",
        overflow: "hidden"
    } as ViewStyle,
    star: {
        marginRight: Style.SCALE_UP_AND_DOWN(5),
        height: Style.SCALE_UP_AND_DOWN(16),
        width: Style.SCALE_UP_AND_DOWN(16),
        marginTop: "auto",
        marginBottom: "auto"
    } as ImageStyle,
    starsWrapper: {
        flex: 1,
        flexDirection: "row"
    } as ViewStyle,
    wrapper: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: Style.SCALE_UP_AND_DOWN(30),
        paddingRight: Style.SCALE_UP_AND_DOWN(20),
        paddingVertical: Style.SCALE_Y_UP_AND_DOWN(8),
        width: "100%"
    } as ViewStyle
});
