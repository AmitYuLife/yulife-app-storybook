import { StyleSheet, ViewStyle, ImageStyle } from "react-native";

export default StyleSheet.create({
    wrapper: {
        flex: 1,
    } as ViewStyle,
    backgroundImage: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
    } as ImageStyle
});