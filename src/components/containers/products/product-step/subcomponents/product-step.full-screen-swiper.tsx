import React, { memo, useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { ContentItemFullScreenSwiper } from "@graphql/_core/schema";
import { FullScreenSwiper } from "@organisms/full-screen-swiper/full-screen-swiper";
import { ProductStepContext } from "../product-step.context";

type Props = ContentItemFullScreenSwiper;
export const ProductStepFullScreenSwiper = memo((props: Props) => {
  const { button, close } = props;

  const dispatch = useDispatch();
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  const buildPayload = useCallback((serverPayload: string) => ({ productId, stepId, dynamicData, serverPayload }), [
    productId,
    stepId,
    dynamicData,
  ]);

  const handlePress = () => dispatch({ type: button.onPress.type, payload: buildPayload(button.onPress.payload) });
  const handleClose = () => dispatch({ type: close.onPress.type, payload: buildPayload(close.onPress.payload) });

  return (
    <FullScreenSwiper
      {...props}
      close={{ ...close, onPress: handleClose }}
      button={{ ...button, onPress: handlePress }}
    />
  );
});
