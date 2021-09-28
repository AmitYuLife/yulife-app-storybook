import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";
import DeviceInfo from "react-native-device-info";

const pixelRatio = PixelRatio.get();
const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

const isIPad = () => {
  if (Platform.OS === "ios") {
    return (
      DeviceInfo.getDeviceId().toLowerCase().includes("ipad") || DeviceInfo.getModel().toLowerCase().includes("ipad")
    );
  }

  return false;
};

const isIphoneX = () => Platform.OS === "ios" && y === 812;

const isIphoneXPlus = () =>
  // XS Max, XR
  Platform.OS === "ios" && y === 896;

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

const isXShort = () => {
  return y < 600;
};

const isShortToMedium = () => y < 700;

const isShortToMediumAndroid = () => {
  return Platform.OS === "android" && y < 700;
};

const isTallAndroid = () => {
  return Platform.OS === "android" && y > 690;
};

const isThinIOS = () => {
  return Platform.OS === "ios" && x < 400;
};

const isShortAndWideAndroid = () => Platform.OS === "android" && (Style.PIXEL_RATIO <= 2 || x / y >= 0.6);

const isShortToMediumAndroidAndHighScaledPixel = () => {
  return isShortToMediumAndroid() && scaledPixel > 1.06;
};

const isTallAndLowScaledPixelAndroid = () => {
  return isTallAndroid() && scaledPixel < 0.98;
};

const isShortAndLowScaledPixelAndroid = () => {
  return Platform.OS === "android" && y <= 690 && scaledPixel < 0.98;
};

const isWideScreen = () => {
  return x > 400;
};

const isLargeScreen = () => {
  return y > 810;
};

const isHuaweiMate10 = () => Platform.OS === "android" && x === 360;

const platformSelect = ({ ios, android, shorterAndroid, shortAndroid }: { [key: string]: number }) => {
  if (Platform.OS === "android") {
    if (y < 600) {
      return shorterAndroid;
    }

    if (y < 700) {
      return shortAndroid;
    }

    return android;
  }

  if (Platform.OS === "ios") {
    return ios;
  }
};

const BASE_HEIGHT = 667;
const scaledPixel = +(x / 375).toFixed(3);
const scaledYPixel = +(y / 667).toFixed(3);

const SCALE_UP_AND_DOWN = (val: number) => PixelRatio.roundToNearestPixel(scaledPixel * val);
const SCALE_Y_UP_AND_DOWN = (value: number) => scaledYPixel * value;
const defaultShrinkThreshold = y < 600;
const defaultGrowThreshold = y > 900;

interface IAdjustOptions {
  shrinkMultiplier?: number;
  growMultiplier?: number;
  shrinkThreshold?: boolean;
  growThreshold?: boolean;
}

const adjust = (val: number, options: IAdjustOptions = {}) => {
  const {
    shrinkMultiplier = Platform.select({ ios: 0.15, android: 0.2 }),
    growMultiplier = Platform.select({ ios: 0.15, android: 0.2 }),
    shrinkThreshold = defaultShrinkThreshold,
    growThreshold = defaultGrowThreshold,
  } = options;

  if (growThreshold) {
    return val + val * growMultiplier;
  }

  if (shrinkThreshold) {
    return val - val * shrinkMultiplier;
  }

  return val;
};

export const TOTAL_WIDTH = x * pixelRatio;

const getSafeAreaStart = () => {
  if (Platform.OS === "android") {
    return StatusBar.currentHeight;
  }

  if (isIphoneXPlus()) {
    return 36;
  }

  if (isIphoneX()) {
    return 34;
  }

  return 20;
};

const IOS_NOTCH_HEIGHT = 48;

const Style = {
  BASE_HEIGHT,
  DEVICE_HEIGHT: y,
  DEVICE_WIDTH: x,
  FONT_FAMILY_PRIMARY: "Bariol-Regular",
  FONT_FAMILY_PRIMARY_BOLD: "Bariol-Bold",
  FONT_FAMILY_SECONDARY: "OpenSans-Regular",
  FONT_FAMILY_SECONDARY_BOLD: "OpenSans-Bold",
  PIXEL: scaledPixel,
  PIXEL_RATIO: pixelRatio,
  SCALE_UP_AND_DOWN,
  SCALE_Y_UP_AND_DOWN,
  TOTAL_WIDTH,
  isAndroid,
  isAnyIphoneX,
  isIphoneX,
  isIphoneXPlus,
  isShortToMedium,
  isShortAndWideAndroid,
  isShortAndroid,
  isShortToMediumAndroid,
  isXShort,
  isTallAndroid,
  isThinIOS,
  isXShortAndroid,
  isIPad,
  isShortToMediumAndroidAndHighScaledPixel,
  isTallAndLowScaledPixelAndroid,
  isShortAndLowScaledPixelAndroid,
  getSafeAreaStart,
  adjust,
  platformSelect,
  defaultShrinkThreshold,
  isWideScreen,
  hasNotch: DeviceInfo.hasNotch(),
  isLargeScreen,
  isHuaweiMate10,
  IOS_NOTCH_HEIGHT,
};

export default Style;
