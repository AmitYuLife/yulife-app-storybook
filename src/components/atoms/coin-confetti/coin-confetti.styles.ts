import {
    StyleSheet,
    ViewStyle,
    ImageStyle,
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    wrapper: {
        width: "100%",
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(220),
    } as ViewStyle,
    wrapperExpanded: {
        justifyContent: "center",
    } as ViewStyle,
    confettiWrapper: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
    } as ViewStyle,
    confetti: {
        width: "100%",
    } as ImageStyle,
    confettiExpanded: {
        position: "absolute",
        bottom: 0,
    } as ImageStyle,
    null: {} as ViewStyle,
});
