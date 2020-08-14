import React from "react";
import Svg, { Path } from "react-native-svg";

function Bin() {
  return (
    <Svg width={19} height={21} viewBox="0 0 19 21" fill="none">
      <Path
        d="M13.78 20H4.967c-1.193 0-2.157-.932-2.157-2.084V4.303h13.116v13.613c.01 1.152-.954 2.084-2.146 2.084zM1.122 4.303h16.434M11.18 1.097H7.582c-.819 0-1.482.641-1.482 1.433v1.773h6.563V2.53c0-.792-.664-1.433-1.483-1.433zM6.943 7.208v9.847M11.712 7.208v9.847"
        stroke="#838385"
        strokeWidth={1.351}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Bin;
