import { LottieView } from "@components/molecules";
import { StyleSheet } from "react-native";

const BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

export const WrappedSpaceBackground = () => {
  return (
    <LottieView
      loop={true}
      autoPlay={true}
      resizeMode="cover"
      suppressLoadingUi={true}
      style={styles.background}
      source={BACKGROUND_ANIMATION}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
});
