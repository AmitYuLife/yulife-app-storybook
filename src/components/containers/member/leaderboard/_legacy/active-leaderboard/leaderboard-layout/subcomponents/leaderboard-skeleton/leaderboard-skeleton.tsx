import React, { memo } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { SkeletonRow } from "@molecules";

const _LeaderboardSkeleton = () => {
  return (
    <Animated.View style={styles.wrapper}>
      {Array.from({ length: 20 }).map((_, i) => (
        <SkeletonRow key={i} width={i % 2 ? 105 : 150} />
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});

export const LeaderboardSkeleton = memo(_LeaderboardSkeleton);
