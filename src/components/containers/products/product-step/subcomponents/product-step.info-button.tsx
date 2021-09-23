import React, { memo, useContext, useMemo } from "react";
import { ContentItemInfoButton as GqlInfoButton } from "@graphql/_core/schema";
import { ContentItemInfoButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlInfoButton;

export const ProductStepContentItemInfoButton = memo(({ onPress, answerKeys, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  // TODO: sort out typings
  const dynamicOnPress: any = useMemo(
    () => ({
      type: onPress.type,
      payload: { productId, stepId, dynamicData, serverPayload: onPress.payload },
    }),
    [onPress, productId, stepId, dynamicData]
  );

  const additionalInfo = (answerKeys || [])
    .map((key) => dynamicData[key])
    .filter(Boolean)
    .join("\n");

  return <ContentItemInfoButton {...otherProps} onPress={dynamicOnPress} additionalInfo={additionalInfo} />;
});
