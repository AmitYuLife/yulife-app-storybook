import { EncircledCheckIcon } from "@atoms/icon/encircled-check-icon";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

export const ProgressMilestoneComplete = memo(() => (
  <>
    <View style={styles.background} />
    <View style={styles.iconWrapper}>
      <EncircledCheckIcon size={Style.adjust(20)} />
    </View>
  </>
));

const styles = StyleSheet.create({
  iconWrapper: { backgroundColor: "white", borderRadius: 999 },
  background: {
    height: Style.adjust(8),
    width: Style.adjust(7),
    top: Style.adjust(9),
    position: "absolute",
    start: 0,
  },
});
