import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const DoubleChest: React.FC = () => {
  return (
    <Svg width={22} height={23} viewBox="0 0 22 23" fill="none">
      <Path d="M2 12h20v9a2 2 0 01-2 2H4a2 2 0 01-2-2v-9z" fill="#FD7841" />
      <Path
        d="M2 13h20v-1a5 5 0 00-5-5H7a5 5 0 00-5 5v1zM9.586 1a1 1 0 012 0v2a1 1 0 11-2 0V1zM4.304 4.133a1 1 0 111.392-1.437l1.437 1.39A1 1 0 115.74 5.525L4.304 4.133zM17.133 4.133a1 1 0 00-1.391-1.437l-1.438 1.39a1 1 0 001.392 1.438l1.437-1.391z"
        fill="#FFB803"
      />
      <Path d="M0 12h20v9a2 2 0 01-2 2H2a2 2 0 01-2-2v-9z" fill="#FFB13C" />
      <Path d="M0 13h20v-1a5 5 0 00-5-5H5a5 5 0 00-5 5v1z" fill="#FFD363" />
      <Path d="M7 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2z" fill="#FFF3DB" />
      <Circle cx={10} cy={13} r={1} fill="#FFB13B" />
    </Svg>
  );
};

export default DoubleChest;
