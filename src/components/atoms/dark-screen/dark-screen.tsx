import React, { memo } from "react";
import Svg, { Defs, Mask, Rect } from "react-native-svg";

interface IProps {
  highlight?: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

const DarkScreen = ({ highlight }: IProps) => (
  <Svg height="100%" width="100%">
    <Defs>
      <Mask id="dark-screen-mask" x="0" y="0" height="100%" width="100%">
        <Rect height="100%" width="100%" fill="white" />
        {highlight ? (
          <Rect
            x={highlight.left}
            y={highlight.top}
            rx="50"
            ry="50"
            width={highlight.width}
            height={highlight.height}
            fill="black"
            fillOpacity="100%"
          />
        ) : null}
      </Mask>
    </Defs>
    <Rect height="100%" width="100%" mask="url(#dark-screen-mask)" fill="rgba(0, 0, 0, 0.3)" />
  </Svg>
);

export default memo(DarkScreen);
