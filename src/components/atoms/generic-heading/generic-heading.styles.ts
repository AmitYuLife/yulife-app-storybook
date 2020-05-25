import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../styles";

const styles = StyleSheet.create({
    heading: {
        fontSize: Style.adjust(20),
    } as TextStyle,
    headingWrapper: {
        alignItems: "center",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: Style.adjust(17)
    } as ViewStyle,
    paddingBottom: {
        paddingBottom: Style.adjust(13),
    },
    paddingHorizontal: {
        paddingHorizontal: Style.adjust(15),
    } as ViewStyle,
    subheading: {
        color: Colours.darkGray,
        fontSize: Style.adjust(12),
    } as TextStyle,
    subheadingWrapper: {
        alignItems: "center"
    } as ViewStyle
});

export default styles;
