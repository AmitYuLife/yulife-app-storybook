import { Dimensions, PixelRatio, Platform } from "react-native";

const pixelRatio = PixelRatio.get();
const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

const isIphoneX = () => (
    Platform.OS === "ios" && y === 812
);

const isIphoneXPlus = () => ( // XS Max, XR
    Platform.OS === "ios" && y === 896
);

const isAnyIphoneX = () => isIphoneX() || isIphoneXPlus();

const isAndroid = () => {
    return Platform.OS === "android";
};

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

const BASE_HEIGHT = 667;
const scaledPixel = +(x / 375).toFixed(3);
const scaledYPixel = +(y / 667).toFixed(3);

const SCALE_UP_AND_DOWN = (val: number) => PixelRatio.roundToNearestPixel(scaledPixel * val);
const SCALE_Y_UP_AND_DOWN = (value: number) => scaledYPixel * value;
export const TOTAL_WIDTH = x * pixelRatio;

const Style = {
    BASE_HEIGHT,
    DEVICE_HEIGHT: y,
    DEVICE_WIDTH: x,
    FONT_FAMILY_PRIMARY: "Bariol-Regular",
    FONT_FAMILY_PRIMARY_BOLD: "Bariol-Bold",
    PIXEL: scaledPixel,
    PIXEL_RATIO: pixelRatio,
    SCALE_UP_AND_DOWN,
    SCALE_Y_UP_AND_DOWN,
    TOTAL_WIDTH,
    isAndroid,
    isAnyIphoneX,
    isIphoneX,
    isIphoneXPlus,
    isShortAndWideAndroid,
    isShortAndroid,
    isShortToMediumAndroid,
    isTallAndroid,
    isThinIOS,
    isXShortAndroid
};

export default Style;
