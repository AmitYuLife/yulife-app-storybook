import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { CreateAvatarPrompt } from "../create-avatar-prompt";
import YuProducts from "../../products/personal-products/personal-products";
import {
  GetYulifer_getYulifer_products_personal,
  GetYulifer_getYulifer_products_employer,
} from "@graphql/_core/schema/GetYulifer.ts";
import { ProductType } from "@components/containers/member/yu-screen/yu-screen-products.container";
import { Style } from "@styles";

interface Props {
  isAvatarCreated: boolean;
  onUnlockPress: () => void;
  productsPersonal: GetYulifer_getYulifer_products_personal[];
  onProductPress: (
    product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
    productType: ProductType
  ) => () => void;
}

export const AvatarItems = memo(function ({ isAvatarCreated, onUnlockPress, productsPersonal, onProductPress }: Props) {
  if (!isAvatarCreated) {
    return <CreateAvatarPrompt onUnlockPress={onUnlockPress} />;
  }

  return (
    <View style={styles.insuranceProductsWrapper}>
      {productsPersonal?.map((product, index) => (
        <YuProducts
          key={product.icon + index}
          isActive={product.active}
          type={product.icon}
          name={product.name}
          onPressAction={onProductPress(product, "personal")}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  insuranceProductsWrapper: {
    justifyContent: "space-around",
    height: Style.adjust(338),
    width: Style.adjust(152),
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
