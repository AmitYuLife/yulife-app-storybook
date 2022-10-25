import React, { memo } from "react";
import { Image } from "@atoms";
import { VariableRemoteImage } from "@graphql/_core/schema";
import { YULIFE_BUPA_LOGO } from "@ids";

export const ProviderLogo = memo(({ image, width }: VariableRemoteImage) => {
  if (!image || !width) {
    return null;
  }

  return <Image source={image} width={width} testID={YULIFE_BUPA_LOGO} />;
});
