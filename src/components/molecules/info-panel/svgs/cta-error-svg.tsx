import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { INFO_PANEL_CTA_ERROR_BUTTON } from "@ids";
import { Style } from "@styles";

export const CtaErrorSVG = (props: SvgProps) => {
  return (
    <Svg
      width={Style.adjust(16)}
      height={Style.adjust(16)}
      viewBox="0 0 16 16"
      fill="none"
      testID={INFO_PANEL_CTA_ERROR_BUTTON}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033ZM8.00525 9.46536C7.69517 9.46536 7.44711 9.22034 7.44711 8.91406L7.44711 4.55163C7.44711 4.24535 7.69517 4.00033 8.00525 4.00033C8.31533 4.00033 8.56339 4.24535 8.56339 4.55163L8.56339 8.91406C8.56339 9.22034 8.31533 9.46536 8.00525 9.46536ZM7.33342 11.3265C7.33342 10.9284 7.57114 10.6833 8.00525 10.6833C8.42902 10.6833 8.66675 10.9284 8.66675 11.3265C8.66675 11.7961 8.42902 12.0003 8.00525 12.0003C7.57114 12.0003 7.33342 11.7961 7.33342 11.3265Z"
        fill="white"
      />
    </Svg>
  );
};
