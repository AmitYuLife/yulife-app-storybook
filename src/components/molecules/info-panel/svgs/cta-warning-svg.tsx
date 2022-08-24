import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { INFO_PANEL_CTA_WARNING_BUTTON } from "@ids";
import { Style } from "@styles";

export const CtaWarningSVG = (props: SvgProps) => {
  return (
    <Svg
      width={Style.adjust(16)}
      height={Style.adjust(16)}
      viewBox="0 0 16 16"
      fill="none"
      testID={INFO_PANEL_CTA_WARNING_BUTTON}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.76266 1.23101C8.37024 0.471774 7.36027 0.480919 6.97959 1.24716L0.790038 13.7055C0.424562 14.4412 0.915521 15.3337 1.68567 15.3337H14.3144C15.0921 15.3337 15.5823 14.4254 15.2019 13.6894L8.76266 1.23101ZM7.33451 6.31203C7.33451 5.66699 7.54369 5.33366 8.00008 5.33366C8.45647 5.33366 8.66675 5.66699 8.66565 6.31203L8.33341 10.0003C8.33341 10.0894 8.26631 10.667 8.00008 10.667C7.73385 10.667 7.66675 10.0894 7.66675 10.0003L7.33451 6.31203ZM8.00008 12.667C8.36827 12.667 8.66675 12.3685 8.66675 12.0003C8.66675 11.6321 8.36827 11.3337 8.00008 11.3337C7.63189 11.3337 7.33341 11.6321 7.33341 12.0003C7.33341 12.3685 7.63189 12.667 8.00008 12.667Z"
        fill="white"
      />
    </Svg>
  );
};
