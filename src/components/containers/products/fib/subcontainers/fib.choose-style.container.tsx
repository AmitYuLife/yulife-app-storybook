import React, { memo } from "react";
import { FibLocalNavigation, FIB_INTRO_YUGI } from "../fib.types";
import { FibStyleSelectionScreen } from "../../../../screens/products/fib/choose-style/choose-style.screen";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { GetYulifer } from "@graphql/_core/schema";
import { CoverType, YuProductId } from "@graphql/_core/schema/globalTypes";
import { GetYulifer_personal_options } from "../../../../../graphql/_core/schema/GetYulifer";
import { YuWorld } from "../../../../../graphql/_core/schema/globalTypes";
import { YUGI_INTRO_TYPE } from "./fib.yugi-intro.container";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

interface IFibStyleSelectionProps {
  navigation: FibLocalNavigation;
}

const FibStyleSelectionContainer = memo(function FibStyleSelectionContainer(props: IFibStyleSelectionProps) {
  const { navigation } = props;

  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const epic = data.personal.reduce((acc: GetYulifer_personal_options, product) => {
    if (product.productId !== YuProductId.family_income_benefit) {
      return acc;
    }

    acc = product.options.find((option) => option.type === CoverType.epic);
    return acc;
  }, null);

  const onContinue = (world: YuWorld) => {
    switch (world) {
      case YuWorld.forest:
        return navigation.push(FIB_INTRO_YUGI, {
          type: YUGI_INTRO_TYPE.FOREST_STYLE_SELECTED,
        });
      case YuWorld.ocean:
        return navigation.push(FIB_INTRO_YUGI, {
          type: YUGI_INTRO_TYPE.OCEAN_STYLE_SELECTED,
        });
      case YuWorld.desert:
        return navigation.push(FIB_INTRO_YUGI, {
          type: YUGI_INTRO_TYPE.DESERT_STYLE_SELECTED,
        });
      case YuWorld.mountain:
        return navigation.push(FIB_INTRO_YUGI, {
          type: YUGI_INTRO_TYPE.MOUNTAIN_STYLE_SELECTED,
        });
    }
  };

  const onBackHandler = () => {
    navigation.replace(FIB_INTRO_YUGI, {
      type: YUGI_INTRO_TYPE.INTRO_UNDERWRITING,
      initialIndex: 1,
    });
    return true;
  };

  useBackHandler(onBackHandler);

  return (
    <FibStyleSelectionScreen
      productStyleOptions={epic.styles}
      onContinue={onContinue}
      onBackPress={onBackHandler}
      onClose={navigation.popToMain}
    />
  );
});

export default FibStyleSelectionContainer;
