import React, { memo, useMemo, useState, useCallback, ReactNode, isValidElement, ReactElement } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TooltipBeak } from "./tooltip-beak";
import { getMessageViewPosition, getStaticPosition } from "./helper";
import { Navigation } from "@navigation/main";

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

interface ITooltipChildrenProps {
  onClose?: () => void;
}

interface IProps {
  relativePosition?: AnchorViewRelativePosition;
  pointPosition?: PointPosition;
  beakPosition: BeakPosition;
  style?: ViewStyle;
  children: ReactNode | ((props: ITooltipChildrenProps) => ReactElement);
}

const TooltipPopupWrapper = ({ relativePosition, children, style, pointPosition, beakPosition }: IProps) => {
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

  const messageViewStyle = useMemo(
    () => [styles.messageViewWrapper, { left, top, opacity }, style ?? {}],
    [left, top, opacity, style]
  );
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

  const content = useMemo(() => {
    if (isValidElement(children)) {
      return children;
    }

    if (typeof children === "function") {
      const Content = children;
      return (
        <Content
          onClose={() => {
            Navigation.dismissAllOverlays();
          }}
        />
      );
    }

    return children;
  }, [children]);

  return (
    <>
      <View style={messageViewStyle} onLayout={onLayout}>
        {content}
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
