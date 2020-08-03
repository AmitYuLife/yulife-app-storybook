import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
import { LEADERBOARD_PEDESTAL } from "@ids";
import { Style } from "@styles";

const VIEWBOX_MIN_X = 15;
const VIEWBOX_MIN_Y = 80;
const VIEWBOX_WIDTH = 340;
const SVG_WIDTH = VIEWBOX_WIDTH + VIEWBOX_MIN_X;
const multiplier = Style.DEVICE_WIDTH / SVG_WIDTH;
const VIEWBOX_HEIGHT = 220 * multiplier;
const SVG_HEIGHT = VIEWBOX_HEIGHT + VIEWBOX_MIN_Y;
export const pedestalStyles = {
  VIEWBOX_MIN_X,
  VIEWBOX_MIN_Y,
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  SVG_WIDTH,
  SVG_HEIGHT,
  multiplier,
};

export const PodiumAsset = ({ cropAmount = 0 }: { cropAmount: number }) => {
  const {
    SVG_HEIGHT,
    SVG_WIDTH,
    multiplier,
    VIEWBOX_MIN_X,
    VIEWBOX_MIN_Y,
    VIEWBOX_WIDTH,
    VIEWBOX_HEIGHT,
  } = pedestalStyles;
  return (
    <Svg
      style={{ marginTop: -cropAmount }}
      height={SVG_HEIGHT}
      width={SVG_WIDTH * multiplier}
      viewBox={`${VIEWBOX_MIN_X} ${VIEWBOX_MIN_Y} ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      testID={LEADERBOARD_PEDESTAL}
    >
      <Defs>
        <LinearGradient
          id="iPhone_11_Pro_/_X_-_1__paint0_linear"
          x1="186.72"
          y1="39.896"
          x2="186.292"
          y2="266.62"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity="0" />
          <Stop offset="66.1" stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="iPhone_11_Pro_/_X_-_1__paint1_linear"
          x1="-7.812"
          y1="58.533"
          x2="94.264"
          y2="289.693"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.3" stopColor="#fff" stopOpacity="0" />
          <Stop offset="100" stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="iPhone_11_Pro_/_X_-_1__paint2_linear"
          x1="287.23"
          y1="61.638"
          x2="394.434"
          y2="301.109"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.3" stopColor="#fff" stopOpacity="0" />
          <Stop offset="100" stopColor="#fff" />
        </LinearGradient>
      </Defs>
      <Path d="M375.293-11.8H-.293v409.919h375.586v-409.92z" fill="#E1F3FF" />
      <Path
        d="M142.243 261.025L15.313-71.103h342.293L231.717 261.024h-89.474z"
        fill="url(#iPhone_11_Pro_/_X_-_1__paint0_linear)"
      />
      <Path
        d="M-70 66.147L63.692 282.395h82.192L-6.379-69.023-70 66.147z"
        fill="url(#iPhone_11_Pro_/_X_-_1__paint1_linear)"
        fillOpacity="80"
      />
      <Path
        d="M445 76.904L308.187 294.6h-84.793L378.57-71.103 445 76.904z"
        fill="url(#iPhone_11_Pro_/_X_-_1__paint2_linear)"
        fillOpacity="80"
      />
      <Path d="M89.407 366.907h64.28v-84.273H63.172l26.236 84.273z" fill="#00C0F3" />
      <Path d="M78.477 261.157a8.325 8.325 0 016.778-3.493h60.527l8.945 24.97H63.172l15.305-21.477z" fill="#7EDCF5" />
      <Path
        d="M101.499 297.925c-.12.273-.151.454-.151.697 0 .908.723 1.635 1.626 1.635.632 0 1.173-.333 1.504-.969.542-1.151 1.565-2.181 3.431-2.181 2.287 0 3.521 1.484 3.521 3.18 0 5.664-10.804 6.361-10.804 13.055 0 .848.692 1.544 1.535 1.544h11.496a1.546 1.546 0 000-3.089h-9.239c0-2.665 10.443-5.119 10.443-11.51 0-3.725-2.588-6.209-6.952-6.209-3.31 0-5.447 1.636-6.41 3.847z"
        fill="#fff"
      />
      <Path d="M283.473 366.907h-64.241v-73.869h90.516l-26.275 73.869z" fill="#00ED9D" />
      <Path d="M227.663 268.068h60.453a8.324 8.324 0 016.845 3.589l14.786 21.381h-91.555l9.471-24.97z" fill="#80F6CD" />
      <Path
        d="M264.344 309.657l-4.244 4.884c-.24.303-.391.576-.391 1.061 0 .88.692 1.578 1.625 1.578h1.866c2.709 0 3.581 1.516 3.581 3.639 0 2.154-1.264 3.519-3.972 3.519-1.956 0-3.1-.88-4.123-2.063-.512-.576-.903-.788-1.445-.788-.872 0-1.595.728-1.595 1.607 0 .334.091.637.271.91 1.294 1.851 3.762 3.367 6.892 3.367 4.905 0 7.403-2.396 7.403-6.552 0-3.215-1.294-6.187-5.537-6.673l4.394-5.005c.3-.333.391-.697.391-1.031 0-.849-.692-1.547-1.535-1.547h-9.63a1.548 1.548 0 000 3.094h6.049z"
        fill="#fff"
      />
      <Path d="M222.479 365.866h-70.998l-10.279-105.081h91.556l-10.279 105.081z" fill="#956AFF" />
      <Path
        d="M148.636 241.187a8.323 8.323 0 017.782-5.371h61.535a8.323 8.323 0 017.836 5.516l6.969 19.453h-91.556l7.434-19.598z"
        fill="#C7B4FD"
      />
      <Path
        d="M185.667 284.028v20.125c0 1.311 1.249 2.41 2.737 2.41 1.489 0 2.737-1.099 2.737-2.41v-24.311c0-1.311-1.248-2.41-2.737-2.41-.72 0-1.152.211-1.68.507l-6.915 3.932a2.244 2.244 0 00-1.153 1.945c0 1.269 1.201 2.326 2.642 2.326.624 0 1.152-.169 1.584-.465l2.785-1.649zm190.781 49.638v321.557H-.293V314.616a23.46 23.46 0 0113.525-4.287c10.11 0 18.837 6.517 22.599 15.822.638-.053 1.283-.08 1.934-.08 4.46 0 8.645 1.261 12.252 3.465 3.924-2.83 8.663-4.485 13.768-4.485 4.118 0 7.998 1.074 11.407 2.973 4.496-5.33 11.03-8.685 18.308-8.685 6.668 0 12.714 2.831 17.141 7.411 3.942-2.857 8.711-4.529 13.852-4.529 12.874 0 23.413 10.479 24.485 23.827a24.857 24.857 0 012.979 2.302c4.286-3.864 9.838-6.195 15.9-6.195 6.874 0 13.088 2.997 17.546 7.826a13.105 13.105 0 011.962-.147c5.083 0 9.521 2.929 11.895 7.283 4.382-7.134 11.977-11.84 20.617-11.84 1.861 0 3.673.22 5.415.637 4.118-3.317 9.252-5.288 14.821-5.288 5.84 0 11.203 2.162 15.418 5.77 4.498-6.029 11.454-9.9 19.269-9.9.654 0 1.302.027 1.943.08 3.827-5.927 9.901-10.085 16.917-11.105 4.306-7.546 12.12-12.593 21.04-12.593 6.341 0 12.123 2.548 16.483 6.732 4.365-7.22 11.997-12.006 20.69-12.006 13.578 0 24.575 11.662 24.575 26.062z"
        fill="#fff"
      />
    </Svg>
  );
};
