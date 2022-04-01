import React, { memo, useMemo, useState, useCallback } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { CloseSvg, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { PopoverBeak } from "@components/molecules/popover/popover-beak";
import PressableWithDelay from "../pressable-delay/pressable-delay";

const INFO_VIEW_WIDTH = Style.adjust(271);
const BEAK_MIN_LEFT_POSITION = Style.adjust(20);
const BEAK_MAX_LEFT_POSITION = Style.DEVICE_WIDTH - Style.adjust(38);
const INFO_WRAPPER_MIN_LEFT_POSITION = Style.adjust(8);
const INFO_WRAPPER_MAX_LEFT_POSITION = Style.DEVICE_WIDTH - INFO_VIEW_WIDTH - Style.adjust(8);

interface IProps {
  text: string;
  pageX: number;
  pageY: number;
  onClose: () => void;
}

const InfoMessagePopover = ({ text, pageX, pageY, onClose }: IProps) => {
  const [messageViewHeight, setMessageViewHeight] = useState(115);
  const {
    messageViewPositionLeft,
    beakPositionLeft,
    messageViewPositionTop,
    beakPositionTop,
    beakTransform,
  } = getMessageViewPosition(pageX, pageY, messageViewHeight);
  const messageViewStyle = useMemo(
    () => [styles.messageViewWrapper, { left: messageViewPositionLeft, top: messageViewPositionTop }],
    [pageX, pageY, messageViewPositionLeft, messageViewPositionTop]
  );
  const beakWrapper = useMemo(
    () => [styles.popoverBreak, { top: beakPositionTop, left: beakPositionLeft, transform: beakTransform }],
    [pageX, pageY, beakPositionLeft, beakPositionTop, beakTransform]
  );

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      setMessageViewHeight(height);
    },
    [setMessageViewHeight]
  );

  return (
    <>
      <View style={messageViewStyle} onLayout={onLayout}>
        <TextTemplate type={"l2"}>{text}</TextTemplate>
        <View style={styles.close}>
          <PressableWithDelay onPress={onClose} hitSlop={50}>
            <CloseSvg size={Style.adjust(12)} />
          </PressableWithDelay>
        </View>
      </View>
      <View style={beakWrapper}>
        <PopoverBeak backgroundColor={Colours.neutral.white} />
      </View>
    </>
  );
};

const getMessageViewPosition = (pageX: number, pageY: number, messageViewHeight: number) => {
  let messageViewPositionLeft = pageX;
  let messageViewPositionTop = pageY - messageViewHeight - Style.adjust(18);
  let beakPositionLeft = pageX;
  let beakPositionTop = pageY - Style.adjust(25);
  let beakTransform = [{ rotate: "270deg" }];

  if (pageY - Style.getSafeAreaStart() < messageViewHeight) {
    messageViewPositionTop = pageY + Style.adjust(37);
    beakPositionTop = pageY + Style.adjust(17);
    beakTransform = [{ rotate: "90deg" }];
  }

  if (pageX > INFO_VIEW_WIDTH / 2) {
    messageViewPositionLeft = pageX - INFO_VIEW_WIDTH / 2;
  }

  if (pageX < INFO_VIEW_WIDTH / 2) {
    messageViewPositionLeft = INFO_WRAPPER_MIN_LEFT_POSITION;
  }

  if (pageX + INFO_VIEW_WIDTH / 2 > Style.DEVICE_WIDTH) {
    messageViewPositionLeft = INFO_WRAPPER_MAX_LEFT_POSITION;
  }

  if (beakPositionLeft > Style.DEVICE_WIDTH - Style.adjust(30)) {
    beakPositionLeft = BEAK_MAX_LEFT_POSITION;
  }

  if (beakPositionLeft < Style.adjust(30)) {
    beakPositionLeft = BEAK_MIN_LEFT_POSITION;
  }

  return { messageViewPositionLeft, beakPositionLeft, messageViewPositionTop, beakPositionTop, beakTransform };
};

const styles = StyleSheet.create({
  close: {
    position: "absolute",
    right: Style.adjust(9),
    top: Style.adjust(9),
  },
  popoverBreak: {
    position: "absolute",
  },
  messageViewWrapper: {
    width: INFO_VIEW_WIDTH,
    padding: Style.adjust(16),
    borderRadius: Style.adjust(10),
    borderWidth: Style.adjust(1),
    borderColor: Colours.neutral.n100,
    position: "absolute",
    backgroundColor: "white",
  },
});

export default memo(InfoMessagePopover);
