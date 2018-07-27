import {
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    blurbWrapper: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(44),
    } as ViewStyle,
    heading: {
        marginTop: Style.SCALE_UP_AND_DOWN(-10),
    } as TextStyle,
});
