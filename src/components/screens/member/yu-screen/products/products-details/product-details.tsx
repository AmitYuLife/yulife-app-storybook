import { Text } from "@atoms/index";
import { TextWithBoldText } from "@components/molecules";
import React from "react";
import { SafeAreaView, View } from "react-native";
import {
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import styles from "../products.style";
import GenericHeading from "@atoms/generic-heading/generic-heading";
import { ProductType } from "@containers/member/yu-screen/yu-screen-products.container";
import EmployerProductIcon from "../../svg/employer-products";
import Charm from "../../svg/charms";
import PersonalProductsIcon from "../../svg/yuser-products";

interface IProps {
  product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal;
  onExitConfirmed: () => void;
  productType: ProductType;
}

function YuscreenEmployerProductDetails({ product, onExitConfirmed, productType }: IProps) {
  const isEmployerProduct = productType === "employer";
  const isCharm = productType === "charm";

  return (
    <SafeAreaView>
      <GenericHeading heading={product.name} onLeftIconPress={onExitConfirmed} />
      <View style={styles.productDetailsWrapper}>
        <View style={styles.productDetailsHeader}>
          {isEmployerProduct ? (
            <View style={{ height: 114, width: 96, marginHorizontal: 32 }}>
              <EmployerProductIcon active={product.active} icon={product.icon} />
            </View>
          ) : isCharm ? (
            <View style={{ width: 96 }}>
              <Charm active={true} icon={product.icon} height={114} width={96} />
            </View>
          ) : (
            <PersonalProductsIcon icon={product.icon} active={product.active} />
          )}
          {!(isEmployerProduct && product.active && product.policyNumber) ? null : (
            <View style={styles.productDetailsPolicy}>
              <Text style={styles.productDetailsPolicyHeader}>Policy Number:</Text>
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
