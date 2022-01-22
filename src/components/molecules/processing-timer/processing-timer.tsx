import React, { memo } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { CloseSvg, Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { Countdown } from "./countdown";
import { PressableWithDelay } from "..";

interface Props {
  endDateTimeWithTz: string;
  onClose: () => void;
  backgroundUrl: string;
  heading: string;
}

const ProcessingTimer = memo(({ endDateTimeWithTz, backgroundUrl, heading, onClose }: Props) => (
  <View style={styles.backgroundWrapper}>
    <View style={styles.whiteBackground} />
    <View style={styles.background}>
      <Image source={{ uri: backgroundUrl }} width={Style.DEVICE_WIDTH} height={343} />
    </View>
    <View style={styles.overlayWrapper} />
    <View style={styles.padding}>
      <TextTemplate color={Colours.neutral.white} textAlign="center" type="b1b">
        {heading}
      </TextTemplate>
    </View>
    <Countdown countdownEndCallback={onClose} endDateTimeWithTz={endDateTimeWithTz} />
    <View style={styles.padView} />
    <PressableWithDelay style={styles.closeWrapper} onPress={onClose}>
      <CloseSvg stroke={Colours.neutral.white} />
    </PressableWithDelay>
  </View>
));

export default ProcessingTimer;

const styles = StyleSheet.create({
  backgroundWrapper: {
    height: Style.adjust(343),
    width: Style.DEVICE_WIDTH,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  whiteBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: Style.adjust(343),
    width: Style.DEVICE_WIDTH,
    backgroundColor: "white",
  } as ViewStyle,
  overlayWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: Style.adjust(343),
    width: Style.DEVICE_WIDTH,
    backgroundColor: "rgba(0,0,0,0.64)",
  } as ViewStyle,
  background: {
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(343),
    ...StyleSheet.absoluteFillObject,
  } as ImageStyle,
  padding: {
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  closeWrapper: {
    position: "absolute",
    top: Style.getSafeAreaStart() + Style.adjust(16),
    right: 0,
    padding: Style.adjust(16),
  },
  padView: {
    backgroundColor: "white",
    height: Style.adjust(32),
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Style.adjust(-16),
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
  },
});
