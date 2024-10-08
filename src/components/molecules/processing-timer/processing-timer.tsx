import React, { memo } from "react";
import { ImageStyle, Platform, StyleSheet, View, ViewStyle } from "react-native";
import { CloseSvg, Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { Countdown } from "./countdown";
import { PressableWithDelay } from "..";
import { BUTTON_CLOSE_CHALLENGE } from "@ids";

interface Props {
  secondsUntilTarget: number;
  onClose?: () => void;
  backgroundUrl?: string;
  heading?: string;
}

const ProcessingTimer = memo(({ secondsUntilTarget, backgroundUrl, heading, onClose }: Props) => {
  return (
    <View style={backgroundUrl ? styles.backgroundWrapper : styles.backgroundWrapperWithoutUrl}>
      {backgroundUrl ? (
        <>
          <View style={styles.whiteBackground} />
          <View style={styles.background}>
            <Image source={{ uri: backgroundUrl }} width={Style.DEVICE_WIDTH} height={Style.adjust(343)} />
          </View>
          <View style={styles.overlayWrapper} />
        </>
      ) : null}

      {heading ? (
        <View style={styles.padding}>
          <TextTemplate color={Colours.neutral.white} textAlign="center" type="b1b">
            {heading}
          </TextTemplate>
        </View>
      ) : null}
      <Countdown secondsUntilTarget={secondsUntilTarget} />
      {onClose ? (
        <>
          <View style={styles.padView} />
          <PressableWithDelay
            style={styles.closeWrapper}
            onPress={onClose}
            testID={BUTTON_CLOSE_CHALLENGE}
            delay={1000}
          >
            <CloseSvg stroke={Colours.neutral.white} />
          </PressableWithDelay>
        </>
      ) : null}
    </View>
  );
});

export default ProcessingTimer;

const styles = StyleSheet.create({
  backgroundWrapper: {
    height: Style.adjust(343),
    width: Style.DEVICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  backgroundWrapperWithoutUrl: {
    height: Style.adjust(150),
    width: Style.DEVICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Style.adjust(45),
  } as ViewStyle,
  gradient: {
    ...StyleSheet.absoluteFillObject,
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
    top: Platform.select({
      ios: Style.getSafeAreaStart(),
      android: 0,
    }),
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
