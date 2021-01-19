import React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import { Style } from "@styles";

export const PaymentDetailsIcon = () => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
    <Rect x={1} y={4} width={18.174} height={12.435} rx={2} fill="#D3D3D6" />
    <Rect x={4.826} y={6.87} width={18.174} height={12.435} rx={2} fill="#E7E7EB" />
    <Rect x={6.738} y={15.478} width={4.346} height={1.385} rx={0.693} fill="#979799" />
    <Rect x={11.74} y={15.478} width={4.346} height={1.385} rx={0.693} fill="#979799" />
    <Path fill="#979799" d="M4.826 8.783H23v3.826H4.826z" />
  </Svg>
);
