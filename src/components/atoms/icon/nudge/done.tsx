import { Style } from "@styles";
import { memo } from "react";
import { Path, Rect, Svg } from "react-native-svg";

type Props = {
  size?: number;
};

export const DoneNudgeIcon = memo(({ size = Style.adjust(24) }: Props) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Rect width={24} height={24} fill="#66CC78" rx={12} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M19.411 7.13a.43.43 0 0 1-.007.61l-9.598 9.365a.43.43 0 0 1-.606-.003l-4.074-4.074a.43.43 0 0 1 .61-.61l3.773 3.773 9.293-9.069a.43.43 0 0 1 .61.008Z"
      clipRule="evenodd"
    />
  </Svg>
));
