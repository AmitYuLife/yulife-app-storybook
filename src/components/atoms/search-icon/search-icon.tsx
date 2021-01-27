import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Style } from "../../../styles";

function SearchIcon(props: SvgProps = {}) {
  const color = props.color || "#5A5A5C";
  return (
    <Svg width={Style.adjust(16)} height={Style.adjust(16)} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M5.983 11.286a5.312 5.312 0 005.315-5.31c0-2.932-2.38-5.31-5.315-5.31a5.312 5.312 0 00-5.315 5.31c0 2.933 2.38 5.31 5.315 5.31zM9.781 9.723L11.6 11.54"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.89 10.859l-1.03 1.029 3.448 3.445 1.03-1.028-3.449-3.446z"
        fill="#fff"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
