import { Platform, StyleSheet } from "react-native";
import { memo } from "react";
import { Colours, Style } from "@styles";
import { Box, Image, TextTemplate } from "@atoms";
import { HeroCardHeader as HeroCardHeaderProps, HeroCardHeaderButtonState } from "@utils/heroCards";
import { HERO_CARD_PADDING } from "../constants";
import { CaretIcon } from "@atoms/icon/caret-icon";
import { EVENT_DESCRIPTION, EVENT_HEADING } from "@ids";
import Markdown from "@components/molecules/markdown/markdown";

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
        <Image source={{ uri: icon }} width={Style.adjust(16)} tintColor={fontColor} suppressLoadingUi={true} />
      )}
      <Markdown
        text={text}
        markdownStyles={getMarkdownStyles(fontColor, boldTextColor, fontWeight)}
        testID={EVENT_DESCRIPTION(text)}
      />
    </Box>
  );
};

const HeroCardBannerHeader = ({
  image,
  subheading,
  fontColor,
  boldTextColor,
  textWidth,
}: HeroCardHeaderProps & { fontColor: string; boldTextColor?: string; textWidth: number }) => {
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
          bg={Colours.primary.p600}
          br={13}
          width={26}
          height={26}
          justifyContent="center"
          alignItems="center"
          pl={2}
        >
          <CaretIcon size={Style.adjust(16)} color={Colours.neutral.white} />
        </Box>
        <Image
          source={image}
          width={Style.adjust(157)}
          height={Style.adjust(81)}
          suppressLoadingUi={true}
          resizeMode="contain"
        />
      </Box>
      <Box flex={1} flexDirection="row" alignItems="flex-start" gap={8} pt={8} pl={4} style={{ width: textWidth }}>
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
  props: HeroCardHeaderProps & { fontColor: string; boldTextColor?: string; textWidth: number }
) => {
  if (props.image) {
    return <HeroCardBannerHeader {...props} />;
  }

  const { heading, subheading, button, fontColor, boldTextColor, textWidth } = props;

  const showCaret = !button?.text && !button?.icon;
  const subheadingMarginTop = showCaret ? 8 : 4;

  return (
    <>
      <Box flexDirection="row" justifyContent="space-between" gap={8} style={styles.headingWrapper}>
        <Box flexGrow={1} maxWidth={Style.DEVICE_WIDTH - Style.adjust(180)}>
          <TextTemplate numberOfLines={1} type="b2b" color={fontColor} testID={EVENT_HEADING(heading)}>
            {heading}
          </TextTemplate>
        </Box>
        <Box
          flexShrink={0}
          bg={Colours.primary.p600}
          br={48}
          borderWidth={1}
          style={{
            backgroundColor: getButtonBackgroundColor(button?.state),
            borderColor: getButtonBorderColor(button?.state),
          }}
        >
          {showCaret ? (
            <Box height={24} width={24} justifyContent="center" alignItems="center" pl={2}>
              <CaretIcon size={Style.adjust(16)} color={Colours.neutral.white} />
            </Box>
          ) : (
            <Box flexDirection="row" alignItems="center" justifyContent="center" gap={8} pv={4} ph={16} maxWidth={80}>
              {button?.icon ? <Image source={{ uri: button.icon }} /> : null}
              {button?.text ? (
                <TextTemplate numberOfLines={1} type="l2b" color={getButtonColor(button?.state)}>
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

function getButtonColor(state: HeroCardHeaderButtonState = HeroCardHeaderButtonState.Default): string {
  switch (state) {
    case HeroCardHeaderButtonState.Disabled:
      return Colours.primary.p80;
    case HeroCardHeaderButtonState.DisabledMonochrome:
      return Colours.neutral.n200;
    case HeroCardHeaderButtonState.Default:
    default:
      return Colours.neutral.white;
  }
}

function getButtonBorderColor(state: HeroCardHeaderButtonState = HeroCardHeaderButtonState.Default): string {
  switch (state) {
    case HeroCardHeaderButtonState.Disabled:
      return Colours.primary.p80;
    case HeroCardHeaderButtonState.DisabledMonochrome:
      return Colours.neutral.n200;
    case HeroCardHeaderButtonState.Default:
    default:
      return Colours.primary.p600;
  }
}

function getButtonBackgroundColor(state: HeroCardHeaderButtonState = HeroCardHeaderButtonState.Default): string {
  switch (state) {
    case HeroCardHeaderButtonState.Disabled:
      return "transparent";
    case HeroCardHeaderButtonState.DisabledMonochrome:
      return "transparent";
    case HeroCardHeaderButtonState.Default:
    default:
      return Colours.primary.p600;
  }
}

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
    paddingRight: HERO_CARD_PADDING - Style.adjust(4),
  },
  headingNegativeMargins: {
    marginLeft: -HERO_CARD_PADDING,
    marginTop: -HERO_CARD_PADDING,
  },
});
