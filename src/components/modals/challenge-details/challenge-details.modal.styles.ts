import {
    ImageStyle,
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    contentWrapper: {
        backgroundColor: "rgb(237, 251, 248)",
        padding: Style.SCALE_UP_AND_DOWN(20),
        width: Style.SCALE_UP_AND_DOWN(285)
    } as ViewStyle,
    ctaButton: {
        marginTop: Style.SCALE_UP_AND_DOWN(-4)
    } as ViewStyle,
    error: {
        bottom: Style.SCALE_UP_AND_DOWN(30),
        color: "rgb(170,170,170)",
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        position: "absolute",
        textAlign: "center"
    } as TextStyle,
    footer: {
        color: "rgb(170,170,170)",
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginTop: Style.SCALE_UP_AND_DOWN(24)
    } as TextStyle,
    heading: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(25),
        marginBottom: Style.SCALE_UP_AND_DOWN(10)
    } as TextStyle,
    image: {
        marginTop: Style.SCALE_Y_UP_AND_DOWN(-50)
    } as ImageStyle,
    imageLongWalk: {
        marginTop: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? -50 : -100)
    } as ImageStyle,
    rewardWrapper: {
        marginLeft: "auto",
        marginRight: Style.SCALE_UP_AND_DOWN(8)
    } as ViewStyle,
    row: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: Style.SCALE_UP_AND_DOWN(5)
    } as ViewStyle,
    setUp: {
        marginTop: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    starImage: {
        marginRight: Style.SCALE_UP_AND_DOWN(3),
        marginTop: Style.SCALE_UP_AND_DOWN(-4)
    } as ImageStyle,
    targetWrapper: {
        paddingVertical: Style.SCALE_UP_AND_DOWN(6),
        width: Style.SCALE_UP_AND_DOWN(76)
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
        flex: 1,
        justifyContent: "center"
    } as ViewStyle,
    yucoinImage: {
        marginTop: Style.SCALE_UP_AND_DOWN(-4)
    } as ImageStyle
});

export default styles;
