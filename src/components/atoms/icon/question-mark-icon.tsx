import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface Props {
  width?: number;
  height?: number;
}

export const QuestionMarkIcon = memo(({ width = Style.adjust(16), height = Style.adjust(16) }: Props) => {
  const { theme } = useTheme();

  return (
    <Svg width={width} height={height} viewBox="0 0 34 34" fill="none">
      <Path
        d="M17 32.9375C25.802 32.9375 32.9375 25.802 32.9375 17C32.9375 8.19796 25.802 1.0625 17 1.0625C8.19796 1.0625 1.0625 8.19796 1.0625 17C1.0625 25.802 8.19796 32.9375 17 32.9375Z"
        fill={theme.colors.primary.p600}
      />
      <Path
        d="M14.166 14.1091C14.166 13.3172 14.7348 11.229 17.2118 11.3373C18.8587 11.4093 19.8327 12.8672 19.8327 14.1091C19.8327 15.0271 19.5316 15.513 19.1775 16.089C18.9642 16.3792 18.2743 17.3129 17.4952 18.3389C17.0851 18.8788 17.1056 19.3468 17.1056 19.9408M17.1306 22.6666H17.1056"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
