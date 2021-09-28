import React, { memo, useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { FullScreenSwiper } from "@organisms/full-screen-swiper/full-screen-swiper";
import { ContentItemFullScreenSwiper } from "@graphql/_core/schema/ContentItemFullScreenSwiper";
import { ProductStepContext } from "../product-step.context";

type Props = ContentItemFullScreenSwiper;
export const ProductStepFullScreenSwiper = memo(({ button, close, ...props }: Props) => {
  const dispatch = useDispatch();
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  const items = props.items.map((i) => ({
    ...i,
    backgroundImage: { uri: i.backgroundImage.uri },
  }));

  const derivedProps = useMemo(
    () => ({
      ...props,
      items,
      button: {
        ...button,
        onPress: () => {
          dispatch({
            type: button.onPress.type,
            payload: { productId, stepId, dynamicData, serverPayload: button.onPress.payload },
          });
        },
      },
      close: {
        ...close,
        onPress: () => {
          dispatch({
            type: close.onPress.type,
          });
        },
      },
    }),
    [props, dispatch, dynamicData, items, productId, stepId, button, close]
  );

  return <FullScreenSwiper {...derivedProps} />;
});
