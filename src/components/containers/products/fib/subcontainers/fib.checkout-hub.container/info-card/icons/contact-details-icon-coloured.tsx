import React from "react";
import Svg, { Rect, Ellipse, Path } from "react-native-svg";
import { Style } from "@styles";

export const ContactDetailsColouredIcon = () => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
    <Rect x={2.449} y={6} width={19.552} height={13.034} rx={2} fill="#BADAFF" />
    <Rect x={1} y={6} width={19.552} height={13.034} rx={2} fill="#70B2FF" />
    <Rect x={11.861} y={11.793} width={7.241} height={1.448} rx={0.724} fill="#fff" />
    <Rect x={11.861} y={8.897} width={7.241} height={1.448} rx={0.724} fill="#fff" />
    <Rect x={11.861} y={14.69} width={4.345} height={1.448} rx={0.724} fill="#fff" />
    <Ellipse cx={6.43} cy={10.506} rx={1.629} ry={1.609} fill="#fff" />
    <Path d="M9.69 16.138H3.171c0-1.778 1.459-3.219 3.259-3.219 1.8 0 3.258 1.441 3.258 3.219z" fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 4A2.5 2.5 0 009 6.5V7h5v-.5A2.5 2.5 0 0011.5 4zm0 2a.5.5 0 100-1 .5.5 0 000 1z"
      fill="#70B2FF"
    />
  </Svg>
);
