import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    coinsLogoWrapper: {
        alignSelf: "flex-start",
        marginTop: Style.SCALE_UP_AND_DOWN(-8)
    } as ViewStyle,
    coinsText: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),

        marginBottom: Style.SCALE_UP_AND_DOWN(Platform.OS === "ios" ? -1 : 2),
        marginRight: Style.SCALE_UP_AND_DOWN(8)
    } as TextStyle,
    coinsTextWrapper: {
        height: "100%",
        justifyContent: "center"
    } as ViewStyle,
    coinsWrapper: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    menuLabel: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        marginLeft: Style.SCALE_UP_AND_DOWN(4),
        marginTop: Style.SCALE_UP_AND_DOWN(-4)
    } as TextStyle,
    menuLabelWrapper: {
        marginBottom: Style.SCALE_UP_AND_DOWN(Platform.OS === "ios" ? -6 : 0),
        marginLeft: Style.SCALE_UP_AND_DOWN(8)
    } as ViewStyle,
    menuWrapper: {
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
        left: Style.SCALE_UP_AND_DOWN(8),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(8),
        position: "absolute"
    } as ViewStyle,
    middleLabel: {
        fontSize: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    name: {
        fontSize: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    textWhite: {
        color: "#FFFFFF"
    },
    textWrapper: {
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
        position: "absolute"
    } as ViewStyle,
    timer: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginTop: Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? -2 : 2),
        paddingLeft: Style.SCALE_UP_AND_DOWN(5)
    } as TextStyle,
    timerWrapper: {
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
        left: Style.DEVICE_WIDTH / 2 - Style.SCALE_UP_AND_DOWN(10),
        position: "absolute"
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(28),
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(Platform.OS === "ios" ? 4 : 8),
        width: "100%"
    } as ViewStyle
});
