import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  size?: number;
}

export const StarEmptySlotIcon = memo(({ size = 17 }: IProps) => (
  <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 36 36">
    <Path
      fill="#E3E3E1"
      d="M18 0s1.138 13.594 2.772 15.228C22.406 16.862 36 18 36 18s-13.594 1.138-15.228 2.772C19.138 22.406 18 36 18 36s-1.138-13.594-2.772-15.228C13.594 19.138 0 18 0 18s13.594-1.138 15.228-2.772C16.862 13.594 18 0 18 0Z"
    />
  </Svg>
));
