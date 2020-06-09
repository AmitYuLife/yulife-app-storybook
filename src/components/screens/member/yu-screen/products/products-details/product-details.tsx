import { Text } from "@atoms/index";
import { TextWithBoldText } from "@components/molecules";
import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import styles from "../products.style";
import { getPersonalProductImage } from "../employer-products/employer-product.helper";
import GenericHeading from "@atoms/generic-heading/generic-heading";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import EmployerProductIcon from "../../svg/employer-products";
import Charm from "../../svg/charms";

interface IProps {
  product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal;
  onExitConfirmed: () => void;
  productType: ProductType;
}

function YuscreenEmployerProductDetails({ product, onExitConfirmed, productType }: IProps) {
  const isEmployerProduct = productType === "employer";
  const isCharm = productType === "charm";
  const isTwoDigits = product.earnRate.toString().length === 2;
  const extraStyle =
    isTwoDigits && product.earnRate > 10
      ? styles.earnRateTextBiggerThanTen
      : isTwoDigits
      ? styles.earnRateTextIsTen
      : {};

  return (
    <SafeAreaView>
      <GenericHeading heading={product.name} onLeftIconPress={onExitConfirmed} />
      <View style={styles.productDetailsWrapper}>
        <View style={styles.productDetailsHeader}>
          {isEmployerProduct ? (
            <View style={{ height: 114, width: 96 }}>
              <EmployerProductIcon
                active={product.active}
                icon={product.icon}
                rateViewStyle={styles.productsDetailsRateView}
                rateTextStyle={StyleSheet.flatten([styles.productsDetailsRateText, extraStyle])}
                earnRate={product.earnRate}
              />
            </View>
          ) : isCharm ? (
            <View>
              <Charm
                active={true}
                icon={product.icon}
                rateViewStyle={StyleSheet.flatten([styles.productsDetailsRateView])}
                rateTextStyle={StyleSheet.flatten([styles.productsDetailsRateText, extraStyle])}
                earnRate={product.earnRate}
                height="114"
                width="96"
              />
            </View>
          ) : (
            getPersonalProductImage(product.icon)
          )}
          {!(isEmployerProduct && product.active && product.policyNumber) ? null : (
            <View style={styles.productDetailsPolicy}>
              <Text style={styles.productDetailsPolicyHeader}>Policy number:</Text>
              <Text style={styles.productDetailsPolicyValue}>{product.policyNumber}</Text>
            </View>
          )}
        </View>
        <View style={styles.productDetailsContent}>
          <TextWithBoldText style={styles.productDetailsDescription} value={product.description} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default YuscreenEmployerProductDetails;
