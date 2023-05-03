import React, { memo } from "react";
import { View } from "react-native";
import { defaultStyles as styles } from "./styles";
import { SkeletonLoading } from "@atoms";

export const ItemSlotSkeleton = memo(() => (
  <View style={styles.container}>
    <SkeletonLoading style={styles.slotWrapper} />
  </View>
));
