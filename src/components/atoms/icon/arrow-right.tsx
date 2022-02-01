import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  color?: string;
  withBackground?: boolean;
}

export const ArrowRight = memo(
  ({ width = Style.adjust(24), height = Style.adjust(24), color = Colours.primary.p600, withBackground }: IProps) => (
    <Svg width={width} height={height} viewBox="0 0 24 24">
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
        <Path d="M8 20l8-8-8-8" stroke={color} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
      )}
    </Svg>
  )
);
