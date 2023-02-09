import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";
import { TransformsStyle } from "react-native";
import { ARROW_BUTTON } from "@ids";

type ArrowDirection = "right" | "down" | "left";

interface IProps {
  width?: number;
  height?: number;
  color?: string;
  withBackground?: boolean;
  direction?: ArrowDirection;
}

export const ArrowIcon = memo(
  ({
    width = Style.adjust(24),
    height = Style.adjust(24),
    color = Colours.primary.p600,
    withBackground,
    direction = "right",
  }: IProps) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" style={TRANSFORM[direction]} testID={ARROW_BUTTON}>
      {withBackground ? (
        <>
          <Path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z" fill="#E30D76" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.846 6.246a.5.5 0 0 1 .707 0l4.8 4.8a.5.5 0 0 1 0 .707l-4.8 4.8a.5.5 0 1 1-.707-.707l4.447-4.446-4.447-4.447a.5.5 0 0 1 0-.707Z"
            fill={color}
          />
        </>
      ) : (
        <Path d="M8 20l8-8-8-8" stroke={color} fill={"none"} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
      )}
    </Svg>
  )
);

const TRANSFORM: Record<ArrowDirection, TransformsStyle> = {
  left: { transform: [{ rotate: "180deg" }] },
  down: { transform: [{ rotate: "90deg" }] },
  right: undefined,
};
