import { Colours, Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { StarAnimation } from "./star-animation";

type Props = {
  animate: boolean;
};

export const StarOpacityAnimation = memo(({ animate }: Props) => (
  <View pointerEvents="none" style={styles.wrapper}>
    <View style={styles.bottomLeft}>
      <StarAnimation animate={animate} iterations={2} />
    </View>
    <View style={styles.bottomRight}>
      <StarAnimation animate={animate} iterations={1} />
    </View>
    <View style={styles.topLeft}>
      <StarAnimation animate={animate} iterations={1} />
    </View>
    <View style={styles.topRight}>
      <StarAnimation animate={animate} iterations={2} />
    </View>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: Style.adjust(12),
    marginLeft: Style.adjust(12),
    marginRight: Style.adjust(12),
  },
  glow: {
    position: "absolute",
    top: Style.adjust(12),
    bottom: Style.adjust(12),
    left: Style.adjust(12),
    right: Style.adjust(12),
    borderRadius: Style.adjust(8),
    backgroundColor: Colours.products.fib.u100S4,
    opacity: 0.5,
  },
  bottomLeft: {
    position: "absolute",
    bottom: 16,
    left: 0,
  },
  bottomRight: {
    position: "absolute",
    bottom: 4,
    right: 12,
  },
  topLeft: {
    position: "absolute",
    top: 0,
    left: 16,
  },
  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
