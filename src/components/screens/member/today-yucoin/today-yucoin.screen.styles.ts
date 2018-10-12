import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../styles";

const styles = StyleSheet.create({
    absolute: {
        position: "absolute"
    } as ViewStyle,
    activeChallengeWrapper: {
        flexDirection: "row",
        marginTop: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    challengesWrapper: {
        backgroundColor: "white",
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        paddingVertical: Style.SCALE_UP_AND_DOWN(30)
    } as ViewStyle,
    checksWrapper: {
        alignSelf: "flex-end",
        flexDirection: "row",
        marginLeft: "auto",
        position: "absolute",
        right: Platform.OS === "ios" ? -1 : 0,
        top: 9
    } as ViewStyle,
    chestCoinWrapper: {
        alignItems: "center",
        width: "100%"
    } as ViewStyle,
    coinInnerWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(-128)
    } as ViewStyle,
    coinOuterWrapper: {
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(200),
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(-50),
        overflow: "hidden",
        width: Style.SCALE_UP_AND_DOWN(200)
    } as ViewStyle,
    contentWrapper: {
        alignSelf: "center",
        width: Style.SCALE_UP_AND_DOWN(305)
    } as ViewStyle,
    ctaWrapper: {
        alignSelf: "center"
    } as ViewStyle,
    heading: {
        color: "white"
    } as TextStyle,
    headingRight: {
        color: "white",
        marginLeft: "auto"
    } as TextStyle,
    headingWrapper: {
        alignItems: "center",
        backgroundColor: Colours.darkHotPink,
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(34),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        width: "100%"
    } as ViewStyle,
    passiveChallengeInstructions: {
        color: "rgb(170,170,170)",
        fontSize: Style.SCALE_UP_AND_DOWN(13)
    } as TextStyle,
    passiveChallengeInstructionsWrapper: {
        flexDirection: "row",
        marginTop: Style.SCALE_UP_AND_DOWN(8)
    } as ViewStyle,
    passiveChallengeWrapper: {
        flexDirection: "row"
    } as ViewStyle,
    progressWrapper: {
        alignItems: "center",
        borderColor: "transparent",
        borderWidth: 1,
        justifyContent: "center",
        overflow: "hidden",
        width: "100%"
    } as ViewStyle,
    star: {
        marginLeft: Style.SCALE_UP_AND_DOWN(30)
    } as ImageStyle,
    starWrapper: {
        marginLeft: 5,
        marginTop: 2
    } as ViewStyle,
    starsWrapper: {
        flexDirection: "row",
        marginLeft: Style.SCALE_UP_AND_DOWN(5)
    } as ViewStyle,
    steps: {
        fontSize: Style.SCALE_UP_AND_DOWN(16)
    } as TextStyle,
    svg: {
        marginTop: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    wrapper: {
        backgroundColor: "rgba(255,255,255,0.9)",
        flex: 1
    } as ViewStyle,
    yucoinsEarned: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginLeft: "auto"
    } as TextStyle
});

export default styles;
