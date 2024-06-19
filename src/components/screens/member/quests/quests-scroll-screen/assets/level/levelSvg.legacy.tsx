import { memo } from "react";
import Svg, { Defs, Mask, Rect, Circle, G } from "react-native-svg";
import { LEVEL_SIZE } from "./level.styles";

interface IProps {
  backgroundColour: string;
  borderWidth?: number;
  hasNotification?: boolean;
  notificationBorderWidth?: number;
}

const _LevelSvg = ({ backgroundColour, borderWidth, hasNotification, notificationBorderWidth }: IProps) => (
  <Svg width={LEVEL_SIZE} height={LEVEL_SIZE} viewBox="0 0 62 62">
    <Defs>
      <Mask id="notification-mask" x={0} y={0} width={62} height={62}>
        <Rect x={0} y={0} width={62} height={62} fill="#fff" />
        {!notificationBorderWidth ? null : <Circle x={50} y={12} r={12 + notificationBorderWidth} fill="black" />}
      </Mask>
    </Defs>
    <G mask={!notificationBorderWidth ? null : "url(#notification-mask)"}>
      <Circle x={31} y={31} r={25} fill={backgroundColour} stroke={"white"} strokeWidth={borderWidth} />
    </G>
    {!hasNotification ? null : <Circle x={50} y={12} r={12} fill={backgroundColour} />}
  </Svg>
);

export const LevelSvgLegacy = memo(_LevelSvg);
