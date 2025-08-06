import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { ImageSourcePropType } from "react-native";

interface IInfoBar {
  image: ImageSourcePropType;
}

interface IWorldBackground {
  image?: ImageSourcePropType;
  imageSize?: {
    width: number;
    height: number;
  };
  infoBar: IInfoBar;
  colours: {
    sky: string;
    ground?: string;
    cloud?: string;
    nameAndLevelText?: string;
    yumojiPromptBackground: string;
  };
  topBarType: TOP_BAR_TYPES;
}

export const ROMAN_NUMERALS = ["", "I", "II", "III", "IV", "V", "VI", "VII"];

const BACKGROUND_IMAGE_SIZE: IWorldBackground["imageSize"] = {
  width: 375,
  height: 165,
};

const INFO_BARS: Record<string, IInfoBar> = {
  wave: {
    image: require("@assets/yuscreen/platforms/wave.png"),
  },
  clouds: {
    image: require("@assets/yuscreen/platforms/clouds.png"),
  },
};

const WORLD_BACKGROUNDS: IWorldBackground[] = [
  {
    image: require("@assets/yuscreen/backgrounds/forest.png"),
    imageSize: BACKGROUND_IMAGE_SIZE,
    infoBar: INFO_BARS.clouds,
    colours: {
      sky: "#E0FF9F",
      ground: "#C1EB67",
      cloud: "#CAF66B",
      yumojiPromptBackground: "rgba(255,255,255,0.64)",
    },
    topBarType: TOP_BAR_TYPES.DEFAULT,
  },
  {
    image: require("@assets/yuscreen/backgrounds/ocean.png"),
    imageSize: BACKGROUND_IMAGE_SIZE,
    infoBar: INFO_BARS.wave,
    colours: {
      sky: "#A8EFFF",
      ground: "#FFE08F",
      yumojiPromptBackground: "rgba(255,255,255,0.64)",
    },
    topBarType: TOP_BAR_TYPES.DEFAULT,
  },
  {
    image: require("@assets/yuscreen/backgrounds/desert.png"),
    imageSize: BACKGROUND_IMAGE_SIZE,
    infoBar: INFO_BARS.wave,
    colours: {
      sky: "#FFEF9A",
      ground: "#FFA114",
      cloud: "#FFDC80",
      yumojiPromptBackground: "rgba(255,255,255,0.64)",
    },
    topBarType: TOP_BAR_TYPES.DEFAULT,
  },
  {
    image: require("@assets/yuscreen/backgrounds/mountain.png"),
    imageSize: BACKGROUND_IMAGE_SIZE,
    infoBar: INFO_BARS.clouds,
    colours: {
      sky: "#DBC8FF",
      ground: "#FFBB6A",
      cloud: "#F0E8FF",
      yumojiPromptBackground: "rgba(255,255,255,0.64)",
    },
    topBarType: TOP_BAR_TYPES.DEFAULT,
  },
];

const YUNIVERSAL_BACKGROUND: IWorldBackground = {
  infoBar: INFO_BARS.wave,
  imageSize: BACKGROUND_IMAGE_SIZE,
  colours: {
    sky: "#3D0139",
    nameAndLevelText: "#FFFFFF",
    yumojiPromptBackground: "#FFFFFF",
  },
  topBarType: TOP_BAR_TYPES.WHITE,
};

const WORLD_ICONS: ImageSourcePropType[] = [
  require("@assets/yuscreen/world-icons/forest.png"),
  require("@assets/yuscreen/world-icons/ocean.png"),
  require("@assets/yuscreen/world-icons/desert.png"),
  require("@assets/yuscreen/world-icons/mountain.png"),
];

const YUNIVERSAL_ICON: ImageSourcePropType = require("@assets/yuscreen/world-icons/yuniversal.png");

export function getCurrentWorldBackground(currentWorld: number, isYuniversal: boolean): IWorldBackground {
  if (isYuniversal) {
    return YUNIVERSAL_BACKGROUND;
  }

  return WORLD_BACKGROUNDS[currentWorld] ?? WORLD_BACKGROUNDS[0];
}

export function getCurrentWorldIcon(currentWorld: number, isYuniversal: boolean): ImageSourcePropType {
  if (isYuniversal) {
    return YUNIVERSAL_ICON;
  }

  return WORLD_ICONS[currentWorld] ?? WORLD_ICONS[0];
}
