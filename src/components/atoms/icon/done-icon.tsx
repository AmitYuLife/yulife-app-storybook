import { Colours, Style } from "@styles";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
  checked: boolean;
}

export const DoneIcon = memo(({ checked }: IProps) => {
  const colour = checked ? Colours.primary.p600 : Colours.metallic.m500;
  return (
    <Svg width={Style.adjust(40)} height={Style.adjust(40)} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm10.577-26.065a.833.833 0 10-1.154-1.203L16.111 25.505l-5.527-5.433a.833.833 0 10-1.168 1.189l6.104 6a.833.833 0 001.161.007l13.896-13.333z"
        fill={colour}
      />
    </Svg>
  );
});
