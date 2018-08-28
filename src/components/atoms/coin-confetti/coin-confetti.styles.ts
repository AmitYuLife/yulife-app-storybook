import {
    ImageStyle,
    StyleSheet,
    ViewStyle
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    confetti: {
        width: "100%"
    } as ImageStyle,
    confettiExpanded: {
        bottom: 0,
        position: "absolute"
    } as ImageStyle,
    confettiWrapper: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center"
    } as ViewStyle,
    null: {} as ViewStyle,
    wrapper: {
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(220),
        width: "100%"
    } as ViewStyle,
    wrapperExpanded: {
        justifyContent: "center"
    } as ViewStyle
});
