import { memo } from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const ClaimLights = () => {
  return (
    <Svg width={375} height={506} viewBox="0 0 375 506" fill="none">
      <Path
        d="M309.664 4.274l121.028 32.43L279.57 483.293h-58.557L309.664 4.274z"
        fill="url(#paint0_linear_8736_14031)"
      />
      <Path d="M65.029 4.274L-56 36.704 94.906 483.293h57.496L65.029 4.274z" fill="url(#paint1_linear_8736_14031)" />
      <Path d="M123.976 0h125.298l-28.64 483.293h-68.019L123.976 0z" fill="url(#paint2_linear_8736_14031)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_8736_14031"
          x1={227.846}
          y1={603.537}
          x2={119.215}
          y2={184.536}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.160836} stopColor="#fff" stopOpacity={0.4} />
          <Stop offset={0.9969} stopColor="#456E9F" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_8736_14031"
          x1={146.74}
          y1={603.143}
          x2={255.194}
          y2={184.326}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.160836} stopColor="#fff" stopOpacity={0.4} />
          <Stop offset={0.9969} stopColor="#456E9F" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_8736_14031"
          x1={200.047}
          y1={597.119}
          x2={-11.767}
          y2={221.451}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.160836} stopColor="#fff" stopOpacity={0.4} />
          <Stop offset={0.9969} stopColor="#456E9F" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default memo(ClaimLights);
