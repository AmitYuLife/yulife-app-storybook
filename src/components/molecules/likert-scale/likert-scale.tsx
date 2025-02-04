import { Box, Draggable } from "@atoms";
import { Colours } from "@styles";
import { memo, ReactNode, useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent, StyleSheet, useWindowDimensions, View, ViewStyle } from "react-native";
import LikertScaleLabels from "./likert-scale-labels";
import Pressable from "../pressable/pressable";
import { useSharedValue, withTiming } from "react-native-reanimated";

const CONFIG = {
  POINTS: 5,
  MID_POINT: 3,
  WRAPPER_PADDING_HORIZONTAL: 32,
  SCALE_HEIGHT: 8,
  LABELS_HEIGHT: 80,
};

type Props = {
  children: ReactNode;
  handleWidth: number;
  handleHeight: number;
  labelMin?: string;
  labelMax?: string;
  value: number;
  onChange: (
    /**
     * Natural number from 1 to n where n is the number of points on the scale
     */
    scalePoint: number
  ) => void;
};

const LikertScale = ({ children, handleWidth, handleHeight, labelMax, labelMin, value, onChange }: Props) => {
  const left = useSharedValue(0);
  const { width: windowWidth } = useWindowDimensions();
  const [layout, setLayout] = useState<{
    width: number;
    height: number;
    sectionWidth: number;
    offsetX: number;
    breakpoints: number[];
  }>({
    width: 0,
    height: 0,
    offsetX: 0,
    breakpoints: [],
    sectionWidth: 0,
  });

  const handleLayout = useCallback((e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    const height = e.nativeEvent.layout.height;
    const offsetX = e.nativeEvent.layout.x;
    const sectionWidth = windowWidth / CONFIG.POINTS;
    const breakpoints = Array.from({ length: CONFIG.POINTS }, (_, i) => i * sectionWidth);

    setLayout({
      width,
      height,
      offsetX,
      sectionWidth,
      breakpoints,
    });
  }, []);

  const handleChangeBreakpoint = useCallback((breakpointIndex: number) => onChange?.(breakpointIndex + 1), [onChange]);

  const tapBreakpoint = useCallback(
    (breakpoint: number, breakpointIndex: number) => {
      return () => {
        left.value = withTiming(breakpoint + layout.sectionWidth / 2, { duration: 200 });
        handleChangeBreakpoint(breakpointIndex);
      };
    },
    [layout.sectionWidth]
  );

  const calculated = useMemo(() => {
    return {
      wrapperStyles: {
        paddingTop: handleHeight,
        paddingHorizontal: CONFIG.WRAPPER_PADDING_HORIZONTAL,
      } as ViewStyle,
    };
  }, [handleHeight]);

  return (
    <View style={calculated.wrapperStyles}>
      {layout.breakpoints.map((breakpoint, breakpointIndex) => (
        <Box
          key={breakpoint}
          position="absolute"
          left={breakpoint}
          height={handleHeight + CONFIG.LABELS_HEIGHT}
          w={layout.sectionWidth}
        >
          <Pressable
            key={breakpoint}
            style={StyleSheet.absoluteFillObject}
            onPress={tapBreakpoint(breakpoint, breakpointIndex)}
          />
        </Box>
      ))}
      <Box
        pointerEvents="none"
        onLayout={handleLayout}
        h={CONFIG.SCALE_HEIGHT}
        br={8}
        p={2}
        justifyContent="space-between"
        flexDirection="row"
        bg={Colours.neutral.n20}
      >
        {Array.from({ length: CONFIG.POINTS }).map((_, pointIndex) => (
          <Box key={pointIndex} bg={Colours.primary.p600} h={4} w={4} br={4} />
        ))}
      </Box>
      <Box position="absolute" top={0} left={0} right={0}>
        <Draggable
          minOffsetX={layout.offsetX}
          maxOffsetX={layout.offsetX + layout.width}
          sectionWidth={layout.sectionWidth}
          breakpoints={layout.breakpoints}
          defaultIndex={Math.max(value - 1, 0) || 2}
          handleWidth={handleWidth}
          onChange={handleChangeBreakpoint}
          left={left}
        >
          {children}
        </Draggable>
      </Box>
      <LikertScaleLabels
        minColor={typeof value === "number" && value < CONFIG.MID_POINT ? Colours.neutral.n900 : Colours.neutral.n250}
        maxColor={typeof value === "number" && value > CONFIG.MID_POINT ? Colours.neutral.n900 : Colours.neutral.n250}
        min={labelMin}
        max={labelMax}
      />
    </View>
  );
};

export default memo(LikertScale);
