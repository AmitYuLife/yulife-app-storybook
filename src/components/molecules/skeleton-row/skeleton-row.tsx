import React from "react";
import { Style } from "@styles";
import { StyleSheet, ViewStyle, View } from "react-native";
import { AvatarHeadIcon } from "@atoms/icon/avatar-head-icon";

interface Props {
  width: number;
}

///TODO: Remove this and use UserAvatarCoinCard instead
const SkeletonRow = ({ width = 105 }: Props) => {
  return (
    <View style={styles.wrapper}>
      <AvatarHeadIcon />
      <View style={[styles.name, { width }]} />
      <View style={styles.score} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: Style.DEVICE_WIDTH,
    paddingLeft: 40,
    paddingRight: 30,
    marginBottom: 18,
  } as ViewStyle,
  name: {
    marginLeft: 16,
    backgroundColor: "#F8F8F9",
    height: 25,
    borderRadius: 27,
    overflow: "hidden",
  } as ViewStyle,
  score: {
    marginLeft: "auto",
    height: 25,
    width: 55,
    borderRadius: 27,
    backgroundColor: "#F8F8F9",
    overflow: "hidden",
  } as ViewStyle,
});

export default SkeletonRow;
