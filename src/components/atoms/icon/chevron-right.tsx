import { Colours, Style } from "@styles";
import * as React from "react";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number;
  fill?: string;
}

export const ChevronRightIcon = memo(({ size = Style.adjust(24), fill = Colours.neutral.white }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.8 6.2c.2-.1.6-.1.8 0l4.8 4.8c.1.2.1.6 0 .8l-4.8 4.8a.5.5 0 1 1-.8-.8l4.5-4.4L9.8 7a.5.5 0 0 1 0-.8Z"
        fill={fill}
      />
    </Svg>
  );
});
