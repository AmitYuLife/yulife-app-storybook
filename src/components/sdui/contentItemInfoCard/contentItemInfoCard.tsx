import React, { memo } from "react";
import { Image } from "@atoms";
import { View } from "react-native";
import { ContentItemInfoCard as GqlInfoCard } from "@graphql/_core/schema";
import { InfoCard } from "@components/molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { Style } from "@styles";

const SIZE = Style.adjust(64);

export const ContentItemInfoCard = memo((props: GqlInfoCard) => {
  const { image, markdown, styles = [] } = props;

  return (
    <View style={mapServerStyles(styles)}>
      <InfoCard icon={<Image height={SIZE} width={SIZE} source={image} />} description={markdown} />
    </View>
  );
});
