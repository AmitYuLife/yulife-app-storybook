import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Image } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import { toCapitalLetter } from "@services/utils";
import { YuProductStatus, YuItemSlot, CoverType } from "@graphql/_core/schema/globalTypes";
import Slot from "./Slot";

// import FastImage from "react-native-fast-image"; This will be used on the live version

interface Props {
  isSelected: boolean;
  status: YuProductStatus;
  itemSlot: YuItemSlot;
  coverType?: CoverType;
  picture: any;
}

export const ItemIcon = (props: Props) => {
  const { status, itemSlot, coverType, picture } = props;

  //@TODO: Confirm we can delete this function

  return (
    <View style={styles.wrapper}>
      <Slot status={status === YuProductStatus.active ? coverType : status} style={{ position: "absolute" }} />
      {/* <FastImage resizeMode="contain" source={picture} />  the right way to load from the api*/}

      {/* Remove tis in favour of <FastImage /> when we get the url from the api */}
      <Image
        resizeMode="contain"
        source={picture}
        style={{
          width: Style.adjust(status === YuProductStatus.active ? 60 : 32),
          height: Style.adjust(status === YuProductStatus.active ? 60 : 32),
        }}
      />
      <View>
        {status !== YuProductStatus.active ? (
          <Text
            style={[styles.itemName, status === YuProductStatus.locked ? styles.itemLocked : styles.itemUnlocked]}
            bold={true}
          >
            {status === YuProductStatus.locked ? "Locked" : getName(itemSlot)}
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
    marginTop: Style.adjust(4),
  } as ViewStyle,
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

// @TODO: confirm we can delete this function and use the name from the api
function getName(item: YuItemSlot) {
  if (item === YuItemSlot.clockPendant) {
    return "Charm";
  }

  return toCapitalLetter(item);
}
