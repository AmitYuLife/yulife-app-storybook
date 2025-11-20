import { Box } from "@atoms";
import Rays from "@organisms/rays/rays";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { FadeIn } from "react-native-reanimated";

const ChestAnimatedRaysBackground = () => {
  return (
    <Box position="absolute" entering={FadeIn.delay(200).duration(1000)}>
      <Rays backgroundColor={"transparent"} style="thin" containerStyle={styles.raysContainer} />
    </Box>
  );
};

const styles = StyleSheet.create({
  raysContainer: {
    top: -Style.DEVICE_WIDTH / 2,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH,
  },
});

export default memo(ChestAnimatedRaysBackground);
