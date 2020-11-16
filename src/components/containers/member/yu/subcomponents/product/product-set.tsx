import React, { useCallback } from "react";
import { View } from "react-native";
import { Product } from "./product";
import { Heading } from "../heading";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { navigateToProductScreen } from "../../navigation/navigateToProductScreen";
import { ItemSlot, ProductStatus } from "../../yu-types";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import { getUserFeatures } from "@redux/user/user.selectors";

export interface IProductSetProps {
  type: "employer" | "personal" | "charms";
}

export const ProductSet = (props: IProductSetProps) => {
  const { type } = props;
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });
  const fibState = useSelector(getFIBState);
  const dispatch = useDispatch();
  const shouldResetFib = useSelector(getUserFeatures).resetFib;
  const resetFibJourney = useCallback(() => {
    dispatch(resetFIBUnderwritingJourney());
  }, [dispatch]);

  const products = getProducts({ type, data, fibState, resetFibJourney, shouldResetFib });
  const heading = getHeading(type);

  if (!products.length) {
    return null;
  }

  return (
    <View>
      <Heading text={heading} />
      {products.map((product, index) => (
        <Product key={index} {...product} />
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
