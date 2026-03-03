import { ImageSourcePropType } from "react-native";
import { IPlanetProps, PLANET_ASSETS, PLANET_STATE } from "./eotw-planet";
import { PLANET } from "@ids";

interface IPlanetPositionConfig {
  key: string;
  icon: ImageSourcePropType;
  testID: string;
  getPosition: (w: number, h: number) => { left: number; bottom: number };
}

const FIRST_GALAXY_POSITIONS: IPlanetPositionConfig[] = [
  {
    key: "earth",
    icon: PLANET_ASSETS.Earth,
    testID: PLANET("EARTH"),
    getPosition: () => ({ left: 0, bottom: 0 }),
  },
  {
    key: "red",
    icon: PLANET_ASSETS.Red,
    testID: PLANET("RED"),
    getPosition: (w) => ({ left: w, bottom: 0 }),
  },
  {
    key: "bright",
    icon: PLANET_ASSETS.Bright,
    testID: PLANET("BRIGHT"),
    getPosition: (w, h) => ({ left: w / 2, bottom: h / 4 }),
  },
  {
    key: "orange",
    icon: PLANET_ASSETS.Orange,
    testID: PLANET("ORANGE"),
    getPosition: (_, h) => ({ left: 0, bottom: (2 * h) / 4 }),
  },
  {
    key: "purple",
    icon: PLANET_ASSETS.Purple,
    testID: PLANET("PURPLE"),
    getPosition: (w, h) => ({ left: w, bottom: (2 * h) / 4 }),
  },
  {
    key: "ring",
    icon: PLANET_ASSETS.Ring,
    testID: PLANET("RING"),
    getPosition: (w, h) => ({ left: w / 2, bottom: (3 * h) / 4 }),
  },
  {
    key: "lunar",
    icon: PLANET_ASSETS.Lunar,
    testID: PLANET("LUNAR"),
    getPosition: (w, h) => ({ left: w / 2, bottom: h }),
  },
];

const SECOND_GALAXY_POSITIONS: IPlanetPositionConfig[] = [
  {
    key: "earth",
    icon: PLANET_ASSETS.Earth,
    testID: PLANET("EARTH"),
    getPosition: (w) => ({ left: w / 2, bottom: 0 }),
  },
  {
    key: "red",
    icon: PLANET_ASSETS.Red,
    testID: PLANET("RED"),
    getPosition: (w, h) => ({ left: w / 2, bottom: h / 4 }),
  },
  {
    key: "bright",
    icon: PLANET_ASSETS.Bright,
    testID: PLANET("BRIGHT"),
    getPosition: (w, h) => ({ left: w / 2, bottom: h / 2.1 }),
  },
  {
    key: "orange",
    icon: PLANET_ASSETS.Orange,
    testID: PLANET("ORANGE"),
    getPosition: (w, h) => ({ left: w, bottom: h / 1.5 }),
  },
  {
    key: "purple",
    icon: PLANET_ASSETS.Purple,
    testID: PLANET("PURPLE"),
    getPosition: (w, h) => ({ left: w / 2, bottom: h / 1.5 }),
  },
  {
    key: "ring",
    icon: PLANET_ASSETS.Ring,
    testID: PLANET("RING"),
    getPosition: (_, h) => ({ left: 0, bottom: h / 1.5 }),
  },
  {
    key: "lunar",
    icon: PLANET_ASSETS.Lunar,
    testID: PLANET("LUNAR"),
    getPosition: (w, h) => ({ left: w / 2, bottom: h / 1.18 }),
  },
];

export enum GalaxyType {
  FIRST = 1,
  SECOND = 2,
}

interface IGetGalaxyPlanetsArgs {
  galaxyType: GalaxyType;
  containerWidth: number;
  containerHeight: number;
  getPlanetState: (index: number, offset: number) => PLANET_STATE;
  galaxyOffset: number;
  avatar: ImageSourcePropType;
}

export const getGalaxyPlanets = ({
  galaxyType,
  containerWidth,
  containerHeight,
  getPlanetState,
  galaxyOffset,
  avatar,
}: IGetGalaxyPlanetsArgs): Array<IPlanetProps & { key: string }> => {
  const positions = galaxyType === GalaxyType.FIRST ? FIRST_GALAXY_POSITIONS : SECOND_GALAXY_POSITIONS;
  return positions.map((config, i) => ({
    key: config.key,
    icon: config.icon,
    testID: config.testID,
    position: config.getPosition(containerWidth, containerHeight),
    state: getPlanetState(i + 1, galaxyOffset),
    avatar,
  }));
};
