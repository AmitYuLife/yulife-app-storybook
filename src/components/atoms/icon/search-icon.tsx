import React, { memo } from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  colour?: string;
}

export const SearchIcon = memo(({ width = 24, height = 24, colour = "#5C5757" }: IProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 24 24">
    <G clipPath="url(#clip0_1475_6280)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.97221 1.5C4.84496 1.5 1.5 4.84236 1.5 8.96432C1.5 13.0863 4.84496 16.4286 8.97221 16.4286C13.0995 16.4286 16.4444 13.0863 16.4444 8.96432C16.4444 4.84236 13.0995 1.5 8.97221 1.5ZM0.5 8.96432C0.5 4.28914 4.29361 0.5 8.97221 0.5C13.6508 0.5 17.4444 4.28914 17.4444 8.96432C17.4444 13.6395 13.6508 17.4286 8.97221 17.4286C4.29361 17.4286 0.5 13.6395 0.5 8.96432Z"
        fill={colour}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3138 14.2314C14.5089 14.036 14.8255 14.0359 15.0209 14.231L17.2925 16.5C17.4879 16.6952 17.488 17.0117 17.2929 17.2071C17.0977 17.4025 16.7811 17.4026 16.5858 17.2075L14.3141 14.9385C14.1187 14.7433 14.1186 14.4268 14.3138 14.2314Z"
        fill={colour}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4736 15.9346C17.6689 15.7396 17.9852 15.7396 18.1804 15.9346L23.3539 21.103C23.4478 21.1968 23.5005 21.324 23.5005 21.4567C23.5005 21.5894 23.4478 21.7167 23.3539 21.8105L21.8091 23.3537C21.6139 23.5488 21.2976 23.5488 21.1023 23.3537L15.9288 18.1854C15.835 18.0916 15.7822 17.9643 15.7822 17.8316C15.7822 17.6989 15.835 17.5717 15.9288 17.4779L17.4736 15.9346ZM16.9897 17.8316L21.4557 22.2932L22.293 21.4567L17.827 16.9951L16.9897 17.8316Z"
        fill={colour}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1475_6280">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
));
