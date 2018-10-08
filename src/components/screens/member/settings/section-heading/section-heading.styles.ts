import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

const styles = StyleSheet.create({
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    headingWrapper: {
        alignItems: "center",
        borderBottomColor: "rgb(51,51,51)",
        borderBottomWidth: StyleSheet.hairlineWidth * 2,
        paddingBottom: Style.SCALE_UP_AND_DOWN(10),
        paddingTop: Style.SCALE_UP_AND_DOWN(17)
    } as ViewStyle,
    paddingHorizontal: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(60)
    } as ViewStyle
});

export default styles;
