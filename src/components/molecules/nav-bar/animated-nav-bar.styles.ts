import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(17),
        justifyContent: "center",
        position: "absolute"
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        bottom: 0,
        height: Style.SCALE_UP_AND_DOWN(100),
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0
    } as ViewStyle
});
