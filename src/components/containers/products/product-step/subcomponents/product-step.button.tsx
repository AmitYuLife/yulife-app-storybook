import React, { memo, useContext, useMemo } from "react";
import { ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { ContentItemButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { useSelector } from "react-redux";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { getIsJsonSchemaValid } from "../utils";

type Props = GqlButton;

export const ProductStepContentItemButton = memo(({ onPress, disabledState, id, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);
  const buttonId = `${stepId} - ${id}`;
  const loadingKey = useSelector(getSduiLoadingForKey(buttonId));
  const disabled = useSelector(getSduiLoadingForKey("__disabled"));

  // TODO: sort out typings
  const dynamicOnPress: any = useMemo(
    () => ({
      type: onPress.type,
      payload: { productId, stepId, dynamicData, serverPayload: onPress.payload, id: buttonId },
    }),
    [onPress, productId, stepId, dynamicData, buttonId]
  );
  const isValid = disabledState ? getIsJsonSchemaValid(disabledState, dynamicData) : true;
  return (
    <ContentItemButton
      {...otherProps}
      id={id}
      isLoading={loadingKey}
      onPress={dynamicOnPress}
      disabled={disabled || !isValid}
    />
  );
});
