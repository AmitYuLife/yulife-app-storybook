import { useMemo } from "react";
import { ChestType } from "../chest";

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
const STARS_OPENED = require("../png/stars-opened.png");

export const useAssets = (chestType: ChestType) => {
  const [chestSource, fogClosedSource, fogOpenedSource] = useMemo(() => {
    switch (chestType) {
      case "FOREST":
        return [FOREST_YUNITY_CHEST, FOREST_YUNITY_FOG_CLOSED, FOREST_YUNITY_FOG_OPENED];
      case "OCEAN":
        return [OCEAN_YUNITY_CHEST, OCEAN_YUNITY_FOG_CLOSED, OCEAN_YUNITY_FOG_OPENED];
      case "DESERT":
        return [DESERT_YUNITY_CHEST, DESERT_YUNITY_FOG_CLOSED, DESERT_YUNITY_FOG_OPENED];
      case "MOUNTAIN":
      default:
        return [MOUNTAIN_YUNITY_CHEST, MOUNTAIN_YUNITY_FOG_CLOSED, MOUNTAIN_YUNITY_FOG_OPENED];
    }
  }, [chestType]);

  return {
    chestSource,
    fogClosedSource,
    fogOpenedSource,
    starsClosedSource: STARS_CLOSED,
    starsOpenedSource: STARS_OPENED,
  };
};
