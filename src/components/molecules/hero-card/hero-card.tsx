import { getTheme } from "@theme";
import { HeroCardBadge, HeroCardBody, HeroCardFooter, HeroCardHeader } from "./subcomponents";
import { Colours, Style } from "@styles";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { HeroCard as HeroCardProps } from "@utils/heroCards";
import { HERO_CARD_PADDING } from "./constants";
import { Box, Image } from "@atoms";
import { TouchableOpacityWithDelay } from "..";
import { EVENT_CARD_COLOUR } from "@ids";

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

  const dispatch = useDispatch();
  const [cardHeight, setCardHeight] = useState(0);

  const imageWidth = useMemo(() => {
    if (body.backgroundImage) {
      return Style.adjust(110);
    }

    return Math.min(cardWidth - Style.adjust(140), 170);
  }, [body.backgroundImage, cardWidth]);

  const imageStyle = useMemo(() => [styles.image, { width: imageWidth }], [imageWidth]);

  const hasFooter = footer?.left?.text || footer?.right?.text || footer?.left?.icon || footer?.right?.icon;

  const handleOnPress = useCallback(() => {
    if (onPress) {
      dispatch(onPress);
    }
  }, [dispatch, onPress]);

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    setCardHeight(event.nativeEvent.layout.height);
  };

  return (
    <Box mt={16} mh={8} testID={EVENT_CARD_COLOUR(backgroundColor)}>
      <TouchableOpacityWithDelay
        onPress={handleOnPress}
        style={[styles.innerWrapper, { width: cardWidth, backgroundColor: borderColor }]}
      >
        <Box
          position="relative"
          flexDirection="column"
          br={8}
          borderWidth={1}
          height={148}
          overflow="hidden"
          style={[
            styles.cardWrapper,
            {
              backgroundColor,
              borderColor,
            },
          ]}
          onLayout={handleLayoutChange}
        >
          {!body.backgroundImage ? null : (
            <Image
              source={body.backgroundImage}
              style={StyleSheet.absoluteFillObject}
              width={cardWidth}
              height={cardHeight}
              resizeMode="cover"
            />
          )}
          {body.image ? (
            <Box position="absolute" right={0} bottom={0} br={8}>
              <Image
                source={{ uri: body.image }}
                style={imageStyle}
                width={imageWidth}
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
        </Box>
        {badge ? <HeroCardBadge {...badge} /> : null}
      </TouchableOpacityWithDelay>
    </Box>
  );
};

const DEFAULT_THEME = {
  backgroundColor: Colours.neutral.white,
  borderColor: Colours.neutral.n20,
  fontColor: Colours.neutral.n900,
  boldTextColor: Colours.primary.p600,
};

const styles = StyleSheet.create({
  innerWrapper: {
    paddingBottom: Style.adjust(5),
    borderRadius: Style.adjust(8),
    overflow: "hidden",
  },
  cardWrapper: {
    paddingTop: HERO_CARD_PADDING,
    paddingLeft: HERO_CARD_PADDING,
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
