import React, { memo, useMemo } from "react";
import { Image } from "@atoms";
import { View } from "react-native";
import { ContentItemInfoCardFragment as GqlInfoCard } from "@graphql/__generated";
import { InfoCard } from "@components/molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { Style } from "@styles";
import { CONTENT_ITEM_INFO_CARD, CONTENT_SMALL_IMAGE_CARD_URL } from "@ids";

const SIZE = Style.adjust(64);

export const ContentItemInfoCard = memo((props: GqlInfoCard) => {
  const { image, variableImage, markdown, hyperlink, styles, wrapperStyles = [] } = props;

  const wrapperStyle = useMemo(() => mapServerStyles(wrapperStyles), [wrapperStyles]);

  const icon = useMemo(
    () =>
      variableImage ? (
        <Image
          height={variableImage.height}
          width={variableImage.width}
          source={variableImage.image}
          testID={CONTENT_SMALL_IMAGE_CARD_URL(variableImage.image.id)}
        />
      ) : (
        <Image height={SIZE} width={SIZE} source={image} testID={CONTENT_SMALL_IMAGE_CARD_URL(image.id)} />
      ),
    [variableImage, image]
  );

  return (
    <View testID={CONTENT_ITEM_INFO_CARD(markdown)} style={mapServerStyles(styles)}>
      <InfoCard icon={icon} description={markdown} hyperlink={hyperlink} wrapperStyle={wrapperStyle} />
    </View>
  );
});
