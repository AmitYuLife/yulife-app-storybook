import React, { memo, useContext, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { useDispatch } from "react-redux";
import { ContentItemCoverPicker as Props } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { ContentItemButton, ContentItemText } from "@components/sdui";
import { ProductStepContext } from "../../product-step.context";
import { useSetDefaultAnswer } from "../../hooks/useSetDefaultAnswer";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { ProductStepPercentPicker } from "../product-step.scrollable-items-picker";
import { BoxOptions } from "./box-options";
import { sduiEventActionCreator } from "../../utils/sduiEventActionCreator";

export const ProductStepCoverPicker = memo((props: Props) => {
  const {
    styles,
    options,
    answerKey,
    answerKeyDefaultValue,
    hasSelectedCustomCover,
    coverPickerTitle,
    customCover,
    id,
  } = props;
  const [isCustom, setIsCustom] = useState(hasSelectedCustomCover);
  const [title, setTitle] = useState(hasSelectedCustomCover ? customCover.title : coverPickerTitle.text);
  const { setDynamicData, dynamicData, productId, stepId, componentsLayout, setComponentsLayout } = useContext(
    ProductStepContext
  );

  const dispatch = useDispatch();

  useSetDefaultAnswer({ dynamicData, setDynamicData, answerKeyDefaultValue, answerKey });
  useSetDefaultAnswer({
    dynamicData,
    setDynamicData,
    answerKeyDefaultValue: CoverType.common,
    answerKey: LOCAL_ANSWER_KEY.CoverType,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    setComponentsLayout({ [stepId]: { ...componentsLayout[stepId], [id]: event.nativeEvent.layout } });
  };

  return (
    <View onLayout={handleLayout}>
      <ContentItemText {...coverPickerTitle} text={title} />
      {isCustom ? (
        <ProductStepPercentPicker {...customCover.itemsPicker} __typename="ContentItemScrollableItemsPicker" />
      ) : (
        <BoxOptions styles={styles} options={options} answerKey={answerKey} />
      )}
      {!customCover?.button || isCustom ? null : (
        <ContentItemButton
          {...customCover.button}
          onPress={() => {
            dispatch(sduiEventActionCreator("customer_cover_viewed", { cs_product: productId }));
            setTitle(customCover.title);
            setIsCustom(true);
          }}
        />
      )}
    </View>
  );
});
