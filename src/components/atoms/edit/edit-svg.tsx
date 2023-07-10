import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { EDIT_BUTTON } from "@ids";
import { Style } from "@styles";

// TODO: Move to the icons folder

const EditSVG = (props: SvgProps) => {
  return (
    <Svg
      width={Style.adjust(24)}
      height={Style.adjust(24)}
      viewBox="0 0 24 24"
      fill="none"
      testID={EDIT_BUTTON}
      {...props}
    >
      <Path
        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
        stroke="#6E6E70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
        stroke="#6E6E70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EditSVG;
