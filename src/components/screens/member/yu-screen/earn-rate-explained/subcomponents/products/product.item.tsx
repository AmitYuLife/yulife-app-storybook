import React from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Text } from "@atoms/index";
import { Style } from "@styles";
import { GetYulifer_getYulifer_products_employer, GetYulifer_getYulifer_products_charms } from "@graphql/_core/schema";
import Charm from "../../../svg/charms";
import EmployerProductIcon from "../../../svg/employer-products";
import ArrowRight from "./arrow-details";

type Product = GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_charms;

interface IProps {
  product: Product;
  productType: string;
  onPressAction: (product: Product, productType: string) => () => void;
}

function ProductItem(props: IProps) {
  const { product, productType, onPressAction } = props;
  const isCharm = productType === "charm";

  return (
    <>
      <View style={styles.wrapper} key={product.icon}>
        {isCharm ? (
          <View style={styles.charmWrapper}>
            <Charm active={true} icon={product.icon} height={77} width={77} />
          </View>
        ) : (
          <View style={styles.employerProducts}>
            <EmployerProductIcon active={product.active} icon={product.icon} />
          </View>
        )}
        <View style={styles.productsTextWrapper}>
          <Text bold={true} style={StyleSheet.flatten([styles.description, styles.boldText, styles.productsText])}>
            {isCharm ? "Alpha Charm" : product.name}
          </Text>
          <Text style={styles.description}>{`${product.earnRate}x YuCoin earn rate`}</Text>
        </View>
        <TouchableOpacity style={styles.arrowWrapper} onPress={onPressAction(product, productType)}>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSeparator}></View>
    </>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingBottom: 4,
    marginLeft: 16,
    minHeight: 77,
    paddingLeft: 8,
  },
  description: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
    fontSize: Style.adjust(16, { shrinkMultiplier: 0.2 }),
    textAlign: "left",
    color: "#5A5A5C",
  } as TextStyle,
  boldText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  bottomSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    width: "95%",
    alignSelf: "center",
    marginBottom: 8,
  },
  productsText: {
    color: "#5A5A5C",
  },
  productsTextWrapper: {
    justifyContent: "center",
    width: 184,
    marginLeft: 16,
    marginTop: Platform.select({ ios: 0, android: -16 }),
  },
  arrowWrapper: {
    justifyContent: "center",
    width: 48,
    marginLeft: "auto",
  },
  employerProducts: {
    height: 77,
    width: 64,
  } as ViewStyle,
  charmWrapper: {
    marginBottom: Style.adjust(8),
    marginLeft: Platform.select({ ios: Style.adjust(-12), android: Style.adjust(-8) }),
    marginRight: Platform.select({ ios: Style.adjust(12), android: Style.adjust(8) }),
  } as ViewStyle,
});
