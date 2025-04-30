export const DEVICES = {
  /**
   * Also covers: iPhone 6,7,8,SE2
   */
  iPhone8: {
    width: 375,
    height: 812,
  },
  /**
   * Also covers: iPhone 6+,7+,8+
   */
  iPhone8Plus: {
    width: 414,
    height: 736,
  },
  /**
   * Also covers: iPhone XR, iPhone 11 Pro Max, iPhone Xs Max
   */
  iPhone11: {
    width: 414,
    height: 896,
  },
  /**
   * Also covers: iPhone 13 mini, iPhone 11 Pro, iPhone X, iPhone Xs
   */
  iPhone12Mini: {
    width: 375,
    height: 812,
  },
  /**
   * Also covers: iPhone 12 Pro, iPhone 13, iPhone 13 Pro, iPhone 14
   */
  iPhone12: {
    width: 390,
    height: 844,
  },
  /**
   * Also covers: iPhone13ProMax, iPhone14Plus
   */
  iPhone12ProMax: {
    width: 428,
    height: 926,
  },
  /**
   * Also covers: Samsung Galaxy S6, Samsung Galaxy S7
   */
  SamsungGalaxyA5: {
    width: 360,
    height: 592,
  },
  /**
   * Emulator
   * Screen Size: 5"
   * Resolution: 720x1280
   * Density: 300ppi
   */
  ShortAndroid: {
    width: 384,
    height: 659,
    pixelRatio: 1.875,
  },
  Pixel2: {
    width: 412,
    height: 708,
    pixelRatio: 2.625,
  },
  /**
   * Emulator
   * Screen Size: 6.4"
   * Resolution: 1440x3040
   * Density: 560ppi
   */
  SamsungGalaxyS10Plus: {
    width: 412,
    height: 845,
    pixelRatio: 3.5,
  },
  /**
   * Emulator
   * Screen Size: 6.55"
   * Resolution: 1080x2400
   * Density: 400ppi
   */
  OnePlus8T_Emulator: {
    width: 432,
    height: 936,
    pixelRatio: 2.5,
  },
  /**
   * Physical
   * Screen Size: 6.55"
   * Resolution: 1080x2400
   * Density: 402ppi
   */
  OnePlus8T_Physical: {
    width: 360,
    height: 750,
    pixelRatio: 3,
  },
  /**
   * Also covers: iPhone 15, iPhone 15 Pro
   */
  iPhone14Pro: {
    width: 393,
    height: 852,
  },
  /**
   * Also covers: iPhone15Plus, iPhone15ProMax
   */
  iPhone14ProMax: {
    width: 430,
    height: 932,
  },
  /**
   * iPhone 16 Pro Max
   * Screen Size:	6.9"
   * Resolution: 1320x2868
   * Density: 460ppi
   */
  iPhone16ProMax: {
    width: 440,
    height: 956,
    pixelRatio: 3,
  },
};

interface IMediaQuery {
  condition: boolean;
  value: number;
}

/**
 * Allows granular control for any condition such as but not limited to:
 * 1. height/width thresholds
 * 2. device notch checks
 *
 * @param combinations Array of key value pairs to check for the first truthy condition to get value from
 * @param defaultValue Value to return if there are no truthy conditions found from the first argument
 */
export const select = (combinations: IMediaQuery[], defaultValue?: number) => {
  if (!combinations?.length || !Array.isArray(combinations)) {
    return defaultValue ?? 0;
  }

  for (let i = 0; i < combinations.length; i += 1) {
    if (combinations[i].condition) {
      return combinations[i].value;
    }
  }

  return defaultValue ?? combinations[combinations.length - 1].value;
};

export default {
  select,
  DEVICES,
};
