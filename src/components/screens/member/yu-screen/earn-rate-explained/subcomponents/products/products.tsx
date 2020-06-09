import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@atoms/index";
import { Colours, Style } from "@styles";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import mainStyles from "../main.styles";
import ProductItem from "./product.item";

type ProductType = "employer" | "personal" | string;

interface IProps {
  earnRate: number;
  products: GetYulifer_getYulifer_products;
  onProductDetails: (
    product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
    productType: ProductType
  ) => () => void;
}

function Products(props: IProps) {
  const { earnRate, products, onProductDetails } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>{products.charms.length && !products.employer.length ? "Charms" : "Power-Ups"}</Text>
      {!products.employer.length && !products.charms.length ? (
        <View style={styles.marginBottom}>
          <Text style={mainStyles.text}>
            You currently do not have any Power-Ups. To increase your Earn Rate, check out the products available on
            your YuScreen. All products come with Power-Ups to your Earn Rate!
          </Text>
        </View>
      ) : (
        <View style={styles.marginBottom}>
          {products.employer.map((product, i) => {
            return (
              <ProductItem
                key={`${product.name}_${i}`}
                product={product}
                productType="employer"
                onPressAction={onProductDetails}
              />
            );
          })}
          {products.charms.map((product, i) => {
            return (
              <ProductItem
                key={`${product.name}_${i}`}
                product={product}
                productType="charm"
                onPressAction={onProductDetails}
              />
            );
          })}
          <Text style={StyleSheet.flatten([mainStyles.text, { marginTop: 16 }])}>
            {products.charms.length
              ? `As an early adopter Alpha User, you get exclusive free access to the app with a ${earnRate}x YuCoin Earn Rate! To increase your Earn Rate, check out the products available on your YuScreen.`
              : "To increase your Earn Rate, check out the products available on your YuScreen. All products come with Power-Ups to your Earn Rate!"}
          </Text>
        </View>
      )}
    </View>
  );
}

export default Products;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.yuscreen.white,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  header: {
    color: "#838385",
    fontSize: 20,
    letterSpacing: 0.4,
    lineHeight: 24,
    marginHorizontal: 16,
    marginVertical: 16,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  marginBottom: {
    marginBottom: 24,
  },
});
