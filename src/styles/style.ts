import { isAndroid, isWeb, isiOS } from "@utils";
import { Dimensions, PixelRatio, Platform } from "react-native";
import { isAndroidWithTransparentStatusBar } from "./status-bar.styles";
import { osName } from "expo-device";
import { initialWindowMetrics } from "react-native-safe-area-context";

const pixelRatio = PixelRatio.get();
const x = isWeb() ? 414 : Dimensions.get("window").width;
const y = isWeb() ? 800 : Dimensions.get("window").height;

const screenWidth = isWeb() ? 414 : Dimensions.get("screen").width;
const screenHeight = isWeb() ? 800 : Dimensions.get("screen").height;

const isIPad = () => {
  if (isiOS()) {
    return osName === "iPadOS";
  }

  return false;
};

/**
 * @deprecated - you should never need this
 */
const isIphone13ProMax = () => isiOS() && x === 428 && y === 926;
/**
 * @deprecated - you should never need this
 */
const isIphoneX = () => isiOS() && y === 812;
/**
 * @deprecated - you should never need this
 */
const isIphone8 = () => isiOS() && x === 375 && y === 667;

const isIphoneXPlus = () =>
  // XS Max, XR
  isiOS() && y === 896;

/**
 * @deprecated - you should never need this
 */
const isAnyIphoneX = () => isIphoneX() || isIphoneXPlus();

/**
 * @deprecated - you should never need this
 */
const isShortAndroid = () => {
  return isAndroid() && pixelRatio < 3 && y < 700;
};

/**
 * @deprecated - you should never need this
 */
const isXShort = () => {
  return y < 600;
};

/**
 * @deprecated - you should never need this
 */
const isShortToMedium = () => y < 700;

/**
 * @deprecated - you should never need this
 */
const isShortToMediumAndroid = () => {
  return isAndroid() && y < 700;
};

/**
 * @deprecated - you should never need this
 */
const isTallAndroid = () => {
  return isAndroid() && y > 690;
};

/**
 * @deprecated - you should never need this
 */
const isThinIOS = () => {
  return isiOS() && x < 400;
};

const isShorterThan = (height: number) => y < height;
const isShorterOrEqualTo = (height: number) => y <= height;

const isLargeScreen = () => {
  return y > 810;
};

const scaledPixel = +(x / 375).toFixed(3);
const scaledYPixel = +(y / 667).toFixed(3);

const SCALE_UP_AND_DOWN = (val: number) => PixelRatio.roundToNearestPixel(scaledPixel * val);
const SCALE_Y_UP_AND_DOWN = (value: number) => scaledYPixel * value;

// Under the new architecture on Android, Dimensions.get("window").height
// includes system bar area that old-arch builds excluded. Without this
// adjustment, devices that previously sat below the 900 threshold now
// cross it and have every adjust()-scaled font size inflated by 20%.
const thresholdY = isAndroid()
  ? y - (initialWindowMetrics?.insets?.top ?? 0) - (initialWindowMetrics?.insets?.bottom ?? 0)
  : y;
const defaultGrowThreshold = thresholdY > 900;

const getShrinkThreshold = () => {
  if (y < 785 && x === 360 && isAndroid()) {
    return { shrinkThreshold: true, shrinkMultiplier: 0.1 };
  }

  if (y < 600) {
    return { shrinkThreshold: true, shrinkMultiplier: Platform.select({ ios: 0.15, android: 0.2 }) };
  }

  return { shrinkThreshold: false, shrinkMultiplier: Platform.select({ ios: 0.15, android: 0.2 }) };
};

interface IAdjustOptions {
  shrinkMultiplier?: number;
  growMultiplier?: number;
  shrinkThreshold?: boolean;
  growThreshold?: boolean;
}

const adjust = (val: number, options: IAdjustOptions = {}) => {
  const { shrinkThreshold, shrinkMultiplier } = getShrinkThreshold();
  const { growMultiplier = Platform.select({ ios: 0.15, android: 0.2 }), growThreshold = defaultGrowThreshold } =
    options;

  if (Platform.OS === "web") {
    return val;
  }

  if (growThreshold) {
    return val + val * growMultiplier;
  }

  if (options?.shrinkThreshold || shrinkThreshold) {
    return val - val * (options?.shrinkMultiplier || shrinkMultiplier);
  }

  return val;
};

const getSafeAreaStart = () => {
  return initialWindowMetrics?.insets?.top ?? 0;
};

const getLetterSpacing = (spacing: number) => {
  const calculatedSpacing = isIphone8() ? Number((spacing - 0.3).toFixed(1)) : spacing;
  return Platform.select({ ios: calculatedSpacing, android: 0, web: 0 });
};

const Style = {
  /**
   * from android 15, Dimensions.get("screen").height doesnt include the status bar height.
   * our codebase treats DEVICE_HEIGHT as the whole screen, meaning including the status bar height for android >= 15
   * */
  DEVICE_HEIGHT: y + (isAndroidWithTransparentStatusBar() ? getSafeAreaStart() : 0),
  DEVICE_WIDTH: x,
  SCREEN_HEIGHT: screenHeight,
  SCREEN_WIDTH: screenWidth,
  FONT_FAMILY_PRIMARY: "Bariol-Regular",
  FONT_FAMILY_PRIMARY_BOLD: "Bariol-Bold",
  FONT_FAMILY_SECONDARY: "OpenSans-Regular",
  FONT_FAMILY_SECONDARY_BOLD: "OpenSans-Bold",
  PIXEL: scaledPixel,
  PIXEL_RATIO: pixelRatio,
  SCALE_UP_AND_DOWN,
  SCALE_Y_UP_AND_DOWN,
  isAnyIphoneX,
  isIphone13ProMax,
  isIphone8,
  isShortToMedium,
  isShortAndroid,
  isShortToMediumAndroid,
  isXShort,
  isTallAndroid,
  isThinIOS,
  isIPad,
  getSafeAreaStart,
  adjust,
  isLargeScreen,
  isShorterThan,
  isShorterOrEqualTo,
  getLetterSpacing,
};

export default Style;
