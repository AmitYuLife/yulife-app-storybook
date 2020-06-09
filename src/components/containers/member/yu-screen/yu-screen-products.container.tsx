import React from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../navigation/constants";
import YuscreenProductDetails from "@screens/member/yu-screen/products/products-details/product-details";
import ProductsSurvey from "@screens/member/yu-screen/products-survey/products-survey";
import {
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";

export type ProductType = "employer" | "personal" | string;

interface IProps {
  product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal;
  productType: ProductType;
  onBackButton: () => void;
}

function YuScreenProductsContainer({ product, productType, onBackButton }: IProps) {
  if (productType === "personal") {
    return <ProductsSurvey onExitConfirmed={onExitConfirmed} />;
  }

  return (
    <YuscreenProductDetails
      product={product}
      productType={productType}
      onExitConfirmed={!!onBackButton ? onBackButton : onExitConfirmed}
    />
  );
}

export default YuScreenProductsContainer;

function onExitConfirmed() {
  Navigation.popTo(ROUTES.yuScreen);
}
