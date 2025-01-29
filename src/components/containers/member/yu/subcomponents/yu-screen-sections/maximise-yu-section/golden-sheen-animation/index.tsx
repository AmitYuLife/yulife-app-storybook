import { memo } from "react";
import { Box } from "@atoms";
import { MAX_YU_OVERACHIEVER_GRADIENT, MAX_YU_SHEEN_X_OFFSET } from "../constants";
import SheenSvg from "./sheen-svg";
import { Style } from "@styles";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSheenAnimation } from "./useSheenAnimation";

const GoldenSheenAnimation = memo(() => {
  const animatedStyles = useSheenAnimation();

  return (
    <Box
      flex={1}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
      width={Style.DEVICE_WIDTH}
      disableAutoAdjust={true}
      pointerEvents="none"
    >
      <View style={[styles.wrapper]}>
        <LinearGradient
          style={styles.linearGradient}
          start={MAX_YU_OVERACHIEVER_GRADIENT.start}
          end={MAX_YU_OVERACHIEVER_GRADIENT.end}
          colors={MAX_YU_OVERACHIEVER_GRADIENT.colors}
        />
        <Box forceAnimated={true} style={[styles.shine, animatedStyles]}>
          <SheenSvg />
        </Box>
      </View>
    </Box>
  );
});

export default memo(GoldenSheenAnimation);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    overflow: "hidden",
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: Style.adjust(8),
  },
  shine: {
    left: -MAX_YU_SHEEN_X_OFFSET,
  },
});
