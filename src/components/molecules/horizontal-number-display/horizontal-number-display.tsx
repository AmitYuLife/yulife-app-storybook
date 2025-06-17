import { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";
import { range } from "lodash";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

import { Box } from "@atoms";
import { useTimeout } from "@hooks";
import { Colours } from "@styles";
import NumberDisplay from "./subcomponents/number-display";
import { getNumberStyle, MAX_HEIGHT } from "./subcomponents/constants";
import { getMarginLeft } from "./utils";
import { useHorizontalNumberDisplayAnimations } from "./useHorizontalNumberDisplayAnimations";

const DEFAULT_FADING_SETTINGS = {
  locations: [0, 0.2, 0.4, 0.6, 0.8, 1],
  colors: [0, 0.2, 1, 1, 0.2, 0].map((a: number) => `rgba(255, 255, 255, ${a})`),
};

const TARGET_NUMBER_STYLES = getNumberStyle(0);
const ADJACENT_NUMBERS_TO_DISPLAY = 5;

export type AnimationHandle = {
  animate: ReturnType<typeof useHorizontalNumberDisplayAnimations>["animate"];
  jump: ReturnType<typeof useHorizontalNumberDisplayAnimations>["jump"];
};

type HorizontalNumberDisplayProps = {
  target: number;
  initialTarget?: number;
  initialScrollDelay?: number;
  minNumber?: number;
  maxNumber?: number;
  mainColor?: string;
  secondaryColor?: string;
  displayWidth?: number;
  fadingSettings?: {
    locations: number[];
    colors: string[];
  };
  disableFading?: boolean;
  disableAutomaticScrolling?: boolean;
};

const HorizontalNumberDisplay = forwardRef<AnimationHandle, HorizontalNumberDisplayProps>(
  (
    {
      target,
      initialTarget,
      initialScrollDelay = 0,
      minNumber = 1,
      maxNumber = ADJACENT_NUMBERS_TO_DISPLAY,
      mainColor = Colours.neutral.n850,
      secondaryColor = Colours.pastelViolet,
      displayWidth = 300,
      fadingSettings = DEFAULT_FADING_SETTINGS,
      disableFading = false,
      disableAutomaticScrolling = false,
    },
    ref
  ) => {
    const [canScroll, setCanScroll] = useState(false);

    const { currentTarget, scrollPosition, stylesProgress, animate, jump } = useHorizontalNumberDisplayAnimations({
      initialTarget: initialTarget ?? target,
      displayWidth,
      minNumber,
    });

    useTimeout(() => setCanScroll(true), initialScrollDelay);

    useEffect(() => {
      if (!canScroll || disableAutomaticScrolling) {
        return;
      }

      animate(target);
    }, [target, canScroll, animate, disableAutomaticScrolling]);

    useImperativeHandle(ref, () => ({
      animate,
      jump,
    }));

    const numbers = useMemo(
      () =>
        range(minNumber, maxNumber + 1).map((value, idx) => ({
          value,
          marginLeft: idx === 0 ? 0 : getMarginLeft(value, currentTarget),
        })),
      [minNumber, currentTarget, maxNumber]
    );

    const animatedScrollStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: scrollPosition.value }],
    }));

    const fadeMask = useMemo(
      () => (
        <LinearGradient
          colors={fadingSettings.colors}
          locations={fadingSettings.locations}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.flex1, { width: displayWidth, height: MAX_HEIGHT }]}
        />
      ),
      [displayWidth, fadingSettings.colors, fadingSettings.locations]
    );

    const numberDisplays = useMemo(
      () =>
        numbers.map(({ value, marginLeft }, idx) => (
          <NumberDisplay
            key={value}
            value={value}
            currentTarget={currentTarget}
            stylesProgress={stylesProgress}
            mainColor={mainColor}
            secondaryColor={secondaryColor}
            marginLeft={marginLeft}
            isFirst={idx === 0}
          />
        )),
      [currentTarget, mainColor, numbers, secondaryColor, stylesProgress]
    );

    const contents = (
      <Box flex={1} position="absolute" left={0} top={0} bottom={0}>
        <Box
          forceAnimated={true}
          h={MAX_HEIGHT}
          pr={displayWidth}
          flexDirection="row"
          alignItems="center"
          style={animatedScrollStyle}
        >
          {numberDisplays}
        </Box>
      </Box>
    );

    return (
      <Box w={displayWidth} h={TARGET_NUMBER_STYLES.height} overflow="hidden">
        {disableFading ? (
          contents
        ) : (
          <MaskedView maskElement={fadeMask} style={styles.flex1}>
            {contents}
          </MaskedView>
        )}
      </Box>
    );
  }
);

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

export default memo(HorizontalNumberDisplay);
