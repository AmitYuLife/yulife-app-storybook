import React, { memo } from "react";
import { Image } from "@atoms";
import { VariableRemoteImage } from "@graphql/__generated";
import { YULIFE_AND_PROVIDER_LOGO } from "@ids";

interface IProviderLogoProps extends VariableRemoteImage {
  alignLeft?: boolean;
}

export const ProviderLogo = memo(({ image, width, height, alignLeft = false }: IProviderLogoProps) => {
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
      testID={YULIFE_AND_PROVIDER_LOGO}
      // TODO: These properties will always be present once we have migrated all hero cards to have images
      {...(alignLeft && { contentFit: "contain" as const, contentPosition: "left" as const })}
    />
  );
});
