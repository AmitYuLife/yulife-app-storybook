import React, { useCallback, useMemo } from "react";
import { Box, Image } from "@atoms";
import { Style, templateTextStyles, StyleSheet } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";
import { HeroCardSection as IYuScreenBannerSection } from "@redux/yu-screen/yu-screen.types";
import { useDispatch } from "react-redux";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Rays from "@organisms/rays/rays";
import { ItemDetailsReward } from "@organisms";
import { DETOX_ENABLED } from "@services/socket";
import { HERO_CARD_SECTION } from "@ids";

export const HeroCardSection = ({ sectionInstanceId, content }: IYuScreenBannerSection) => {
  const dispatch = useDispatch();

  const { descriptionMarkdown, textColor, image, backgroundColor, borderColor, onPress, animatedRays, animatedStars } =
    content || {};

  const markdownStyles = useMemo(
    () => ({
      text: {
        ...styles.markdownText,
        color: textColor,
      },
    }),
    [textColor]
  );

  const pressHandler = useCallback(() => {
    if (onPress) {
      dispatch(onPress);
    }
  }, [dispatch, onPress]);

  const cardStyle = useMemo(() => ({ backgroundColor, borderColor }), [backgroundColor, borderColor]);

  if (!descriptionMarkdown && !image) {
    return null;
  }

  return (
    <Box key={sectionInstanceId} ph={24} pt={12}>
      <TouchableOpacityWithDelay onPress={pressHandler}>
        <Box
          style={cardStyle}
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
          br={8}
          borderWidth={1}
          overflow="hidden"
          testID={HERO_CARD_SECTION}
        >
          {!descriptionMarkdown ? (
            <Image width={CARD_FULL_WIDTH} suppressLoadingUi={true} source={image.image} />
          ) : (
            <Markdown
              text={descriptionMarkdown}
              markdownStyles={markdownStyles}
              containerStyle={styles.markdownContainer}
            />
          )}
          {!descriptionMarkdown ? null : (
            <Box justifyContent="center" alignItems="center" mh={24}>
              {!animatedRays || DETOX_ENABLED ? null : (
                <Rays containerStyle={styles.rays} backgroundColor="transparent" style="alternate" />
              )}
              <ItemDetailsReward
                bubblesEnabled={false}
                starsEnabled={animatedStars}
                size={image.width}
                starMultiplier={4}
                source={image.image}
              />
            </Box>
          )}
        </Box>
      </TouchableOpacityWithDelay>
    </Box>
  );
};

const CARD_FULL_WIDTH = Style.DEVICE_WIDTH - Style.adjust(48);

const styles = StyleSheet.create({
  markdownContainer: {
    height: "100%",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingVertical: Style.adjust(0),
    paddingStart: Style.adjust(16),
    zIndex: 1,
  },
  markdownText: {
    ...templateTextStyles.b2b,
    lineHeight: Style.adjust(24),
  },
  rays: {
    height: Style.adjust(80),
    width: Style.adjust(80),
    position: "absolute",
    top: -Style.adjust(48),
    right: -Style.adjust(6),
    opacity: 0.2,
  },
});
