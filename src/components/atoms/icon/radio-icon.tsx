import { Style } from "@styles";
import React, { memo } from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface IProps {
  checked: boolean;
}

export const RadioIcon = memo(({ checked }: IProps) => {
  const colour = checked ? "#40C057" : "#FF5F5F";
  return (
    <Svg width={Style.adjust(16)} height={Style.adjust(16)} viewBox="0 0 16 16" fill="none">
      <Circle cx={8} cy={8} r={7.5} fill={colour} stroke={colour} />
      {checked ? (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.16 5.18a.222.222 0 01-.006.314l-5.558 5.333a.222.222 0 01-.31-.002l-2.442-2.4a.222.222 0 01.312-.317l2.288 2.249 5.402-5.184a.222.222 0 01.314.006z"
          fill="#fff"
        />
      ) : (
        <>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.713 4.287a.222.222 0 010 .315l-7.111 7.11a.222.222 0 01-.315-.314l7.111-7.11a.222.222 0 01.315 0z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.287 4.287a.222.222 0 01.315 0l7.11 7.111a.222.222 0 11-.314.315l-7.11-7.111a.222.222 0 010-.315z"
            fill="#fff"
          />
        </>
      )}
    </Svg>
  );
});
