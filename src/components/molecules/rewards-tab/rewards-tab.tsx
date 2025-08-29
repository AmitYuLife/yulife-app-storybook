import React, { memo, useMemo } from "react";
import { Box, TextTemplate } from "@atoms";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style, StyleSheet } from "@styles";
import Animated, { Easing, FadeInUp, FadeOutUp } from "react-native-reanimated";
import { REWARDS_TABS } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

const HIT_SLOP_SIZE = Style.adjust(8);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: Style.adjust(12),
  top: HIT_SLOP_SIZE,
};

interface IProps {
  title: string;
  description: string;
  textColor: string;
  showTitle: boolean;
  shouldAnimate: boolean;
  selectedSection: RewardsSection;
  showStoreLocation: boolean;
  activeTabs: Array<{ label: string; isEnabled: boolean; isActive: boolean; onPress: () => void }>;
}

const UP_FADE_ANIMATION = {
  entering: FadeInUp.duration(300).easing(Easing.inOut(Easing.quad)),
  exiting: FadeOutUp.duration(300).easing(Easing.inOut(Easing.quad)),
};

const RewardsTab = ({
  title,
  showTitle,
  shouldAnimate,
  description,
  textColor,
  selectedSection,
  activeTabs,
}: IProps) => {
  const shouldShowTitle = useMemo(() => showTitle || activeTabs.length === 1, [showTitle, activeTabs.length]);

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      {shouldShowTitle ? (
        <Animated.View key="animation-title" {...(shouldAnimate ? UP_FADE_ANIMATION : {})}>
          <Box style={!description ? styles.noDescription : styles.titleAndDescription}>
            <TextTemplate type="b1b" color={textColor}>
              {title}
            </TextTemplate>
            {!description ? null : (
              <TextTemplate type="l1" color={textColor}>
                {description}
              </TextTemplate>
            )}
          </Box>
        </Animated.View>
      ) : (
        <Animated.View key="animation-tabs" {...(shouldAnimate && !DETOX_ENABLED ? UP_FADE_ANIMATION : {})}>
          <Box gap={10} flexDirection="row">
            {activeTabs.map((tab) => {
              const { label, isActive, onPress } = tab;
              const tabStyles = isActive ? TAB_STYLES[selectedSection].active : TAB_STYLES[selectedSection].normal;
              return (
                <TouchableOpacityWithDelay
                  onPress={onPress}
                  key={label}
                  hitSlop={HIT_SLOP}
                  testID={REWARDS_TABS(label)}
                  style={[
                    styles.tab,
                    {
                      borderColor: tabStyles.borderColor,
                      backgroundColor: tabStyles.backgroundColor,
                    },
                  ]}
                >
                  <TextTemplate type="b2b" color={tabStyles.textColor}>
                    {label}
                  </TextTemplate>
                </TouchableOpacityWithDelay>
              );
            })}
          </Box>
        </Animated.View>
      )}
    </Box>
  );
};

interface ITabStyles {
  active: {
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
  };
  normal: {
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
  };
}

const TAB_STYLES: Record<RewardsSection, ITabStyles> = {
  [RewardsSection.Store]: {
    active: {
      textColor: "#464647",
      borderColor: "#E30D76",
      backgroundColor: "#FCE7F1",
    },
    normal: {
      textColor: "#464647",
      borderColor: "#E3E3E1",
      backgroundColor: Colours.neutral.white,
    },
  },
  [RewardsSection.Donations]: {
    active: {
      textColor: Colours.neutral.white,
      borderColor: "#F43E8E",
      backgroundColor: "#CC0D6E",
    },
    normal: {
      textColor: Colours.neutral.white,
      borderColor: "#5C4488",
      backgroundColor: "#4F377B",
    },
  },
  [RewardsSection.Premium]: {
    active: {
      textColor: Colours.neutral.white,
      borderColor: "#F43E8E",
      backgroundColor: "#CC0D6E",
    },
    normal: {
      textColor: Colours.neutral.white,
      borderColor: "#17AA75",
      backgroundColor: "#138A5F",
    },
  },
  [RewardsSection.Unavailable]: {
    active: {},
    normal: {},
  },
};

const styles = StyleSheet.create({
  titleAndDescription: {},
  noDescription: {
    paddingVertical: Style.adjust(4),
  },
  tab: {
    borderRadius: 100,
    height: Style.adjust(32),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Style.adjust(12),
    borderWidth: 1,
  },
});

export default memo(RewardsTab);
