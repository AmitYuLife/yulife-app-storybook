import { Style } from "@styles";
import * as React from "react";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IAlarmClockIconProps {
  colour?: string;
}

export const AlarmClockIcon = memo(({ colour = "#ffffff" }: IAlarmClockIconProps) => {
  return (
    <Svg width={Style.adjust(16)} height={Style.adjust(16)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5.354 2.354l-3 3a.5.5 0 11-.708-.708l3-3a.5.5 0 11.708.708zM18.646 1.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708zM12.5 4.5a.5.5 0 00-1 0V12a.5.5 0 00.5.5h5.5a.5.5 0 000-1h-5v-7z"
        fill={colour}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 9a9 9 0 100-18 9 9 0 000 18z"
        fill={colour}
      />
    </Svg>
  );
});
