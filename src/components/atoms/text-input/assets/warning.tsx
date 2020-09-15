import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export const Warning = ({ height = 24, width = 24 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.9196 3.60056L1.79497 20.5254C1.43578 21.1917 1.9183 22 2.6752 22H21.2926C22.0569 22 22.5386 21.1774 22.1648 20.5108L12.672 3.58593C12.2864 2.8983 11.2938 2.90659 10.9196 3.60056Z"
        stroke="#FC0000"
      />
      <Circle cx="12" cy="18" r="1" fill="#FC0000" />
      <Path
        d="M12.0003 8C11.3157 8 11.002 8.5 11.002 9.46756L11.5003 15C11.5003 15.1336 11.601 16 12.0003 16C12.3996 16 12.5003 15.1336 12.5003 15L12.9987 9.46756C13.0003 8.5 12.6849 8 12.0003 8Z"
        fill="#FC0000"
      />
    </Svg>
  );
};

export default Warning;
