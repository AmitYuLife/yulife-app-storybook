import { ImageStyle, StyleSheet, TextStyle } from "react-native";

export default StyleSheet.create({
    footerGray: {
        color: "rgb(170,170,170)"
    } as TextStyle,
    footerWhite: {
        color: "rgb(255,255,255)"
    } as TextStyle,
    backgroundImage: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        width: "100%"
    } as ImageStyle
});
