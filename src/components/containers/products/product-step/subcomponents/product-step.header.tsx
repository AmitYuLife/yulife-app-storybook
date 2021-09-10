import React, { memo, useContext, useMemo } from "react";
import { ContentItemHeaderBar as GqlHeader } from "@graphql/_core/schema/ContentItemHeaderBar";
import { ContentItemHeaderBar } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlHeader;

export const ProductStepContentItemHeader = memo(({ onLeftIconPress, onRightIconPress, ...otherProps }: Props) => {
  const { productId, stepId } = useContext(ProductStepContext);

  // TODO: sort out typings
  const dynamicLeftIconOnPress: any = useMemo(
    () =>
      !onLeftIconPress
        ? null
        : {
            type: onLeftIconPress.type,
            payload: { productId, stepId, serverPayload: onLeftIconPress.payload },
          },
    [onLeftIconPress, productId, stepId]
  );

  const dynamicRightIconOnPress: any = useMemo(
    () =>
      !onRightIconPress
        ? null
        : {
            type: onRightIconPress.type,
            payload: { productId, stepId, serverPayload: onRightIconPress.payload },
          },
    [onRightIconPress, productId, stepId]
  );

  return (
    <ContentItemHeaderBar
      {...otherProps}
      onLeftIconPress={dynamicLeftIconOnPress}
      onRightIconPress={dynamicRightIconOnPress}
    />
  );
});
