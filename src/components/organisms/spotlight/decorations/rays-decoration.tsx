import { memo } from "react";
import { Box } from "@atoms";
import { Style } from "@styles";
import { StyleSheet } from "react-native";
import { Rays } from "@organisms";

export type RaysDecorationProps = {
  opacity?: number;
};

const RaysDecoration = ({ opacity }: RaysDecorationProps) => {
  return (
    <Box flex={1} style={StyleSheet.absoluteFillObject}>
      <Rays backgroundColor="transparent" style="thin" containerStyle={styles.raysContainerStyle} opacity={opacity} />
    </Box>
  );
};

const styles = StyleSheet.create({
  raysContainerStyle: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    top: -Style.DEVICE_HEIGHT,
    left: -Style.DEVICE_WIDTH / 2,
  },
});

export default memo(RaysDecoration);
