import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Style } from "@styles";

export type GenderIconType = "female" | "male";

export interface GenderIconProps {
  gender: GenderIconType;
  svgProps: SvgProps;
}

const Female = (props: SvgProps) => {
  return (
    <Svg width={Style.adjust(40)} height={Style.adjust(40)} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M19.5 25v12M17 34.23h5M30 14.5C30 20.299 25.299 25 19.5 25S9 20.299 9 14.5 13.701 4 19.5 4 30 8.701 30 14.5z"
        stroke={props.color || "#6E6E70"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Male = (props: SvgProps) => {
  return (
    <Svg width={Style.adjust(40)} height={Style.adjust(40)} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M24.084 16.72l8.485-8.486M9.234 16.72c4.1-4.1 10.749-4.1 14.85 0 4.1 4.1 4.1 10.748 0 14.849-4.101 4.1-10.75 4.1-14.85 0s-4.1-10.749 0-14.85zM27.81 6.81h6v6"
        stroke={props.color || "#6E6E70"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

function GenderIcon({ gender, svgProps }: GenderIconProps) {
  switch (gender) {
    case "female":
      return Female(svgProps);
    case "male":
      return Male(svgProps);
  }
}

export default GenderIcon;
