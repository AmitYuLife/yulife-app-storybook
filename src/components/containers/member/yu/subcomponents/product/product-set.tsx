import React, { useCallback } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { Product } from "./product";
import { Heading } from "../heading";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GetYulifer, UpdateTopUpsQuoteVariables, UpdateTopUpsQuote_updateFibQuote } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { navigateToProductScreen } from "../../navigation/navigateToProductScreen";
import { ItemSlot, ProductStatus, ProductType } from "../../yu-types";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Style } from "@styles";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "../../../../../../graphql/products/updateTopUpsQuote";

export interface IProductSetProps {
  type: ProductType;
}

export const ProductSet = (props: IProductSetProps) => {
  const { type } = props;
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });
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
  const heading = getHeading(type);

  if (!products.length) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Heading text={heading} />
      {products.map((product, index) => (
        <Product showSeparator={!!index} key={index} {...product} />
      ))}
    </View>
  );
};

function getHeading(type: IProductSetProps["type"]) {
  switch (type) {
    case "employer":
      return "Your company has equipped you with:";
    case "charms":
      return "As an early adopter, you get:";
    case "personal":
      return "Power up and protect yourself:";
    default:
      return null;
  }
}

interface GetProducts {
  type: IProductSetProps["type"];
  data: GetYulifer;
  fibState: ReturnType<typeof getFIBState>;
  resetFibJourney: () => void;
  shouldResetFib: boolean;
}

function getProducts({ type, data, fibState, resetFibJourney, shouldResetFib }: GetProducts) {
  if (!data?.getYulifer?.products) {
    return [];
  }

  return data.getYulifer.products[type]
    .map((item) => {
      if (!item) {
        return null;
      }

      const { itemSlot, icon, status, name, earnRate, description } = item;

      if (type === "employer" && status !== "active") {
        return null;
      }

      return {
        itemSlot: itemSlot as ItemSlot,
        icon,
        heading: name,
        status: status as ProductStatus,
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
