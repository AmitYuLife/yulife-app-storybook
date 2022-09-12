import { Image } from "@atoms";
import { Button } from "@molecules";
import { YuScreenCarousel_items as CarouselItem } from "@graphql/_core/schema";
import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { BUTTON_HEIGHT, BUTTON_HORIZONTAL_MARGIN, CARD_WIDTH_FULL, CARD_WIDTH_NARROW, styles } from "./styles";
import { CAROUSEL_CARD } from "@ids";
import { useYuScreenOnPressHandler } from "../../hooks/useYuScreenOnPressHandler";
import { Colours, Style } from "@styles";
import { mapServerStyles } from "@components/sdui";
import Markdown from "@components/molecules/markdown/markdown";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { YuScreenCarouselItemVariant } from "@graphql/_core/schema/globalTypes";

interface Props extends CarouselItem {
  variant: YuScreenCarouselItemVariant;
  style?: ViewStyle;
}

export const CarouselCard = memo(
  ({
    backgroundColor,
    button,
    contentContainerStyles,
    descriptionMarkdown,
    descriptionMarkdownStyles,
    images,
    titleMarkdown,
    titleMarkdownStyles,
    variant = YuScreenCarouselItemVariant.narrow,
    style,
  }: Props) => {
    const nullSafeVariant = variant || YuScreenCarouselItemVariant.narrow;
    const currentRoute = useSelector(getRouteState);
    const handlePress = useYuScreenOnPressHandler({ event: button?.event, onPress: button?.onPress, currentRoute });
    const defaultStyles = mapVariantToDefaultStyle(nullSafeVariant);

    const [titleStyles, descriptionStyles] = useMemo(
      () =>
        [titleMarkdownStyles, descriptionMarkdownStyles].map((serverStyles, index) => {
          const markdownStyles = mapServerStyles(serverStyles);
          return {
            text: {
              ...defaultMarkdownStyles[index],
              ...markdownStyles,
            },
            bold: {
              ...defaultMarkdownStyles[index],
              ...markdownStyles,
            },
          };
        }),
      [titleMarkdownStyles, descriptionMarkdownStyles]
    );
    return (
      <View
        style={StyleSheet.flatten([
          defaultStyles,
          styles.carouselCardWrapper,
          { backgroundColor: backgroundColor || Colours.neutral.white },
          style,
        ])}
      >
        <View style={styles.backgroundImageWrapper} testID={CAROUSEL_CARD}>
          {images.map(({ image, width }, columnedImageIndex) => (
            <View key={image.id} style={columnedImageIndex ? styles.backgroundImageLeft : styles.backgroundImageRight}>
              <Image
                width={Style.adjust(
                  width * getWidthMultiplier({ index: columnedImageIndex, variant: nullSafeVariant })
                )}
                source={{ uri: image.uri }}
              />
            </View>
          ))}
        </View>
        <View style={[styles.contentWrapper, mapServerStyles(contentContainerStyles)]}>
          {!titleMarkdown ? null : <Markdown markdownStyles={titleStyles} text={titleMarkdown} />}
          {!descriptionMarkdown ? null : <Markdown markdownStyles={descriptionStyles} text={descriptionMarkdown} />}
          {!button ? null : (
            <View style={styles.carouselCardButton}>
              <View
                style={StyleSheet.flatten([
                  styles.buttonWrapper,
                  { width: defaultStyles.width - BUTTON_HORIZONTAL_MARGIN * 2 },
                ])}
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

const mapVariantToDefaultStyle = (variant: Props["variant"]) => {
  if (variant === YuScreenCarouselItemVariant.narrow) {
    return { width: CARD_WIDTH_NARROW, marginLeft: Style.adjust(16) };
  }

  return { width: CARD_WIDTH_FULL };
};

const getWidthMultiplier = ({ index, variant }: { index: number; variant: Props["variant"] }) => {
  if (variant === YuScreenCarouselItemVariant.narrow) {
    return 1;
  }

  return !index ? 1.5 : 1.2;
};

const markdownStyle = {
  fontSize: Style.adjust(14),
  lineHeight: Style.adjust(16),
  paddingBottom: 0,
};

const defaultMarkdownStyles = [
  {
    ...markdownStyle,
    paddingTop: 0,
  },
  {
    ...markdownStyle,
    paddingTop: Style.adjust(4),
  },
];
