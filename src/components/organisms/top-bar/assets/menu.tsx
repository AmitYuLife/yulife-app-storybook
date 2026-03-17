import React from "react";
import Svg, { Path } from "react-native-svg";
import { Style, Colours } from "@styles";
import { MENU_ICON } from "@ids";

const WIDTH = String(Style.adjust(22));
const HEIGHT = String(Style.adjust(15));

interface Props {
  color?: string;
}

const Hamburger = (props: Props) => {
  const { color = Colours.neutral.n800 } = props;

  return (
    <Svg testID={MENU_ICON} width={WIDTH} height={HEIGHT} viewBox="0 0 22 15">
      <Path
        d="M21.5 7H.5a.5.5 0 000 1h21a.5.5 0 000-1zM21.5 0H.5a.5.5 0 000 1h21a.5.5 0 000-1zM21.5 14H.5a.5.5 0 000 1h21a.5.5 0 000-1z"
        fill={color}
      />
    </Svg>
  );
};

export default Hamburger;
