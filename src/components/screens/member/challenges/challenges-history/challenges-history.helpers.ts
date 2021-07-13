import { Style } from "@styles/index";
import { ImageStyle } from "react-native";

interface ISlotSet {
  source: any;
  style: ImageStyle;
  width: number;
}

const BRISK_WALK: ISlotSet[] = [
  {
    source: require("@assets/challenge-history/squirrel.png"),
    style: {
      position: "absolute",
      left: -29,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(65),
  },
  {
    source: require("@assets/challenge-history/otter.png"),
    style: {
      position: "absolute",
      left: -45,
      top: -27,
    },
    width: Style.SCALE_UP_AND_DOWN(116),
  },
  {
    source: require("@assets/challenge-history/meerkat.png"),
    style: {
      position: "absolute",
      left: -6,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(41),
  },
  {
    source: require("@assets/challenge-history/wolf.png"),
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
    source: require("@assets/challenge-history/snail.png"),
    style: {
      position: "absolute",
      left: -24,
      top: 16,
    },
    width: Style.SCALE_UP_AND_DOWN(61),
  },
  {
    source: require("@assets/challenge-history/tortoise.png"),
    style: {
      position: "absolute",
      left: -10,
      top: -13,
    },
    width: Style.SCALE_UP_AND_DOWN(57),
  },
  {
    source: require("@assets/challenge-history/bighornSheep.png"),
    style: {
      position: "absolute",
      left: -26,
      top: -2,
    },
    width: Style.SCALE_UP_AND_DOWN(77),
  },
  {
    source: require("@assets/challenge-history/whiteBighornSheep.png"),
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
    source: require("@assets/challenge-history/rabbit.png"),
    style: {
      position: "absolute",
      left: -28,
      top: 6,
    },
    width: Style.SCALE_UP_AND_DOWN(64),
  },
  {
    source: require("@assets/challenge-history/whale.png"),
    style: {
      position: "absolute",
      left: -34,
      top: -24,
    },
    width: Style.SCALE_UP_AND_DOWN(90),
  },
  {
    source: require("@assets/challenge-history/desertFox.png"),
    style: {
      position: "absolute",
      left: -24,
      top: 11,
    },
    width: Style.SCALE_UP_AND_DOWN(67),
  },
  {
    source: require("@assets/challenge-history/deer.png"),
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
    source: require("@assets/challenge-history/bird.png"),
    style: {
      position: "absolute",
      left: -14,
      top: 16,
    },
    width: Style.SCALE_UP_AND_DOWN(44),
  },
  {
    source: require("@assets/challenge-history/dolphin.png"),
    style: {
      position: "absolute",
      left: -31,
      top: -12,
    },
    width: Style.SCALE_UP_AND_DOWN(74),
  },
  {
    source: require("@assets/challenge-history/camel.png"),
    style: {
      position: "absolute",
      left: -44,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(102),
  },
  {
    source: require("@assets/challenge-history/owl.png"),
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
    source: require("@assets/challenge-history/hedgehog.png"),
    style: {
      position: "absolute",
      left: -14,
      top: 8,
    },
    width: Style.SCALE_UP_AND_DOWN(57),
  },
  {
    source: require("@assets/challenge-history/fish-hedgehog.png"),
    style: {
      position: "absolute",
      left: -10,
      top: -10,
    },
    width: Style.SCALE_UP_AND_DOWN(74),
  },
  {
    source: require("@assets/challenge-history/chameleon.png"),
    style: {
      position: "absolute",
      left: -44,
      top: 7,
    },
    width: Style.SCALE_UP_AND_DOWN(102),
  },
  {
    source: require("@assets/challenge-history/bear.png"),
    style: {
      position: "absolute",
      left: -100,
      top: 6,
    },
    width: Style.SCALE_UP_AND_DOWN(170),
  },
];

const BOTTOM_GRADIENT: ISlotSet[] = [
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
      return { source: null, style: null, width: 0 };
  }
}
