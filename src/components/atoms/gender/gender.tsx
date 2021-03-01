import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Style, Colours } from "@styles";

export type GenderIconType = "female" | "male";

export interface GenderIconProps {
  gender: GenderIconType;
  svgProps: SvgProps;
}

const Female = (props: SvgProps) => {
  const { width = Style.adjust(33), height = Style.adjust(32), stroke = Colours.primary.p400 } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 33 32">
      <Path d="M15.8477 20V29.6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M13.8477 27.3845H17.8477" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M24.2492 11.6C24.2492 16.2391 20.4884 20 15.8492 20C11.21 20 7.44922 16.2391 7.44922 11.6C7.44922 6.96076 11.21 3.19995 15.8492 3.19995C20.4884 3.19995 24.2492 6.96076 24.2492 11.6Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Male = (props: SvgProps) => {
  const { height = Style.adjust(33), width = Style.adjust(32), stroke = Colours.world.ocean } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 33 32">
      <Path
        d="M19.9492 12.8L27.1492 6.40005"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.13608 13.3756C11.4165 10.0952 16.7351 10.0952 20.0155 13.3756C23.2959 16.656 23.2959 21.9746 20.0155 25.255C16.7351 28.5354 11.4165 28.5354 8.13608 25.255C4.85568 21.9746 4.85568 16.656 8.13608 13.3756Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.9961 5.44775L27.7961 5.44775L27.7961 10.2478"
        stroke={stroke}
        strokeWidth="2"
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
