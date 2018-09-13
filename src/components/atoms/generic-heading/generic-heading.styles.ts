import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    headingWrapper: {
        alignItems: "center",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: Style.SCALE_UP_AND_DOWN(13),
        paddingTop: Style.SCALE_UP_AND_DOWN(17)
    } as ViewStyle,
    padding: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle
});

export default styles;
