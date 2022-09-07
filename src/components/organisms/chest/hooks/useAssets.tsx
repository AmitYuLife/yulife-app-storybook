import { useMemo } from "react";
import { ChestType } from "../chest";

const forestChestShaking = require("../lottie/Forest Chest shaking.json");
const oceanChestShaking = require("../lottie/Ocean Chest shaking.json");
const desertChestShaking = require("../lottie/Desert Chest shaking.json");
const mountainChestShaking = require("../lottie/Mountain Chest shaking.json");
const celestialChestShaking = require("../lottie/Celestial Chest Shaking.json");
const forestChestOpening = require("../lottie/Forest_chest opening.json");
const oceanChestOpening = require("../lottie/Ocean_chest opening.json");
const desertChestOpening = require("../lottie/Desert_chest opening.json");
const mountainChestOpening = require("../lottie/Mountain_chest opening 2 rays of light.json");
const celestialChestOpening = require("../lottie/Celestial_chest opening.json");

export const useAssets = (chestType: ChestType) => {
  const [chestShakingLottie, chestOpeningLottie] = useMemo(() => {
    switch (chestType) {
      case "FOREST":
        return [forestChestShaking, forestChestOpening];
      case "OCEAN":
        return [oceanChestShaking, oceanChestOpening];
      case "DESERT":
        return [desertChestShaking, desertChestOpening];
      case "MOUNTAIN":
        return [mountainChestShaking, mountainChestOpening];
      case "CELESTIAL":
        return [celestialChestShaking, celestialChestOpening];
      default:
        return [forestChestShaking, forestChestOpening];
    }
  }, [chestType]);

  return {
    chestShakingLottie,
    chestOpeningLottie,
  };
};
