import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { IAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { Description } from "./description";
import { Package } from "../fib.browse.types";

interface Props {
  avatar: IAvatar;
  selectedPackage: Package;
  currentEarnRate: number;
}

export const AvatarAndDescription = memo(({ selectedPackage, currentEarnRate, avatar }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarWrapper}>
        <Avatar avatar={avatar} isAvatarCreated={true} avatarFromLocal={avatar} loading={false} />
      </View>
      <Description selectedPackage={selectedPackage} currentEarnRate={currentEarnRate} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flexDirection: "row",
  } as ViewStyle,
  avatarWrapper: {
    alignItems: "center",
  } as ViewStyle,
});
