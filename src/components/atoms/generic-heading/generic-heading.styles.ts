import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

const styles = StyleSheet.create({
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    headingWrapper: {
        alignItems: "center",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: Style.SCALE_UP_AND_DOWN(17)
    } as ViewStyle,
    paddingBottom: {
        paddingBottom: Style.SCALE_UP_AND_DOWN(13)
    },
    paddingHorizontal: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    subheading: {
        color: Colours.darkGray,
        fontSize: Style.SCALE_UP_AND_DOWN(12)
    } as TextStyle,
    subheadingWrapper: {
        alignItems: "center"
    } as ViewStyle
});

export default styles;
