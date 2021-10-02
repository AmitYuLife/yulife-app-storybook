import { Style } from "@styles/index";
import { ImageRequireSource, ImageStyle } from "react-native";

interface ISlotSet {
  style: ImageStyle;
  width: number;
}

const BRISK_WALK: ISlotSet[] = [
  {
    style: {
      position: "absolute",
      left: -29,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(65),
  },
  {
    style: {
      position: "absolute",
      left: -45,
      top: -27,
    },
    width: Style.SCALE_UP_AND_DOWN(116),
  },
  {
    style: {
      position: "absolute",
      left: -6,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(41),
  },
  {
    style: {
      position: "absolute",
      left: -112,
      top: 8,
    },
    width: Style.SCALE_UP_AND_DOWN(181),
  },
];
const SHORT_STROLL: ISlotSet[] = [
  {
    style: {
      position: "absolute",
      left: -24,
      top: 16,
    },
    width: Style.SCALE_UP_AND_DOWN(61),
  },
  {
    style: {
      position: "absolute",
      left: -10,
      top: -13,
    },
    width: Style.SCALE_UP_AND_DOWN(57),
  },
  {
    style: {
      position: "absolute",
      left: -26,
      top: -2,
    },
    width: Style.SCALE_UP_AND_DOWN(77),
  },
  {
    style: {
      position: "absolute",
      left: -50,
      top: -34,
    },
    width: Style.SCALE_UP_AND_DOWN(119),
  },
];
const LONG_WALK: ISlotSet[] = [
  {
    style: {
      position: "absolute",
      left: -28,
      top: 6,
    },
    width: Style.SCALE_UP_AND_DOWN(64),
  },
  {
    style: {
      position: "absolute",
      left: -34,
      top: -24,
    },
    width: Style.SCALE_UP_AND_DOWN(90),
  },
  {
    style: {
      position: "absolute",
      left: -24,
      top: 11,
    },
    width: Style.SCALE_UP_AND_DOWN(67),
  },
  {
    style: {
      position: "absolute",
      left: -74,
      top: -35,
    },
    width: Style.SCALE_UP_AND_DOWN(143),
  },
];
const MEDITATION: ISlotSet[] = [
  {
    style: {
      position: "absolute",
      left: -14,
      top: 16,
    },
    width: Style.SCALE_UP_AND_DOWN(44),
  },
  {
    style: {
      position: "absolute",
      left: -31,
      top: -12,
    },
    width: Style.SCALE_UP_AND_DOWN(74),
  },
  {
    style: {
      position: "absolute",
      left: -44,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(102),
  },
  {
    style: {
      position: "absolute",
      left: -29,
      top: 6,
    },
    width: Style.SCALE_UP_AND_DOWN(98),
  },
];

const CYCLING: ISlotSet[] = [
  {
    style: {
      position: "absolute",
      left: -14,
      top: 8,
    },
    width: Style.SCALE_UP_AND_DOWN(57),
  },
  {
    style: {
      position: "absolute",
      left: -10,
      top: -10,
    },
    width: Style.SCALE_UP_AND_DOWN(74),
  },
  {
    style: {
      position: "absolute",
      left: -44,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(102),
  },
  {
    style: {
      position: "absolute",
      left: -100,
      top: 6,
    },
    width: Style.SCALE_UP_AND_DOWN(170),
  },
];

const BOTTOM_GRADIENT: (ISlotSet & { source: ImageRequireSource })[] = [
  {
    source: require("@assets/challenge-history/forest-bottom-gradient.png"),
    style: {
      position: "absolute",
      bottom: 0,
    },
    width: Style.DEVICE_WIDTH,
  },
  {
    source: require("@assets/challenge-history/ocean-bottom-gradient.png"),
    style: {
      position: "absolute",
      bottom: 0,
    },
    width: Style.DEVICE_WIDTH,
  },
  {
    source: require("@assets/challenge-history/desert-bottom-gradient.png"),
    style: {
      position: "absolute",
      bottom: 0,
    },
    width: Style.DEVICE_WIDTH,
  },
  {
    source: require("@assets/challenge-history/mountain-bottom-gradient.png"),
    style: {
      position: "absolute",
      bottom: 0,
    },
    width: Style.DEVICE_WIDTH,
  },
];

export function getBottomGradient(currentWorld: number) {
  return BOTTOM_GRADIENT[currentWorld];
}

export function getSlotImageProps(challengeType: string, currentWorld: number) {
  switch (challengeType) {
    case "brisk walk":
      return BRISK_WALK[currentWorld] || BRISK_WALK[0];
    case "short stroll":
      return SHORT_STROLL[currentWorld] || SHORT_STROLL[0];
    case "long walk":
      return LONG_WALK[currentWorld] || LONG_WALK[0];
    case "meditation":
      return MEDITATION[currentWorld] || MEDITATION[0];
    case "fiit":
    case "cycling":
      return CYCLING[currentWorld] || CYCLING[0];
    default:
      return { style: null, width: 0 };
  }
}
