import React, { memo } from "react";
import { Image } from "@atoms";
import { VariableRemoteImage } from "@graphql/__generated";
import { YULIFE_BUPA_LOGO } from "@ids";

export const ProviderLogo = memo(({ image, width, height }: VariableRemoteImage) => {
  if (!image || !width) {
    return null;
  }

  return (
    <Image
      source={image}
      width={width}
      height={height}
      loadingHeight={height}
      suppressLoadingUi={true}
      testID={YULIFE_BUPA_LOGO}
    />
  );
});
