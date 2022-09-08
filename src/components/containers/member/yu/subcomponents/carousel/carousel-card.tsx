import { Image, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { YuScreenCarousel_items as CarouselItem } from "@graphql/_core/schema";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { BUTTON_HEIGHT, BUTTON_HORIZONTAL_MARGIN, CARD_WIDTH_FULL, CARD_WIDTH_NARROW, styles } from "./styles";
import { CAROUSEL_CARD } from "@ids";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";
import { Colours, Style } from "@styles";

interface Props extends CarouselItem {
  marginRight: number;
  variant?: "narrow" | "full";
}

export const CarouselCard = memo(
  ({ title, backgroundColor, description, button, images, marginRight, variant = "narrow" }: Props) => {
    const handlePress = useYuScreenOnPressHandler({ event: button?.event, onPress: button?.onPress });

    const cardWidth = variant === "narrow" ? CARD_WIDTH_NARROW : CARD_WIDTH_FULL;

    return (
      <View
        style={StyleSheet.flatten([
          styles.carouselCardWrapper,
          { marginRight, width: cardWidth, backgroundColor: backgroundColor || Colours.neutral.white },
        ])}
      >
        <View style={styles.backgroundImageWrapper} testID={CAROUSEL_CARD}>
          {images.map(({ image, width }, columnedImageIndex) => (
            <View key={image.id} style={columnedImageIndex ? styles.backgroundImageLeft : styles.backgroundImageRight}>
              <Image
                width={Style.adjust(width * getWidthMultiplier({ index: columnedImageIndex, variant }))}
                source={{ uri: image.uri }}
              />
            </View>
          ))}
        </View>
        <View
          style={StyleSheet.flatten([
            styles.contentWrapper,
            { backgroundColor: title || description ? Colours.neutral.white : "transparent" },
          ])}
        >
          {!title ? null : <TextTemplate type="l1b">{title}</TextTemplate>}
          {!description ? null : (
            <View style={styles.descriptionWrapper}>
              <TextTemplate type="l1">{description}</TextTemplate>
            </View>
          )}
          {!button ? null : (
            <View style={styles.carouselCardButton}>
              <View
                style={StyleSheet.flatten([styles.buttonWrapper, { width: cardWidth - BUTTON_HORIZONTAL_MARGIN * 2 }])}
              >
                <Button height={BUTTON_HEIGHT} size="Narrow" label={button.label} onPress={handlePress} />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
);

const getWidthMultiplier = ({ index, variant }: { index: number; variant: Props["variant"] }) => {
  if (variant === "narrow") {
    return 1;
  }

  return !index ? 1.2 : 1.5;
};
