import { SkeletonLoading } from "@atoms";
import { Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";

const BattlePassRewardExplanationLoading = () => {
  return (
    <View style={styles.container}>
      <SkeletonLoading style={styles.icon} />
      <SkeletonLoading style={styles.labelContainer} />
    </View>
  );
};

export default memo(BattlePassRewardExplanationLoading);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: Style.adjust(20),
    justifyContent: "center",
    paddingBottom: Style.adjust(8),
    paddingHorizontal: Style.adjust(30),
  },
  icon: {
    width: Style.adjust(22),
    height: Style.adjust(24),
    borderRadius: Style.adjust(100),
  },
  labelContainer: {
    height: Style.adjust(46),
    width: "100%",
  },
});
