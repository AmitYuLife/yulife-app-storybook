import React, { memo, useMemo, useState, useCallback } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { TooltipBeak } from "./tooltip-beak";
import { getMessageViewPosition, getStaticPosition } from "./helper";

export type BeakPosition =
  | "topRight"
  | "topCenter"
  | "topLeft"
  | "bottomRight"
  | "bottomCenter"
  | "bottomLeft"
  | "rightTop"
  | "rightCenter"
  | "rightBottom"
  | "leftTop"
  | "leftCenter"
  | "leftBottom"
  | "autoVertical"
  | "autoHorizontal";

interface AnchorViewRelativePosition {
  pageX: number;
  pageY: number;
  anchorViewHeight: number;
  anchorViewWidth: number;
}

interface PointPosition {
  x: number;
  y: number;
}

interface IProps {
  relativePosition?: AnchorViewRelativePosition;
  pointPosition?: PointPosition;
  beakPosition: BeakPosition;
  children: React.ReactNode;
}

const TooltipPopupWrapper = ({ relativePosition, children, pointPosition, beakPosition }: IProps) => {
  const { pageX, pageY, anchorViewHeight, anchorViewWidth } = relativePosition || {};
  const { x, y } = pointPosition || {};
  const [messageViewHeight, setMessageViewHeight] = useState(1);
  const [messageViewWidth, setMessageViewWidth] = useState(1);
  const [opacity, setOpacity] = useState(0);

  const { left, top, beakTop, beakLeft, beakTransform } = relativePosition
    ? getMessageViewPosition(
        pageX,
        pageY,
        messageViewHeight,
        messageViewWidth,
        anchorViewHeight,
        anchorViewWidth,
        beakPosition
      )
    : getStaticPosition(beakPosition, x, y, messageViewWidth, messageViewHeight);

  const messageViewStyle = useMemo(() => [styles.messageViewWrapper, { left, top, opacity }], [left, top, opacity]);
  const beakWrapper = useMemo(
    () => [styles.popoverBreak, { top: beakTop, left: beakLeft, transform: beakTransform, opacity }],
    [beakLeft, beakTop, beakTransform, opacity]
  );

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height, width } = event.nativeEvent.layout;
      setMessageViewHeight(height);
      setMessageViewWidth(width);
      setOpacity(1);
    },
    [setMessageViewHeight, setMessageViewWidth, setOpacity]
  );

  return (
    <>
      <View style={messageViewStyle} onLayout={onLayout}>
        {children}
      </View>
      <View style={beakWrapper}>
        <TooltipBeak />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  popoverBreak: {
    position: "absolute",
  },
  messageViewWrapper: {
    borderRadius: Style.adjust(10),
    borderWidth: Style.adjust(1),
    borderColor: Colours.neutral.n100,
    position: "absolute",
    backgroundColor: Colours.neutral.white,
  },
});

export default memo(TooltipPopupWrapper);
