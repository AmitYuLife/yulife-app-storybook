import React, { useCallback, useContext, useMemo } from "react";
import { StyleSheet, ViewStyle, View, ImageStyle } from "react-native";
import { TouchableOpacityWithDelay, PowerCoin } from "@molecules";
import { Style } from "@styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { AVATAR_ITEM } from "@ids";
import { SvgUnlockable } from "../../product/assets/svg-unlockable";
import { SvgLocked } from "../../product/assets/svg-locked";
import { ItemIcon } from "./item-icon";
import { YuScreenProductContext } from "../../../yu-screen.context";

export const Item = (props: any) => {
  // This is set to "any" for now, because were using mock data
  const { earnRate, status, itemSlot, coverType, productId, picture, style } = props;
  const { product: selectedProduct, setProduct } = useContext(YuScreenProductContext);

  const onPress = useCallback(() => {
    setProduct({
      type: "avatar",
      id: productId === selectedProduct.id ? null : productId,
    });
  }, [productId, selectedProduct, setProduct]);

  const isSelected = useMemo(() => selectedProduct.id === productId && selectedProduct.type === "avatar", [
    selectedProduct,
    productId,
  ]);

  return (
    <TouchableOpacityWithDelay
      delay={350}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.wrapper, style]}
      testID={AVATAR_ITEM(itemSlot, status)}
    >
      <ItemIcon isSelected={isSelected} itemSlot={itemSlot} status={status} coverType={coverType} picture={picture} />
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
    right: -4,
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
