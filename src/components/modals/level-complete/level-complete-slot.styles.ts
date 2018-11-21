import {
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    challengeWrapper: {
        flexGrow: 1
    } as ViewStyle,
    lockedWrapper: {
        opacity: 0.5
    } as ViewStyle,
    resultsWrapper: {
        flex: 1,
        flexGrow: 1
    } as ViewStyle,
    rewardText: {
        fontSize: Style.SCALE_UP_AND_DOWN(12)
    } as TextStyle,
    slotWrapper: {
        display: "flex",
        flexDirection: "row"
    } as ViewStyle,
    starsWrapper: {
        flex: 1,
        flexDirection: "row"
    } as ViewStyle,
    wrapper: {
        display: "flex",
        paddingLeft: Style.SCALE_UP_AND_DOWN(88),
        paddingRight: Style.SCALE_UP_AND_DOWN(20),
        paddingVertical: Style.SCALE_UP_AND_DOWN(20),
        width: "100%"
    } as ViewStyle
});
