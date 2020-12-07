import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { YugiSvg } from "./assets/yugi-svg";
import { Style } from "@styles";

interface Props {
  yugi: string;
}

export const Yugi = (props: Props) => {
  const { yugi } = props;

  if (!yugi) {
    return null;
  }

  return (
    <View style={styles.yugiWrapper}>
      <YugiSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  yugiWrapper: {
    position: "absolute",
    top: Style.adjust(100),
    right: 0,
  } as ViewStyle,
});
