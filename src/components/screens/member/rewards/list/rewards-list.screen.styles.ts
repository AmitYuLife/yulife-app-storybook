import { StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    listWrapper: {
        flex: 1,
        marginBottom: isIphoneX() ? 80 : 105
    } as ViewStyle,
    navBarWrapper: {
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)",
        bottom: 0,
        left: 0,
        paddingBottom: Style.SCALE_UP_AND_DOWN(17),
        paddingTop: Style.SCALE_UP_AND_DOWN(8),
        position: "absolute",
        right: 0
    } as ViewStyle,
    rewardTabsWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(17)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
