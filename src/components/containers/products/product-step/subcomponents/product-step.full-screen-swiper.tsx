import React, { memo, useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { FullScreenSwiper } from "@organisms/full-screen-swiper/full-screen-swiper";
import { ContentItemFullScreenSwiperFragment } from "@graphql/__generated";
import { ProductStepContext } from "../product-step.context";
import { sduiEventActionCreator } from "../utils/sduiEventActionCreator";

type Props = ContentItemFullScreenSwiperFragment;
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
        onPress: (currentIndex: number) => {
          dispatch(
            sduiEventActionCreator("modal_close", {
              previous_modal_index: currentIndex,
              previous_modal_name: items[currentIndex]?.heading,
              cs_product: productId,
            })
          );

          dispatch({
            type: close.onPress.type,
            payload: { productId, stepId, dynamicData, serverPayload: close.onPress.payload },
          });
        },
      },
    }),
    [props, dispatch, dynamicData, items, productId, stepId, button, close]
  );

  return <FullScreenSwiper {...derivedProps} />;
});
