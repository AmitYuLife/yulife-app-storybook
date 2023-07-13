import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export function InfoIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
        fill="#6AA3DC"
      />
      <Path
        d="M10 9.95944C10 9.40042 10.4015 7.92643 12.15 8.00286C13.3125 8.05368 14 9.08279 14 9.95944C14 10.6074 13.7875 10.9504 13.5375 11.357C13.387 11.5619 12.9 12.2209 12.35 12.9451C12.0605 13.3263 12.075 13.6566 12.075 14.0759M12.0926 16H12.075"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle cx="12.1" cy="16.6" r="0.8" fill="white" />
    </Svg>
  );
}
