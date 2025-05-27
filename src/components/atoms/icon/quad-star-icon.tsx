import { Colours, Style } from "@styles";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";

interface IQuadStarIconProps {
  size?: number;
  color?: string;
}

export const QuadStarIcon = memo(({ size = Style.adjust(10), color = Colours.yellow.y100 }: IQuadStarIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 10 10">
    <Path
      fill={color}
      d="M4.74296 0.580994 L5.82989 4.16164 L9.3871 5.32293 L5.82989 6.38745 L4.74296 9.9681 L3.55722 6.38745 L0 5.32293 L3.55722 4.16164 L4.74296 0.580994Z"
    />
  </Svg>
));
