import React, { memo, useContext, useMemo } from "react";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";
import { ContentItemLottie } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlLottie;

export const ProductStepContentItemLottie = memo(({ onAnimationEnd, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  // TODO: sort out typings
  const dynamicOnPress: any = useMemo(
    () =>
      !onAnimationEnd
        ? null
        : {
            type: onAnimationEnd.type,
            payload: { productId, stepId, dynamicData, serverPayload: onAnimationEnd.payload },
          },
    [onAnimationEnd, productId, stepId, dynamicData]
  );

  return <ContentItemLottie {...otherProps} onAnimationEnd={dynamicOnPress} />;
});
