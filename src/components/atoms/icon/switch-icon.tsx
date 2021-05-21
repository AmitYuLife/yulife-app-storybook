import React from "react";
import Svg, { Path } from "react-native-svg";
import { Style, Colours } from "@styles";

export const SwitchIcon = ({ height = Style.adjust(16), width = Style.adjust(16), fill = Colours.primary.p600 }) => (
  <Svg width={width} height={height} viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.584 2.447a.333.333 0 01-.031.47l-2 1.75h9.78a.333.333 0 110 .666h-9.78l2 1.75a.333.333 0 01-.44.5L2.448 5.252a.333.333 0 010-.502l2.667-2.334a.333.333 0 01.47.032zm4.832 6a.333.333 0 01.47-.032l2.667 2.334a.334.334 0 010 .502l-2.667 2.333a.333.333 0 11-.44-.502l2-1.749h-9.78a.333.333 0 110-.667h9.78l-2-1.749a.333.333 0 01-.03-.47z"
      fill={fill}
    />
  </Svg>
);
