import { isIphoneX } from "react-native-iphone-x-helper";
import { Planets, getCurrentPlanetByLevel, getCurrentWorld, getNormalizedLevel } from "@utils";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import { mapSlices, loadingSlices } from "./assets";
import offsets from "./assets/offsets";
import { IFeature } from "@redux/user/user.reducer";

export const getTopBarType = (currentLevel: number) => {
  const topBarTypes: { [key: number]: TopBarTypes } = {
    0: "forest",
    1: "white",
    2: "desert",
    3: "white",
  };

  const currentWorld = getCurrentWorld(currentLevel);

  return topBarTypes[currentWorld] ?? "forest";
};

export const getWorldData = (currentLevel: number, features: IFeature) => {
  const iphoneX = isIphoneX();
  const currentWorld = getCurrentWorld(currentLevel);
  let currentPlanet = getCurrentPlanetByLevel(currentLevel, features?.enableWebpQuestMap);
  const normalizedLevel = getNormalizedLevel(currentLevel);

  if (currentPlanet === Planets.ORANGE || currentPlanet === Planets.BRIGHT) {
    currentPlanet = Planets.RED;
  }

  switch (currentWorld) {
    case 3:
      return {
        initialScrollIndex: iphoneX ? 93 : 92,
        slices:
          normalizedLevel < 200
            ? [...mapSlices(currentPlanet).slice(0, iphoneX ? 122 : 121), loadingSlices(currentPlanet).mountain]
            : mapSlices(currentPlanet).slice(0, iphoneX ? 136 : 134),
        snapOffsets: offsets.withUnity[3],
      };
    case 2:
      return {
        initialScrollIndex: iphoneX ? 62 : 61,
        slices:
          normalizedLevel < 150
            ? [...mapSlices(currentPlanet).slice(0, iphoneX ? 90 : 89), loadingSlices(currentPlanet).desert]
            : mapSlices(currentPlanet).slice(0, iphoneX ? 94 : 92),
        snapOffsets: normalizedLevel < 150 ? offsets.withUnity[2] : offsets.withoutUnity[2],
      };
    case 1:
      return {
        initialScrollIndex: iphoneX ? 31 : 30,
        slices:
          normalizedLevel < 100
            ? [...mapSlices(currentPlanet).slice(0, iphoneX ? 58 : 57), loadingSlices(currentPlanet).ocean]
            : mapSlices(currentPlanet).slice(0, iphoneX ? 63 : 61),
        snapOffsets: normalizedLevel < 100 ? offsets.withUnity[1] : offsets.withoutUnity[1],
      };
    case 0:
    default:
      return {
        initialScrollIndex: 0,
        slices:
          normalizedLevel < 50
            ? [...mapSlices(currentPlanet).slice(0, iphoneX ? 27 : 26), loadingSlices(currentPlanet).forest]
            : mapSlices(currentPlanet).slice(0, iphoneX ? 32 : 30),
        snapOffsets: normalizedLevel < 50 ? offsets.withUnity[0] : offsets.withoutUnity[0],
      };
  }
};
