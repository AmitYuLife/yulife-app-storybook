import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    contentTextWrapper: { marginTop: Style.SCALE_UP_AND_DOWN(2) } as ViewStyle,
    contentReward: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(13),
        lineHeight: Style.SCALE_UP_AND_DOWN(13)
    } as TextStyle,
    contentTitle: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 13 : 17),
        lineHeight: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 13 : 17)
    } as TextStyle,
    contentWrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(15),
        justifyContent: "center"
    } as ViewStyle,
    imageBackground: {
        backgroundColor: "rgba(255,255,255,0.5)",
        borderTopRightRadius: Style.SCALE_UP_AND_DOWN(20),
        bottom: 0,
        height: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 80 : 120),
        left: 0,
        position: "absolute",
        right: 0
    } as ViewStyle,
    imageBackgroundFlipped: {
        borderTopLeftRadius: Style.SCALE_UP_AND_DOWN(20),
        borderTopRightRadius: 0
    } as ViewStyle,
    imageBackgroundLocked: {
        backgroundColor: "transparent",
        height: Style.SCALE_UP_AND_DOWN(200)
    } as ViewStyle,
    imageNext: {
        height: Style.SCALE_UP_AND_DOWN(25),
        width: Style.SCALE_UP_AND_DOWN(25)
    } as ImageStyle,
    imageWrapper: {
        height: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 120 : 140)
    } as ViewStyle,
    imageWrapperLocked: {
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(220),
        justifyContent: "center"
    } as ViewStyle,
    imageWrapperNext: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(55)
    } as ViewStyle,
    isLockedBottomWrapper: {
        backgroundColor: "rgba(255,255,255,0.5)"
    } as ViewStyle,
    lockedImage: {
        marginBottom: Style.SCALE_UP_AND_DOWN(9)
    } as ImageStyle,
    lockedLabel: {
        fontSize: Style.SCALE_UP_AND_DOWN(17)
    } as TextStyle,
    lockedOverlay: {
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        borderTopRightRadius: Style.SCALE_UP_AND_DOWN(20),
        bottom: 0,
        height: "auto",
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: Style.SCALE_UP_AND_DOWN(20)
    } as ViewStyle,
    lockedOverlayFlipped: {
        borderTopLeftRadius: Style.SCALE_UP_AND_DOWN(20),
        borderTopRightRadius: 0
    } as ViewStyle,
    sectionBottomInsideWrapper: {
        flexDirection: "row",
        height: "100%"
    } as ViewStyle,
    sectionBottomWrapper: {
        backgroundColor: "rgba(255,255,255,0.9)",
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 66 : 80)
    } as ViewStyle,
    wrapper: {
        height: Style.SCALE_UP_AND_DOWN(Style.isShortToMediumAndroid() ? 204 : 224),
        justifyContent: "flex-end",
        marginTop: Style.SCALE_UP_AND_DOWN(7),
        width: Style.SCALE_UP_AND_DOWN(165)
    } as ViewStyle
});

export default styles;
