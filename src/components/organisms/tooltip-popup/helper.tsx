import { Style } from "@styles";
import { BeakPosition } from "./tooltip-popup-wrapper";

const BEAK_MIN_LEFT_POSITION = Style.adjust(20);
const BEAK_MAX_LEFT_POSITION = Style.DEVICE_WIDTH - Style.adjust(38);
const BEAK_HEIGHT = Style.adjust(20);
const BEAK_WIDTH = Style.adjust(9);
const MIN_MARGIN_BEAK = Style.adjust(10);
const BEAK_ROTATION_MARGIN = (BEAK_HEIGHT - BEAK_WIDTH) / 2;
const WRAPPER_MARGIN = Style.adjust(16);
const MARGIN_12 = Style.adjust(12);

export const getMessageViewPosition = (
  pageX: number,
  pageY: number,
  messageViewHeight: number,
  messageViewWidth: number,
  anchorViewHeight: number,
  anchorViewWidth: number,
  position: BeakPosition
) => {
  const isAutoVertical = position === "autoVertical";
  const isAutoHorizontal = position === "autoHorizontal";
  const shouldMigrateHorizontalToVertical =
    isAutoHorizontal &&
    pageX < messageViewWidth + BEAK_WIDTH &&
    Style.DEVICE_WIDTH - pageX - anchorViewWidth < messageViewWidth + BEAK_WIDTH;

  if (isAutoVertical || shouldMigrateHorizontalToVertical) {
    return getVerticalPosition(pageX, pageY, messageViewHeight, messageViewWidth, anchorViewHeight, anchorViewWidth);
  }

  return getHorizontalPosition(pageX, pageY, messageViewHeight, messageViewWidth, anchorViewHeight, anchorViewWidth);
};

export const getStaticPosition = (
  beakPosition: BeakPosition,
  anchorX: number,
  anchorY: number,
  viewWidth: number,
  viewHeight: number
) => {
  const showTooltipBellow = anchorY - Style.getSafeAreaStart() < viewHeight;
  const showToolTipRight = Style.DEVICE_WIDTH - anchorX > viewWidth;

  const autoVerticalBottom = {
    top: anchorY + BEAK_WIDTH,
    left: Math.max(0, Math.min(anchorX - viewWidth / 2, Style.DEVICE_WIDTH - viewWidth)),
    beakLeft: anchorX + BEAK_ROTATION_MARGIN - BEAK_HEIGHT / 2,
    beakTop: anchorY - BEAK_ROTATION_MARGIN + Style.adjust(1),
    beakTransform: [{ rotate: "90deg" }],
  };

  const autoVerticalTop = {
    top: anchorY - viewHeight - BEAK_WIDTH,
    left: Math.max(0, Math.min(anchorX - viewWidth / 2, Style.DEVICE_WIDTH - viewWidth)),
    beakLeft: anchorX + BEAK_ROTATION_MARGIN - BEAK_HEIGHT / 2,
    beakTop: anchorY - BEAK_WIDTH - BEAK_ROTATION_MARGIN - Style.adjust(1),
    beakTransform: [{ rotate: "-90deg" }],
  };

  const autoHorizontalLeft = {
    top: Math.max(0, anchorY - viewHeight / 2),
    left: anchorX - viewWidth - BEAK_WIDTH + Style.adjust(1),
    beakLeft: anchorX - BEAK_WIDTH,
    beakTop: anchorY - BEAK_HEIGHT / 2,
    beakTransform: [{ rotate: "180deg" }],
  };

  const autoHorizontalRight = {
    top: Math.max(0, anchorY - viewHeight / 2),
    left: anchorX + BEAK_WIDTH - Style.adjust(1),
    beakLeft: anchorX,
    beakTop: anchorY - BEAK_HEIGHT / 2,
    beakTransform: [{ rotate: "0deg" }],
  };

  const bottomCommonPosition = {
    top: anchorY - viewHeight - BEAK_WIDTH,
    beakLeft: anchorX + BEAK_ROTATION_MARGIN - BEAK_HEIGHT / 2,
    beakTop: anchorY - BEAK_WIDTH - BEAK_ROTATION_MARGIN - Style.adjust(1),
    beakTransform: [{ rotate: "-90deg" }],
  };

  const leftCommonPosition = {
    left: anchorX + BEAK_WIDTH - Style.adjust(1),
    beakLeft: anchorX,
    beakTop: anchorY - BEAK_HEIGHT / 2,
    beakTransform: [{ rotate: "0deg" }],
  };

  const topCommonPosition = {
    top: anchorY + BEAK_WIDTH,
    beakLeft: anchorX + BEAK_ROTATION_MARGIN - BEAK_HEIGHT / 2,
    beakTop: anchorY - BEAK_ROTATION_MARGIN + Style.adjust(1),
    beakTransform: [{ rotate: "90deg" }],
  };
  const rightCommonPosition = {
    left: anchorX - viewWidth - BEAK_WIDTH + Style.adjust(1),
    beakLeft: anchorX - BEAK_WIDTH,
    beakTop: anchorY - BEAK_HEIGHT / 2,
    beakTransform: [{ rotate: "180deg" }],
  };

  const positions = {
    bottomCenter: { ...bottomCommonPosition, left: anchorX - viewWidth / 2 },
    bottomRight: { ...bottomCommonPosition, left: anchorX - viewWidth + BEAK_HEIGHT / 2 + WRAPPER_MARGIN },
    bottomLeft: { ...bottomCommonPosition, left: anchorX - BEAK_HEIGHT / 2 - WRAPPER_MARGIN },
    leftTop: { ...leftCommonPosition, top: anchorY - BEAK_HEIGHT / 2 - WRAPPER_MARGIN },
    leftBottom: { ...leftCommonPosition, top: anchorY - viewHeight + BEAK_HEIGHT / 2 + WRAPPER_MARGIN },
    leftCenter: { ...leftCommonPosition, top: anchorY - viewHeight / 2 },
    topLeft: { ...topCommonPosition, left: anchorX - BEAK_HEIGHT / 2 - WRAPPER_MARGIN },
    topCenter: { ...topCommonPosition, left: anchorX - viewWidth / 2 },
    topRight: { ...topCommonPosition, left: anchorX - viewWidth + BEAK_HEIGHT / 2 + WRAPPER_MARGIN },
    rightTop: { ...rightCommonPosition, top: anchorY - BEAK_HEIGHT / 2 - WRAPPER_MARGIN },
    rightBottom: { ...rightCommonPosition, top: anchorY - viewHeight + BEAK_HEIGHT / 2 + WRAPPER_MARGIN },
    rightCenter: { ...rightCommonPosition, top: anchorY - viewHeight / 2 },
    autoVertical: showTooltipBellow ? autoVerticalBottom : autoVerticalTop,
    autoHorizontal: showToolTipRight ? autoHorizontalRight : autoHorizontalLeft,
  };

  return positions[beakPosition];
};

const getVerticalPosition = (
  pageX: number,
  pageY: number,
  messageViewHeight: number,
  messageViewWidth: number,
  anchorViewHeight: number,
  anchorViewWidth: number
) => {
  const INFO_WRAPPER_MAX_LEFT_POSITION = Style.DEVICE_WIDTH - messageViewWidth - Style.adjust(8);
  const INFO_WRAPPER_MIN_LEFT_POSITION = Style.adjust(8);
  const anchorViewCenter = pageX + anchorViewWidth / 2;
  const beakInitialPosition = anchorViewCenter - BEAK_WIDTH / 2;
  const setBeakMinimPosition = beakInitialPosition < Style.adjust(30);
  const setBeakMaxPosition = beakInitialPosition > Style.DEVICE_WIDTH - Style.adjust(30);
  const showTooltipBellow = pageY - Style.getSafeAreaStart() < messageViewHeight;
  const commonPosition = showTooltipBellow
    ? {
        top: pageY + anchorViewHeight + BEAK_WIDTH - Style.adjust(1),
        beakTop: pageY + anchorViewHeight - BEAK_ROTATION_MARGIN,
        beakTransform: [{ rotate: "90deg" }],
      }
    : {
        top: pageY - messageViewHeight - BEAK_WIDTH + Style.adjust(1),
        beakTop: pageY - BEAK_WIDTH - BEAK_ROTATION_MARGIN,
        beakTransform: [{ rotate: "270deg" }],
      };

  const showViewOnCenterOfAnchor =
    anchorViewCenter > messageViewWidth / 2 && anchorViewCenter + messageViewWidth / 2 < Style.DEVICE_WIDTH;
  const showViewOnLeft = anchorViewCenter <= messageViewWidth / 2;

  if (showViewOnCenterOfAnchor) {
    return {
      ...commonPosition,
      left: anchorViewCenter - messageViewWidth / 2,
      beakLeft: anchorViewCenter - BEAK_WIDTH / 2,
    };
  }

  if (showViewOnLeft) {
    return {
      ...commonPosition,
      left: INFO_WRAPPER_MIN_LEFT_POSITION,
      beakLeft: setBeakMinimPosition ? BEAK_MIN_LEFT_POSITION : beakInitialPosition,
    };
  }

  return {
    ...commonPosition,
    left: INFO_WRAPPER_MAX_LEFT_POSITION,
    beakLeft: setBeakMaxPosition ? BEAK_MAX_LEFT_POSITION : beakInitialPosition,
  };
};

const getHorizontalPosition = (
  pageX: number,
  pageY: number,
  messageViewHeight: number,
  messageViewWidth: number,
  anchorViewHeight: number,
  anchorViewWidth: number
) => {
  const marginTop = (anchorViewHeight - BEAK_HEIGHT) / 2;
  const showViewOnRightSide = Style.DEVICE_WIDTH - pageX - anchorViewWidth > messageViewWidth;
  const topPositionForBottomLimit = pageY + anchorViewHeight / 2 - messageViewHeight + BEAK_HEIGHT + MIN_MARGIN_BEAK;

  const showViewOnTop = Style.DEVICE_HEIGHT - pageY - anchorViewHeight / 2 < messageViewHeight;
  const viewIsOnMaxBottomLimit = Style.DEVICE_HEIGHT - topPositionForBottomLimit < messageViewHeight;

  const beakPositionTopBottomLimit = Style.DEVICE_HEIGHT - BEAK_HEIGHT - MIN_MARGIN_BEAK - MARGIN_12;
  const beakPositionTop = showViewOnTop && viewIsOnMaxBottomLimit ? beakPositionTopBottomLimit : pageY + marginTop;
  const bottomLimitPosition = viewIsOnMaxBottomLimit
    ? Style.DEVICE_HEIGHT - messageViewHeight - MARGIN_12
    : topPositionForBottomLimit;
  const messageViewPositionTop = showViewOnTop ? bottomLimitPosition : pageY + marginTop - MIN_MARGIN_BEAK;

  if (showViewOnRightSide) {
    return {
      left: pageX + anchorViewWidth + BEAK_WIDTH,
      beakLeft: pageX + anchorViewWidth + Style.adjust(1),
      top: messageViewPositionTop,
      beakTop: beakPositionTop,
      beakTransform: [{ rotate: "0deg" }],
    };
  }

  return {
    left: pageX - messageViewWidth - BEAK_WIDTH,
    beakLeft: pageX - BEAK_WIDTH - Style.adjust(1),
    top: messageViewPositionTop,
    beakTop: beakPositionTop,
    beakTransform: [{ rotate: "180deg" }],
  };
};
