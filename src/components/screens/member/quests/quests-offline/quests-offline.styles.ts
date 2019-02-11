import {
    ImageStyle,
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Style } from "../../../../../styles";

const styles = StyleSheet.create({
    background: {
        height: Style.DEVICE_HEIGHT,
        width: Style.DEVICE_WIDTH
    } as ImageStyle,
    backgroundWrapper: {
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(35),
        marginBottom: Style.SCALE_UP_AND_DOWN(10)
    } as TextStyle,
    headingWrapper: {
        alignItems: "center",
        justifyContent: "center",
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(17),
        position: "absolute"
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        flex: 1,
        height: "100%"
    } as ViewStyle
});

export default styles;
