import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";

interface Props {
  color?: string;
}

export const InviteIcon = memo(({ color = Colours.primary.p600 }: Props) => (
  <Svg width={Style.adjust(16)} height={Style.adjust(16)} viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.51 5.6C2.2 5.85 2 6.24 2 6.65V12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6.65c0-.4-.19-.8-.51-1.05L9.23 2.29a2 2 0 0 0-2.46 0L2.51 5.6Zm.26 1.42a.07.07 0 0 0-.1.06V12c0 .74.6 1.33 1.33 1.33h8c.74 0 1.33-.6 1.33-1.33V7.08a.07.07 0 0 0-.1-.06l-4.2 3.27c-.6.47-1.45.47-2.05 0l-4.2-3.27Zm10.35-.76a.07.07 0 0 0 0-.1L8.82 2.8a1.33 1.33 0 0 0-1.64 0l-4.3 3.35a.07.07 0 0 0 0 .1l4.5 3.5a1 1 0 0 0 1.23 0l4.5-3.5Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.9 10.1c.13.13.13.34 0 .47l-2 2a.33.33 0 1 1-.47-.47l2-2a.33.33 0 0 1 .47 0Zm4.2 0a.33.33 0 0 0 0 .47l2 2a.33.33 0 1 0 .47-.47l-2-2a.33.33 0 0 0-.47 0ZM8.12 4.7l-.02.02-.1.1-.1-.1-.02-.02a1.3 1.3 0 0 0-1.83 1.86L8 8.51l1.95-1.95A1.3 1.3 0 0 0 8.12 4.7ZM8 7.57 9.48 6.1a.64.64 0 1 0-.9-.9L8 5.76l-.57-.57a.64.64 0 0 0-.9.9L8 7.57Z"
      fill={color}
    />
  </Svg>
));
