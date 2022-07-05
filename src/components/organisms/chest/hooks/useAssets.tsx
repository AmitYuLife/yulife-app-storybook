import { useMemo } from "react";
import { ChestType } from "../chest";
import styles from "../chest.styles";

// These are temporary until we have proper chest animations
const FOREST_YUNITY_CHEST = require("../png/forest-yunity-chest.png");
const FOREST_YUNITY_FOG_CLOSED = require("../png/forest-yunity-fog-closed.png");
const FOREST_YUNITY_FOG_OPENED = require("../png/forest-yunity-fog-opened.png");
const OCEAN_YUNITY_CHEST = require("../png/ocean-yunity-chest.png");
const OCEAN_YUNITY_FOG_CLOSED = require("../png/ocean-yunity-fog-closed.png");
const OCEAN_YUNITY_FOG_OPENED = require("../png/ocean-yunity-fog-opened.png");
const DESERT_YUNITY_CHEST = require("../png/desert-yunity-chest.png");
const DESERT_YUNITY_FOG_CLOSED = require("../png/desert-yunity-fog-closed.png");
const DESERT_YUNITY_FOG_OPENED = require("../png/desert-yunity-fog-opened.png");
const MOUNTAIN_YUNITY_CHEST = require("../png/mountain-yunity-chest.png");
const MOUNTAIN_YUNITY_FOG_CLOSED = require("../png/mountain-yunity-fog-closed.png");
const MOUNTAIN_YUNITY_FOG_OPENED = require("../png/mountain-yunity-fog-opened.png");
const STARS_CLOSED = require("../png/stars-closed.png");
const STARS_CLOSED_MOUNTAIN = require("../png/stars-closed-mountain.png");
const STARS_OPENED = require("../png/stars-opened.png");

const DEFAULT_STARS_CLOSED = {
  source: STARS_CLOSED,
  imageStyle: styles.starsClosedImage,
  wrapperStyle: styles.starsClosedWrapper,
};
const MOUNTAIN_STARS_CLOSED = {
  source: STARS_CLOSED_MOUNTAIN,
  imageStyle: styles.starsClosedMountainImage,
  wrapperStyle: styles.starsClosedMountainWrapper,
};

export const useAssets = (chestType: ChestType) => {
  const [chestSource, fogClosedSource, fogOpenedSource, starsClosed] = useMemo(() => {
    switch (chestType) {
      case "FOREST":
        return [FOREST_YUNITY_CHEST, FOREST_YUNITY_FOG_CLOSED, FOREST_YUNITY_FOG_OPENED, DEFAULT_STARS_CLOSED];
      case "OCEAN":
        return [OCEAN_YUNITY_CHEST, OCEAN_YUNITY_FOG_CLOSED, OCEAN_YUNITY_FOG_OPENED, DEFAULT_STARS_CLOSED];
      case "DESERT":
        return [DESERT_YUNITY_CHEST, DESERT_YUNITY_FOG_CLOSED, DESERT_YUNITY_FOG_OPENED, DEFAULT_STARS_CLOSED];
      case "MOUNTAIN":
      default:
        return [MOUNTAIN_YUNITY_CHEST, MOUNTAIN_YUNITY_FOG_CLOSED, MOUNTAIN_YUNITY_FOG_OPENED, MOUNTAIN_STARS_CLOSED];
    }
  }, [chestType]);

  return {
    chestSource,
    fogClosedSource,
    fogOpenedSource,
    starsClosed,
    starsOpenedSource: STARS_OPENED,
  };
};
