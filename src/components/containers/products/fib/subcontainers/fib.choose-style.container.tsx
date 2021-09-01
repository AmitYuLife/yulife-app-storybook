import React, { memo, useEffect } from "react";
import FastImage, { Source } from "react-native-fast-image";
import { FibLocalNavigation, FIB_INTRO_YUGI } from "../fib.types";
import { FibStyleSelectionScreen } from "@screens/products/fib/choose-style/choose-style.screen";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { GetYulifer } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { GetYulifer_personal_chest_options_styles } from "@graphql/_core/schema/GetYulifer";
import { YuWorld } from "@graphql/_core/schema/globalTypes";
import { YUGI_INTRO_TYPE } from "./fib.yugi-intro.container";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { useDispatch } from "react-redux";
import { updateFIBStyle } from "@redux/product/product.actions";

interface IFibStyleSelectionProps {
  navigation: FibLocalNavigation;
}

const FibStyleSelectionContainer = memo(function FibStyleSelectionContainer(props: IFibStyleSelectionProps) {
  const { navigation } = props;
  const dispatch = useDispatch();

  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const epic = data.personal.chest.options.find((option) => option.type === CoverType.epic);

  useEffect(() => {
    const preload: Source[] = [];
    epic.styles.forEach((epicStyle) => {
      ["armor", "background", "icon"].forEach((key: keyof GetYulifer_personal_chest_options_styles) => {
        //@TODO PLI: keep this check until we'll have images from api, to not make the android build crash during Fast image preload
        if (epicStyle[key]) {
          preload.push({ uri: epicStyle[key] });
        }
      });
    });
    FastImage.preload(preload);
  }, [epic]);

  const onContinue = (world: YuWorld) => {
    dispatch(updateFIBStyle(world));

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
