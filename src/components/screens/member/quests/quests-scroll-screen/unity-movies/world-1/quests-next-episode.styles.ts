import { Style } from "@styles/index";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    bigText: {
        fontSize: 20,
        marginTop: 8
    },
    center: {
        textAlign: "center"
    },
    smallText: {
        fontSize: 14,
        marginTop: 16
    } as TextStyle,
    textWrapper: {
        bottom: 120,
        left: 0,
        position: "absolute",
        width: Style.DEVICE_WIDTH
    } as ViewStyle
});

export default styles;
