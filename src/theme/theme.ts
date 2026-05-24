import { getCurrentPlanetByLevel, getCurrentWorld } from "@utils/quests";
import { planetStyles, yuniversalStyles } from "./theme.styles";

export const getTheme = (currentLevel: number, yuniversalMap?: number) => {
  const level = currentLevel || 1;
  const currentWorld = getCurrentWorld(level);
  const currentPlanet = getCurrentPlanetByLevel(level);

  if (yuniversalMap) {
    return yuniversalStyles;
  }

  return planetStyles[currentPlanet][currentWorld];
};
