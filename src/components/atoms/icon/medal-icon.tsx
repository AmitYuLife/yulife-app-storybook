import React, { memo, useMemo } from "react";
import Svg, { Path, Text } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  size?: number;
  position: number;
}

export const MedalIcon = memo(({ size = 24, position }: IProps) => {
  const { color1, color2, color3 } = getMedalColour(position);
  const fontSize = useMemo(() => (position > 99 ? Style.adjust(10) : Style.adjust(12)), [position]);
  return (
    <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 24 24">
      <Path
        fill={color1}
        d="M4 13.5v9.409a1 1 0 0 0 1.434.9L12 20.649l6.566 3.162A1 1 0 0 0 20 22.909V13.5l-8 4.32-8-4.32Z"
      />
      <Path fill={color2} d="M21 10.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <Path
        fill={color1}
        fillRule="evenodd"
        d="M22 10.5c0 5.523-4.477 10-10 10s-10-4.477-10-10S6.477.5 12 .5s10 4.477 10 10Zm-10 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        clipRule="evenodd"
      />
      <Path fill={color1} d="M18.364 16.864A9 9 0 0 0 5.636 4.136L12 10.5l6.364 6.364Z" />
      <Text
        fill={color3}
        textAnchor="middle"
        y="60%"
        x="49%"
        fontWeight="500"
        fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
        fontSize={fontSize}
      >
        {position}
      </Text>
    </Svg>
  );
});

const getMedalColour = (position: number) => {
  switch (position) {
    case 1: {
      return {
        color1: "#F9D337",
        color2: "#FCE93D",
        color3: "#F19E22",
      };
    }

    case 2: {
      return {
        color1: "#B9B9CC",
        color2: "#DEDEF0",
        color3: "#87879F",
      };
    }

    case 3: {
      return {
        color1: "#EA945D",
        color2: "#F9C299",
        color3: "#C06C3D",
      };
    }

    default: {
      return {
        color1: "#DEDEF0",
        color2: "#EFF0FA",
        color3: "#5C5757",
      };
    }
  }
};
