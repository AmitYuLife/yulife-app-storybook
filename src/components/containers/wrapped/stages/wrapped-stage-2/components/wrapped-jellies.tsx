import { Box, Image } from "@atoms";
import { Style } from "@styles";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { Easing, useAnimatedStyle, withDelay, withSequence, withTiming } from "react-native-reanimated";

const JELLY_SCALE = 0.8;
const JELLY_DELAY = 2000;
const JELLY_ASPECT = 1384 / 1080;

const JELLY_ASSET = require("../assets/jellies.webp");

const WrappedJellies = () => {
  const jellyWidth = Style.DEVICE_WIDTH * JELLY_SCALE;
  const jellyHeight = Style.DEVICE_WIDTH * JELLY_ASPECT * JELLY_SCALE;

  const jellyStyle = useAnimatedStyle(() => {
    return {
      bottom: withSequence(
        withDelay(JELLY_DELAY, withTiming(-jellyHeight, { duration: 0 })),
        withTiming(-jellyHeight),
        withTiming(Style.SCREEN_HEIGHT * 0.8, { duration: 5000, easing: Easing.linear })
      ),
      left: withSequence(
        withDelay(JELLY_DELAY, withTiming(-jellyWidth, { duration: 0 })),

        withTiming(-jellyWidth),
        withTiming(Style.DEVICE_WIDTH, { duration: 5000, easing: Easing.linear })
      ),

      width: jellyWidth,
      height: jellyHeight,
      position: "absolute",
    };
  });

  return (
    <Box style={jellyStyle} forceAnimated={true}>
      <Image
        suppressLoadingUi={true}
        style={[styles.jelly, { width: jellyWidth, height: jellyHeight }]}
        source={JELLY_ASSET}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  jelly: {
    right: 0,
    position: "absolute",
  },
});

export default memo(WrappedJellies);
