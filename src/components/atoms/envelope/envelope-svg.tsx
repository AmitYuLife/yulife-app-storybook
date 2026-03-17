import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

// TODO: Move to the icons folder
interface Props {
  size?: number;
  accessible?: boolean;
}

const EnvelopeSvg = ({ accessible, size = Style.adjust(20) }: Props) => {
  return (
    <Svg width={size} height={size} accessible={accessible} viewBox="0 0 221 200" fill="none">
      <Path
        d="M1 64.654a2 2 0 012-2h215.826a2 2 0 012 2V184c0 8.837-7.164 16-16 16H17c-8.837 0-16-7.163-16-16V64.654z"
        fill="#D5C6FF"
      />
      <Path
        d="M109.915.432a3.208 3.208 0 013.212 0l107.867 62.256-109.521 62.752L2 62.736 109.915.431z"
        fill="#8B5BFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.9 41.365c-9.371-9.404-24.705-8.977-33.65 1.282-8.092 9.404-6.815 23.938 1.704 32.487l27.261 27.784c2.556 2.565 6.815 2.565 8.945 0l27.26-27.784c8.519-8.977 9.797-23.083 1.704-32.487-8.519-10.259-23.853-10.686-33.224-1.282z"
        fill="#FFD600"
      />
      <Path
        d="M98.596 45.152c2.037 3.639.101 8.61-4.323 11.105-4.425 2.494-9.663 1.566-11.7-2.072-2.036-3.639-.1-8.61 4.324-11.105 4.425-2.494 9.663-1.567 11.7 2.072z"
        fill="#fff"
      />
      <Path
        d="M102.693 98.31c12.588 1.761 44.901-36.831 39.496-58.624 13.794 12.362 7.428 28.625 2.161 34.416-8.595 8.661-25.096 25.52-28.805 29.601-3.136 2.508-6.564.671-7.928-.412l-4.924-4.98z"
        fill="#FFBF00"
      />
      <Path d="M111.977 124.733L.99 62.148l.036 121.267s-.45 7.099 5.632 12.389l105.319-71.071z" fill="#EAE3FF" />
      <Path d="M110.593 124.857l110.403-62.21-.004 120.768s.451 7.099-5.631 12.389l-104.768-70.947z" fill="#B79EFF" />
    </Svg>
  );
};

export default memo(EnvelopeSvg);
