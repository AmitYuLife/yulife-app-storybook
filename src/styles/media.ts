export const DEVICES = {
  iPhone8: {
    // iPhone 6,7,8,SE2
    width: 375,
    height: 812,
  },
  iPhone8Plus: {
    // iPhone 6+,7+,8+
    width: 414,
    height: 736,
  },
  iPhone12Mini: {
    width: 375,
    height: 812,
  },
  iPhone12: {
    width: 390,
    height: 844,
  },
  iPhone12ProMax: {
    width: 428,
    height: 926,
  },
  SamsungGalaxyA5: {
    // Samsung Galaxy S6, Samsung Galaxy S7
    width: 360,
    height: 592,
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
  if (!combinations.length || !Array.isArray(combinations)) {
    throw new Error("invalid input");
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
