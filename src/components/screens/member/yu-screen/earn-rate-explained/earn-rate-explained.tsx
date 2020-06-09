import { GenericHeading } from "@atoms/index";
import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
  EarnRateDetails_getEarnRateDetails,
} from "@graphql/_core/schema";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import { EarnRateTable, Card, Products } from "./subcomponents";

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

function YuScreenEarnRate({ products, onExitConfirmed, onProductDetails, explainData }: IProps) {
  const isAlpha = products.charms.length && !products.employer.length;
  const earnRate = 20;

  return (
    <SafeAreaView>
      <GenericHeading heading="Your YuCoin" onLeftIconPress={onExitConfirmed} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Card isAlpha={isAlpha} earnRate={earnRate} />
          <Products earnRate={earnRate} onProductDetails={onProductDetails} products={products} />
          <EarnRateTable earnRate={earnRate} explainData={explainData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default YuScreenEarnRate;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FAFAFE",
    height: "100%",
  },
});
