import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { HeroCardHeader as HeroCardHeaderProps, HeroCardHeaderButtonState } from "@utils/heroCards";
import { HERO_CARD_PADDING } from "../constants";
import { ChevronRightIcon } from "@atoms/icon/chevron-right";

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
      <TextTemplate type="l1" color={fontColor}>
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
  return (
    <>
      <View style={styles.headingWrapper}>
        <View>
          <TextTemplate type="b1b" color={fontColor}>
            {heading}
          </TextTemplate>
        </View>
        <View
          style={[
            styles.button,
            {
              backgroundColor: getButtonBackgroundColor(button.state),
              borderColor: getButtonBorderColor(button.state),
            },
          ]}
        >
          {!button?.text && !button?.icon ? (
            <ChevronRightIcon size={Style.adjust(24)} fill={Colours.neutral.white} />
          ) : (
            <View style={styles.buttonFlex}>
              {button?.icon ? <Image source={{ uri: button.icon }} /> : null}
              {button?.text ? (
                <TextTemplate type="l1b" color={getButtonColor(button.state)}>
                  {button.text}
                </TextTemplate>
              ) : null}
            </View>
          )}
        </View>
      </View>
      <View style={[styles.subheadingWrapper, { width: textWidth }]}>
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
    case HeroCardHeaderButtonState.Default:
      return Colours.neutral.white;
    case HeroCardHeaderButtonState.Disabled:
      return Colours.primary.p80;
    case HeroCardHeaderButtonState.DisabledMonochrome:
      return Colours.neutral.n200;
  }
}

function getButtonBorderColor(state: HeroCardHeaderButtonState = HeroCardHeaderButtonState.Default): string {
  switch (state) {
    case HeroCardHeaderButtonState.Default:
      return Colours.primary.p600;
    case HeroCardHeaderButtonState.Disabled:
      return Colours.primary.p80;
    case HeroCardHeaderButtonState.DisabledMonochrome:
      return Colours.neutral.n200;
  }
}

function getButtonBackgroundColor(state: HeroCardHeaderButtonState = HeroCardHeaderButtonState.Default): string {
  switch (state) {
    case HeroCardHeaderButtonState.Default:
      return Colours.primary.p600;
    case HeroCardHeaderButtonState.Disabled:
      return "transparent";
    case HeroCardHeaderButtonState.DisabledMonochrome:
      return "transparent";
  }
}

const styles = StyleSheet.create({
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: Style.adjust(HERO_CARD_PADDING),
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
  button: {
    flexShrink: 0,
    backgroundColor: Colours.primary.p600,
    borderRadius: Style.adjust(48),
    borderWidth: Style.adjust(1),
    color: Colours.neutral.white,
  },
  buttonFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Style.adjust(8),
    paddingVertical: Style.adjust(4),
    paddingHorizontal: Style.adjust(16),
  },
});
