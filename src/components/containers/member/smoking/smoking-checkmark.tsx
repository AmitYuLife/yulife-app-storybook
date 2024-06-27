import React, { FC, memo } from "react";
import { Style } from "@styles";
import { Path, Rect, Svg } from "react-native-svg";

interface Props {
  size?: number;
  colour?: string;
}

export const SmokingCheckmark: FC<Props> = memo(({ size = Style.adjust(24), colour = "#956AFF" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Rect width="24" height="24" fill="#fff" rx="12" />
    <Path
      fill={colour}
      fillRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-4.91-4.08a.572.572 0 0 0-.795-.017L9.79 14.92l-3.08-2.95a.572.572 0 0 0-.795.007.552.552 0 0 0 .006.793l3.47 3.323c.218.209.564.21.784.005l7.899-7.385a.552.552 0 0 0 .016-.793Z"
      clipRule="evenodd"
    />
  </Svg>
));
