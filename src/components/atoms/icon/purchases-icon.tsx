import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
}

export const PurchasesIcon = memo(({ width = 24, height = 24 }: IProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 2L4.67578 10.1367L7.27044 19.8201C7.55633 20.887 8.653 21.5202 9.71993 21.2343L20.3451 18.3873C21.412 18.1014 22.0452 17.0047 21.7593 15.9378L19.1647 6.25439L10.5 2ZM12.5737 10.6345C13.6407 10.3486 14.2738 9.25193 13.988 8.185C13.7021 7.11807 12.6054 6.48491 11.5385 6.77079C10.4715 7.05667 9.83837 8.15335 10.1243 9.22028C10.4101 10.2872 11.5068 10.9204 12.5737 10.6345Z"
      fill="#F7B7D6"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 2L3 8.475V18.5C3 19.6046 3.89543 20.5 5 20.5H16C17.1046 20.5 18 19.6046 18 18.5V8.475L10.5 2ZM10.5 11C11.6046 11 12.5 10.1046 12.5 9C12.5 7.89543 11.6046 7 10.5 7C9.39543 7 8.5 7.89543 8.5 9C8.5 10.1046 9.39543 11 10.5 11Z"
      fill="#F43E8E"
    />
  </Svg>
));
