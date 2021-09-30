import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";

export interface ISlotIcon {
  status: YuProductStatus;
  itemUrl: string;
  backgroundUrl: string;
  name: string;
}

interface IProps {
  slot: ISlotIcon;
}

export const SlotIcon = memo(({ slot }: IProps) => (
  <View style={styles.wrapper}>
    <Image
      source={{ uri: slot.backgroundUrl }}
      width={Style.adjust(64)}
      height={Style.adjust(64)}
      theme="light"
      style={styles.slotWrapper}
    />
    <Image
      source={{ uri: slot.itemUrl }}
      width={Style.adjust(60)}
      height={Style.adjust(60)}
      theme="light"
      style={styles.slotItem}
    />
    <View>
      {slot.status !== YuProductStatus.active ? (
        <View style={styles.itemName}>
          <TextTemplate
            type="l3b"
            color={slot.status === YuProductStatus.locked ? Colours.metallic.m300 : Colours.metallic.m500}
          >
            {slot.name}
          </TextTemplate>
        </View>
      ) : null}
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
