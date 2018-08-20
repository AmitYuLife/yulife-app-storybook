import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Style } from "../../../../styles";
import { isIphoneX } from "react-native-iphone-x-helper";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(105),
        paddingTop: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 150 : 110),
        backgroundColor: "white",
    } as ViewStyle,
    closeWrapper: {
        position: "absolute",
        top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 30 : 10),
        right: 0,
        height: Style.SCALE_UP_AND_DOWN(56),
        width: Style.SCALE_UP_AND_DOWN(46),
        justifyContent: "center",
        alignItems: "center",
    } as ViewStyle,
    close: {
        height: Style.SCALE_UP_AND_DOWN(13),
        width: Style.SCALE_UP_AND_DOWN(13),
    } as ImageStyle,
    logoWrapper: {
        width: Style.SCALE_UP_AND_DOWN(56),
        marginBottom: Style.SCALE_UP_AND_DOWN(34),
    } as ViewStyle,
    logo: {} as ImageStyle,
    itemWrapper: {
        flexDirection: "row",
        alignItems: "center",
        height: Style.SCALE_UP_AND_DOWN(62),
    } as ViewStyle,
    textWrapper: {
        paddingRight: Style.SCALE_UP_AND_DOWN(8),
    } as ViewStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        color: "rgb(51,51,51)",
        width: "100%",
        borderWidth: 1,
        borderColor: "transparent",
    } as TextStyle,
    iconWrapper: {
        width: Style.SCALE_UP_AND_DOWN(56),
    } as ViewStyle,
});
