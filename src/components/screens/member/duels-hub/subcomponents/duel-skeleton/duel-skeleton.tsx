import React, { memo, FC } from "react";
import { View, ViewStyle } from "react-native";
import { SkeletonRow } from "@molecules";

import { StyleSheet } from "@styles";
interface IProps {
  length?: number;
}

const _DuelSkeleton: FC<IProps> = ({ length = 20 }) => {
  return (
    <View style={styles.wrapper}>
      {Array.from({ length }).map((_, i) => (
        <SkeletonRow key={i} width={i % 2 ? 105 : 150} /> ///@TODO: Replace this with UserAvatarCoinCardSkeleton
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
