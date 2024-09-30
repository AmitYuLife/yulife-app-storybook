import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { PurchasesIcon } from "@atoms/icon/purchases-icon";
import { LocationIcon } from "@atoms/icon/location-icon";
import { PressableWithDelay } from "@molecules";
import Animated, {
  Easing,
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeOut,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";
import { PURCHASED_TAB_BUTTON, STORE_LOCATION_TAB_BUTTON } from "@ids";

interface IProps {
  title: string;
  description: string;
  textColor: string;
  onPurchasesPress: () => void;
  onStoreLocationPress: () => void;
  showTitle: boolean;
  shouldAnimate: boolean;
  selectedSection: RewardsSection;
  activeTabs: Array<{ label: string; isEnabled: boolean; isActive: boolean; onPress: () => void }>;
}

const LEFT_FADE_ANIMATION = {
  entering: FadeInLeft.duration(300).easing(Easing.inOut(Easing.quad)),
  exiting: FadeOutLeft.duration(300).easing(Easing.inOut(Easing.quad)),
};

const RIGHT_FADE_ANIMATION = {
  entering: FadeInRight.duration(300).easing(Easing.inOut(Easing.quad)),
  exiting: FadeOutRight.duration(300).easing(Easing.inOut(Easing.quad)),
};

const FADE_ANIMATION = {
  entering: FadeIn.duration(300).easing(Easing.inOut(Easing.quad)),
  exiting: FadeOut.duration(300).easing(Easing.inOut(Easing.quad)),
};

const RewardsTab = ({
  title,
  onPurchasesPress,
  onStoreLocationPress,
  showTitle,
  shouldAnimate,
  description,
  textColor,
  selectedSection,
  activeTabs,
}: IProps) => {
  const showTitleAndLocation = useMemo(() => showTitle || activeTabs.length === 1, [showTitle, activeTabs.length]);

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      {showTitleAndLocation ? (
        <Animated.View key="animation-title" {...(shouldAnimate ? LEFT_FADE_ANIMATION : {})}>
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
        <Animated.View key="animation-tabs" {...(shouldAnimate ? RIGHT_FADE_ANIMATION : {})}>
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

      <Box flexDirection="row">
        {showTitleAndLocation && selectedSection === RewardsSection.Store ? (
          <Animated.View key="animation-tabs" {...(shouldAnimate ? FADE_ANIMATION : {})}>
            <PressableWithDelay onPress={onStoreLocationPress} style={styles.iconButton}>
              <View style={styles.icon} testID={STORE_LOCATION_TAB_BUTTON}>
                <LocationIcon />
              </View>
            </PressableWithDelay>
          </Animated.View>
        ) : null}

        <PressableWithDelay onPress={onPurchasesPress} style={styles.iconButton}>
          <View style={styles.icon} testID={PURCHASED_TAB_BUTTON}>
            <PurchasesIcon />
          </View>
        </PressableWithDelay>
      </Box>
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
  icon: {
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(21),
    bottom: Style.adjust(2),
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.n250,
    borderRadius: Style.adjust(21),
    marginLeft: Style.adjust(12),
  },
});

export default memo(RewardsTab);
