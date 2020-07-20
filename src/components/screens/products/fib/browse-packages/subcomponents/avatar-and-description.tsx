import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { Description } from "./description";
import { Package } from "../fib.browse.types";

interface Props {
  avatarUrl: string;
  selectedPackage: Package;
  currentEarnRate: number;
}

export const AvatarAndDescription = memo(({ selectedPackage, currentEarnRate, avatarUrl }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarWrapper}>
        <Avatar avatar={null} sizeMultiplier={0.8} avatarUrl={avatarUrl} isAvatarCreated={true} loading={false} />
      </View>
      <Description selectedPackage={selectedPackage} currentEarnRate={currentEarnRate} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 40,
  } as ViewStyle,
  avatarWrapper: {
    alignItems: "center",
  } as ViewStyle,
});
