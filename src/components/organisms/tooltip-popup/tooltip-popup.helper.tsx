import React, { ReactElement } from "react";
import { MODALS } from "@navigation/constants";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { Navigation } from "@navigation/main";
import TooltipPopupWrapper, { BeakPosition } from "./tooltip-popup-wrapper";
import InfoMessage from "@organisms/info-message/info-message";
import { Sizes } from "@components/molecules/button/button.types";
import { InfoMessageTooltipPointRelative } from "./info-tooltip-popup";

interface PopoverProps {
  viewRef: React.MutableRefObject<View | TouchableOpacity>;
  children: React.ReactNode | (({ onClose }: { onClose: () => void }) => ReactElement);
  style?: ViewStyle;
  beakPosition?: BeakPosition;
}

interface TooltipPointRelative {
  x: number;
  y: number;
  beakPosition: BeakPosition;
  children: React.ReactNode;
}

interface InfoMessageTooltipViewRelative {
  viewRef: React.MutableRefObject<View>;
  infoText: string;
  title?: string;
  buttonLabel?: string;
  beakPosition?: BeakPosition;
  wrapperStyle?: ViewStyle;
  buttonSize?: Sizes;
}

export const showTooltipPopupRelativeToView = ({
  viewRef,
  children,
  style,
  beakPosition = "autoVertical",
}: PopoverProps) => {
  viewRef?.current?.measure((_fx, _fy, width, height, pageX, pageY) => {
    const infoView = (
      <TooltipPopupWrapper
        relativePosition={{ pageX, pageY, anchorViewHeight: height, anchorViewWidth: width }}
        beakPosition={beakPosition}
        style={style}
      >
        {children}
      </TooltipPopupWrapper>
    );

    Navigation.showOverlayWithChild({ children: infoView, withBlurBackground: false });
  });
};

export const showTooltipPopupRelativeToPoint = ({
  x,
  y,
  children,
  beakPosition = "bottomCenter",
}: TooltipPointRelative) => {
  const infoView = (
    <TooltipPopupWrapper pointPosition={{ x, y }} beakPosition={beakPosition}>
      {children}
    </TooltipPopupWrapper>
  );

  Navigation.showOverlayWithChild({ children: infoView, withBlurBackground: false });
};

export const showInfoMessageTooltipPointRelative = ({
  x,
  y,
  title,
  infoText,
  buttonLabel,
  beakPosition,
  wrapperStyle,
  buttonSize = "Fill",
}: InfoMessageTooltipPointRelative) => {
  const onClose = () => Navigation.dismissOverlay(MODALS.blurredOverlay);
  const children = (
    <InfoMessage
      title={title}
      text={infoText}
      onPress={onClose}
      buttonLabel={buttonLabel}
      buttonSize={buttonSize}
      wrapperStyle={wrapperStyle}
    />
  );
  showTooltipPopupRelativeToPoint({ x, y, children, beakPosition });
};

export const showInfoMessageTooltipViewRelative = ({
  viewRef,
  title,
  infoText,
  buttonLabel,
  beakPosition,
  wrapperStyle,
  buttonSize = "Fill",
}: InfoMessageTooltipViewRelative) => {
  const children = (
    <InfoMessage
      title={title}
      text={infoText}
      onPress={dismissBlurredOverlay}
      buttonLabel={buttonLabel}
      buttonSize={buttonSize}
      wrapperStyle={wrapperStyle}
    />
  );
  showTooltipPopupRelativeToView({ viewRef, children, beakPosition });
};

const dismissBlurredOverlay = () => Navigation.dismissOverlay(MODALS.blurredOverlay);
