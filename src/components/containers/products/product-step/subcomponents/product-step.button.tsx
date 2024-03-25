import React, { memo, useCallback, useContext } from "react";
import { ContentItemButtonFragment as GqlButton } from "@graphql/__generated";
import { ContentItemButton } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { useDispatch, useSelector } from "react-redux";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { useSduiValidField } from "@components/sdui/_hooks";

type Props = GqlButton;

export const ProductStepContentItemButton = memo(({ onPress, disabledState, id, ...otherProps }: Props) => {
  const { productId, stepId, dynamicData, isLoading } = useContext(ProductStepContext);
  const buttonId = `${stepId} - ${id}`;
  const loadingKey = useSelector(getSduiLoadingForKey(buttonId));
  const disabled = useSelector(getSduiLoadingForKey("__disabled")) || isLoading;
  const dispatch = useDispatch();

  const dynamicOnPress = useCallback(
    () =>
      dispatch({
        type: onPress.type,
        payload: {
          productId,
          stepId,
          dynamicData,
          serverPayload: onPress.payload,
          id: buttonId,
        },
      }),
    [onPress, productId, stepId, dynamicData, buttonId, dispatch]
  );

  const { isValid } = useSduiValidField({
    schema: disabledState,
    data: dynamicData,
  });

  return (
    <ContentItemButton
      {...otherProps}
      disabledState={disabledState}
      id={id}
      isLoading={loadingKey}
      onPress={dynamicOnPress}
      disabled={disabled || !isValid}
      shouldValidateBus={false}
    />
  );
});
