import React, { memo, useMemo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";
import { TransformsStyle } from "react-native";
import { ARROW_BUTTON } from "@ids";

type ArrowDirection = "right" | "down" | "left";
type ArrowIntent = "primary" | "secondary" | "transparent";

export interface IArrowIconProps {
  width?: number;
  height?: number;
  color?: string;
  intent?: ArrowIntent;
  direction?: ArrowDirection;
  testID?: string;
}

export const ArrowIcon = memo(
  ({
    width = Style.adjust(24),
    height = Style.adjust(24),
    color = Colours.primary.p600,
    intent = "transparent",
    direction = "right",
  }: IArrowIconProps) => {
    const arrow = useMemo((): JSX.Element => {
      switch (intent) {
        case "primary":
          return (
            <>
              <Path
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.846 6.246a.5.5 0 0 1 .707 0l4.8 4.8a.5.5 0 0 1 0 .707l-4.8 4.8a.5.5 0 1 1-.707-.707l4.447-4.446-4.447-4.447a.5.5 0 0 1 0-.707Z"
              />
            </>
          );

        case "secondary":
          return (
            <>
              <Path
                fill="#E30D76"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.846 6.246a.5.5 0 0 1 .707 0l4.8 4.8a.5.5 0 0 1 0 .707l-4.8 4.8a.5.5 0 1 1-.707-.707l4.447-4.446-4.447-4.447a.5.5 0 0 1 0-.707Z"
              />
            </>
          );

        case "transparent":
          return (
            <Path
              d="M8 20l8-8-8-8"
              stroke={color}
              fill={"none"}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );

        default:
          return null;
      }
    }, [color, intent]);

    return (
      <Svg width={width} height={height} viewBox="0 0 24 24" style={TRANSFORM[direction]} testID={ARROW_BUTTON}>
        {arrow}
      </Svg>
    );
  }
);

const TRANSFORM: Record<ArrowDirection, TransformsStyle> = {
  left: { transform: [{ rotate: "180deg" }] },
  down: { transform: [{ rotate: "90deg" }] },
  right: undefined,
};
