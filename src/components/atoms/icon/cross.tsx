import { Style } from "@styles";
import * as React from "react";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface ICrossIconProps {
  size?: number;
}

export const CrossIcon = memo(({ size = Style.adjust(16) }: ICrossIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.57 2.431c.13.13.13.341 0 .472L2.902 13.569a.333.333 0 11-.472-.471L13.098 2.43c.13-.13.341-.13.471 0z"
        fill="#5C5757"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.431 2.431c.13-.13.341-.13.472 0l10.666 10.667a.333.333 0 11-.471.471L7.764 8.236 2.431 2.903a.333.333 0 010-.472z"
        fill="#5C5757"
      />
    </Svg>
  );
});
