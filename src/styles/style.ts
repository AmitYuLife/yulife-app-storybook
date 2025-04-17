import { isAndroid, isWeb, isiOS } from "@utils";
import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";
import DeviceInfo from "react-native-device-info";
import { isAndroidWithTransparentStatusBar } from "./status-bar.styles";

const pixelRatio = PixelRatio.get();
const x = isWeb() ? 414 : Dimensions.get("window").width;
const y = isWeb() ? 800 : Dimensions.get("window").height;

const screenWidth = isWeb() ? 414 : Dimensions.get("screen").width;
const screenHeight = isWeb() ? 800 : Dimensions.get("screen").height;

const isIPad = () => {
  if (isiOS()) {
    return (
      DeviceInfo.getDeviceId().toLowerCase().includes("ipad") || DeviceInfo.getModel().toLowerCase().includes("ipad")
    );
  }

  return false;
};

const isIphone13 = () => isiOS() && x === 390 && y === 844;
const isIphoneX = () => isiOS() && y === 812;
const isIphone8 = () => isiOS() && x === 375 && y === 667;
const isIphoneXS = () => isiOS() && x === 375 && y === 812;
const isIphone15AndPro = () => isiOS() && x === 393 && y === 852;
const isIphone15PlusAndMax = () => isiOS() && x === 430 && y === 932;

const isIphoneXPlus = () =>
  // XS Max, XR
  isiOS() && y === 896;

const isAnyIphoneX = () => isIphoneX() || isIphoneXPlus();

const isAndroid13AndHigher = () => isAndroid() && Number(DeviceInfo.getSystemVersion()) >= 13;

const isShortAndroid = () => {
  return isAndroid() && pixelRatio < 3 && y < 700;
};

const isXShortAndroid = () => {
  return isAndroid() && y < 600;
};

const isXShort = () => {
  return y < 600;
};

const isShortToMedium = () => y < 700;

const isShortToMediumAndroid = () => {
  return isAndroid() && y < 700;
};

const isTallAndroid = () => {
  return isAndroid() && y > 690;
};

const isThinIOS = () => {
  return isiOS() && x < 400;
};

const isShortAndWideAndroid = () => isAndroid() && (Style.PIXEL_RATIO <= 2 || x / y >= 0.6);

const isShorterThan = (height: number) => y < height;
const isShorterOrEqualTo = (height: number) => y <= height;

const isWideScreen = () => {
  return x > 400;
};

const isLargeScreen = () => {
  return y > 810;
};

const isHuaweiMate10 = () => isAndroid() && x === 360;

const platformSelect = ({ ios, android, shorterAndroid, shortAndroid }: { [key: string]: number }) => {
  if (isAndroid()) {
    if (y < 600) {
      return shorterAndroid;
    }

    if (y < 700) {
      return shortAndroid;
    }

    return android;
  }

  if (isiOS()) {
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
  if (isAndroid()) {
    return StatusBar.currentHeight;
  }

  if (DeviceInfo.hasDynamicIsland()) {
    return 48;
  }

  if (isIphoneXPlus()) {
    return 36;
  }

  if (isIphoneX()) {
    return 34;
  }

  return 20;
};

const getLetterSpacing = (spacing: number) => {
  const calculatedSpacing = isIphone8() ? Number((spacing - 0.3).toFixed(1)) : spacing;
  return Platform.select({ ios: calculatedSpacing, android: 0, web: 0 });
};

const Style = {
  BASE_HEIGHT,
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
  isAndroid13AndHigher,
  isAnyIphoneX,
  isIphone13,
  isIphoneX,
  isIphoneXPlus,
  isIphone8,
  isIphoneXS,
  isIphone15AndPro,
  isIphone15PlusAndMax,
  isShortToMedium,
  isShortAndWideAndroid,
  isShortAndroid,
  isShortToMediumAndroid,
  isXShort,
  isTallAndroid,
  isThinIOS,
  isXShortAndroid,
  isIPad,
  getSafeAreaStart,
  adjust,
  platformSelect,
  defaultShrinkThreshold,
  isWideScreen,
  hasNotch: DeviceInfo.hasNotch(),
  hasDynamicIsland: DeviceInfo.hasDynamicIsland(),
  isLargeScreen,
  isHuaweiMate10,
  isShorterThan,
  isShorterOrEqualTo,
  getLetterSpacing,
};

export default Style;
