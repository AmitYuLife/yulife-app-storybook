import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, LayoutChangeEvent } from "react-native";
import EmployerBenefitsItem from "../products/employer-products/employer-product-item";
import {
  GetYulifer_getYulifer_products_personal,
  GetYulifer_getYulifer_products_employer,
} from "@graphql/_core/schema/GetYulifer.ts";
import { ProductType } from "@components/containers/member/yu-screen/yu-screen-products.container";
import { Style } from "@styles";
import { SectionTitle } from "./section-title";
import { SectionSeparator } from "./section-separator";

interface Props {
  onProductPress: (
    product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
    productType: ProductType
  ) => () => void;
  productsEmployer: GetYulifer_getYulifer_products_employer[];
  setSectionTitleWidth: React.Dispatch<React.SetStateAction<number>>;
}

export const EmployerBenefits = memo(function ({ onProductPress, productsEmployer, setSectionTitleWidth }: Props) {
  if (!productsEmployer.length) {
    return null;
  }

  const onLayout = (event: LayoutChangeEvent) => {
    setSectionTitleWidth(event.nativeEvent.layout.x);
  };
  return (
    <>
      <SectionSeparator />
      <View style={styles.employerBenefitsWrapper}>
        <View style={{ alignItems: "center" }}>
          <SectionTitle title="Employer Benefits" onLayout={onLayout} />
        </View>
        <View style={styles.employerBenefitsItems}>
          {productsEmployer.map((product, index) => (
            <EmployerBenefitsItem
              key={product.icon + index}
              product={product}
              onPressAction={onProductPress(product, "employer")}
            />
          ))}
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  employerBenefitsWrapper: {
    paddingTop: Style.SCALE_UP_AND_DOWN(24),
    marginBottom: 18,
  } as ViewStyle,
  employerBenefitsItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(16),
    marginHorizontal: 16,
  } as ViewStyle,
});
