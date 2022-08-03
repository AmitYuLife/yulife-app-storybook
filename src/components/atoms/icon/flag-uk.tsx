import React, { memo } from "react";
import Svg, { Path, Rect, Mask, G } from "react-native-svg";
import { Style } from "@styles";

interface Props {
  height?: number;
  width?: number;
}

export const FlagUK = memo(({ width = Style.adjust(32), height = Style.adjust(24) }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
    <Mask id="mask0_236_6133" x="0" y="0" width="32" height="24">
      <Rect width="32" height="24" fill="white" />
    </Mask>
    <G mask="url(#mask0_236_6133)">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V24H32V0H0Z" fill="#2E42A5" />
      <Mask id="mask1_236_6133" x="0" y="0" width="32" height="24">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V24H32V0H0Z" fill="white" />
      </Mask>
      <G mask="url(#mask1_236_6133)">
        <Mask id="mask2_236_6133" x="0" y="0" width="32" height="24">
          <Rect width="32" height="24" fill="white" />
        </Mask>
        <G mask="url(#mask2_236_6133)">
          <Path
            d="M-3.56299 22.2854L3.4787 25.2635L32.1599 3.23787L35.8743 -1.18761L28.3442 -2.18297L16.6458 7.3085L7.2298 13.7035L-3.56299 22.2854Z"
            fill="white"
          />
          <Path d="M-2.59888 24.3719L0.988539 26.1002L34.5406 -1.59878H29.5034L-2.59888 24.3719Z" fill="#F50100" />
          <Path
            d="M35.5632 22.2854L28.5215 25.2635L-0.159695 3.23787L-3.87402 -1.18761L3.65605 -2.18297L15.3544 7.3085L24.7704 13.7035L35.5632 22.2854Z"
            fill="white"
          />
          <Path
            d="M35.323 23.7829L31.7356 25.5111L17.4488 13.6518L13.213 12.3267L-4.23139 -1.17246H0.805759L18.2404 12.0063L22.8714 13.5952L35.323 23.7829Z"
            fill="#F50100"
          />
          <Mask id="path-9-inside-1_236_6133" fill="white">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.7778 -2H12.2223V8H-1.97241V16H12.2223V26H19.7778V16H34.0276V8H19.7778V-2Z"
            />
          </Mask>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.7778 -2H12.2223V8H-1.97241V16H12.2223V26H19.7778V16H34.0276V8H19.7778V-2Z"
            fill="#F50100"
          />
          <Path
            d="M12.2223 -2V-4H10.2223V-2H12.2223ZM19.7778 -2H21.7778V-4H19.7778V-2ZM12.2223 8V10H14.2223V8H12.2223ZM-1.97241 8V6H-3.97241V8H-1.97241ZM-1.97241 16H-3.97241V18H-1.97241V16ZM12.2223 16H14.2223V14H12.2223V16ZM12.2223 26H10.2223V28H12.2223V26ZM19.7778 26V28H21.7778V26H19.7778ZM19.7778 16V14H17.7778V16H19.7778ZM34.0276 16V18H36.0276V16H34.0276ZM34.0276 8H36.0276V6H34.0276V8ZM19.7778 8H17.7778V10H19.7778V8ZM12.2223 0H19.7778V-4H12.2223V0ZM14.2223 8V-2H10.2223V8H14.2223ZM-1.97241 10H12.2223V6H-1.97241V10ZM0.0275879 16V8H-3.97241V16H0.0275879ZM12.2223 14H-1.97241V18H12.2223V14ZM14.2223 26V16H10.2223V26H14.2223ZM19.7778 24H12.2223V28H19.7778V24ZM17.7778 16V26H21.7778V16H17.7778ZM34.0276 14H19.7778V18H34.0276V14ZM32.0276 8V16H36.0276V8H32.0276ZM19.7778 10H34.0276V6H19.7778V10ZM17.7778 -2V8H21.7778V-2H17.7778Z"
            fill="white"
            mask="url(#path-9-inside-1_236_6133)"
          />
        </G>
      </G>
    </G>
  </Svg>
));
