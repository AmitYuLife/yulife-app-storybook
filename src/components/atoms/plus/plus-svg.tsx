import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { PLUS_BUTTON } from "@ids";
import { Style, Colours } from "@styles";

const SIZE = Style.adjust(24);

// TODO: Move to the icons folder
const _PlusSVG = () => {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none" testID={PLUS_BUTTON}>
      <Path
        d="M0.68644 12.0578L23.3136 11.9422"
        stroke={Colours.neutral.n800}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0578 23.3136L11.9422 0.68644"
        stroke={Colours.neutral.n800}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PlusSVG = React.memo(_PlusSVG);

export default PlusSVG;
