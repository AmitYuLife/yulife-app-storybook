import React, { useCallback } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { IProductProps, Product } from "./product";
import { Heading, Subheading } from "../heading";
import { GetYulifer, UpdateTopUpsQuoteVariables, UpdateTopUpsQuote_updateFibQuote } from "@graphql/_core/schema";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { navigateToProductScreen } from "../../navigation/navigateToProductScreen";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Style } from "@styles";
import { ProductType, YuProductStatus } from "../../../../../../graphql/_core/schema/globalTypes";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "../../../../../../graphql/products/updateTopUpsQuote";
import { IProduct } from "../../../../products/fib/fib.types";

export interface IProductSetProps {
  type: ProductType;
}

export const ProductSet = (props: IProductSetProps) => {
  const { type } = props;
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, { fetchPolicy: "cache-only" });
  const fibState = useSelector(getFIBState);
  const dispatch = useDispatch();
  const shouldResetFib = useSelector(getUserFeatures).resetFib;
  const [updateFibQuote] = useMutation<UpdateTopUpsQuote_updateFibQuote, UpdateTopUpsQuoteVariables>(
    GQL_MUTATION_UPDATE_TOP_UPS_QUOTE
  );

  const quoteId = fibState.latestQuoteId;
  const resetFibJourney = useCallback(async () => {
    if (quoteId) {
      await updateFibQuote({
        variables: { archiveQuote: true, quoteId },
      });
    }

    dispatch(resetFIBUnderwritingJourney());
  }, [dispatch, quoteId, updateFibQuote]);

  const products = getProducts({ type, data, fibState, resetFibJourney, shouldResetFib });
  const { heading, subheading } = getHeading(type);

  if (!products.length) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Heading text={heading} />
      <Subheading text={subheading} />
      {products.map((product, index) => (
        <Product showSeparator={!!index} key={index} {...product} />
      ))}
    </View>
  );
};

function getHeading(type: ProductType) {
  switch (type) {
    case ProductType.employer:
      return {
        heading: "Company Items",
        subheading: "Provided by your company",
      };
    case ProductType.alpha:
      return {
        heading: "Granted Items",
        subheading: "Equipped by your company or YuLife",
      };
    case ProductType.personal:
      return {
        heading: "Personal Items",
        subheading: "The equipment you own",
      };
    default:
      return {
        heading: "",
        subheading: "",
      };
  }
}

interface GetProducts {
  type: ProductType;
  data: GetYulifer;
  fibState: ReturnType<typeof getFIBState>;
  resetFibJourney: () => void;
  shouldResetFib: boolean;
}

function getProducts({ type, data, fibState, resetFibJourney, shouldResetFib }: GetProducts): IProductProps[] {
  if (!data) {
    return [];
  }

  const { chest, pants, gloves, boots } = data?.personal || {};

  const products: IProduct[] = [...data.additional, chest, pants, gloves, boots].filter(
    (product) => product.productType === type
  );

  return products
    .map((item) => {
      if (!item) {
        return null;
      }

      const { itemSlot, status, name, earnRate, description } = item;

      if (type === ProductType.employer && status !== YuProductStatus.active) {
        return null;
      }

      return {
        itemSlot,
        heading: name,
        status,
        subheading: {
          activeYuCoinPower: earnRate,
          description,
        },
        onPress: () =>
          navigateToProductScreen({
            product: item,
            fibState,
            resetFibJourney,
            shouldResetFib,
          }),
      };
    })
    .filter(Boolean);
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
  } as ViewStyle,
});
