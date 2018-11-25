import {
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    challengeWrapper: {
        width: Style.SCALE_UP_AND_DOWN(80)
    } as ViewStyle,
    hasRating: {
        marginLeft: Style.SCALE_UP_AND_DOWN(-4)
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
    star: {
        marginRight: Style.SCALE_UP_AND_DOWN(5)
    } as ViewStyle,
    starsWrapper: {
        flex: 1,
        flexDirection: "row"
    } as ViewStyle,
    wrapper: {
        display: "flex",
        paddingLeft: Style.SCALE_UP_AND_DOWN(88),
        paddingRight: Style.SCALE_UP_AND_DOWN(20),
        paddingVertical: Style.SCALE_Y_UP_AND_DOWN(20),
        width: "100%"
    } as ViewStyle
});
