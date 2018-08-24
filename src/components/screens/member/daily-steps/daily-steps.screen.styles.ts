import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(35),
    } as TextStyle,
    navBarWrapper: {
        position: "absolute",
        bottom: Style.SCALE_UP_AND_DOWN(17),
    } as ViewStyle,
    headingOffline: {
        fontSize: Style.SCALE_UP_AND_DOWN(25),
    } as TextStyle,
    lastUpdate: {
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        width: Style.SCALE_UP_AND_DOWN(235),
        marginTop: Style.SCALE_UP_AND_DOWN(15),
        color: "rgb(96,96,96)",
        textAlign: "center",
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
    } as TextStyle,
    permissionText: {
        width: Style.SCALE_UP_AND_DOWN(300),
        marginBottom: Style.SCALE_UP_AND_DOWN(20),
        color: "rgb(96,96,96)",
        textAlign: "center",
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
    } as TextStyle,
});
