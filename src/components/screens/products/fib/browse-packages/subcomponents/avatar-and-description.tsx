import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, ActivityIndicator } from "react-native";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { Description } from "./description";
import { Package } from "../fib.browse.types";

interface Props {
  avatarUrl: string;
  selectedPackage: Package;
  loading: boolean;
}

export const AvatarAndDescription = memo(({ selectedPackage, avatarUrl, loading }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarWrapper}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Avatar avatar={null} sizeMultiplier={0.8} avatarUrl={avatarUrl} isAvatarCreated={true} loading={false} />
        )}
      </View>
      <Description selectedPackage={selectedPackage} loading={loading} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 40,
    minHeight: 349, // prevents transitions (to and from loading state) from making list jittery
  } as ViewStyle,
  avatarWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  } as ViewStyle,
});
