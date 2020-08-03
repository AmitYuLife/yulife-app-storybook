import React, { memo, useEffect, useRef, useContext } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { ActiveLeaderboardLoadingContext } from "../../../active-leaderboard.context";
import { NetworkStatus } from "apollo-client";
import { SkeletonRow } from "./skeleton-row";

const _LeaderboardSkeleton = () => {
  const networkStatus = useContext(ActiveLeaderboardLoadingContext);
  const loading = [NetworkStatus.loading, NetworkStatus.setVariables].includes(networkStatus);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: loading ? 1 : 0,
      duration: loading ? 0 : 300,
      useNativeDriver: true,
    }).start();

    return () => {
      opacity?.stopAnimation();
    };
  }, [loading, opacity]);

  return (
    <Animated.View pointerEvents={loading ? "auto" : "none"} style={[styles.wrapper, { opacity }]}>
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
