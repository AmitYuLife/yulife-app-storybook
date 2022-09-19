import { Image } from "@atoms";
import { Style } from "@styles";
import React, { FC, memo, useCallback, useMemo } from "react";
import { ImageSourcePropType, View, ViewStyle } from "react-native";
import EOTWPlanet, { IPlanetProps, PLANET_ASSETS, PLANET_STATE } from "./eotw-planet";
import { PLANET_RADIUS } from "./eotw-planet-animation-config";

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
      },
      {
        key: "mars",
        position: {
          left: width - PLANET_RADIUS / 2,
          bottom: 0,
        },
        icon: PLANET_ASSETS.Mars,
        state: getPlanetState(2),
        avatar,
      },
      {
        key: "sun",
        position: {
          left: width / 2,
          bottom: contentHeight / 4,
        },
        icon: PLANET_ASSETS.Sun,
        state: getPlanetState(3),
        avatar,
      },
      {
        key: "venus",
        position: {
          left: PLANET_RADIUS / 2,
          bottom: (2 * contentHeight) / 4,
        },
        icon: PLANET_ASSETS.Venus,
        state: getPlanetState(4),
        avatar,
      },
      {
        key: "mercury",
        position: {
          left: width - PLANET_RADIUS / 2,
          bottom: (2 * contentHeight) / 4,
        },
        icon: PLANET_ASSETS.Mercury,
        state: getPlanetState(5),
        avatar,
      },
      {
        key: "saturn",
        position: {
          left: width / 2,
          bottom: (3 * contentHeight) / 4,
        },
        icon: PLANET_ASSETS.Saturn,
        state: getPlanetState(6),
        avatar,
      },
    ],
    [avatar, contentHeight, getPlanetState, width]
  );

  return (
    <View style={containerStyle}>
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
