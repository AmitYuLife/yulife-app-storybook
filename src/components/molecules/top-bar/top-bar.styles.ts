import {
    Platform,
    StyleSheet,
    TextStyle,
    ViewStyle,
    ImageStyle,
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    wrapper: {
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(
            Platform.OS === "ios" ? 4 : 8
        ),
    } as ViewStyle,
    menuWrapper: {
        position: "absolute",
        left: Style.SCALE_UP_AND_DOWN(15),
        flexDirection: "row",
        alignItems: "center",
    } as ViewStyle,
    coinsWrapper: {
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(15),
        flexDirection: "row",
        alignItems: "center",
    } as ViewStyle,
    coinsTextWrapper: {
        alignItems: "center",
        height: "100%",
        alignSelf: "stretch",
    } as ViewStyle,
    coinsText: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginRight: Style.SCALE_UP_AND_DOWN(8),
        marginBottom: Style.SCALE_UP_AND_DOWN(
            Platform.OS === "ios" ? -4 : 0
        ),
    } as TextStyle,
    timerWrapper: {
        marginBottom: Style.SCALE_UP_AND_DOWN(-6),
        paddingLeft: Style.SCALE_UP_AND_DOWN(20),
        flexDirection: "row",
    } as ViewStyle,
    time: {
        marginRight: Style.SCALE_UP_AND_DOWN(9),
        height: Style.SCALE_UP_AND_DOWN(25),
        width: Style.SCALE_UP_AND_DOWN(25),
    } as ImageStyle,
    timer: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginTop: Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? -2 : 2),
    } as TextStyle,
    menuLabelWrapper: {
        marginLeft: Style.SCALE_UP_AND_DOWN(8),
        marginBottom: Style.SCALE_UP_AND_DOWN(-6),
    } as ViewStyle,
    menuLabel: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
    } as TextStyle,
});
