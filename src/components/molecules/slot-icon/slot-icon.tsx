import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style, Colours, StyleSheet } from "@styles";

export interface ISlotIcon {
  itemUrl: string;
  backgroundUrl: string;
  name: string;
  colour?: string;
}

export const SlotIcon = memo(({ colour = Colours.metallic.m500, itemUrl, backgroundUrl, name }: ISlotIcon) => (
  <View style={styles.wrapper}>
    <Image
      source={{ uri: backgroundUrl }}
      width={Style.adjust(64)}
      height={Style.adjust(64)}
      theme="light"
      style={styles.slotWrapper}
    />
    <Image
      source={{ uri: itemUrl }}
      width={Style.adjust(60)}
      height={Style.adjust(60)}
      theme="light"
      style={styles.slotItem}
    />
    <View>
      {!name ? null : (
        <View style={styles.itemName}>
          <TextTemplate type="l3b" color={colour}>
            {name}
          </TextTemplate>
        </View>
      )}
    </View>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(64),
    height: Style.adjust(64),
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  slotWrapper: {
    position: "absolute",
    width: Style.adjust(64),
    height: Style.adjust(64),
  },
  slotItem: {
    alignItems: "center",
    position: "absolute",
  },
  itemName: {
    marginTop: Style.adjust(35),
  },
});
