import { StyleSheet } from "react-native";
import { Style } from "../../../../../../../styles";

export const CIRCLE_SIZE = Style.SCALE_UP_AND_DOWN(50);

const styles = StyleSheet.create({
    bubble: {
        alignItems: "center",
        borderRadius: CIRCLE_SIZE,
        height: CIRCLE_SIZE + (Style.PIXEL_RATIO >= 3 ? Style.SCALE_UP_AND_DOWN(20) : 0),
        justifyContent: "center",
        marginLeft: -CIRCLE_SIZE / 2,
        position: "absolute",
        width: CIRCLE_SIZE + (Style.PIXEL_RATIO >= 3 ? Style.SCALE_UP_AND_DOWN(20) : 0),
        overflow: "hidden"
    },
    bubbleButton: {
        borderRadius: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        width: CIRCLE_SIZE,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#ffffff",
        fontSize: Style.SCALE_UP_AND_DOWN(19),
        lineHeight: Style.SCALE_UP_AND_DOWN(19)
    },
    textPending: {
        color: "#ffffff",
        fontSize: Style.SCALE_UP_AND_DOWN(11),
        lineHeight: Style.SCALE_UP_AND_DOWN(11),
        textAlign: "center"
    }
});

export default styles;
