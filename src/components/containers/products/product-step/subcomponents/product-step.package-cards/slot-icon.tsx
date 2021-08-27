import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Image } from "@atoms";
import { Style } from "@styles";

interface Props {
  backgroundUrl: string;
  itemUrl: string;
}

const SIZE = Style.adjust(64);

export const SlotIcon = memo(({ itemUrl, backgroundUrl }: Props) => (
  <View style={styles.wrapper}>
    <Image source={{ uri: backgroundUrl }} width={SIZE} height={SIZE} theme="light" style={styles.slotWrapper} />
    <Image
      source={{ uri: itemUrl }}
      width={Style.adjust(80)}
      height={Style.adjust(80)}
      theme="light"
      style={styles.slotItem}
    />
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  slotWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: SIZE,
    height: SIZE,
  },
  slotItem: {
    ...StyleSheet.absoluteFillObject,
    top: 8,
    width: SIZE,
    height: SIZE,
  },
});
