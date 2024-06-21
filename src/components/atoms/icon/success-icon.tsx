import React, { memo } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  size?: number;
  colour?: string;
  checked?: boolean;
  fill?: string;
  stroke?: string;
}

export const SuccessIcon = memo(({ size, colour = "#5C5757", fill = "#fff", stroke = "#D9D9D7", checked }: IProps) => (
  <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 24 24">
    {!checked ? (
      <Circle cx={12} cy={12} r={11} fill={fill} stroke={stroke} />
    ) : (
      <>
        <Path
          fill={colour}
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-4.91-4.08a.572.572 0 0 0-.795-.017L9.79 14.92l-3.08-2.95a.572.572 0 0 0-.795.007.552.552 0 0 0 .006.793l3.47 3.323c.218.209.564.21.784.005l7.899-7.385a.552.552 0 0 0 .016-.793Z"
          clipRule="evenodd"
        />
        <Path
          fill="#fff"
          d="M17.295 7.903a.572.572 0 0 1 .795.016c.22.223.212.58-.016.793l-7.9 7.385a.572.572 0 0 1-.783-.005l-3.47-3.323a.552.552 0 0 1-.006-.793.572.572 0 0 1 .795-.007l3.08 2.95 7.505-7.016Z"
        />
      </>
    )}
  </Svg>
));
