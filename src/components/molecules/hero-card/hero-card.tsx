import React, { memo, useMemo } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { EVENT_CARD_COLOUR } from "@ids";
import { getTheme } from "@theme";
import { Style } from "@styles";
import { Box, Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { HeroCard as HeroCardProps } from "@utils/heroCards";
import { BANNER_IMAGE_DIMENSIONS, DEFAULT_THEME, HERO_CARD_PADDING, IMAGE_ASPECT_RATIO } from "./constants";
import { HeroCardBadge, HeroCardBody, HeroCardFooter, HeroCardHeader } from "./subcomponents";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { HERO_CARD_BADGE_HEIGHT } from "@components/molecules/hero-card/subcomponents/hero-card-badge";

const HeroCard = ({
  badge,
  header,
  body,
  footer,
  currentLevel,
  yuniversalMap,
  onPress,
  width: cardWidth,
}: HeroCardProps) => {
  const { backgroundColor, borderColor, fontColor, boldTextColor } = body.backgroundImage
    ? DEFAULT_THEME
    : getTheme(currentLevel, yuniversalMap).dailyStepsScreen.eventPanel;

  const { width: imageWidth, height: imageHeight } = useMemo(() => {
    if (body.backgroundImage) {
      return BANNER_IMAGE_DIMENSIONS;
    }

    const width = Math.min(cardWidth - Style.adjust(140), 170);
    const height = width * IMAGE_ASPECT_RATIO;

    return { width, height };
  }, [body.backgroundImage, cardWidth]);

  const imageStyle = useMemo(() => [styles.image, { width: imageWidth }], [imageWidth]);

  const hasFooter = footer?.left?.text || footer?.right?.text || footer?.left?.icon || footer?.right?.icon;

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);

  return (
    <TouchableOpacityWithDelay onPress={handleSduiAction} testID={EVENT_CARD_COLOUR(backgroundColor)}>
      <Box pt={HERO_CARD_BADGE_HEIGHT / 2}>
        <Box pb={5} br={8} style={{ width: cardWidth, backgroundColor: borderColor }}>
          <Box
            br={8}
            borderWidth={1}
            height={148}
            overflow="hidden"
            style={[
              {
                backgroundColor,
                borderColor,
              },
            ]}
          >
            <ImageBackground source={body.backgroundImage} style={styles.backgroundImage}>
              {body.image ? (
                <Box position="absolute" right={0} bottom={0} br={8}>
                  <Image
                    source={{ uri: body.image }}
                    style={imageStyle}
                    width={imageWidth}
                    height={imageHeight}
                    resizeMode="contain"
                    suppressLoadingUi={true}
                  />
                </Box>
              ) : null}
              {header ? (
                <HeroCardHeader
                  {...header}
                  fontColor={fontColor}
                  boldTextColor={boldTextColor}
                  textWidth={body.image ? cardWidth - imageWidth : cardWidth}
                />
              ) : null}
              {body ? <HeroCardBody {...body} cardWidth={cardWidth} cardPadding={HERO_CARD_PADDING} /> : null}
              {hasFooter ? <HeroCardFooter {...footer} fontColor={fontColor} /> : null}
            </ImageBackground>
          </Box>
          {badge ? <HeroCardBadge {...badge} /> : null}
        </Box>
      </Box>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    paddingTop: HERO_CARD_PADDING,
    paddingLeft: HERO_CARD_PADDING,
    flex: 1,
  },
  image: {
    position: "absolute",
    bottom: 1,
    right: 1,
    borderBottomRightRadius: Style.adjust(6),
    overflow: "hidden",
    resizeMode: "contain",
  },
});

export default memo(HeroCard);
