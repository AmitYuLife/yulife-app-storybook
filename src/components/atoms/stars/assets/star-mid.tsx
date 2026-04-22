// tslint:disable:max-line-length
import { Style } from "@styles/index";
import React from "react";
import Svg, { Polygon } from "react-native-svg";

interface IProps {
  isHighlighted: boolean;
  scale?: number;
}

const StarMid = ({ isHighlighted, scale = 1 }: IProps) => (
  <Svg
    width={String(Style.SCALE_UP_AND_DOWN(87 * 0.5 * scale))}
    height={String(Style.SCALE_UP_AND_DOWN(84 * 0.5 * scale))}
    viewBox="0 0 87 84"
  >
    <Polygon
      fill={isHighlighted ? "#FBCF27" : "#E2E2E2"}
      points="43.5,0.5 53.6,31.9 86.6,31.8 59.9,51.2 70.2,82.5 43.5,63.1 16.8,82.5 27.1,51.2 0.4,31.8 33.4,31.9 "
    />
    <Polygon
      fillOpacity="0.59"
      fill={isHighlighted ? "#E59E00" : "#C4C4C4"}
      points="0.4,31.8 30.6,48.8 16.8,82.5 27.1,51.2 	"
    />
    <Polygon
      fillOpacity="0.59"
      fill={isHighlighted ? "#E59E00" : "#C4C4C4"}
      points="86.6,31.8 56.4,48.8 70.2,82.5 59.9,51.2 	"
    />
  </Svg>
);

export default StarMid;
