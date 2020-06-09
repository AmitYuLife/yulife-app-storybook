// tslint:disable:max-line-length
import { Style } from "@styles/index";
import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import { Platform } from "react-native";

export default function Scroll({ isActive, onPressIn, hasNotification, isHighlighted }: IIconProps) {
  const fill = getIconColour(isActive || isHighlighted);
  const size = String(Style.SCALE_UP_AND_DOWN(54));

  return (
    <Svg
      onPressIn={onPressIn}
      onPressOut={onPressIn}
      viewBox="0 0 54 54"
      width={size}
      height={size}
      testID={NAV_BAR("quests")}
    >
      <G>
        {Platform.OS === "ios" ? <Path d="M0 0H54V54H0z" fill="#fff" /> : null}
        <Path d="M36.35 7.25h-15.8A1.66 1.66 0 0019 9v16.8" fill="none" stroke={fill} strokeMiterlimit={10} />
        <Path
          d="M34.75 10.75h1.6a1.76 1.76 0 00.3-3.5 1.7 1.7 0 00-1.89 1.51.28.28 0 000 .09v18.7M34.75 25.75h-17.4a1.71 1.71 0 00-1.61 1.81v.09a1.65 1.65 0 001.6 1.6h15.8a1.67 1.67 0 001.6-1.7"
          fill="none"
          stroke={fill}
          strokeMiterlimit={10}
        />
        <Path
          d="M34.75 27.45a1.56 1.56 0 01-3.12-.12 1.1 1.1 0 010-.18 1.62 1.62 0 011.6-1.4h1.6"
          fill="none"
          stroke={fill}
          strokeMiterlimit={10}
        />
        <Path
          d="M30.85 12.35L28.45 10M28.35 12.35l2.5-2.4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit={10}
        />
        <Path
          d="M27.15 13.65c-1.3 1.5.5 3.9-1.4 6.2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeDasharray="4,4,4,4"
        />
        <Path
          d="M23.85 23.35a1.2 1.2 0 10-1.2-1.2 1.16 1.16 0 001.12 1.2z"
          fill="none"
          stroke={fill}
          strokeMiterlimit={10}
        />
        <Path
          d="M17.35 45a1.23 1.23 0 01-1 .5c-.7 0-1.1-.5-1.1-1.5s.4-1.5 1.1-1.5a.94.94 0 011 .88V45zm-1.1 1.4a1.49 1.49 0 001.1-.4v1.8a.56.56 0 00.6.5.47.47 0 00.5-.44V43.6a1.88 1.88 0 00-1.7-2h-.3c-1.4 0-2.2.8-2.2 2.4s.75 2.35 2 2.35zm3.5-4.8a.47.47 0 00-.5.44v2.36c0 1 .4 1.9 2 1.9s2-.9 2-1.9v-2.3a.47.47 0 00-.44-.5h-.06a.63.63 0 00-.6.5v2.3a.91.91 0 01-1.8.2V42a.59.59 0 00-.6-.4zM24 44a2.08 2.08 0 002.3 2.4 2.78 2.78 0 001.6-.5.52.52 0 00.2-.4.47.47 0 00-.44-.5h-.06a.37.37 0 00-.3.1 1.68 1.68 0 01-1 .3 1.1 1.1 0 01-1.2-.8v-.2h2.5c.6 0 .6-.4.6-.8a1.88 1.88 0 00-1.7-2h-.3c-1.4 0-2.2.8-2.2 2.4zm2.2-1.5a.83.83 0 01.9.74v.26h-2a1 1 0 011-1zm4.3 0a1.4 1.4 0 01.9.3.37.37 0 00.3.1.47.47 0 00.5-.44v-.06a.37.37 0 00-.1-.3 2.25 2.25 0 00-1.6-.6c-.9 0-1.7.4-1.7 1.3 0 1.7 2.4 1.3 2.4 2.1 0 .3-.3.4-.7.4a1.49 1.49 0 01-1.1-.4.37.37 0 00-.3-.1.47.47 0 00-.5.44v.06c0 .1.1.2.1.3a2.42 2.42 0 001.8.7c1 0 1.9-.5 1.9-1.4 0-1.7-2.5-1.3-2.5-2a.68.68 0 01.6-.4zm3-.8h-.2c-.3 0-.4.3-.4.5a.43.43 0 00.4.4h.2V45a1.32 1.32 0 001.3 1.3h.2a.5.5 0 000-1 .43.43 0 01-.4-.4v-2.4h.4c.3 0 .4-.3.4-.5a.43.43 0 00-.4-.4h-.4v-.8a.56.56 0 00-.6-.5c-.2 0-.4.2-.5.5zm4.4.8a1.4 1.4 0 01.9.3.37.37 0 00.3.1.47.47 0 00.5-.44v-.06a.37.37 0 00-.1-.3 2.25 2.25 0 00-1.6-.6c-.9 0-1.7.4-1.7 1.3 0 1.7 2.5 1.3 2.5 2.1 0 .3-.3.4-.7.4a1.49 1.49 0 01-1.1-.4.37.37 0 00-.3-.1.47.47 0 00-.5.44v.06c0 .1.1.2.1.3a2.42 2.42 0 001.8.7c1 0 1.8-.5 1.8-1.4 0-1.7-2.5-1.3-2.5-2 0-.2.2-.4.6-.4z"
          fill={fill}
        />
        {!hasNotification ? null : <Circle cx="35.6" cy="10.25" r="4.5" fill="#ec6f65" stroke="#fff" />}
      </G>
    </Svg>
  );
}
