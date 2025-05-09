import { Image } from "expo-image";
import React, { memo, useCallback, useEffect } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { ANIMATION_DURATION, EASING, MARGIN, theme, TILES } from "../constants";
import { GameBoardSize, GameSkin, GameValue, useCellSize } from "../hooks";

interface IProps extends ViewProps {
  x: number;
  y: number;
  value: GameValue;
  boardSize: GameBoardSize;
  skin: GameSkin;
}

const Cell = React.forwardRef(({ x, y, value, boardSize, skin, ...props }: IProps, ref: React.LegacyRef<View>) => {
  const cellWidth = useCellSize(boardSize);
  const scale = useSharedValue(0);
  const cellValue = useSharedValue(value);

  const getCellPosition = useCallback(
    (position_x: number, position_y: number) => {
      return {
        top: 2 * MARGIN + position_x * (cellWidth + 2 * MARGIN),
        left: 2 * MARGIN + position_y * (cellWidth + 2 * MARGIN),
      };
    },
    [cellWidth]
  );

  const top = useSharedValue(getCellPosition(x, y).top);
  const left = useSharedValue(getCellPosition(x, y).left);

  useEffect(() => {
    const position = getCellPosition(x, y);
    top.value = withTiming(position.top, { duration: ANIMATION_DURATION, easing: EASING });
    left.value = withTiming(position.left, { duration: ANIMATION_DURATION, easing: EASING });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, y]);

  useEffect(() => {
    cellValue.value = withTiming(value, { duration: ANIMATION_DURATION });
    scale.value = withSequence(
      withTiming(1.15, { duration: ANIMATION_DURATION, easing: EASING }),
      withTiming(1, { duration: ANIMATION_DURATION, easing: EASING })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      top: top.value,
      left: left.value,
      width: cellWidth,
      height: cellWidth,
      ...styles.container,
    };
  });

  const animatedContainerTransformStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  return (
    <Animated.View ref={ref} {...props} style={animatedContainerStyle}>
      <Animated.View style={animatedContainerTransformStyle}>
        <Image
          cachePolicy="memory"
          source={TILES[skin][value]}
          contentFit="contain"
          style={{ width: cellWidth, height: cellWidth, backgroundColor: theme.backgroundPrimary }}
        />
      </Animated.View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(Animated.createAnimatedComponent(Cell));
