import { isIphoneX } from "react-native-iphone-x-helper";
import { getCurrentWorld, getNormalizedLevel } from "@utils";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import { mapSlices, loadingSlices } from "./assets";
import offsets from "./assets/offsets";

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

export const getWorldData = (currentLevel: number) => {
  const iphoneX = isIphoneX();
  const currentWorld = getCurrentWorld(currentLevel);
  const normalizedLevel = getNormalizedLevel(currentLevel);

  switch (currentWorld) {
    case 3:
      return {
        initialScrollIndex: iphoneX ? 93 : 92,
        slices:
          normalizedLevel < 200
            ? [...mapSlices.slice(0, iphoneX ? 122 : 121), loadingSlices.mountain]
            : mapSlices.slice(0, iphoneX ? 136 : 134),
        snapOffsets: offsets.withUnity[3],
      };
    case 2:
      return {
        initialScrollIndex: iphoneX ? 62 : 61,
        slices:
          normalizedLevel < 150
            ? [...mapSlices.slice(0, iphoneX ? 90 : 89), loadingSlices.desert]
            : mapSlices.slice(0, iphoneX ? 94 : 92),
        snapOffsets: normalizedLevel < 150 ? offsets.withUnity[2] : offsets.withoutUnity[2],
      };
    case 1:
      return {
        initialScrollIndex: iphoneX ? 31 : 30,
        slices:
          normalizedLevel < 100
            ? [...mapSlices.slice(0, iphoneX ? 58 : 57), loadingSlices.ocean]
            : mapSlices.slice(0, iphoneX ? 63 : 61),
        snapOffsets: normalizedLevel < 100 ? offsets.withUnity[1] : offsets.withoutUnity[1],
      };
    case 0:
    default:
      return {
        initialScrollIndex: 0,
        slices:
          normalizedLevel < 50
            ? [...mapSlices.slice(0, iphoneX ? 27 : 26), loadingSlices.forest]
            : mapSlices.slice(0, iphoneX ? 32 : 30),
        snapOffsets: normalizedLevel < 50 ? offsets.withUnity[0] : offsets.withoutUnity[0],
      };
  }
};
