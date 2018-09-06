import { Dimensions, PixelRatio, Platform } from "react-native";

const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

const scaledPixel = +(x / 375).toFixed(3);

const SCALE_UP_AND_DOWN = (val: number) => PixelRatio.roundToNearestPixel(scaledPixel * val);

const pixelRatio = PixelRatio.get();

const isShortAndroid = () => {
    return Platform.OS === "android" && pixelRatio < 3 && y < 700;
};

const isXShortAndroid = () => {
    return Platform.OS === "android" && y < 600;
};

const isShortToMediumAndroid = () => {
    return Platform.OS === "android" && y < 700;
};

const isTallAndroid = () => {
    return Platform.OS === "android" && y > 690;
};

const isThinIOS = () => {
    return Platform.OS === "ios" && x < 400;
};

const isShortAndWideAndroid = () => (
    Platform.OS === "android" && (Style.PIXEL_RATIO <= 2 || x / y >= 0.6)
);

export const TOTAL_WIDTH = x * pixelRatio;

const Style = {
    DEVICE_HEIGHT: y,
    DEVICE_WIDTH: x,
    FONT_FAMILY_PRIMARY: "Bariol-Regular",
    FONT_FAMILY_PRIMARY_BOLD: "Bariol-Bold",
    PIXEL: scaledPixel,
    PIXEL_RATIO: pixelRatio,
    SCALE_UP_AND_DOWN,
    TOTAL_WIDTH,
    isShortAndWideAndroid,
    isShortAndroid,
    isShortToMediumAndroid,
    isTallAndroid,
    isThinIOS,
    isXShortAndroid
};

export default Style;
