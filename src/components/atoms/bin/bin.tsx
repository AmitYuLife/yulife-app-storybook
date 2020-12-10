import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
}

function Bin({ color }: Props) {
  return (
    <Svg width={19} height={21} viewBox="0 0 19 21">
      <Path
        d="M13.657 19.903H4.844c-1.192 0-2.157-.931-2.157-2.083V4.206h13.116V17.82c.01 1.152-.954 2.083-2.146 2.083zM1 4.206h16.434M11.057 1H7.459c-.819 0-1.482.641-1.482 1.433v1.773h6.563V2.433C12.54 1.64 11.876 1 11.057 1zM7 7v9.847M11.59 7.11v9.848"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Bin;
