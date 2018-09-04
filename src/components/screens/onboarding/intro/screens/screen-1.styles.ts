import {
    ImageStyle,
    StyleSheet,
    ViewStyle
} from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    image: {
        marginLeft: "auto"
    } as ImageStyle,
    wrapper: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        width: Style.DEVICE_WIDTH
    } as ViewStyle
});
