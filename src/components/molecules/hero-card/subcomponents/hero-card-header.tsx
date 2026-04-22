import { Platform } from "react-native";
import { memo, useMemo } from "react";
import { Colours, Style, StyleSheet } from "@styles";
import { Box, Image, RawImage, TextTemplate } from "@atoms";
import { HeroCardHeader as HeroCardHeaderProps, HeroCardHeaderButtonState } from "@utils/heroCards";
import { HERO_CARD_PADDING } from "../constants";
import { ArrowIcon } from "@atoms/icon/arrow";
import { EVENT_DESCRIPTION, EVENT_HEADING, PINK_ARROW_ICON } from "@ids";
import Markdown from "@components/molecules/markdown/markdown";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

const Subheading = ({
  text,
  icon,
  fontColor,
  boldTextColor,
  fontWeight,
  width,
}: HeroCardHeaderProps["subheading"][number] & {
  fontColor: string;
  boldTextColor?: string;
  fontWeight?: number;
  width: number;
}) => {
  return (
    <Box flexDirection="row" alignItems="center" gap={4} style={{ width }}>
      {!icon ? null : (
        <RawImage
          source={{ uri: icon }}
          style={{ width: Style.adjust(16), aspectRatio: 1, tintColor: fontColor }}
          contentFit="contain"
        />
      )}
      <Markdown
        text={text}
        markdownStyles={getMarkdownStyles(fontColor, boldTextColor, fontWeight)}
        containerStyle={styles.markdownContainer}
        testID={EVENT_DESCRIPTION(text, fontColor)}
      />
    </Box>
  );
};

const HeroCardBannerHeader = ({
  image,
  subheadingMargin,
  subheading,
  fontColor,
  boldTextColor,
  textWidth,
}: HeroCardHeaderProps & { fontColor: string; boldTextColor?: string; textWidth: number }) => {
  const subheadingMarginTop = subheadingMargin ?? 8;
  const { theme } = useTheme();

  return (
    <>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        gap={8}
        style={[styles.headingWrapper, styles.headingNegativeMargins]}
      >
        <Box
          position="absolute"
          right={12}
          top={16}
          flexShrink={0}
          bg={theme.colors.primary.p600}
          br={13}
          width={26}
          height={26}
          justifyContent="center"
          alignItems="center"
          pl={2}
          testID={PINK_ARROW_ICON}
        >
          <ArrowIcon size={Style.adjust(16)} color={Colours.neutral.white} />
        </Box>
        <Image
          source={image}
          width={Style.adjust(157)}
          height={Style.adjust(81)}
          suppressLoadingUi={true}
          resizeMode="contain"
        />
      </Box>
      <Box
        flex={1}
        flexDirection="row"
        alignItems="flex-start"
        gap={8}
        mt={subheadingMarginTop}
        pl={4}
        style={{ width: textWidth }}
      >
        {subheading?.map(({ text, icon }, index) => (
          <Subheading
            key={index}
            text={text}
            icon={icon}
            fontColor={fontColor}
            boldTextColor={boldTextColor}
            fontWeight={400}
            width={textWidth}
          />
        ))}
      </Box>
    </>
  );
};

const HeroCardHeader = (
  props: HeroCardHeaderProps & {
    fontColor: string;
    boldTextColor?: string;
    textWidth: number;
    headingNumberOfLines?: number;
  }
) => {
  const { theme } = useTheme();

  const { heading, subheadingMargin, subheading, button, fontColor, boldTextColor, textWidth, headingNumberOfLines } =
    props;

  const showCaret = !button?.text && !button?.icon;
  const subheadingMarginTop = subheadingMargin ?? 4;

  const buttonColors = useMemo(() => {
    switch (button?.state) {
      case HeroCardHeaderButtonState.Disabled:
        return {
          backgroundColor: "transparent",
          borderColor: theme.colors.primary.p80,
          color: theme.colors.primary.p80,
        };
      case HeroCardHeaderButtonState.DisabledMonochrome:
        return {
          backgroundColor: "transparent",
          borderColor: Colours.neutral.n200,
          color: Colours.neutral.n200,
        };
      case HeroCardHeaderButtonState.Default:
      default:
        return {
          backgroundColor: theme.colors.primary.p600,
          borderColor: theme.colors.primary.p600,
          color: Colours.neutral.white,
        };
    }
  }, [button?.state, theme]);

  if (props.image) {
    return <HeroCardBannerHeader {...props} />;
  }

  return (
    <>
      <Box flexDirection="row" justifyContent="space-between" gap={8} style={styles.headingWrapper}>
        <Box flexGrow={1} maxWidth={Style.DEVICE_WIDTH - Style.adjust(180)}>
          <TextTemplate
            numberOfLines={headingNumberOfLines}
            type="b1b"
            color={fontColor}
            testID={EVENT_HEADING(heading, fontColor)}
          >
            {heading}
          </TextTemplate>
        </Box>
        <Box
          flexShrink={0}
          bg={buttonColors.backgroundColor}
          br={48}
          borderWidth={1}
          borderColor={buttonColors.borderColor}
          maxHeight={26}
        >
          {showCaret ? (
            <Box height={24} width={24} justifyContent="center" alignItems="center" pl={2}>
              <ArrowIcon size={Style.adjust(16)} color={Colours.neutral.white} />
            </Box>
          ) : (
            <Box flexDirection="row" alignItems="center" justifyContent="center" gap={8} pv={4} ph={16} maxWidth={80}>
              {button?.icon ? <Image source={{ uri: button.icon }} /> : null}
              {button?.text ? (
                <TextTemplate numberOfLines={1} type="l2b" color={buttonColors.color}>
                  {button.text}
                </TextTemplate>
              ) : null}
            </Box>
          )}
        </Box>
      </Box>
      <Box
        flex={1}
        flexDirection="row"
        alignItems="flex-start"
        gap={8}
        mt={subheadingMarginTop}
        style={{ width: textWidth }}
      >
        {subheading?.map(({ text, icon }, index) => (
          <Subheading
            key={index}
            text={text}
            icon={icon}
            fontColor={fontColor}
            boldTextColor={boldTextColor}
            width={textWidth}
          />
        ))}
      </Box>
    </>
  );
};

export default memo(HeroCardHeader);

const getMarkdownStyles = (fontColor: string, boldTextColor?: string, fontWeight?: number) => ({
  paragraph: {
    paddingTop: Style.adjust(4),
    paddingBottom: 0,
  },
  text: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
    color: fontColor,
    fontWeight,
  },
  imageWrapper: {
    width: Style.adjust(16),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    bottom: Style.adjust(
      Platform.select({
        ios: -6,
        android: -2,
      })
    ),
  },
  ...(boldTextColor
    ? {
        strong: {
          color: boldTextColor,
        },
      }
    : {}),
});

const styles = StyleSheet.create({
  headingWrapper: {
    paddingEnd: HERO_CARD_PADDING - Style.adjust(4),
  },
  headingNegativeMargins: {
    marginStart: -HERO_CARD_PADDING,
    marginTop: -HERO_CARD_PADDING,
  },
  markdownContainer: {
    flex: 1,
  },
});
