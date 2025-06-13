import { FC, memo, PropsWithChildren, useCallback, useMemo } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { EVENT_CARD_COLOUR, EVENT_CARD } from "@ids";
import { getTheme } from "@theme";
import { Style } from "@styles";
import { Box } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { HeroCard as HeroCardProps } from "@utils/heroCards";
import { HERO_CARD_HEIGHT, HERO_CARD_PADDING } from "./constants";
import { HeroCardBadge, HeroCardBody, HeroCardFooter, HeroCardHeader } from "./subcomponents";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { HERO_CARD_BADGE_HEIGHT } from "@components/molecules/hero-card/subcomponents/hero-card-badge";
import { Image } from "expo-image";

const HeroCard = ({
  badge,
  theme,
  header,
  body,
  footer,
  currentLevel,
  yuniversalMap,
  onPress,
  width: cardWidth,
}: HeroCardProps) => {
  const { backgroundColor, borderColor, fontColor, boldTextColor } =
    theme || getTheme(currentLevel, yuniversalMap).dailyStepsScreen.eventPanel;

  const { width: imageWidth, style: imageStyle } = useMemo(() => {
    if (!body.rightImage) {
      return {};
    }

    let width = body.rightImage.width;
    let height = body.rightImage.height ? Style.adjust(body.rightImage.height) : HERO_CARD_HEIGHT;
    const image_aspect_ratio = height / Style.adjust(width);

    if (body.scaleRightImage) {
      width = Math.min(cardWidth - Style.adjust(140), 170);
      height = width * image_aspect_ratio;
    }

    if (height > HERO_CARD_HEIGHT) {
      height = HERO_CARD_HEIGHT;
      width = HERO_CARD_HEIGHT / image_aspect_ratio;
    }

    const style = [styles.image, { width, height }];
    return { width, style };
  }, [body.scaleRightImage, body.rightImage, cardWidth]);

  const hasFooter = footer?.left?.text || footer?.right?.text || footer?.left?.icon || footer?.right?.icon;

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);

  const ContainerComponent = useCallback<FC<PropsWithChildren>>(
    ({ children }) => {
      if (body.backgroundImage) {
        return (
          <ImageBackground source={body.backgroundImage} style={styles.backgroundImage}>
            {children}
          </ImageBackground>
        );
      }

      return <Box style={styles.backgroundImage}>{children}</Box>;
    },
    [body.backgroundImage]
  );

  return (
    <TouchableOpacityWithDelay onPress={handleSduiAction} testID={EVENT_CARD_COLOUR(backgroundColor)}>
      <Box pt={HERO_CARD_BADGE_HEIGHT / 2}>
        <Box
          pb={5}
          br={8}
          style={{ width: cardWidth, backgroundColor: borderColor }}
          testID={EVENT_CARD(header?.heading)}
        >
          <Box
            br={8}
            borderWidth={1}
            overflow="hidden"
            style={[
              {
                backgroundColor,
                borderColor,
                height: HERO_CARD_HEIGHT,
              },
            ]}
          >
            <ContainerComponent>
              {body.rightImage ? (
                <Box position="absolute" right={0} bottom={0} br={8}>
                  <Image
                    source={body.rightImage.image}
                    style={imageStyle}
                    contentFit="contain"
                    contentPosition="right bottom"
                  />
                </Box>
              ) : null}
              {header ? (
                <HeroCardHeader
                  {...header}
                  fontColor={fontColor}
                  boldTextColor={boldTextColor}
                  textWidth={body.rightImage ? cardWidth - imageWidth : cardWidth}
                />
              ) : null}
              {body ? <HeroCardBody {...body} cardWidth={cardWidth} cardPadding={HERO_CARD_PADDING} /> : null}
              {hasFooter ? <HeroCardFooter {...footer} fontColor={fontColor} /> : null}
            </ContainerComponent>
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
