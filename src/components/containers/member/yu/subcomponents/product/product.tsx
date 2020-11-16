import React from "react";
import { StyleSheet, View, ViewStyle, ImageStyle } from "react-native";
import { ProductHeading } from "./product-heading";
import { ProductSubHeading, ISubHeadingProps } from "./product-sub-heading";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { ProductCtaIcon } from "./product-cta-icon";
import { getProductIcon } from "../../assets/getProductIcon";
import { ItemSlot, ProductStatus } from "../../yu-types";

export interface IProductProps {
  itemSlot: ItemSlot;
  tag?: string;
  heading: string;
  status?: ProductStatus;
  subheading: ISubHeadingProps;
  onPress?: () => void;
}

export const Product = (props: IProductProps) => {
  const { itemSlot, heading, subheading, status, onPress } = props;

  const IconSvg = getProductIcon(itemSlot);

  return (
    <TouchableOpacityWithDelay activeOpacity={1} onPress={onPress} style={styles.wrapper}>
      <IconSvg style={StyleSheet.flatten([styles.productIconWrapper, { opacity: status !== "active" ? 0.6 : 1 }])} />
      <View style={styles.productInfoWrapper}>
        <ProductHeading text={heading} />
        <View style={styles.productSubheadingWrapper}>
          <ProductSubHeading {...subheading} />
        </View>
      </View>
      <ProductCtaIcon status={status} />
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingLeft: Style.adjust(28),
    marginTop: Style.adjust(24),
    marginRight: Style.adjust(16),
  } as ViewStyle,
  productIconWrapper: {
    width: Style.adjust(80),
  } as ViewStyle,
  productIcon: {
    width: Style.adjust(80),
    marginTop: "auto",
  } as ImageStyle,
  productInfoWrapper: {
    marginLeft: Style.adjust(16),
    justifyContent: "center",
    paddingBottom: Style.adjust(8),
  } as ViewStyle,
  productSubheadingWrapper: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
});
