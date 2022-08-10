import React, { memo, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FullScreenLottieSwiper } from "@organisms/full-screen-lottie-swiper/full-screen-lottie-swiper";
import { ContentItemFullScreenLottieSwiper } from "@graphql/_core/schema/ContentItemFullScreenLottieSwiper";
import { ProductStepContext } from "../product-step.context";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { sduiEventActionCreator } from "../utils/sduiEventActionCreator";

type Props = ContentItemFullScreenLottieSwiper;
export const ProductStepFullScreenLottieSwiper = memo(({ button, close, ...props }: Props) => {
  const dispatch = useDispatch();
  const { productId, stepId, dynamicData, isLoading: isInLoadingContext } = useContext(ProductStepContext);

  const items = props.items || [];
  const contextAwarePayload = { productId, stepId, dynamicData };

  const isLoading = useSelector(getSduiLoadingForKey(stepId)) || isInLoadingContext;

  const dynamicOnPress = useMemo(
    () => ({
      type: button.onPress.type,
      payload: { ...contextAwarePayload, serverPayload: button.onPress.payload, id: stepId },
    }),
    [button.onPress, productId, stepId, dynamicData, stepId]
  );

  const derivedProps = useMemo(
    () => ({
      ...props,
      items: items.map((item) => ({
        ...item,
        onAnimationEnd:
          !item.onAnimationEnd || isLoading
            ? null
            : () =>
                dispatch({
                  type: item.onAnimationEnd.type,
                  payload: { ...contextAwarePayload, serverPayload: item.onAnimationEnd.payload, id: stepId },
                }),
      })),
      button: {
        ...button,
        onPress: () => dispatch(dynamicOnPress),
        isLoading,
        disabled: isLoading,
      },
      close: {
        ...close,
        onPress: (currentIndex: number) => {
          dispatch(
            sduiEventActionCreator("modal_close", {
              previous_modal_index: currentIndex,
              previous_modal_name: items[currentIndex]?.id,
              cs_product: productId,
            })
          );

          dispatch({
            type: close.onPress.type,
            payload: { ...contextAwarePayload, serverPayload: close.onPress.payload, id: stepId },
          });
        },
      },
    }),
    [props, dispatch, dynamicData, items, productId, stepId, button, close]
  );

  return <FullScreenLottieSwiper {...derivedProps} />;
});
