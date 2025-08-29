import { View } from "react-native";
import { ButtonAnimationStar } from "./button-animation-star";
import { ButtonAnimationRally } from "./button-animation-rally";

import { StyleSheet } from "@styles";
export const ButtonAnimation = () => (
  <View pointerEvents="none" style={styles.wrapper}>
    <View style={styles.starPos1}>
      <ButtonAnimationStar duration={600} delayBasis={7200} delay={200} />
    </View>
    <View style={styles.starPos2}>
      <ButtonAnimationStar duration={600} delayBasis={7200} delay={400} />
    </View>
    <View style={styles.starPos3}>
      <ButtonAnimationStar duration={600} delayBasis={7200} delay={800} />
    </View>
    <View style={styles.rally}>
      <ButtonAnimationRally duration={2400} delayBasis={4200} delay={2000} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    start: 0,
    end: 0,
    bottom: 8,
    borderRadius: 24,
    overflow: "hidden",
  },
  starPos1: {
    position: "absolute",
    start: "10%",
    top: "10%",
    width: 10,
    height: 10,
  },
  starPos2: {
    position: "absolute",
    start: "60%",
    top: "84%",
    width: 10,
    height: 10,
  },
  starPos3: {
    position: "absolute",
    start: "85%",
    top: "40%",
    width: 10,
    height: 10,
  },
  rally: {
    position: "absolute",
    top: 0,
  },
});
