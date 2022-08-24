import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { INFO_PANEL_CTA_NOTIFICATION_BUTTON } from "@ids";
import { Style } from "@styles";

export const CtaInformationSVG = (props: SvgProps) => {
  return (
    <Svg
      width={Style.adjust(16)}
      height={Style.adjust(16)}
      viewBox="0 0 16 16"
      fill="none"
      testID={INFO_PANEL_CTA_NOTIFICATION_BUTTON}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033ZM7.99491 6.53529C8.30499 6.53529 8.55305 6.78032 8.55305 7.08659V11.449C8.55305 11.7553 8.30499 12.0003 7.99491 12.0003C7.68484 12.0003 7.43677 11.7553 7.43677 11.449V7.08659C7.43677 6.78032 7.68484 6.53529 7.99491 6.53529ZM8.66675 4.67414C8.66675 5.0723 8.42902 5.31732 7.99491 5.31732C7.57114 5.31732 7.33341 5.0723 7.33341 4.67414C7.33341 4.20451 7.57114 4.00033 7.99491 4.00033C8.42902 4.00033 8.66675 4.20451 8.66675 4.67414Z"
        fill="white"
      />
    </Svg>
  );
};
