import { useQuery } from "@apollo/react-hooks";
import { GetCheckoutDetails } from "@graphql/_core/schema";
import { GQL_QUERY_GET_CHECKOUT_DETAILS } from "@graphql/products";
import { ProductCode } from "@graphql/_core/schema/globalTypes";
import { useSelector } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { WatchQueryFetchPolicy } from "apollo-boost";

export const useCheckoutQuery = (fetchPolicy: WatchQueryFetchPolicy = "cache-and-network") => {
  const { productEntityId, latestQuoteId } = useSelector(getFIBState);

  const { data, loading } = useQuery<GetCheckoutDetails>(GQL_QUERY_GET_CHECKOUT_DETAILS, {
    fetchPolicy,
    variables: {
      input: {
        customerProductEntityId: productEntityId,
        quoteId: latestQuoteId,
      },
      product: ProductCode.YULFIB,
    },
  });

  return { data, loading };
};
