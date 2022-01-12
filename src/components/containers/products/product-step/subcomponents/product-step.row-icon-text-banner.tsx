import React, { memo } from "react";
import { View } from "react-native";
import { ContentItemRowIconTextBanner as Props } from "@graphql/_core/schema";
import { mapServerStyles } from "@components/sdui";
import InfoPanel from "@components/molecules/info-panel/info-panel";

export const ProductStepRowIconTextBanner = memo(({ bannerIcon, bannerType, markdown, styles }: Props) => {
  return (
    <View style={mapServerStyles(styles)}>
      <InfoPanel markdown={markdown} type={bannerType} remoteImage={bannerIcon} />
    </View>
  );
});
