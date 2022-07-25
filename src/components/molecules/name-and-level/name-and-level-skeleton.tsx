import React, { memo } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Style } from "@styles";
import { SkeletonLoading } from "@atoms";

interface Props {
  hideWorldIcon?: boolean;
}

const NameAndLevelSkeleton = ({ hideWorldIcon }: Props) => (
  <View style={styles.wrapper}>
    <SkeletonLoading style={styles.text} />
    <View style={styles.worldDetails}>
      {hideWorldIcon ? null : <SkeletonLoading style={styles.image} />}
      <SkeletonLoading style={styles.worldText} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingTop: Style.adjust(24),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginTop: -2,
  },
  text: {
    height: Style.adjust(30),
    width: Style.adjust(60),
  },
  worldText: {
    height: Style.adjust(12),
    width: Style.adjust(40),
  },
  worldDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.select({
      ios: Style.adjust(12),
      android: Style.adjust(4),
    }),
  },
});

export default memo(NameAndLevelSkeleton);
