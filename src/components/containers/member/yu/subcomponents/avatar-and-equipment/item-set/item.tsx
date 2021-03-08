import React, { useCallback, useContext } from "react";
import { StyleSheet, ViewStyle, View, ImageStyle } from "react-native";
import { TouchableOpacityWithDelay, PowerCoin } from "@molecules";
import { Style } from "@styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { AVATAR_ITEM } from "@ids";
import { SvgUnlockable } from "../../product/assets/svg-unlockable";
import { SvgLocked } from "../../product/assets/svg-locked";
import { ItemIcon } from "./item-icon";
import { YuScreenProductContext } from "../../../yu-screen.context";
import { YuScreenProductSlotItem } from "@graphql/_core/schema";

interface IItem extends YuScreenProductSlotItem {
  style?: ViewStyle;
}

export const Item = (props: IItem) => {
  const { earnRate, status, itemUrl, style, icon } = props;
  const { setProduct, product } = useContext(YuScreenProductContext);

  const onPress = useCallback(() => {
    setProduct(product?.itemUrl === itemUrl ? null : props);
  }, [setProduct, product, itemUrl, props]);

  return (
    <TouchableOpacityWithDelay
      delay={350}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.wrapper, style]}
      testID={AVATAR_ITEM(icon?.name, status)}
    >
      <ItemIcon item={{ name: icon?.name, itemUrl, backgroundUrl: icon?.backgroundUrl }} status={status} />
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
