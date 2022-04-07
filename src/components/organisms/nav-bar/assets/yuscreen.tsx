// tslint:disable:max-line-length
import { Style } from "@styles/index";
import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import { Platform } from "react-native";

export default function Yuscreen({ isActive, hasNotification, onPressIn, onPressOut, isHighlighted }: IIconProps) {
  const fill = getIconColour(isActive || isHighlighted);
  const size = String(Style.SCALE_UP_AND_DOWN(54));

  return (
    <Svg
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      viewBox="0 0 54 54"
      width={size}
      height={size}
      testID={NAV_BAR("yu")}
    >
      {Platform.OS === "ios" ? <Path d="M0 0H54V54H0z" fill="#fff" /> : null}
      <Path
        d="M25.94,10.55h0l.42.57.48-.53.8-.91h0a7.26,7.26,0,0,1,3.48-2.25A5.63,5.63,0,0,1,36.3,8.8c2.78,2.27,3.26,6.85.27,10.15h0l-8.68,9.42-.11.11a5.43,5.43,0,0,1-.58.52,1.19,1.19,0,0,1-.69.25c-.59,0-1-.4-1.46-.88l-8.81-9.49a7.24,7.24,0,0,1-.52-9.22h0a5.81,5.81,0,0,1,6.5-2.09A7,7,0,0,1,25.94,10.55Z"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
      />
      <Path d="M31.66,9.57c3.47,0,5.21,4,4.05,6.36" fill="none" stroke={fill} strokeLinecap="round" />

      <Path
        d="M23,47.27a.5.5,0,1,0,0,1c1,0,1.63-.7,2.07-1.68l1.86-4.2a.56.56,0,0,0,0-.21.54.54,0,0,0-.54-.54.53.53,0,0,0-.5.34l-1.1,2.78L23.74,42a.53.53,0,0,0-.5-.34.54.54,0,0,0-.54.54.56.56,0,0,0,0,.21l1.54,3.55C24,46.76,23.65,47.27,23,47.27Zm5.09-5.63a.54.54,0,0,0-.54.54v2.33c0,1,.37,1.88,2,1.88s2-.9,2-1.88V42.18a.54.54,0,0,0-1.08,0v2.33a.9.9,0,1,1-1.79,0V42.18A.54.54,0,0,0,28.1,41.64Z"
        fill={fill}
      />
      {!hasNotification ? null : <Circle cx="35.6" cy="10.25" r="4.5" fill="#ec6f65" stroke="#fff" />}
    </Svg>
  );
}
