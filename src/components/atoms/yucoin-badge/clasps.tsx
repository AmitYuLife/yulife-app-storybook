import React, { memo } from "react";
import { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Colours } from "@styles";

interface IProps {
  isGrayScale?: boolean;
}

const DEFAULT_COLORS = ["#F8CB31", "#EDB720", "#FFF48E", "#FFED44"];

const Clasps = ({ isGrayScale }: IProps) => {
  const colors = isGrayScale ? Colours.toGrayScaleArray(DEFAULT_COLORS) : DEFAULT_COLORS;
  return (
    <>
      <Path
        d="M99.063 51.431c-3.977 0-14.49-15.727-12.9-19.085 1.855-3.71 24.032-3.622 25.888 0 1.767 3.711-9.278 19.085-12.989 19.085z"
        fill={colors[0]}
      />
      <Path
        d="M99.062 47.013c-3.976 0-14.49-14.49-12.9-17.494 1.856-3.446 24.033-3.27 25.889 0 1.767 3.269-9.278 17.494-12.989 17.494z"
        fill="url(#clasps__paint0_linear)"
      />
      <Path
        d="M148.21 97.063s-.883 3.269.972 6.184c1.856 3.005 12.989 11.928 15.904 11.31 3.004-.53 3.358-6.45 3.093-19.173l-19.969 1.678z"
        fill={colors[1]}
      />
      <Path
        d="M148.21 97.063c0-3.977 14.49-14.49 17.495-12.9 3.445 1.855 3.269 24.032 0 25.888-3.358 1.767-17.495-9.278-17.495-12.989z"
        fill="url(#clasps__paint1_linear)"
      />
      <Path
        d="M95.754 147.855c-16.787 14.932-11.044 21.559-9.807 22.885 2.386 2.562 14.932 4.417 23.414 1.413 1.326-.442 2.916-1.679 3.711-3.092 1.679-3.004 2.651-9.454-10.779-21.382l-6.539.176z"
        fill={colors[1]}
      />
      <Path
        d="M99.112 146c3.976 0 14.491 14.49 12.9 17.495-1.855 3.445-24.033 3.269-25.888 0C84.357 160.137 95.4 146 99.112 146z"
        fill="url(#clasps__paint2_linear)"
      />
      <Path
        d="M49.922 97.062s.795 3.27-.972 6.185c-1.855 3.004-12.811 11.928-15.816 11.31-3.004-.619-3.269-6.45-3.092-19.173l19.88 1.678z"
        fill={colors[1]}
      />
      <Path
        d="M49.922 97.062c0-3.976-14.313-14.49-17.317-12.9-3.358 1.856-3.27 24.033 0 25.889 3.269 1.767 17.317-9.278 17.317-12.989z"
        fill="url(#clasps__paint3_linear)"
      />
      <Path
        d="M94.232 35.447a4.95 4.95 0 019.635.962 4.949 4.949 0 10-9.635-.962zM154.397 98.002a4.95 4.95 0 019.497 1.801 4.948 4.948 0 10-9.497-1.8zM94.63 157.53a4.948 4.948 0 019.242 2.904 4.948 4.948 0 10-9.242-2.904zM33.136 96.795a4.948 4.948 0 018.625 4.307 4.948 4.948 0 10-8.625-4.307z"
        fill={colors[0]}
      />
      <Path
        d="M99.203 39.96a5 5 0 100-10 5 5 0 000 10zM159.395 102.91a5 5 0 10-.001-10.001 5 5 0 00.001 10.001zM99.606 163.068a5 5 0 100-10 5 5 0 000 10zM38 103a5 5 0 100-10 5 5 0 000 10z"
        fill={colors[0]}
        fillOpacity={0.44}
      />
      <Defs>
        <LinearGradient
          id="clasps__paint0_linear"
          x1={85.999}
          y1={36.971}
          x2={112.226}
          y2={36.971}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[2]} />
          <Stop offset={1} stopColor={colors[3]} />
        </LinearGradient>
        <LinearGradient
          id="clasps__paint1_linear"
          x1={158.196}
          y1={83.98}
          x2={158.196}
          y2={110.206}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[2]} />
          <Stop offset={1} stopColor={colors[3]} />
        </LinearGradient>
        <LinearGradient
          id="clasps__paint2_linear"
          x1={112.232}
          y1={156.002}
          x2={86.006}
          y2={156.002}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[2]} />
          <Stop offset={1} stopColor={colors[3]} />
        </LinearGradient>
        <LinearGradient
          id="clasps__paint3_linear"
          x1={40.012}
          y1={83.936}
          x2={40.012}
          y2={110.162}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors[2]} />
          <Stop offset={1} stopColor={colors[3]} />
        </LinearGradient>
      </Defs>
    </>
  );
};

export default memo(Clasps);
