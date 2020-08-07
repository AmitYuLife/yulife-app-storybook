import { GenericHeading } from "@atoms/index";
import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, ViewStyle } from "react-native";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
  EarnRateDetails_getEarnRateDetails,
} from "@graphql/_core/schema";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import { EarnRateTable, Card, Products } from "./subcomponents";
import { getActiveProducts } from "./earn-rate-explained.helpers";
import { YOUR_YUCOIN_SCREEN } from "@ids";

interface IProps {
  earnRate: number;
  products: GetYulifer_getYulifer_products;
  onExitConfirmed?: () => void;
  onProductDetails: (
    product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
    productType: ProductType
  ) => () => void;
  explainData: EarnRateDetails_getEarnRateDetails[];
  loading: boolean;
}

function YuScreenEarnRate({ products, onExitConfirmed, onProductDetails, explainData, earnRate, loading }: IProps) {
  const activeProducts = getActiveProducts(products);
  const hasCharmsOnly =
    activeProducts.charms.length && !activeProducts.employer.length && !activeProducts.personal.length;

  return (
    <SafeAreaView style={styles.background}>
      <GenericHeading heading="Your YuCoin" onLeftIconPress={onExitConfirmed} />
      <ScrollView style={styles.background} showsVerticalScrollIndicator={false} testID={YOUR_YUCOIN_SCREEN}>
        <View style={styles.wrapper}>
          <Card hasCharmsOnly={hasCharmsOnly} earnRate={earnRate} />
          <EarnRateTable earnRate={earnRate} explainData={explainData} loading={loading} />
          <Products onProductDetails={onProductDetails} products={activeProducts} hasCharmsOnly={hasCharmsOnly} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default YuScreenEarnRate;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FAFAFE",
  } as ViewStyle,
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FAFAFE",
    height: "100%",
  },
});
