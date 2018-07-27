import {
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(35),
    } as TextStyle,
    navBarWrapper: {
        bottom: Style.SCALE_UP_AND_DOWN(17),
        position: "absolute",
    } as ViewStyle,
});
