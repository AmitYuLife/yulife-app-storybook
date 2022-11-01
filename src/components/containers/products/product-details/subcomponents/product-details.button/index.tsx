import React, { memo, useCallback } from "react";
import { ContentItemButton } from "@components/sdui";
import { GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton } from "@graphql/_core/schema";
import { useDispatch } from "react-redux";

export const ProductDetailsButton = memo(
  (props: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton) => {
    const { onPress } = props;
    const dispatch = useDispatch();

    const dynamicOnPress = useCallback(
      () =>
        dispatch({
          type: onPress.type,
          payload: { serverPayload: onPress.payload },
        }),
      [onPress]
    );

    return <ContentItemButton {...props} onPress={dynamicOnPress} />;
  }
);
