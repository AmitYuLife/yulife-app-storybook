import { CIRCLE_SIZE } from "@components/screens/member/quests/quests-scroll-screen/assets/level/level.styles";
import { View } from "react-native";

import { StyleSheet } from "@styles";
export const DropShadow = () => (
  <View pointerEvents="none" style={styles.wrapper}>
    <View style={styles.shadow} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    position: "absolute",
    start: 0,
    end: 0,
    bottom: 1,
  },
  shadow: {
    backgroundColor: "rgba(0,0,0,0.08)",
    borderRadius: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
  },
});
