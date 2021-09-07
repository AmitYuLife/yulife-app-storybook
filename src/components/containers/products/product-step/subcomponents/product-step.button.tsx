import React, { memo, useContext, useMemo } from "react";
import { ContentItemButton as GqlButton, ContentItemTextInput } from "@graphql/_core/schema";
import { ContentItemButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlButton & {
  hasValidation?: boolean;
};

export const ProductStepContentItemButton = memo(({ onPress, hasValidation, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData, body } = useContext(ProductStepContext);

  // TODO: sort out typings
  const dynamicOnPress: any = useMemo(
    () => ({
      type: onPress.type,
      payload: { productId, stepId, dynamicData, serverPayload: onPress.payload },
    }),
    [onPress, productId, stepId, dynamicData]
  );

  // TODO: use field's validation array
  const isValid = hasValidation
    ? body
        .filter((a) => (a as ContentItemTextInput).answerKey)
        .every((a) => dynamicData[(a as ContentItemTextInput).answerKey])
    : true;

  return <ContentItemButton {...otherProps} onPress={dynamicOnPress} disabled={!isValid} />;
});
