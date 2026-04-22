import { Box } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import Rays, { IGradientStop } from "@organisms/rays/rays";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { ViewStyle } from "react-native";
import { FadeIn } from "react-native-reanimated";

interface IChestAnimatedRaysBackgroundProps extends IBoxProps {
  gradientStops?: IGradientStop[];
  raysStyles?: ViewStyle;
}

const ChestAnimatedRaysBackground = ({
  gradientStops,
  raysStyles = {},
  ...props
}: IChestAnimatedRaysBackgroundProps) => {
  return (
    <Box
      position="absolute"
      entering={FadeIn.delay(200).duration(1000)}
      top={0}
      bottom={0}
      left={0}
      right={0}
      {...props}
    >
      <Rays
        backgroundColor={"transparent"}
        style="thin"
        containerStyle={{ ...styles.raysContainer, ...raysStyles }}
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
