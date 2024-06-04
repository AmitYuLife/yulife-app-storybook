import { Colours, Style } from "@styles";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";

interface IProps {
  color?: string;
  size?: number;
}

export const CaretIcon = memo(({ color, size = Style.adjust(24) }: IProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.64645 3.64644C7.84171 3.45118 8.15829 3.45118 8.35355 3.64644L16.3536 11.6464C16.5488 11.8417 16.5488 12.1583 16.3536 12.3536L8.35355 20.3536C8.15829 20.5488 7.84171 20.5488 7.64645 20.3536C7.45119 20.1583 7.45119 19.8417 7.64645 19.6464L15.2929 12L7.64645 4.35355C7.45118 4.15829 7.45118 3.84171 7.64645 3.64644Z"
      fill={color || Colours.primary.p600}
    />
  </Svg>
));
