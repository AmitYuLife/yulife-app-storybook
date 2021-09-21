import convertToYup from "json-schema-yup-transformer";
import React, { memo, useContext, useMemo } from "react";
import { ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { DynamicData } from "@redux/server-driven-ui/sdui.types";
import { ContentItemButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlButton & {
  hasValidation?: boolean;
};

export const ProductStepContentItemButton = memo(({ onPress, hasValidation, disabledState, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  // TODO: sort out typings
  const dynamicOnPress: any = useMemo(
    () => ({
      type: onPress.type,
      payload: { productId, stepId, dynamicData, serverPayload: onPress.payload },
    }),
    [onPress, productId, stepId, dynamicData]
  );

  const isValid = hasValidation && disabledState ? getIsValid(disabledState, dynamicData) : true;

  return <ContentItemButton {...otherProps} onPress={dynamicOnPress} disabled={!isValid} />;
});

const getIsValid = (disabledState: string, dynamicData: DynamicData) => {
  try {
    const schema = JSON.parse(disabledState);
    const yupSchema = convertToYup(schema);
    return yupSchema.isValidSync(dynamicData);
  } catch (e) {
    return true;
  }
};
