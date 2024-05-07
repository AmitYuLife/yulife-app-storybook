import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  colour: string;
  width?: number;
  height?: number;
}

const CloudSVG = ({ colour, width = Style.adjust(56), height = Style.adjust(16) }: IProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 16" fill="none">
      <Path
        fill={colour}
        d="M55.064 16H.937C.115 16-.31 14.982.262 14.376c1.724-1.82 4.915-4.575 8.733-5.023 5.783-.676 10.382-.815 12.483-2.303C23.58 5.56 29.402 0 37.38 0c3.106 0 5.651 2.713 6.834 5.422 1.184 2.713 3.023 3.66 6.045 4.611 1.902.596 4.115 2.806 5.495 4.363.547.615.122 1.604-.69 1.604Z"
      />
    </Svg>
  );
};

export default memo(CloudSVG);
