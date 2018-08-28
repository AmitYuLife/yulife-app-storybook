import { Dimensions, PixelRatio, Platform } from "react-native";

const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

const scaledPixel = +(x / 375).toFixed(3);

const SCALE_UP_AND_DOWN = (val: number) => PixelRatio.roundToNearestPixel(scaledPixel * val);

const pixelRatio = PixelRatio.get();

const isShortAndroid = () => {
    return Platform.OS === "android" && pixelRatio < 3 && y < 700;
};

const isShortToMediumAndroid = () => {
    return Platform.OS === "android" && y < 700;
};

const Style = {
    DEVICE_HEIGHT: y,
    DEVICE_WIDTH: x,
    FONT_FAMILY_PRIMARY: "Bariol-Regular",
    FONT_FAMILY_PRIMARY_BOLD: "Bariol-Bold",
    PIXEL: scaledPixel,
    PIXEL_RATIO: pixelRatio,
    SCALE_UP_AND_DOWN,
    isShortAndroid,
    isShortToMediumAndroid
};

export default Style;
