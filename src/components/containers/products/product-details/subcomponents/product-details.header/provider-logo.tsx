import React, { memo } from "react";
import { Image } from "@atoms";
import { VariableRemoteImage } from "@graphql/_core/schema";

export const ProviderLogo = memo(({ image, width }: VariableRemoteImage) => {
  if (!image || !width) {
    return null;
  }

  return <Image source={image} width={width} />;
});
