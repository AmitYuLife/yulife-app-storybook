import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    bodyItemWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: Style.SCALE_UP_AND_DOWN(50),
        width: Style.SCALE_UP_AND_DOWN(50),
        alignItems: "center"
    } as ViewStyle,
    bodyItemWrapperSelected: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: Style.SCALE_UP_AND_DOWN(50),
        width: Style.SCALE_UP_AND_DOWN(100),
        borderRadius: Style.SCALE_UP_AND_DOWN(30),
        backgroundColor: "#F1F1F1",
        alignItems: "center"
    } as ViewStyle
});
