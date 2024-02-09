import React, { memo, useCallback } from "react";
import { ContentItemButton } from "@components/sdui";
import { ContentItemButtonFragment as IContentItemButton } from "@graphql/__generated";
import { useDispatch } from "react-redux";

export const ProductDetailsButton = memo((props: IContentItemButton) => {
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
});
