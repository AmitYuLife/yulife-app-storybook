import { t } from "@locale";
import { MilestoneTarget } from "@redux/_core/types";
import { LEVELS_PER_GALAXY, LEVELS_PER_PLANET } from "@components/screens/member/eotw-chest/eotw.constants";

export function getCurrentWorld(currentLevel: number) {
  return Math.floor((currentLevel - 1) / 50) % 4;
}

export enum WorldName {
  forest = "forest",
  ocean = "ocean",
  desert = "desert",
  mountain = "mountain",
}

export enum Planets {
  EARTH = "earth",
  RED = "red",
  BRIGHT = "bright",
  ORANGE = "orange",
  PURPLE = "purple",
  RING = "ring",
  LUNAR = "lunar",
}

export function getCurrentWorldName(currentLevel: number): WorldName {
  return [WorldName.forest, WorldName.ocean, WorldName.desert, WorldName.mountain][getCurrentWorld(currentLevel)];
}

export function getCurrentYuniverse(currentLevel: number) {
  return Math.floor((currentLevel - 1) / LEVELS_PER_PLANET);
}

export const getCurrentPlanet = (currentLevel: number) => {
  return Math.ceil(currentLevel / LEVELS_PER_PLANET);
};

export const getCurrentGalaxy = (currentLevel: number) => {
  return Math.ceil(currentLevel / LEVELS_PER_GALAXY);
};

export function getNormalizedLevel(level: number) {
  return (Math.floor(level - 1) % 200) + 1;
}

const WORLD_IMAGES = [
  { image: require("@assets/yuscreen/worlds/forest.png") },
  { image: require("@assets/yuscreen/worlds/ocean.png") },
  { image: require("@assets/yuscreen/worlds/desert.png") },
  { image: require("@assets/yuscreen/worlds/mountain.png") },
];

const YUNIVERSAL_IMAGE = require("@assets/yuscreen/worlds/yuniversal.png");

export function getCurrentWorldImage(currentWorld: number, isYuniversal: boolean) {
  if (isYuniversal) {
    return YUNIVERSAL_IMAGE;
  }

  return WORLD_IMAGES[currentWorld].image ?? WORLD_IMAGES[0].image;
}

export function getCurrentWorldText(currentWorld: number, isYuniversal: boolean) {
  const WORLD_NAME = [
    t("labels.world_name.forest"),
    t("labels.world_name.ocean"),
    t("labels.world_name.desert"),
    t("labels.world_name.mountain"),
  ];

  if (isYuniversal) {
    return "Yuniversal";
  }

  return WORLD_NAME[currentWorld] ?? t("labels.world_name.forest");
}

export function getUnitTarget(subtype: string): keyof MilestoneTarget {
  switch (subtype) {
    case "meditation":
      return "meditation";
    case "cycling":
      return "distance";
    case "fiit":
    case "workout":
      return "duration";
    case "calories":
      return "calories";
    default:
      return "steps";
  }
}

export function getCurrentEpisode(currentLevel: number) {
  if (currentLevel % 50 === 0) {
    return (currentLevel / 50) * 8 - 1;
  }

  if (currentLevel <= 49) {
    return Math.floor((currentLevel - 1) / 7);
  }

  if (
    (currentLevel >= 51 && currentLevel <= 99) ||
    (currentLevel >= 101 && currentLevel <= 149) ||
    (currentLevel >= 151 && currentLevel <= 199)
  ) {
    return (
      Math.floor((currentLevel - 1 - Math.floor((currentLevel - 1) / 50) * 50) / 7) + getCurrentWorld(currentLevel) * 8
    );
  }
}

export function toOrdinal(n: number): string {
  const m10 = n % 10;
  const m100 = n % 100;

  if (m10 === 1 && m100 !== 11) {
    return n + "st";
  }

  if (m10 === 2 && m100 !== 12) {
    return n + "nd";
  }

  if (m10 === 3 && m100 !== 13) {
    return n + "rd";
  }

  return n + "th";
}

export function toOrdinalWord(n: number): string {
  // fallback to numerals when n > 20
  if (n > 20) {
    return toOrdinal(n);
  }

  const arr = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
    "twentieth",
  ];

  return arr[n - 1];
}

const PLANET_CYCLE = [
  Planets.EARTH,
  Planets.RED,
  Planets.BRIGHT,
  Planets.ORANGE,
  Planets.PURPLE,
  Planets.RING,
  Planets.LUNAR,
];

export const getCurrentPlanetByLevel = (currentLevel: number) => {
  const planetIndex = Math.floor((currentLevel - 1) / LEVELS_PER_PLANET) % PLANET_CYCLE.length;
  return PLANET_CYCLE[planetIndex];
};
