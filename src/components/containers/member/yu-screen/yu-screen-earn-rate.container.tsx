import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import {
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
  EarnRateDetails,
} from "@graphql/_core/schema";
import YuScreenEarnRate from "@screens/member/yu-screen/earn-rate-explained/earn-rate-explained";
import { ProductType } from "./yu-screen-products.container";
import { GQL_QUERY_GET_EARN_RATE_DETAILS } from "@graphql/yuscreen";

interface IProps {
  products: GetYulifer_getYulifer_products;
  earnRate: number;
  totalEarnRate: number;
  componentId: string;
}

function handleExitConfirmed() {
  Navigation.popTo(ROUTES.yuScreen);
}

function handleProductDetailsBack() {
  Navigation.popTo(ROUTES.yuScreenEarnRate);
}

function navigateToProductScreen(
  componentId: string,
  productType: ProductType,
  product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal
) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.yuScreenProducts,
      name: ROUTES.yuScreenProducts,
      passProps: {
        product,
        productType,
        onBackButton: handleProductDetailsBack,
      },
    },
  });
}

function YuScreenEarnRateContainer({ componentId, products, earnRate }: IProps) {
  const { data, loading } = useQuery<EarnRateDetails>(GQL_QUERY_GET_EARN_RATE_DETAILS, {
    fetchPolicy: "cache-and-network",
  });

  const explainData = data?.getEarnRateDetails || [];

  return (
    <YuScreenEarnRate
      loading={loading}
      products={products}
      earnRate={earnRate}
      explainData={explainData}
      onExitConfirmed={handleExitConfirmed}
      onProductDetails={(
        product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
        productType: ProductType
      ) => () => {
        navigateToProductScreen(componentId, productType, product);
      }}
    />
  );
}

export default YuScreenEarnRateContainer;
