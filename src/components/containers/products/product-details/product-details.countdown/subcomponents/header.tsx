import React, { memo } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { ForestBushIllustration } from "@atoms/illustrations/forest-bush-illustration";
import { Colours, Style } from "@styles";
import { Countdown } from "./countdown";

interface Props {
  refetchQuery: () => void;
  secondsUntilStartDate: number;
}

export const Header = memo(({ refetchQuery, secondsUntilStartDate }: Props) => (
  <View style={styles.backgroundWrapper}>
    <View style={styles.background}>
      <ForestBushIllustration />
    </View>
    <View style={styles.overlayWrapper} />
    <TextTemplate
      color={Colours.neutral.white}
      textAlign="center"
      type="h3"
    >{`Good news!\nYour cover starts soon`}</TextTemplate>
    <Countdown countdownEndCallback={refetchQuery} secondsUntilStartDate={secondsUntilStartDate} />
  </View>
));

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
});
