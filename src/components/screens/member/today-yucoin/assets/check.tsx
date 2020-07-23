/* tslint:disable */
import React, { SFC } from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Colours } from "../../../../../styles";

interface Props {
  isFilling: boolean;
  fillProgress: number;
}

const handleFillProgress = (fillProgress: number) => {
  if (fillProgress >= 100) {
    return "100%";
  }

  return String(fillProgress + "%");
};

const Check: SFC<Props> = ({ isFilling, fillProgress }) => {
  const newfillProgress = handleFillProgress(fillProgress);
  return (
    <Svg width={String(14)} height={String(14)} viewBox="0 0 28 28">
      <Defs>
        <LinearGradient id="circle" x1="0%" x2="100%" y1="0%" y2="0%">
          <Stop offset={newfillProgress} stopColor={Colours.darkGray} />
          <Stop offset={newfillProgress} stopColor={Colours.checkMilestone.unfilledCircle} />
          <Stop offset={"100%"} stopColor={Colours.checkMilestone.unfilledCircle} />
        </LinearGradient>
      </Defs>
      <G id="surface1">
        <Path
          fill={isFilling ? "url(#circle)" : Colours.checkMilestone.unfilledCircle}
          d="M 28 14 C 28 6.269531 21.730469 0 14 0 C 6.269531 0 0 6.269531 0 14 C 0 21.730469 6.269531 28 14 28 C 21.730469 28 28 21.730469 28 14 "
        />
        <Path
          fill={"transparent"}
          stroke={newfillProgress === "100%" ? Colours.checkMilestone.filledCheck : "white"}
          strokeWidth={3}
          d="M 0.00115625 0.00159375 L 4.805844 -4.807 L 12.805844 3.193 "
          transform="matrix(1,0,0,-1,7.5965,13.193)"
        />
      </G>
    </Svg>
  );
};

export default Check;
