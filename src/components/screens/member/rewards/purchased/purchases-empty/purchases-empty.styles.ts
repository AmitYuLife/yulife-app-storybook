import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../../styles";

export default StyleSheet.create({
    contentWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(18)
    } as ViewStyle,
    image: {
        marginBottom: Style.SCALE_UP_AND_DOWN(21)
    } as ImageStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginBottom: Style.SCALE_UP_AND_DOWN(3)
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    } as ViewStyle
});
