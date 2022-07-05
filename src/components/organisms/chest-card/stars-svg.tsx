import React, { memo, FC } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  colour: string;
}

const _StarsSvg: FC<IProps> = ({ colour }) => (
  <Svg width={Style.adjust(106)} height={Style.adjust(142)} viewBox="0 0 106 142">
    <Path
      d="M31.0674 9L32.4157 13.5652L37 15L32.4157 16.4348L31.0674 21L29.5843 16.4348L25 15L29.5843 13.5652L31.0674 9Z"
      fill={colour}
    />
    <Path
      d="M13.5313 35.7681L14.4369 38.8226L17.4558 39.8408L14.4369 40.7135L13.5313 43.7681L12.4747 40.7135L9.45581 39.8408L12.4747 38.8226L13.5313 35.7681Z"
      fill={colour}
    />
    <Path
      d="M91.0755 76L91.9811 79.0545L95 80.0727L91.9811 80.9455L91.0755 84L90.0189 80.9455L87 80.0727L90.0189 79.0545L91.0755 76Z"
      fill={colour}
    />
  </Svg>
);

export const StarsSvg = memo(_StarsSvg);
