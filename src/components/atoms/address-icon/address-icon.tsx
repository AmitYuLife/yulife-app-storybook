import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
import { Style } from "@styles";

// TODO: Move to the icons folder

const AddressIcon = (props: SvgProps = {}) => {
  const color = props.color || "#6E6E70";
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.983 16c5.391.194 9.017 1.457 9.017 2.987C23 20.651 18.075 22 12 22S1 20.651 1 18.987c0-1.53 3.597-2.793 8.988-2.987"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={5} r={2.5} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 18V8" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default AddressIcon;
