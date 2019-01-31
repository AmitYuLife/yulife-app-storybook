import { StyleSheet } from "react-native";
import { Style } from "../../../../../../../styles";

export const CIRCLE_SIZE = Style.SCALE_UP_AND_DOWN(50);

const styles = StyleSheet.create({
    bubble: {
        alignItems: "center",
        borderRadius: CIRCLE_SIZE,
        bottom: 0,
        height: CIRCLE_SIZE,
        justifyContent: "center",
        marginLeft: -CIRCLE_SIZE / 2,
        position: "absolute",
        width: CIRCLE_SIZE
    },
    text: {
        color: "#ffffff",
        fontSize: Style.SCALE_UP_AND_DOWN(22),
        lineHeight: Style.SCALE_UP_AND_DOWN(22)
    }
});

export default styles;
