import {
    ImageStyle,
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    background: {
        borderColor: "transparent",
        borderWidth: 1,
        height: "100%"
    } as ImageStyle,
    backgroundWrapper: {
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    buttonsWrapper: {
        alignItems: "center"
    } as ViewStyle,
    challengeSetWrapper: {
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 20,
        justifyContent: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(30),
        marginHorizontal: Style.SCALE_UP_AND_DOWN(45),
        marginTop: Style.SCALE_UP_AND_DOWN(25)
    } as ViewStyle,
    historyLink: {
        color: "rgba(226, 1, 119, 1)",
        marginVertical: Style.SCALE_UP_AND_DOWN(25)
    } as ViewStyle,
    levelHeading: {
        alignSelf: "center",
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        marginTop: Style.SCALE_UP_AND_DOWN(25)
    } as TextStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
