import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from "react-native-svg";
import { MAX_YU_HEIGHT, MAX_YU_SHEEN_WIDTH } from "../constants";
import { memo } from "react";

const SheenSvg = ({ width = MAX_YU_SHEEN_WIDTH, height = MAX_YU_HEIGHT, ...props }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 233 190" fill="none" {...props}>
      <Path opacity={0.52} d="M233 0H0V190H182.645L233 0Z" fill="url(#sheen_linear_gradient)" />
      <Defs>
        <LinearGradient
          id="sheen_linear_gradient"
          x1={267.503}
          y1={97.4359}
          x2={-237.565}
          y2={111.133}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.00621742} stopColor="#FFE24A" />
          <Stop offset={0.527287} stopColor="#FFEA7A" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default memo(SheenSvg);
