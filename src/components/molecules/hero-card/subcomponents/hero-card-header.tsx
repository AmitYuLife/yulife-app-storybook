import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colours, Style } from "@styles";
import { Box, Image, TextTemplate } from "@atoms";
import { HeroCardHeader as HeroCardHeaderProps, HeroCardHeaderButtonState } from "@utils/heroCards";
import { HERO_CARD_PADDING } from "../constants";
import { CaretIcon } from "@atoms/icon/caret-icon";
import { EVENT_DESCRIPTION } from "@ids";

const Subheading = ({
  text,
  icon,
  fontColor,
  width,
}: HeroCardHeaderProps["subheading"][number] & {
  fontColor: string;
  width: number;
}) => {
  return (
    <View style={[styles.subheading, { width }]}>
      {!icon ? null : (
        <Image source={{ uri: icon }} width={Style.adjust(16)} tintColor={fontColor} suppressLoadingUi={true} />
      )}
      <TextTemplate type="l1" color={fontColor} testID={EVENT_DESCRIPTION(text)}>
        {text}
      </TextTemplate>
    </View>
  );
};

const HeroCardHeader = ({
  heading,
  subheading,
  button,
  fontColor,
  textWidth,
}: HeroCardHeaderProps & { fontColor: string; image: string; textWidth: number }) => {
  const showCaret = !button?.text && !button?.icon;
  const subheadingMarginTop = showCaret ? Style.adjust(4) : 0;

  return (
    <>
      <View style={styles.headingWrapper}>
        <Box flexGrow={1} maxWidth={Style.DEVICE_WIDTH - Style.adjust(180)}>
          <TextTemplate numberOfLines={1} type="b1b" color={fontColor}>
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
            <View style={styles.caretWrapper}>
              <CaretIcon size={Style.adjust(16)} color={Colours.neutral.white} />
            </View>
          ) : (
            <View style={styles.buttonFlex}>
              {button?.icon ? <Image source={{ uri: button.icon }} /> : null}
              {button?.text ? (
                <TextTemplate numberOfLines={1} type="l1b" color={getButtonColor(button?.state)}>
                  {button.text}
                </TextTemplate>
              ) : null}
            </View>
          )}
        </Box>
      </View>
      <View style={[styles.subheadingWrapper, { width: textWidth, marginTop: subheadingMarginTop }]}>
        {subheading?.map(({ text, icon }, index) => (
          <Subheading key={index} text={text} icon={icon} fontColor={fontColor} width={textWidth} />
        ))}
      </View>
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

const styles = StyleSheet.create({
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Style.adjust(8),
    paddingRight: HERO_CARD_PADDING - Style.adjust(4),
  },
  caretWrapper: {
    height: Style.adjust(24),
    width: Style.adjust(24),
    justifyContent: "center",
    alignItems: "center",
  },
  subheadingWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: Style.adjust(8),
  },
  subheading: {
    flexDirection: "row",
    alignItems: "center",
    gap: Style.adjust(4),
  },
  buttonFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Style.adjust(8),
    paddingVertical: Style.adjust(4),
    paddingHorizontal: Style.adjust(16),
    maxWidth: Style.adjust(80),
  },
});
