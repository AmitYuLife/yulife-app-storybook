import React, { useContext, useMemo } from "react";
import { ContentItemButton as GqlButton } from "@graphql/_core/schema/ContentItemButton";
import { ContentItemButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlButton;

export const ProductStepContentItemButton = ({ onPress, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  // TODO: sort out typings
  const dynamicOnPress: any = useMemo(
    () => ({
      type: onPress.type,
      payload: { productId, stepId, dynamicData, serverPayload: onPress.payload },
    }),
    [onPress, productId, stepId, dynamicData]
  );

  return <ContentItemButton {...otherProps} onPress={dynamicOnPress} />;
};
