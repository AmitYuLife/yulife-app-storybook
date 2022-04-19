import React, { memo, useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { FullScreenLottieSwiper } from "@organisms/full-screen-lottie-swiper/full-screen-lottie-swiper";
import { ContentItemFullScreenLottieSwiper } from "@graphql/_core/schema/ContentItemFullScreenLottieSwiper";
import { ProductStepContext } from "../product-step.context";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

type Props = ContentItemFullScreenLottieSwiper;
export const ProductStepFullScreenLottieSwiper = memo(({ button, close, ...props }: Props) => {
  const dispatch = useDispatch();
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  const items = props.items || [];
  const contextAwarePayload = { productId, stepId, dynamicData };

  const derivedProps = useMemo(
    () => ({
      ...props,
      items: items.map((item) => ({
        ...item,
        onAnimationEnd: !item.onAnimationEnd
          ? null
          : () =>
              dispatch({
                type: item.onAnimationEnd.type,
                payload: { ...contextAwarePayload, serverPayload: item.onAnimationEnd.payload },
              }),
      })),
      button: {
        ...button,
        onPress: () => {
          dispatch({
            type: button.onPress.type,
            payload: { ...contextAwarePayload, serverPayload: button.onPress.payload },
          });
        },
      },
      close: {
        ...close,
        onPress: (currentIndex: number) => {
          dispatch(
            logMixpanelEventActionCreator("modal_close", {
              previous_modal_index: currentIndex,
              previous_modal_name: items[currentIndex]?.id,
              cs_product: productId,
            })
          );

          dispatch({
            type: close.onPress.type,
            payload: { ...contextAwarePayload, serverPayload: close.onPress.payload },
          });
        },
      },
    }),
    [props, dispatch, dynamicData, items, productId, stepId, button, close]
  );

  return <FullScreenLottieSwiper {...derivedProps} />;
});
