import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

const styles = StyleSheet.create({
    name: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginBottom: Style.SCALE_UP_AND_DOWN(10)
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
        width: Style.SCALE_UP_AND_DOWN(65)
    } as ViewStyle
});

export default styles;
