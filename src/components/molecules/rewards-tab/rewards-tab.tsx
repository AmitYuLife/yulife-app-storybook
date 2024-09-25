import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { PurchasesIcon } from "@atoms/icon/purchases-icon";
import { PressableWithDelay } from "@molecules";
import Animated, { Easing, FadeInLeft, FadeInRight, FadeOutLeft, FadeOutRight } from "react-native-reanimated";

interface IProps {
  title: string;
  description: string;
  textColor: string;
  handlePurchasesButtonPress: () => void;
  showTitle: boolean;
  shouldAnimate: boolean;
  selectedSection: RewardsSection;
  activeTabs: Array<{ label: string; isEnabled: boolean; isActive: boolean; onPress: () => void }>;
}

const RewardsTab = ({
  title,
  handlePurchasesButtonPress,
  showTitle,
  shouldAnimate,
  description,
  textColor,
  selectedSection,
  activeTabs,
}: IProps) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      {showTitle || activeTabs?.length === 1 ? (
        <Animated.View
          key="animation-title"
          {...(shouldAnimate
            ? {
                entering: FadeInLeft.duration(300).easing(Easing.inOut(Easing.quad)),
                exiting: FadeOutLeft.duration(300).easing(Easing.inOut(Easing.quad)),
              }
            : {})}
        >
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
        <Animated.View
          key="animation-tabs"
          {...(shouldAnimate
            ? {
                entering: FadeInRight.duration(300).easing(Easing.inOut(Easing.quad)),
                exiting: FadeOutRight.duration(300).easing(Easing.inOut(Easing.quad)),
              }
            : {})}
        >
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

      <PressableWithDelay onPress={handlePurchasesButtonPress} style={styles.purchasesButton}>
        <View style={styles.purchasesIconWrapper}>
          <PurchasesIcon />
        </View>
      </PressableWithDelay>
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
  purchasesIconWrapper: {
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(21),
    bottom: Style.adjust(2),
    alignItems: "center",
    justifyContent: "center",
  },
  purchasesButton: {
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.n250,
    borderRadius: Style.adjust(21),
  },
});

export default memo(RewardsTab);
