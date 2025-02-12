import { getTheme } from "@theme";
import { HeroCardBadge, HeroCardBody, HeroCardFooter, HeroCardHeader } from "./subcomponents";
import { Style } from "@styles";
import { StyleSheet, View } from "react-native";
import React, { memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { HeroCard as HeroCardProps } from "@utils/heroCards";
import { HERO_CARD_PADDING } from "./constants";
import { Image } from "@atoms";
import { TouchableOpacityWithDelay } from "..";
import { EVENT_CARD_COLOUR } from "@ids";

const HeroCard = ({ badge, header, body, footer, currentLevel, yuniversalMap, onPress, width }: HeroCardProps) => {
  const { backgroundColor, borderColor, fontColor } = getTheme(currentLevel, yuniversalMap).dailyStepsScreen.eventPanel;

  const dispatch = useDispatch();

  const imageWidth = useMemo(() => Math.min(width - Style.adjust(140), 170), [width]);
  const imageHeight = useMemo(() => (imageWidth / 137) * 77, [imageWidth]);
  const imageStyle = useMemo(
    () => [styles.image, { width: imageWidth, height: imageHeight }],
    [imageWidth, imageHeight]
  );

  const hasFooter = footer?.left?.text || footer?.right?.text || footer?.left?.icon || footer?.right?.icon;

  const handleOnPress = useCallback(() => {
    if (onPress) {
      dispatch(onPress);
    }
  }, [dispatch, onPress]);

  return (
    <View style={styles.outerWrapper} testID={EVENT_CARD_COLOUR(backgroundColor)}>
      <TouchableOpacityWithDelay
        onPress={handleOnPress}
        style={[styles.innerWrapper, { width, backgroundColor: borderColor }]}
      >
        <View
          style={[
            styles.cardWrapper,
            {
              backgroundColor,
              borderColor,
            },
          ]}
        >
          {body.image ? (
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: body.image }}
                style={imageStyle}
                width={imageWidth}
                height={imageHeight}
                resizeMode="contain"
                suppressLoadingUi={true}
              />
            </View>
          ) : null}
          {header ? (
            <HeroCardHeader
              {...header}
              fontColor={fontColor}
              image={body.image}
              textWidth={body.image ? width - imageWidth : width}
            />
          ) : null}
          {body ? <HeroCardBody {...body} cardWidth={width} cardPadding={HERO_CARD_PADDING} /> : null}
          {hasFooter ? <HeroCardFooter {...footer} fontColor={fontColor} /> : null}
        </View>
        {badge ? <HeroCardBadge {...badge} /> : null}
      </TouchableOpacityWithDelay>
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    marginTop: Style.adjust(16),
    marginHorizontal: Style.adjust(8),
  },
  innerWrapper: {
    paddingBottom: Style.adjust(5),
    borderRadius: Style.adjust(8),
  },
  cardWrapper: {
    position: "relative",
    flexDirection: "column",
    borderRadius: Style.adjust(8),
    borderWidth: Style.adjust(1),
    paddingTop: HERO_CARD_PADDING,
    paddingLeft: HERO_CARD_PADDING,
    height: Style.adjust(148),
    overflow: "hidden",
  },
  imageWrapper: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: Style.adjust(8),
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
