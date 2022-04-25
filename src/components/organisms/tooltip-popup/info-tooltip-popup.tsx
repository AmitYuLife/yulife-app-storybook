import React, { memo, useMemo } from "react";
import { Sizes } from "@components/molecules/button/button.types";
import InfoMessage from "@organisms/info-message/info-message";
import { ViewStyle } from "react-native";
import TooltipPopupWrapper, { BeakPosition } from "./tooltip-popup-wrapper";

export interface InfoMessageTooltipPointRelative {
  x: number;
  y: number;
  infoText: string;
  beakPosition: BeakPosition;
  title?: string;
  buttonLabel?: string;
  wrapperStyle?: ViewStyle;
  buttonSize?: Sizes;
  onPress?: () => void;
}

const InfoMessageTooltipPopup = ({
  x,
  y,
  title,
  infoText,
  buttonLabel,
  beakPosition,
  wrapperStyle,
  onPress,
  buttonSize = "Fill",
}: InfoMessageTooltipPointRelative) => {
  const pointPosition = useMemo(() => ({ x, y }), [x, y]);
  return (
    <TooltipPopupWrapper pointPosition={pointPosition} beakPosition={beakPosition}>
      <InfoMessage
        title={title}
        text={infoText}
        onPress={onPress}
        buttonLabel={buttonLabel}
        buttonSize={buttonSize}
        wrapperStyle={wrapperStyle}
      />
    </TooltipPopupWrapper>
  );
};

export default memo(InfoMessageTooltipPopup);
