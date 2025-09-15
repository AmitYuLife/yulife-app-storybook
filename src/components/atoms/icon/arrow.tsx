import { memo, useMemo } from "react";
import type { JSX } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";
import { TransformsStyle } from "react-native";
import { ARROW_BUTTON } from "@ids";
import { getLocaleDirection } from "@locale";

type ArrowDirection = "right" | "down" | "left" | "top";
type ArrowIntent = "primary" | "secondary" | "transparent";

export interface IArrowIconProps {
  size?: number;
  color?: string;
  intent?: ArrowIntent;
  direction?: ArrowDirection;
  testID?: string;
}

/** aka ChevronIcon */
export const ArrowIcon = memo(
  ({
    size = Style.adjust(24),
    color = Colours.primary.p600,
    intent = "transparent",
    direction = "right",
  }: IArrowIconProps) => {
    // flip direction for RTL locales
    const effectiveDirection = useMemo(() => {
      const localeDirection = getLocaleDirection();

      if (localeDirection === "rtl") {
        if (direction === "left") {
          return "right";
        }

        if (direction === "right") {
          return "left";
        }
      }

      return direction;
    }, [direction]);

    const arrow = useMemo((): JSX.Element => {
      switch (intent) {
        case "primary":
          return (
            <Path
              fill={color}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.846 6.246a.5.5 0 0 1 .707 0l4.8 4.8a.5.5 0 0 1 0 .707l-4.8 4.8a.5.5 0 1 1-.707-.707l4.447-4.446-4.447-4.447a.5.5 0 0 1 0-.707Z"
            />
          );

        case "secondary":
          return (
            <Path
              fill="#E30D76"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.846 6.246a.5.5 0 0 1 .707 0l4.8 4.8a.5.5 0 0 1 0 .707l-4.8 4.8a.5.5 0 1 1-.707-.707l4.447-4.446-4.447-4.447a.5.5 0 0 1 0-.707Z"
            />
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
      <Svg width={size} height={size} viewBox="0 0 24 24" style={TRANSFORM[effectiveDirection]} testID={ARROW_BUTTON}>
        {arrow}
      </Svg>
    );
  }
);

const TRANSFORM: Record<ArrowDirection, TransformsStyle> = {
  top: { transform: [{ rotate: "270deg" }] },
  left: { transform: [{ rotate: "180deg" }] },
  down: { transform: [{ rotate: "90deg" }] },
  right: {},
};
