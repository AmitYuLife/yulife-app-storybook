import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    dailyStepsOnlineWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(-16)
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(35)
    } as TextStyle,
    headingOffline: {
        fontSize: Style.SCALE_UP_AND_DOWN(25)
    } as TextStyle,
    lastUpdate: {
        color: "rgb(96,96,96)",
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
        marginTop: Style.SCALE_UP_AND_DOWN(15),
        textAlign: "center",
        width: Style.SCALE_UP_AND_DOWN(235)
    } as TextStyle,
    navBarWrapper: {
        bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 20 : 10),
        paddingBottom: Style.SCALE_UP_AND_DOWN(15),
        position: "absolute"
    } as ViewStyle,
    permissionText: {
        color: "rgb(96,96,96)",
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
        marginBottom: Style.SCALE_UP_AND_DOWN(20),
        textAlign: "center",
        width: Style.SCALE_UP_AND_DOWN(300)
    } as TextStyle,
    counterWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    zIndex: {
        zIndex: 2
    } as ViewStyle,
    dim: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#000000",
        opacity: 0.2
    } as ViewStyle
});

export const tooltipStyles = StyleSheet.create({
    coinsTooltip: {
        top: Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? 62 : isIphoneX() ? 92 : 72),
        right: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    coinsCaret: {
        left: Style.SCALE_UP_AND_DOWN(155)
    } as ViewStyle,
    dailyStepsCtaTooltip: {
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 3
    } as ViewStyle,
    highlightWrapper: { width: "100%" } as ViewStyle,
    navTooltip: {
        bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 114 : 100),
        left: 0,
        right: 0,
        alignItems: "center"
    } as ViewStyle,
    questsNavCaret: {
        right: Style.SCALE_UP_AND_DOWN(70)
    } as ViewStyle,
    streaksTooltip: {
        top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 175 : 145),
        right: Style.SCALE_UP_AND_DOWN(28)
    } as ViewStyle,
    streaksCaret: {
        left: Style.SCALE_UP_AND_DOWN(180)
    } as ViewStyle,
    leaderboardCaret: {
        left: Style.SCALE_UP_AND_DOWN(70)
    } as ViewStyle,
    rewardsCaret: {
        left: Style.SCALE_UP_AND_DOWN(230)
    } as ViewStyle
});
