import React, { useCallback } from "react";
import { StyleSheet, ViewStyle, View, ImageStyle } from "react-native";
import { SlotIcon } from "@atoms";
import { TouchableOpacityWithDelay, PowerCoin } from "@molecules";
import { Style } from "@styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { AVATAR_ITEM } from "@ids";
import { SvgUnlockable } from "../../product/assets/svg-unlockable";
import { SvgLocked } from "../../product/assets/svg-locked";
import { YuScreenProductSlotItem } from "@graphql/_core/schema";
import { navigateToProduct } from "../../../navigation/navigateToProduct";

interface IItem extends YuScreenProductSlotItem {
  style?: ViewStyle;
}

export const Item = (props: IItem) => {
  const { earnRate, status, itemUrl, style, icon, productId } = props;
  const onPress = useCallback(() => navigateToProduct({ status, productId }), [productId, status]);

  const slot = { name: icon?.name, itemUrl, backgroundUrl: icon?.backgroundUrl, status };

  return (
    <TouchableOpacityWithDelay
      delay={350}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.wrapper, style]}
      testID={AVATAR_ITEM(icon?.name, status)}
    >
      <SlotIcon slot={slot} />
      <View style={styles.tagWrapper}>{getTag(status, earnRate)}</View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 6 } as ViewStyle,
  image: {
    maxHeight: Style.adjust(76),
    maxWidth: Style.adjust(64),
  } as ImageStyle,
  tagWrapper: {
    position: "absolute",
    top: Style.adjust(4),
    right: -5,
  } as ViewStyle,
});

function getTag(status: string, earnRate: number) {
  switch (status) {
    case YuProductStatus.unlockable:
      return <SvgUnlockable />;
    case YuProductStatus.locked:
      return <SvgLocked />;
    case YuProductStatus.active:
      return <PowerCoin power={earnRate} />;
    default:
      return null;
  }
}
