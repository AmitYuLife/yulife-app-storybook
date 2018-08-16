import { StyleSheet, ImageStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    wrapper: {
        height: Style.SCALE_UP_AND_DOWN(150),
        width: Style.SCALE_UP_AND_DOWN(375),
    } as ViewStyle,
    wrapperLoading: {
        justifyContent: "center",
        alignItems: "center",
    } as ViewStyle,
    imageBackground: {
        ...StyleSheet.absoluteFillObject,
        height: Style.SCALE_UP_AND_DOWN(150),
        width: Style.SCALE_UP_AND_DOWN(375),
    } as ImageStyle,
    activityIndicator: {
        ...StyleSheet.absoluteFillObject,
    } as ViewStyle,
    overlayWrapper: {
        marginRight: "auto",
    } as ViewStyle,
});
