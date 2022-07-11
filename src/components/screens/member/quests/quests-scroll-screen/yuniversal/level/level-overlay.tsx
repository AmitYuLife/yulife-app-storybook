import React, { FC, memo } from "react";
import { Path, G } from "react-native-svg";

interface IProps {
  radius: number;
}

export const LevelOverlay: FC<IProps> = memo(({ radius }) => (
  <G scale={radius / 27.5} x={27.5 - radius} y={27.5 - radius}>
    <Path
      d="M8.14706 15.0588L8.5 14L8.85295 15.0588L10 15.4118L8.85295 15.7647L8.5 16.8235L8.14706 15.7647L7 15.4118L8.14706 15.0588Z"
      fill="white"
    />
    <Path
      d="M23.1471 46.0588L23.5 45L23.8529 46.0588L25 46.4118L23.8529 46.7647L23.5 47.8235L23.1471 46.7647L22 46.4118L23.1471 46.0588Z"
      fill="white"
    />
    <Path
      d="M36.9118 8.7647L37.5 7L38.0882 8.7647L40 9.35293L38.0882 9.94118L37.5 11.7059L36.9118 9.94118L35 9.35293L36.9118 8.7647Z"
      fill="white"
    />
    <G opacity="0.2">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.7793 14.5747L4.1682 42.063C1.52675 37.84 0 32.8483 0 27.5C0 26.1483 0.0975276 24.8193 0.28593 23.5198L37.6642 1.93945C43.7292 4.35329 48.7324 8.86325 51.7793 14.5747Z"
        fill="white"
      />
    </G>
  </G>
));
