import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import FastImage from "react-native-fast-image";

interface Props {
  status: YuProductStatus;
  item: {
    itemUrl: string;
    backgroundUrl: string;
    name: string;
  };
}

export const ItemIcon = (props: Props) => {
  const { status, item } = props;

  return (
    <View style={styles.wrapper}>
      <FastImage resizeMode="contain" source={{ uri: item.backgroundUrl }} style={styles.slotWrapper} />
      <FastImage
        style={{
          width: Style.adjust(60),
          height: Style.adjust(60),
          alignItems: "center",
          position: "absolute",
        }}
        source={{
          uri: item.itemUrl,
        }}
      />
      <View>
        {status !== YuProductStatus.active ? (
          <Text
            style={[
              styles.itemName,
              status === YuProductStatus.locked ? styles.itemLocked : styles.itemUnlocked,
              { marginTop: 35 },
            ]}
            bold={true}
          >
            {item.name}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

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
