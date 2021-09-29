import React, { memo, useContext, useMemo } from "react";
import { ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { ContentItemButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { getIsJsonSchemaValid } from "../utils";

type Props = GqlButton;

export const ProductStepContentItemButton = memo(({ onPress, disabledState, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  // TODO: sort out typings
  const dynamicOnPress: any = useMemo(
    () => ({
      type: onPress.type,
      payload: { productId, stepId, dynamicData, serverPayload: onPress.payload },
    }),
    [onPress, productId, stepId, dynamicData]
  );

  const isValid = disabledState ? getIsJsonSchemaValid(disabledState, dynamicData) : true;

  return <ContentItemButton {...otherProps} onPress={dynamicOnPress} disabled={!isValid} />;
});
