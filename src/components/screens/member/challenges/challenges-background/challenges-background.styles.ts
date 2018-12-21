import { Platform, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

const getLeftAdjust = (isX: boolean, isAndroid: boolean) => (isX || isAndroid ? -50 : 0);
const getTopAdjust = (isX: boolean) => (isX ? -44 : -20);
const getWidthAdjust = (isX: boolean, isAndroid: boolean) => (isX || isAndroid ? 100 : 0);

export const width = Style.DEVICE_WIDTH + getWidthAdjust(isIphoneX(), Platform.OS === "android");
export const height = Style.DEVICE_HEIGHT;

const styles = StyleSheet.create({
    wrapper: {
        left: getLeftAdjust(isIphoneX(), Platform.OS === "android"),
        top: getTopAdjust(isIphoneX())
    } as ViewStyle
});

export default styles;
