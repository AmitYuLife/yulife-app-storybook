import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  size?: number;
  colour?: string;
}

export const LockIcon = memo(({ size = 24, colour = "#5C5757" }: IProps) => (
  <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 24 24">
    <Path
      fill={colour}
      fillRule="evenodd"
      d="M12 2.5c-2.51 0-4.5 2.143-4.5 4.727V8.5H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-1.5V7.195C16.5 4.64 14.508 2.5 12 2.5Zm3.5 6V7.195c0-2.05-1.59-3.695-3.5-3.695-1.907 0-3.5 1.642-3.5 3.727V8.5h7ZM4 11.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7Z"
      clipRule="evenodd"
    />
    <Path
      fill={colour}
      d="M11.345 14.488a1.284 1.284 0 0 1-.545-1.058c0-.673.52-1.28 1.229-1.28.709 0 1.228.607 1.228 1.28 0 .421-.199.816-.544 1.058v.88c0 .35-.276.696-.684.696-.415 0-.684-.35-.684-.697v-.88Z"
    />
  </Svg>
));
