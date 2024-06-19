import { memo } from "react";
import Svg, { Defs, Mask, Rect, Circle, G } from "react-native-svg";
import { LEVEL_SIZE } from "./level.styles";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { LevelSvgLegacy } from "./levelSvg.legacy";
import { Colours } from "@styles";

interface IProps {
  backgroundColour: string;
  borderWidth?: number;
  hasNotification?: boolean;
  notificationBorderWidth?: number;
  isPastLevel: boolean;
  isPending: boolean;
  isActive: boolean;
}

const _LevelSvg = ({
  backgroundColour,
  borderWidth,
  hasNotification,
  notificationBorderWidth,
  isPastLevel,
  isPending,
  isActive,
}: IProps) => {
  const { tempQuestMapLevelBubbleRedesign } = useSelector(getUserFeatures);

  if (!tempQuestMapLevelBubbleRedesign) {
    return (
      <LevelSvgLegacy
        backgroundColour={backgroundColour}
        borderWidth={borderWidth}
        hasNotification={hasNotification}
        notificationBorderWidth={notificationBorderWidth}
      />
    );
  }

  return (
    <Svg width={LEVEL_SIZE} height={LEVEL_SIZE} viewBox="0 0 62 62">
      <Defs>
        <Mask id="notification-mask" x={0} y={0} width={62} height={62}>
          <Rect x={0} y={0} width={62} height={62} fill="#fff" />
        </Mask>
      </Defs>
      <G mask={!notificationBorderWidth ? null : "url(#notification-mask)"}>
        <Circle
          x={31}
          y={31}
          r={26}
          fill={getBubbleBackgroundColor({ isPending, isPastLevel, isActive, backgroundColor: backgroundColour })}
        />
      </G>
      {!hasNotification ? null : <Circle x={50} y={12} r={12} fill={Colours.neutral.white} />}
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
