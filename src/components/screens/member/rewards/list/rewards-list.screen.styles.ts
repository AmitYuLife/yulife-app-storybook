import { StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    listWrapper: {
        flex: 1,
        marginBottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 45 : 79)
    } as ViewStyle,
    navBarWrapper: {
        height: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 25 : 15),
        paddingBottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 0 : 25),
        alignItems: "center"
    } as ViewStyle,
    footer: {
        height: Style.SCALE_UP_AND_DOWN(28)
    } as ViewStyle,
    rewardTabsWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(17)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});
