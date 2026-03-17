import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { BUTTON_CLOSE } from "@ids";
import { Style, Colours } from "@styles";

interface Props {
  stroke?: string;
  size?: number;
  accessible?: boolean;
  strokeWidth?: number;
}

const DEFAULT_SIZE = Style.adjust(24);

const CloseSvg = ({ stroke, accessible, size = DEFAULT_SIZE, strokeWidth = 1 }: Props) => {
  const safeStroke = stroke || Colours.neutral.n800;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" testID={BUTTON_CLOSE} accessible={accessible}>
      <Path d="M4 20L20 4" stroke={safeStroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M20 20L4 4" stroke={safeStroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default memo(CloseSvg);
