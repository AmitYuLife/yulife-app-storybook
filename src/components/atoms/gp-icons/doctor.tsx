import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colours, Style } from "@styles";

// TODO: Move to the icons folder
export const DoctorIcon = (props: SvgProps = {}) => {
  const color = props.color || Colours.neutral.n800;
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M22 22v-2.667c0-1.414-.527-2.77-1.465-3.77C19.598 14.561 18.326 14 17 14H7c-1.326 0-2.598.562-3.536 1.562C2.527 16.562 2 17.92 2 19.333V22M12 10a4 4 0 100-8 4 4 0 000 8zM12 17v2m0 0v2m0-2h2m-2 0h-2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
