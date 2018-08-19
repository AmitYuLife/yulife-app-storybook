import {
    ImageStyle,
    StyleSheet,
    ViewStyle,
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    imageBase: {
        width: "100%",
    } as ImageStyle,
    imageForest: {
        height: Style.SCALE_UP_AND_DOWN(200),
    } as ImageStyle,
    imageLargeForest: {
        height: Style.SCALE_UP_AND_DOWN(300),
    } as ImageStyle,
    imageWrapper: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        width: "100%",
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
    } as ViewStyle,
});
