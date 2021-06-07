import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { RemoteImage, Text } from "@atoms";
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
    <RemoteImage
      uri={slot.backgroundUrl}
      width={Style.adjust(64)}
      height={Style.adjust(64)}
      theme="light"
      style={styles.slotWrapper}
    />
    <RemoteImage
      uri={slot.itemUrl}
      width={Style.adjust(60)}
      height={Style.adjust(60)}
      theme="light"
      style={styles.slotItem}
    />
    <View>
      {slot.status !== YuProductStatus.active ? (
        <Text
          style={[
            styles.itemName,
            slot.status === YuProductStatus.locked ? styles.itemLocked : styles.itemUnlocked,
            { marginTop: 35 },
          ]}
          bold={true}
        >
          {slot.name}
        </Text>
      ) : null}
    </View>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(74),
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
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.adjust(0.4),
  },
  itemUnlocked: {
    color: Colours.metallic.m500,
  } as TextStyle,
  itemLocked: {
    color: Colours.metallic.m300,
  } as TextStyle,
});
