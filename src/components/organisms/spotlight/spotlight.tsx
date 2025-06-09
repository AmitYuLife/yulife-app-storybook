import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Box } from "@atoms";
import {
  GlowDecoration,
  GlowDecorationProps,
  RaysDecoration,
  RaysDecorationProps,
  ShakeDecoration,
  ShakeDecorationProps,
  SparkleDecoration,
  SparkleDecorationProps,
  StarsDecoration,
  StarsDecorationProps,
} from "./decorations";
import { DETOX_ENABLED } from "@services/socket";
import { IBoxProps } from "@atoms/box/box.types";
import { LayoutChangeEvent, ViewProps } from "react-native";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export type SpotlightProps = {
  origin?: "center" | "top-left";
  originOffsetX?: number;
  originOffsetY?: number;
  initialWidth?: number;
  initialHeight?: number;

  rays?: RaysDecorationProps;
  glow?: GlowDecorationProps;
  stars?: StarsDecorationProps;
  shake?: boolean | ShakeDecorationProps;
  sparkle?: SparkleDecorationProps;

  decorationsFadeInDuration?: number;
  wrapperProps?: IBoxProps & ViewProps;
  children: React.ReactNode;
};

const Spotlight = ({
  origin = "center",
  originOffsetX = 0,
  originOffsetY = 0,
  initialWidth = 0,
  initialHeight = 0,
  rays,
  glow,
  stars,
  shake,
  sparkle,
  decorationsFadeInDuration = 300,
  wrapperProps = {},
  children,
}: SpotlightProps) => {
  const [[wrapperWidth, wrapperHeight], setWrapperSize] = useState<[number, number]>([initialWidth, initialHeight]);
  const [showDecorations, setShowDecorations] = useState(false);
  const decorationOpacity = useSharedValue(0);

  const decorationsStyle = useAnimatedStyle(() => ({
    opacity: decorationOpacity.value,
  }));

  const onWrapperLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const width = e.nativeEvent.layout.width;
      const height = e.nativeEvent.layout.height;
      setWrapperSize([width, height]);
      setShowDecorations(true);
      decorationOpacity.value = withTiming(1, { duration: decorationsFadeInDuration });
    },
    [decorationOpacity, decorationsFadeInDuration]
  );

  useEffect(() => {
    if (!showDecorations) {
      decorationOpacity.value = 0;
    }
  }, [showDecorations, decorationOpacity]);

  const originPositionForCenterDecorations = useMemo(() => {
    if (origin === "center") {
      return {
        left: wrapperWidth / 2 + originOffsetX,
        top: wrapperHeight / 2 + originOffsetY,
      };
    }

    return {
      left: originOffsetX,
      top: originOffsetY,
    };
  }, [origin, originOffsetX, originOffsetY, wrapperHeight, wrapperWidth]);

  const originPositionForTopLeftDecorations = useMemo(() => {
    if (origin === "center") {
      return {
        left: originOffsetX,
        top: originOffsetY,
      };
    }

    return {
      left: -wrapperWidth / 2 + originOffsetX,
      top: -wrapperHeight / 2 + originOffsetY,
    };
  }, [origin, originOffsetX, originOffsetY, wrapperHeight, wrapperWidth]);

  if (DETOX_ENABLED) {
    return children;
  }

  const childElement = (
    <Box position="relative" style={{ zIndex: 1 }}>
      {children}
    </Box>
  );

  return (
    <Box onLayout={onWrapperLayout} {...wrapperProps}>
      {showDecorations ? (
        <Box forceAnimated={true} style={decorationsStyle} position="absolute" {...originPositionForTopLeftDecorations}>
          <Box position="absolute" {...originPositionForCenterDecorations}>
            {rays ? <RaysDecoration {...rays} /> : null}
          </Box>
          <Box position="absolute" {...originPositionForTopLeftDecorations}>
            {glow ? <GlowDecoration contentWidth={wrapperWidth} contentHeight={wrapperHeight} {...glow} /> : null}
            {stars ? <StarsDecoration contentWidth={wrapperWidth} contentHeight={wrapperHeight} {...stars} /> : null}
          </Box>
          <Box position="absolute" style={{ zIndex: 2 }} {...originPositionForTopLeftDecorations}>
            {sparkle ? (
              <SparkleDecoration contentWidth={wrapperWidth} contentHeight={wrapperHeight} {...sparkle} />
            ) : null}
          </Box>
        </Box>
      ) : null}
      <Box justifyContent="center" alignItems="center">
        {shake ? (
          <ShakeDecoration {...(typeof shake === "object" ? shake : {})}>{childElement}</ShakeDecoration>
        ) : (
          childElement
        )}
      </Box>
    </Box>
  );
};

export default memo(Spotlight);
