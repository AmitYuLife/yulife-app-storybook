import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";

interface Props {
  color: string;
}

export const EditSvg = () => {
  return <BaseEditSvg color={Colours.primary.p400} />;
};

export const EditSvgGrey = () => {
  return <BaseEditSvg color={Colours.neutral.n700} />;
};

const BaseEditSvg = ({ color }: Props) => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
