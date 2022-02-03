import React, { memo } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YU_SCREEN_PRODUCT_DETAILS } from "@graphql/products/getYuScreenProductDetails";
import { GetYuScreenProductDetails, GetYuScreenProductDetailsVariables } from "@graphql/_core/schema";
import { ProductDetailsScreen } from "./product-details.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface Props {
  productId: string;
}

const ProductDetailsContainer = memo(({ productId: customerProductId }: Props) => {
  const { data, loading, error } = useQuery<GetYuScreenProductDetails, GetYuScreenProductDetailsVariables>(
    GQL_QUERY_GET_YU_SCREEN_PRODUCT_DETAILS,
    {
      variables: {
        customerProductId,
      },
      fetchPolicy: "no-cache",
    }
  );

  if (error?.graphQLErrors?.length) {
    Navigation.pop(ROUTES.productDetails);
  }

  if (!data?.getYuScreenProductDetails || loading) {
    return null;
  }

  return <ProductDetailsScreen {...data.getYuScreenProductDetails} />;
});

export default ProductDetailsContainer;
