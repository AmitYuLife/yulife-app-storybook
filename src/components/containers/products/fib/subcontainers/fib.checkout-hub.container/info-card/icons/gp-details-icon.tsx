import React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { Style } from "@styles";

export const GpDetailsIcon = () => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4.868C7 3.837 7.895 3 9 3h4c1.105 0 2 .837 2 1.868v3.198c0 .516-.448.934-1 .934s-1-.418-1-.934V5.868a1 1 0 00-1-1h-2a1 1 0 00-1 1v2.198C9 8.582 8.552 9 8 9s-1-.418-1-.934V4.868z"
      fill="#979799"
    />
    <Rect x={3.896} y={7.086} width={18.103} height={13.759} rx={2} fill="#979799" />
    <Rect x={1} y={7} width={19} height={14} rx={2} fill="#E7E7EB" />
    <Path
      d="M10.69 11.431v2.896m0 0v2.897m0-2.897H7.793m2.897 0h2.896"
      stroke="#979799"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
