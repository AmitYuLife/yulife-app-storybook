import { memo } from "react";
import Svg, { Defs, Mask, Rect, Circle, G } from "react-native-svg";
import { LEVEL_SIZE } from "./level.styles";
import { Colours } from "@styles";
import { LEVEL_SVG } from "@ids";

interface IProps {
  backgroundColour: string;
  borderWidth?: number;
  notificationBorderWidth?: number;
  isPastLevel: boolean;
  isPending: boolean;
  isActive: boolean;
  level: number;
}

const _LevelSvg = ({ backgroundColour, notificationBorderWidth, isPastLevel, isPending, isActive, level }: IProps) => {
  const fillBackground = getBubbleBackgroundColor({
    isPending,
    isPastLevel,
    isActive,
    backgroundColor: backgroundColour,
  });

  return (
    <Svg width={LEVEL_SIZE} height={LEVEL_SIZE} viewBox="0 0 62 62" testID={LEVEL_SVG(fillBackground, level)}>
      <Defs>
        <Mask id="notification-mask" x={0} y={0} width={62} height={62}>
          <Rect x={0} y={0} width={62} height={62} fill="#fff" />
        </Mask>
      </Defs>
      <G mask={!notificationBorderWidth ? null : "url(#notification-mask)"}>
        <Circle x={31} y={31} r={25.5} fill={fillBackground} />
      </G>
    </Svg>
  );
};

export const LevelSvg = memo(_LevelSvg);

function getBubbleBackgroundColor({
  isPending,
  isPastLevel,
  backgroundColor,
  isActive,
}: {
  isPending: boolean;
  isPastLevel: boolean;
  backgroundColor: string;
  isActive: boolean;
}) {
  if (isActive && !isPending) {
    return backgroundColor;
  }

  return isPastLevel ? Colours.products.fib.u100S4 : backgroundColor;
}
