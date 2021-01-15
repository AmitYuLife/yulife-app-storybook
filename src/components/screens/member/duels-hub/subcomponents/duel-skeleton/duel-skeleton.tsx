import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { SkeletonRow } from "@atoms";

const _DuelSkeleton = () => {
  return (
    <View style={styles.wrapper}>
      {Array.from({ length: 20 }).map((_, i) => (
        <SkeletonRow key={i} width={i % 2 ? 105 : 150} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

export const DuelSkeleton = memo(_DuelSkeleton);
