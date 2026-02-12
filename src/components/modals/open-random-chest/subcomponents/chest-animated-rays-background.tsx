import { Box } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import Rays, { IGradientStop } from "@organisms/rays/rays";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { FadeIn } from "react-native-reanimated";

interface IChestAnimatedRaysBackgroundProps extends IBoxProps {
  gradientStops?: IGradientStop[];
}

const ChestAnimatedRaysBackground = ({ gradientStops, ...props }: IChestAnimatedRaysBackgroundProps) => {
  return (
    <Box position="absolute" entering={FadeIn.delay(200).duration(1000)} {...props}>
      <Rays
        backgroundColor={"transparent"}
        style="thin"
        containerStyle={styles.raysContainer}
        gradientStops={gradientStops}
      />
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
