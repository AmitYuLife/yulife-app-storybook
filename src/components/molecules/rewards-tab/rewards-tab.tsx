import React, { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Animated, { Easing, FadeInUp, FadeOutUp } from "react-native-reanimated";

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
        <Animated.View key="animation-tabs" {...(shouldAnimate ? UP_FADE_ANIMATION : {})}>
          <Box gap={10} flexDirection="row">
            {activeTabs.map((tab) => {
              const { label, isActive, onPress } = tab;
              const tabStyles = isActive ? TAB_STYLES[selectedSection].active : TAB_STYLES[selectedSection].normal;
              return (
                <TouchableOpacityWithDelay
                  onPress={onPress}
                  key={label}
                  style={[
                    styles.tab,
                    {
                      borderColor: tabStyles.borderColor,
                      backgroundColor: tabStyles.backgroundColor,
                    },
                  ]}
                >
                  <TextTemplate type="l2b" color={tabStyles.textColor}>
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

const TAB_STYLES = {
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
};

const styles = StyleSheet.create({
  titleAndDescription: {},
  noDescription: {
    paddingVertical: Style.adjust(4),
  },
  tab: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Style.adjust(12),
    paddingVertical: Style.adjust(8),
    borderWidth: 1,
  },
});

export default memo(RewardsTab);
