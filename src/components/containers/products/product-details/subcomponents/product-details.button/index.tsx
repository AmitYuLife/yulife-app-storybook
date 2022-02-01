import React, { memo, useMemo } from "react";
import { ContentItemButton } from "@components/sdui";
import { GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton } from "@graphql/_core/schema";

export const ProductDetailsButton = memo(
  (props: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton) => {
    const { onPress } = props;

    const dynamicOnPress: any = useMemo(
      () => ({
        type: onPress.type,
        payload: { serverPayload: onPress.payload },
      }),
      [onPress]
    );

    return <ContentItemButton {...props} onPress={dynamicOnPress} />;
  }
);
