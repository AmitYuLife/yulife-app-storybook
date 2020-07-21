import React from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { Text } from "@atoms/index";
import { Colours, Style } from "@styles";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import ProductItem from "./product.item";
import { TextWithBoldText } from "@components/molecules";

type ProductType = "employer" | "personal" | string;

interface IProps {
  products: GetYulifer_getYulifer_products;
  onProductDetails: (
    product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
    productType: ProductType
  ) => () => void;
}

interface IFooterTextProps {
  isAlpha: boolean;
}

function FooterText({ isAlpha }: IFooterTextProps) {
  return (
    <Text style={{ marginTop: 16, marginHorizontal: 16 }}>
      <TextWithBoldText
        style={styles.footerText}
        value={`${
          !isAlpha ? "" : "As an early adopter alpha user, you get exclusive free access to the app! "
        }To increase your <bold>earn rate</bold>, check out the products available on your Yu screen. All products come with <bold>power-ups</bold> to increase your earn rate!`}
      />
    </Text>
  );
}

function Products(props: IProps) {
  const { products, onProductDetails } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>{products.charms.length && !products.employer.length ? "Charms" : "Power-Ups"}</Text>
      {!products.employer.length && !products.charms.length ? (
        <View style={styles.marginBottom}>
          <TextWithBoldText
            style={styles.compoundText}
            value="You currently do not have any Power-Ups. To increase your <bold>earn rate</bold>, check out the products
            available on your Yu screen. All products come with <bold>power-ups</bold> to increase your earn rate!"
          />
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
          <FooterText isAlpha={products.charms.length > 0} />
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
    marginBottom: 64,
  },
  header: {
    color: "#5A5A5C",
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
  footerText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: 24,
    letterSpacing: 1,
    fontSize: 16,
    textAlign: "left",
  },

  boldText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  compoundText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.adjust(24),
    marginHorizontal: Style.adjust(16),
    letterSpacing: 0.8,
    fontSize: Style.adjust(16, { shrinkMultiplier: 0.2 }),
    color: Colours.text.n800,
  } as TextStyle,
});
