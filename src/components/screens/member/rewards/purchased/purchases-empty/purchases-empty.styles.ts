import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Style } from "../../../../../../styles";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    } as ViewStyle,
    image: {
        marginBottom: Style.SCALE_UP_AND_DOWN(21),
    } as ImageStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginBottom: Style.SCALE_UP_AND_DOWN(3),
    } as TextStyle,
    contentWrapper: {
        marginBottom: Style.SCALE_UP_AND_DOWN(18),
        justifyContent: "center",
        alignItems: "center",
    } as ViewStyle,
});
