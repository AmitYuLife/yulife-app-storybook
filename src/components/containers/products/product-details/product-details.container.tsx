import React, { memo } from "react";
import { useQuery } from "@apollo/client";
import { ProductDetailsScreen } from "./product-details.screen";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { gql } from "@graphql/__generated";

interface Props {
  productId: string;
}

const ProductDetailsContainer = memo(({ productId: customerProductId }: Props) => {
  const { data, loading, error } = useQuery(gql("GetYuScreenProductDetailsDocument"), {
    variables: {
      customerProductId,
    },
    fetchPolicy: "no-cache",
  });

  if (error?.graphQLErrors?.length) {
    Navigation.pop(ROUTES.productDetails);
  }

  if (!data?.getYuScreenProductDetails || loading) {
    return null;
  }

  return <ProductDetailsScreen {...data.getYuScreenProductDetails} />;
});

export default ProductDetailsContainer;
