import React, { useCallback, useContext, useMemo } from "react";
import { StyleSheet, ViewStyle, View, ImageStyle } from "react-native";
import { TouchableOpacityWithDelay, PowerCoin } from "@molecules";
import { Style } from "@styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { AVATAR_ITEM } from "@ids";
import { SvgUnlockable } from "../../product/assets/svg-unlockable";
import { SvgLocked } from "../../product/assets/svg-locked";
import { ItemIcon } from "./item-icon";
import { IProduct } from "../../../../../products/fib/fib.types";
import { YuScreenProductContext } from "../../../yu-screen.context";

export const Item = (props: IProduct) => {
  const { earnRate, status, itemSlot, coverType, productId } = props;
  const { productId: selectedProductId, setProductId } = useContext(YuScreenProductContext);

  const onPress = useCallback(() => {
    setProductId(productId === selectedProductId ? null : productId);
  }, [productId, selectedProductId, setProductId]);

  const isSelected = useMemo(() => selectedProductId === productId, [selectedProductId, productId]);

  return (
    <TouchableOpacityWithDelay
      delay={350}
      activeOpacity={1}
      onPress={onPress}
      style={styles.wrapper}
      testID={AVATAR_ITEM(itemSlot, status)}
    >
      <ItemIcon isSelected={isSelected} itemSlot={itemSlot} status={status} coverType={coverType} />
      <View style={styles.tagWrapper}>{getTag(status, earnRate)}</View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(76),
    height: Style.adjust(64),
    marginTop: Style.adjust(12),
  } as ViewStyle,
  image: {
    maxHeight: Style.adjust(76),
    maxWidth: Style.adjust(64),
  } as ImageStyle,
  tagWrapper: {
    position: "absolute",
    top: Style.adjust(4),
    right: 0,
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
