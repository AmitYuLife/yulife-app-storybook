// tslint:disable:max-line-length
import { Style } from "@styles";
import * as React from "react";
import Svg, { Path, Polygon, Rect } from "react-native-svg";

interface IProps {
  hasCheckmark: boolean;
  fill: string;
  scale?: number;
}

const Coupon = ({ hasCheckmark, fill, scale = 0.4 }: IProps) => (
  <Svg width={Style.adjust(73 * scale)} height={Style.adjust(43 * scale)} viewBox="0 0 73 43">
    <Path
      fill={fill}
      d="M71.5,14H73V0H10v6H0v14h1.5C4,20,6,22,6,24.5S4,29,1.5,29H0v14h67v-6h6V23h-1.5C69,23,67,21,67,18.5S69,14,71.5,14z M64,40H3v-8.2c3.4-0.7,6-3.7,6-7.3s-2.6-6.7-6-7.3V9h61v8.2c-3.4,0.7-6,3.7-6,7.3s2.6,6.7,6,7.3V40z M70,25.8V34h-3v-5h-1.5C63,29,61,27,61,24.5c0-2,1.4-3.7,3.2-4.3C64.9,23,67.1,25.3,70,25.8z M27,6V3h-3v3H13V3h57v8.2c-1.1,0.2-2.1,0.7-3,1.4V6H27z"
    />
    <Rect x="52" y="9" fill={fill} width="3" height="2.5" />
    <Rect x="52" y="29.8" fill={fill} width="3" height="4.8" />
    <Rect x="52" y="22.1" fill={fill} width="3" height="4.8" />
    <Rect x="52" y="14.4" fill={fill} width="3" height="4.8" />
    <Rect x="52" y="37.5" fill={fill} width="3" height="2.5" />
    {!hasCheckmark ? null : <Polygon fill={fill} points="26,26.7 21.3,22 19.2,24.2 26,31 35.8,21.2 33.7,19.1 " />}
  </Svg>
);

export default React.memo(Coupon);
