import { getCurrentPlanetByLevel, getCurrentWorld } from "@utils";
import { planetStyles, yuniversalStyles } from "./theme.styles";

export const getTheme = (currentLevel = 1, yuniversalMap?: number) => {
  const currentWorld = getCurrentWorld(currentLevel);
  const currentPlanet = getCurrentPlanetByLevel(currentLevel);

  if (yuniversalMap) {
    return yuniversalStyles;
  }

  return planetStyles[currentPlanet][currentWorld];
};
