import { Image } from "@atoms";
import { Style } from "@styles";
import React, { FC, memo, useCallback, useMemo } from "react";
import { ImageSourcePropType, View, ViewStyle } from "react-native";
import EOTWPlanet, { IPlanetProps, PLANET_ASSETS, PLANET_STATE } from "./eotw-planet";
import { PLANET_RADIUS } from "./eotw-planet-animation-config";
import { SPACE_TRAVEL_SCREEN, PLANET } from "@ids";

interface IProps {
  currentPlanet: number;
  avatar: ImageSourcePropType;
  width: number;
  height: number;
  travel: boolean;
}

const BOTTOM_PADDING = 150;
const TOP_PADDING = 80;

const EOTWSpaceTravel: FC<IProps> = memo(({ currentPlanet, width, height, avatar, travel }) => {
  const contentHeight = useMemo(() => height - BOTTOM_PADDING - TOP_PADDING, [height]);
  const containerStyle = useMemo(
    () =>
      ({
        justifyContent: "flex-end",
        width,
        height,
        marginBottom: BOTTOM_PADDING,
        alignItems: "center",
      } as ViewStyle),
    [height, width]
  );

  const getPlanetState = useCallback(
    (planetIndex: number) => {
      const diff = planetIndex - currentPlanet;
      if (diff > 1) {
        return PLANET_STATE.PENDING;
      }

      if (diff === 1) {
        return PLANET_STATE.NEXT;
      }

      if (diff === 0) {
        return PLANET_STATE.CURRENT;
      }

      if (diff === -1) {
        return PLANET_STATE.PREVIOUS;
      }

      return PLANET_STATE.PASSED;
    },
    [currentPlanet]
  );

  const planets: Array<IPlanetProps & { key: string }> = useMemo(
    () => [
      {
        key: "earth",
        position: {
          left: PLANET_RADIUS / 2,
          bottom: 0,
        },
        icon: PLANET_ASSETS.Earth,
        state: getPlanetState(1),
        avatar,
        testID: PLANET("EARTH"),
      },
      {
        key: "red",
        position: {
          left: width - PLANET_RADIUS / 2,
          bottom: 0,
        },
        icon: PLANET_ASSETS.Red,
        state: getPlanetState(2),
        avatar,
        testID: PLANET("RED"),
      },
      {
        key: "bright",
        position: {
          left: width / 2,
          bottom: contentHeight / 4,
        },
        icon: PLANET_ASSETS.Bright,
        state: getPlanetState(3),
        avatar,
        testID: PLANET("BRIGHT"),
      },
      {
        key: "orange",
        position: {
          left: PLANET_RADIUS / 2,
          bottom: (2 * contentHeight) / 4,
        },
        icon: PLANET_ASSETS.Orange,
        state: getPlanetState(4),
        avatar,
        testID: PLANET("ORANGE"),
      },
      {
        key: "purple",
        position: {
          left: width - PLANET_RADIUS / 2,
          bottom: (2 * contentHeight) / 4,
        },
        icon: PLANET_ASSETS.Purple,
        state: getPlanetState(5),
        avatar,
        testID: PLANET("PURPLE"),
      },
      {
        key: "ring",
        position: {
          left: width / 2,
          bottom: (3 * contentHeight) / 4,
        },
        icon: PLANET_ASSETS.Ring,
        state: getPlanetState(6),
        avatar,
        testID: PLANET("RING"),
      },
    ],
    [avatar, contentHeight, getPlanetState, width]
  );

  return (
    <View style={containerStyle} testID={SPACE_TRAVEL_SCREEN}>
      <Image
        source={PLANET_ASSETS.paths}
        resizeMode="stretch"
        width={Style.DEVICE_WIDTH - PLANET_RADIUS - 50}
        height={contentHeight}
      />
      {planets.map(({ key, ...props }) => (
        <EOTWPlanet travel={travel} key={key} {...props} />
      ))}
    </View>
  );
});

export default EOTWSpaceTravel;
