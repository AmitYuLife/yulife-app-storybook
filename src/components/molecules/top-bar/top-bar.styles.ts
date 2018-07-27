import {
    Platform,
    StyleSheet,
    TextStyle,
    ViewStyle,
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    coinsText: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginBottom: Style.SCALE_UP_AND_DOWN(
            Platform.OS === "ios" ? -4 : 0
        ),
        marginRight: Style.SCALE_UP_AND_DOWN(8),
    } as TextStyle,
    coinsTextWrapper: {
        alignItems: "center",
        alignSelf: "stretch",
        height: "100%",
    } as ViewStyle,
    coinsWrapper: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(15),
    } as ViewStyle,
    menuWrapper: {
        left: Style.SCALE_UP_AND_DOWN(15),
        position: "absolute",
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(
            Platform.OS === "ios" ? 4 : 8
        ),
        width: "100%",
    } as ViewStyle,
});
