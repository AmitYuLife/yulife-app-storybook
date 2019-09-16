import { Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
    rightColumnWrapper: {
        marginLeft: "auto",
        marginTop: Style.SCALE_UP_AND_DOWN(37)
    } as ViewStyle,
    wrapper: {
        flexDirection: "row",
        height: "100%",
        transform: [
            {
                translateY: Platform.OS === "android" ? (Style.isXShortAndroid() ? 10 : 20) : isIphoneX() ? 60 : 20
            }
        ],
        width: "100%"
    } as ViewStyle
});

export default styles;
