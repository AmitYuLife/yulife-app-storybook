import {
    ImageStyle,
    Platform,
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    coinsText: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginBottom: Style.SCALE_UP_AND_DOWN(
            Platform.OS === "ios" ? -4 : 0
        ),
        marginRight: Style.SCALE_UP_AND_DOWN(8)
    } as TextStyle,
    coinsTextWrapper: {
        alignItems: "center",
        alignSelf: "stretch",
        height: "100%"
    } as ViewStyle,
    coinsWrapper: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    menuLabel: {
        fontSize: Style.SCALE_UP_AND_DOWN(18)
    } as TextStyle,
    menuLabelWrapper: {
        marginBottom: Style.SCALE_UP_AND_DOWN(-6),
        marginLeft: Style.SCALE_UP_AND_DOWN(8)
    } as ViewStyle,
    menuWrapper: {
        alignItems: "center",
        flexDirection: "row",
        left: Style.SCALE_UP_AND_DOWN(15),
        position: "absolute"
    } as ViewStyle,
    time: {
        height: Style.SCALE_UP_AND_DOWN(25),
        marginRight: Style.SCALE_UP_AND_DOWN(9),
        width: Style.SCALE_UP_AND_DOWN(25)
    } as ImageStyle,
    timer: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginTop: Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? -2 : 2)
    } as TextStyle,
    timerWrapper: {
        flexDirection: "row",
        marginBottom: Style.SCALE_UP_AND_DOWN(-6),
        paddingLeft: Style.SCALE_UP_AND_DOWN(20)
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(
            Platform.OS === "ios" ? 4 : 8
        ),
        width: "100%"
    } as ViewStyle
});
