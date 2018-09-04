import {
    StyleSheet,
    ViewStyle
} from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    button: {
        height: 50
    } as ViewStyle,
    buttonsWrapper: {
        marginBottom: Style.SCALE_UP_AND_DOWN(100),
        marginTop: "auto"
    } as ViewStyle,
    contentWrapper: {
        height: 490,
        width: 375
    } as ViewStyle,
    imageWrapper: {
        alignItems: "center",
        borderColor: "red",
        justifyContent: "center",
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    wrapper: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        width: Style.DEVICE_WIDTH
    } as ViewStyle
});
