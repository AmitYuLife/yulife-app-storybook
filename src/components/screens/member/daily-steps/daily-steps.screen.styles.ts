import { StyleSheet, TextStyle, ViewStyle } from "react-native";
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
        bottom: Style.SCALE_UP_AND_DOWN(17),
        position: "absolute"
    } as ViewStyle,
    permissionText: {
        color: "rgb(96,96,96)",
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
        marginBottom: Style.SCALE_UP_AND_DOWN(20),
        textAlign: "center",
        width: Style.SCALE_UP_AND_DOWN(300)
    } as TextStyle,
    whiteText: {
        color: "#FFF"
    } as TextStyle,
    counterWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle
});
