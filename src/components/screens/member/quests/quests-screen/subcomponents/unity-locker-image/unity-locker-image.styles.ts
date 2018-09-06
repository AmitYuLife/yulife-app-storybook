import {
    ImageStyle,
    StyleSheet,
    ViewStyle
} from "react-native";

const cloudHeight = 120;

const styles = StyleSheet.create({
    cloud: {
        height: cloudHeight
    } as ImageStyle,
    cloudWrapper: {
        height: cloudHeight,
        left: 0,
        position: "absolute",
        top: 48
    } as ViewStyle,
    mediumCloud: {
        height: cloudHeight
    } as ImageStyle,
    mediumCloudWrapper: {
        height: cloudHeight,
        left: 0,
        position: "absolute",
        top: 24
    } as ViewStyle,
    whiteCloud: {
        height: cloudHeight
    } as ImageStyle,
    whiteCloudWrapper: {
        height: cloudHeight,
        left: 0,
        position: "absolute",
        top: -4
    } as ViewStyle,
    wrapper: {
        height: cloudHeight,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0
    } as ViewStyle
});

export default styles;
