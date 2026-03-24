import React, { memo } from "react";
import { Style } from "@styles";
import Svg, { Rect, Path } from "react-native-svg";
import { useTheme } from "@modules/themes/hooks/useTheme";

type Props = {
  isDoneToday: boolean;
};

export const StreakIcon = memo(({ isDoneToday }: Props) => {
  const { theme } = useTheme();
  const { primary } = theme.colors;
  const color = isDoneToday ? primary.p100 : primary.p400;

  return (
    <Svg width={Style.adjust(64)} height={Style.adjust(72)} viewBox="0 0 64 72" fill="none">
      <Rect x={9} y={54} width={46} height={18} rx={4} fill={color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.644 53.874A5.983 5.983 0 0 1 13 52h38c1.715 0 3.263.72 4.356 1.874A31.888 31.888 0 0 0 64 32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 8.46 3.283 16.152 8.644 21.874Z"
        fill={color}
      />
      <Path d="M21.5 23.583h23.333v15.25a4 4 0 0 1-4 4H25.5a4 4 0 0 1-4-4v-15.25Z" fill={primary.p60} />
      <Path d="M21.5 26.15h23.333v-3.417a3 3 0 0 0-3-3H24.5a3 3 0 0 0-3 3v3.417Z" fill={primary.p200} />
      <Path d="M19.166 23.583H42.5v15.25a4 4 0 0 1-4 4H23.166a4 4 0 0 1-4-4v-15.25Z" fill={primary.p40} />
      <Path d="M19.166 26.15H42.5v-3.417a3 3 0 0 0-3-3H22.166a3 3 0 0 0-3 3v3.417Z" fill={primary.p100} />
      <Path
        d="M25 18.333a1.167 1.167 0 0 1 2.333 0v4.084a1.167 1.167 0 1 1-2.333 0v-4.084ZM35.5 18.333a1.167 1.167 0 0 1 2.333 0v4.084a1.167 1.167 0 1 1-2.333 0v-4.084Z"
        fill={primary.p200}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.053 29.153c.467.443.487 1.182.044 1.65l-7.295 7.7a1.167 1.167 0 0 1-1.704-.01l-3.204-3.466a1.167 1.167 0 0 1 1.713-1.584l2.358 2.55 6.438-6.795a1.167 1.167 0 0 1 1.65-.045Z"
        fill={color}
      />
    </Svg>
  );
});
