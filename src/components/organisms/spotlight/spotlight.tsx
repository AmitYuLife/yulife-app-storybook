import { memo, useCallback, useMemo, useState } from "react";
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

export type SpotlightProps = {
  origin?: "center" | "top-left";
  originOffsetX?: number;
  originOffsetY?: number;

  rays?: RaysDecorationProps;
  glow?: GlowDecorationProps;
  stars?: StarsDecorationProps;
  shake?: boolean | ShakeDecorationProps;
  sparkle?: SparkleDecorationProps;

  children: React.ReactNode;
  wrapperProps?: IBoxProps & ViewProps;
};

const Spotlight = ({
  origin = "center",
  originOffsetX = 0,
  originOffsetY = 0,
  rays,
  glow,
  stars,
  shake,
  sparkle,
  wrapperProps = {},
  children,
}: SpotlightProps) => {
  const [[wrapperWidth, wrapperHeight], setWrapperSize] = useState<[number, number]>([0, 0]);

  const onWrapperLayout = useCallback((e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    const height = e.nativeEvent.layout.height;
    setWrapperSize([width, height]);
  }, []);

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

  const wrapperPropsApplied = useMemo(() => {
    const size: IBoxProps & ViewProps = {
      width: "100%",
      height: "100%",
    };

    if (!wrapperProps) {
      return size;
    }

    if (wrapperProps.w || wrapperProps.width || wrapperProps.h || wrapperProps.height) {
      return wrapperProps;
    }

    return {
      ...size,
      ...wrapperProps,
    };
  }, [wrapperProps]);

  if (DETOX_ENABLED) {
    return children;
  }

  const childElement = (
    <Box position="relative" style={{ zIndex: 1 }}>
      {children}
    </Box>
  );

  return (
    <Box onLayout={onWrapperLayout} {...wrapperPropsApplied}>
      <Box position="absolute" {...originPositionForCenterDecorations}>
        {rays ? <RaysDecoration {...rays} /> : null}
      </Box>
      <Box position="absolute" {...originPositionForTopLeftDecorations}>
        {glow ? <GlowDecoration contentWidth={wrapperWidth} contentHeight={wrapperHeight} {...glow} /> : null}
        {stars ? <StarsDecoration contentWidth={wrapperWidth} contentHeight={wrapperHeight} {...stars} /> : null}
      </Box>
      <Box position="absolute" style={{ zIndex: 2 }} {...originPositionForTopLeftDecorations}>
        {sparkle ? <SparkleDecoration contentWidth={wrapperWidth} contentHeight={wrapperHeight} {...sparkle} /> : null}
      </Box>
      <Box flex={1} justifyContent="center" alignItems="center">
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
