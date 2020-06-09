import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { IAvatar, Category } from "../avatar.types";
import styles from "../avatar-builder.styles";
import { IBodyItem } from "@redux/avatar/avatar.reducer";
import { AvatarPartType } from "@graphql/_core/schema/globalTypes";

interface Props {
  item: any;
  setAvatar: (key: keyof IAvatar, category: Category, item: IBodyItem) => void;
  avatar: IAvatar;
  bodyItemType: AvatarPartType;
  selectedColor: any;
  setSelectedColor: (id: string) => void;
}

function ColorItem(props: Props) {
  const { item, setAvatar, avatar, bodyItemType, selectedColor, setSelectedColor } = props;
  const { eyes, hair, facialHair, body, head } = avatar;

  const isSelected = item?.colorScheme?.main === selectedColor;

  function onPress() {
    setSelectedColor(item?.colorScheme?.main ? item.colorScheme.main : "");

    switch (bodyItemType) {
      case "hair":
        return setAvatar("hair", "colors", {
          bodyElements: avatar.hair.bodyElements,
          partId: hair.partId,
          colors: item,
        });
      case "facialHair":
        return setAvatar("facialHair", "colors", {
          bodyElements: facialHair.bodyElements,
          partId: facialHair.partId,
          colors: item,
        });
      case "eyes":
        return setAvatar("eyes", "colors", {
          bodyElements: eyes.bodyElements,
          partId: eyes.partId,
          colors: item,
        });
      case "body":
        setAvatar("body", "colors", {
          bodyElements: body.bodyElements,
          partId: body.partId,
          colors: item,
        });
        setAvatar("head", "colors", {
          bodyElements: head.bodyElements,
          partId: head.partId,
          colors: item,
        });
        return;
      default:
        return;
    }
  }

  if (!item) {
    return null;
  }

  // FIXME: Workaround to align elements to the left
  if (item.extra) {
    return (
      <View style={styles.itemColorWrapper}>
        <View style={styles.itemColor} />
      </View>
    );
  }

  return (
    <View style={isSelected ? styles.itemColorSelectedWrapper : styles.itemColorWrapper}>
      <TouchableOpacity onPress={onPress}>
        <View style={StyleSheet.flatten([styles.itemColor, { backgroundColor: item.colorScheme.main }])} />
      </TouchableOpacity>
    </View>
  );
}

export default ColorItem;
