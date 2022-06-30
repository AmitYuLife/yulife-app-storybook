import React, { memo, FC } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  colour: string;
}

const _StarsSvg: FC<IProps> = ({ colour }) => (
  <Svg width={Style.adjust(106)} height={Style.adjust(144)} viewBox="0 0 106 144">
    <Path
      d="M31.0674 9L32.4157 13.5652L37 15L32.4157 16.4348L31.0674 21L29.5843 16.4348L25 15L29.5843 13.5652L31.0674 9Z"
      fill={colour}
    />
    <Path
      d="M13.5315 35.7681L14.4372 38.8226L17.4561 39.8408L14.4372 40.7135L13.5315 43.7681L12.4749 40.7135L9.45605 39.8408L12.4749 38.8226L13.5315 35.7681Z"
      fill={colour}
    />
    <Path
      d="M91.8474 91L92.7531 94.0545L95.772 95.0727L92.7531 95.9455L91.8474 99L90.7908 95.9455L87.772 95.0727L90.7908 94.0545L91.8474 91Z"
      fill={colour}
    />
  </Svg>
);

export const StarsSvg = memo(_StarsSvg);
