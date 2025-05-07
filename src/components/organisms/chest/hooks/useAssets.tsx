import { useMemo } from "react";
import { ChestType } from "../chest";
import { Planets } from "@utils";

const celestialChestShaking = require("../lottie/Celestial Chest Shaking.json");
const celestialChestOpening = require("../lottie/Celestial_chest opening.json");

interface IPlanetsChest {
  [key: string]: {
    forest: {
      opening: string;
      shaking: string;
    };
    ocean: {
      opening: string;
      shaking: string;
    };
    desert: {
      opening: string;
      shaking: string;
    };
    mountain: {
      opening: string;
      shaking: string;
    };
  };
}

const planetsChests: IPlanetsChest = {
  [Planets.EARTH]: {
    forest: {
      opening: require("../lottie/earth/forest-chest-opening.json"),
      shaking: require("../lottie/earth/forest-chest-shaking.json"),
    },
    ocean: {
      opening: require("../lottie/earth/ocean-chest-opening.json"),
      shaking: require("../lottie/earth/ocean-chest-shaking.json"),
    },
    desert: {
      opening: require("../lottie/earth/desert-chest-opening.json"),
      shaking: require("../lottie/earth/desert-chest-shaking.json"),
    },
    mountain: {
      opening: require("../lottie/earth/mountain-chest-opening-2-rays-of-lights.json"),
      shaking: require("../lottie/earth/mountain-chest-shaking.json"),
    },
  },
  [Planets.RED]: {
    forest: {
      opening: require("../lottie/red/forest-chest-opening.json"),
      shaking: require("../lottie/red/forest-chest-shaking.json"),
    },
    ocean: {
      opening: require("../lottie/red/ocean-chest-opening.json"),
      shaking: require("../lottie/red/ocean-chest-shaking.json"),
    },
    desert: {
      opening: require("../lottie/red/desert-chest-opening.json"),
      shaking: require("../lottie/red/desert-chest-shaking.json"),
    },
    mountain: {
      opening: require("../lottie/red/mountain-chest-opening.json"),
      shaking: require("../lottie/red/mountain-chest-shaking.json"),
    },
  },
  [Planets.BRIGHT]: {
    forest: {
      opening: require("../lottie/bright/forest-chest-opening.json"),
      shaking: require("../lottie/bright/forest-chest-shaking.json"),
    },
    ocean: {
      opening: require("../lottie/bright/ocean-chest-opening.json"),
      shaking: require("../lottie/bright/ocean-chest-shaking.json"),
    },
    desert: {
      opening: require("../lottie/bright/desert-chest-opening.json"),
      shaking: require("../lottie/bright/desert-chest-shaking.json"),
    },
    mountain: {
      opening: require("../lottie/bright/mountain-chest-opening-2-rays-of-lights.json"),
      shaking: require("../lottie/bright/mountain-chest-shaking.json"),
    },
  },
  [Planets.ORANGE]: {
    forest: {
      opening: require("../lottie/orange/forest-chest-opening.json"),
      shaking: require("../lottie/orange/forest-chest-shaking.json"),
    },
    ocean: {
      opening: require("../lottie/orange/ocean-chest-opening.json"),
      shaking: require("../lottie/orange/ocean-chest-shaking.json"),
    },
    desert: {
      opening: require("../lottie/orange/desert-chest-opening.json"),
      shaking: require("../lottie/orange/desert-chest-shaking.json"),
    },
    mountain: {
      opening: require("../lottie/orange/mountain-chest-opening.json"),
      shaking: require("../lottie/orange/mountain-chest-shaking.json"),
    },
  },
  [Planets.PURPLE]: {
    forest: {
      opening: require("../lottie/purple/forest-chest-opening.json"),
      shaking: require("../lottie/purple/forest-chest-shaking.json"),
    },
    ocean: {
      opening: require("../lottie/purple/ocean-chest-opening.json"),
      shaking: require("../lottie/purple/ocean-chest-shaking.json"),
    },
    desert: {
      opening: require("../lottie/purple/desert-chest-opening.json"),
      shaking: require("../lottie/purple/desert-chest-shaking.json"),
    },
    mountain: {
      opening: require("../lottie/purple/mountain-chest-opening.json"),
      shaking: require("../lottie/purple/mountain-chest-shaking.json"),
    },
  },
  [Planets.RING]: {
    forest: {
      opening: require("../lottie/ring/forest-chest-opening.json"),
      shaking: require("../lottie/ring/forest-chest-shaking.json"),
    },
    ocean: {
      opening: require("../lottie/ring/ocean-chest-opening.json"),
      shaking: require("../lottie/ring/ocean-chest-shaking.json"),
    },
    desert: {
      opening: require("../lottie/ring/desert-chest-opening.json"),
      shaking: require("../lottie/ring/desert-chest-shaking.json"),
    },
    mountain: {
      opening: require("../lottie/ring/mountain-chest-opening.json"),
      shaking: require("../lottie/ring/mountain-chest-shaking.json"),
    },
  },
  [Planets.LUNAR]: {
    forest: {
      opening: require("../lottie/lunar/forest-chest-opening.json"),
      shaking: require("../lottie/lunar/forest-chest-shaking.json"),
    },
    ocean: {
      opening: require("../lottie/lunar/ocean-chest-opening.json"),
      shaking: require("../lottie/lunar/ocean-chest-shaking.json"),
    },
    desert: {
      opening: require("../lottie/lunar/desert-chest-opening.json"),
      shaking: require("../lottie/lunar/desert-chest-shaking.json"),
    },
    mountain: {
      opening: require("../lottie/lunar/mountain-chest-opening.json"),
      shaking: require("../lottie/lunar/mountain-chest-shaking.json"),
    },
  },
};

export const useAssets = (chestType: ChestType, currentPlanet: string) => {
  const [chestShakingLottie, chestOpeningLottie] = useMemo(() => {
    switch (chestType) {
      case "FOREST":
        return [planetsChests[currentPlanet].forest.shaking, planetsChests[currentPlanet].forest.opening];
      case "OCEAN":
        return [planetsChests[currentPlanet].ocean.shaking, planetsChests[currentPlanet].ocean.opening];
      case "DESERT":
        return [planetsChests[currentPlanet].desert.shaking, planetsChests[currentPlanet].desert.opening];
      case "MOUNTAIN":
        return [planetsChests[currentPlanet].mountain.shaking, planetsChests[currentPlanet].mountain.opening];
      case "CELESTIAL":
        return [celestialChestShaking, celestialChestOpening];
      default:
        return [planetsChests[currentPlanet].forest.shaking, planetsChests[currentPlanet].forest.opening];
    }
  }, [chestType, currentPlanet]);

  return {
    chestShakingLottie,
    chestOpeningLottie,
  };
};
