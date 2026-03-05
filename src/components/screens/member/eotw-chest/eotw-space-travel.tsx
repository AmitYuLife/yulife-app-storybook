import { Image, Box } from "@atoms";
import React, { FC, memo, useCallback, useEffect, useMemo } from "react";
import { ImageSourcePropType, View, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  cancelAnimation,
  runOnJS,
  Easing,
} from "react-native-reanimated";
import EOTWPlanet, { PLANET_ASSETS, PLANET_STATE } from "./eotw-planet";
import { SPACE_TRAVEL_SCREEN } from "@ids";
import { GalaxyType, getGalaxyPlanets } from "./eotw-planets.config";
import { PLANETS_PER_GALAXY } from "./eotw.constants";

const GALAXY_SCROLL_DURATION = 1000;

interface IProps {
  currentPlanet: number;
  currentGalaxy: number;
  avatar: ImageSourcePropType;
  width: number;
  height: number;
  travel: boolean;
  isGalaxyTransition?: boolean;
  galaxyScroll?: boolean;
  onGalaxyScrollComplete?: () => void;
}

const BOTTOM_PADDING = 150;
const FIRST_GALAXY_TOP_PADDING = 150;
const SECOND_GALAXY_TOP_PADDING = 80;
const FIRST_GALAXY_ASPECT = 226 / 452;
const NEXT_GALAXY_ASPECT = 203 / 573;

const EOTWSpaceTravel: FC<IProps> = memo(
  ({
    currentPlanet,
    currentGalaxy,
    width,
    height,
    avatar,
    travel,
    isGalaxyTransition = false,
    galaxyScroll = false,
    onGalaxyScrollComplete,
  }) => {
    const topPadding = currentGalaxy === GalaxyType.FIRST ? FIRST_GALAXY_TOP_PADDING : SECOND_GALAXY_TOP_PADDING;
    const contentHeight = useMemo(() => height - BOTTOM_PADDING - topPadding, [height, topPadding]);
    const scrollAnim = useSharedValue(0);

    const containerStyle = useMemo(
      () =>
        ({
          justifyContent: isGalaxyTransition ? "flex-start" : "flex-end",
          width,
          height,
          marginBottom: BOTTOM_PADDING,
          alignItems: "center",
        } as ViewStyle),
      [height, width, isGalaxyTransition]
    );

    const animatedWrapperStyle = useAnimatedStyle(() => ({
      flexDirection: "column" as const,
      width,
      height: isGalaxyTransition ? height * 2 : height,
      transform: [{ translateY: scrollAnim.value }],
    }));

    const galaxyContainerStyle = useMemo(
      () =>
        ({
          width,
          height,
          justifyContent: "flex-end",
          alignItems: "center",
        } as ViewStyle),
      [height, width]
    );

    // Set initial position when entering galaxy transition (show current galaxy)
    useEffect(() => {
      if (isGalaxyTransition) {
        scrollAnim.value = -height;
      }
    }, [isGalaxyTransition, height, scrollAnim]);

    useEffect(() => {
      if (!galaxyScroll || !isGalaxyTransition) {
        return;
      }

      scrollAnim.value = withTiming(
        0,
        { duration: GALAXY_SCROLL_DURATION, easing: Easing.inOut(Easing.ease) },
        (finished) => {
          if (finished && onGalaxyScrollComplete) {
            runOnJS(onGalaxyScrollComplete)();
          }
        }
      );

      return () => {
        cancelAnimation(scrollAnim);
      };
    }, [galaxyScroll, isGalaxyTransition, scrollAnim, height, onGalaxyScrollComplete]);

    const getPlanetState = useCallback(
      (planetIndex: number, galaxyOffset: number = 0) => {
        const galaxyPlanetOffset = (currentGalaxy - 1 + galaxyOffset) * PLANETS_PER_GALAXY;
        const diff = planetIndex - currentPlanet + galaxyPlanetOffset;
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
      [currentPlanet, currentGalaxy]
    );

    const getPlanetPath = useCallback((galaxyIndex: number) => {
      if (galaxyIndex === 1) {
        return PLANET_ASSETS.paths.firstGalaxy;
      }

      return PLANET_ASSETS.paths.secondGalaxy;
    }, []);

    const nextGalaxyWidth = NEXT_GALAXY_ASPECT * contentHeight;
    const currentGalaxyWidth =
      (currentGalaxy === GalaxyType.FIRST ? FIRST_GALAXY_ASPECT : NEXT_GALAXY_ASPECT) * contentHeight;

    const currentGalaxyPlanets = useMemo(() => {
      if (currentGalaxy === GalaxyType.FIRST) {
        return getGalaxyPlanets({
          galaxyType: GalaxyType.FIRST,
          containerWidth: currentGalaxyWidth,
          containerHeight: contentHeight,
          getPlanetState,
          galaxyOffset: 0,
          avatar,
        });
      }

      return getGalaxyPlanets({
        galaxyType: GalaxyType.SECOND,
        containerWidth: nextGalaxyWidth,
        containerHeight: contentHeight,
        getPlanetState,
        galaxyOffset: 0,
        avatar,
      });
    }, [currentGalaxy, currentGalaxyWidth, contentHeight, getPlanetState, nextGalaxyWidth, avatar]);

    const nextGalaxyPlanets = useMemo(() => {
      const nextGalaxy = currentGalaxy + 1;
      if (nextGalaxy % 2 === 0) {
        return getGalaxyPlanets({
          galaxyType: GalaxyType.SECOND,
          containerWidth: nextGalaxyWidth,
          containerHeight: contentHeight,
          getPlanetState,
          galaxyOffset: 1,
          avatar,
        });
      }

      return getGalaxyPlanets({
        galaxyType: GalaxyType.FIRST,
        containerWidth: currentGalaxyWidth,
        containerHeight: contentHeight,
        getPlanetState,
        galaxyOffset: 1,
        avatar,
      });
    }, [contentHeight, currentGalaxy, currentGalaxyWidth, getPlanetState, nextGalaxyWidth, avatar]);

    const getNextGalaxyPath = useCallback(() => {
      const nextGalaxy = currentGalaxy + 1;
      if (nextGalaxy % 2 === 0) {
        return PLANET_ASSETS.paths.secondGalaxy;
      }

      return PLANET_ASSETS.paths.firstGalaxy;
    }, [currentGalaxy]);

    if (isGalaxyTransition) {
      return (
        <View style={containerStyle} testID={SPACE_TRAVEL_SCREEN}>
          <Animated.View style={animatedWrapperStyle}>
            <View style={galaxyContainerStyle}>
              <Image
                source={getNextGalaxyPath()}
                resizeMode="stretch"
                width={nextGalaxyWidth}
                disableAutoAdjust={true}
                height={contentHeight}
              />
              <Box top={0} height={"100%"} position="absolute" width={nextGalaxyWidth} disableAutoAdjust={true}>
                {nextGalaxyPlanets.map(({ key, ...props }) => (
                  <EOTWPlanet travel={travel} key={`next-${key}`} {...props} />
                ))}
              </Box>
            </View>
            <View style={galaxyContainerStyle}>
              <Image
                source={getPlanetPath(currentGalaxy)}
                resizeMode="contain"
                width={currentGalaxyWidth}
                disableAutoAdjust={true}
                height={contentHeight}
              />
              <Box top={0} height={"100%"} position="absolute" disableAutoAdjust={true} width={currentGalaxyWidth}>
                {currentGalaxyPlanets.map(({ key, ...props }) => (
                  <EOTWPlanet travel={false} key={key} {...props} />
                ))}
              </Box>
            </View>
          </Animated.View>
        </View>
      );
    }

    return (
      <View style={containerStyle} testID={SPACE_TRAVEL_SCREEN}>
        <Image
          source={getPlanetPath(currentGalaxy)}
          resizeMode="stretch"
          width={currentGalaxyWidth}
          disableAutoAdjust={true}
          height={contentHeight}
        />
        <Box top={0} height={"100%"} position="absolute" disableAutoAdjust={true} width={currentGalaxyWidth}>
          {currentGalaxyPlanets.map(({ key, ...props }) => (
            <EOTWPlanet travel={travel} key={key} {...props} />
          ))}
        </Box>
      </View>
    );
  }
);

export default EOTWSpaceTravel;
