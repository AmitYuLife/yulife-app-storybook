import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { INFO_PANEL_CTA_SUCCESS_BUTTON } from "@ids";
import { Style } from "@styles";

export const CtaSuccessSVG = (props: SvgProps) => {
  return (
    <Svg
      width={Style.adjust(16)}
      height={Style.adjust(16)}
      viewBox="0 0 16 16"
      fill="none"
      testID={INFO_PANEL_CTA_SUCCESS_BUTTON}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clip-Rle="evenodd"
        d="M15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033ZM12.0602 5.27982C11.9162 5.13358 11.6798 5.12899 11.53 5.26903L6.52693 9.94648L4.47346 7.97982C4.32533 7.83795 4.08886 7.83986 3.94313 7.98432C3.795 8.13116 3.79718 8.36893 3.94775 8.51314L6.26093 10.7285C6.40607 10.8675 6.63661 10.8688 6.78337 10.7316L12.0491 5.80855C12.2014 5.66621 12.2066 5.42848 12.0602 5.27982Z"
        fill="white"
      />
    </Svg>
  );
};
