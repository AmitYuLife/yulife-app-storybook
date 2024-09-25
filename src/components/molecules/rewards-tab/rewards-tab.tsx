import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { getActiveRewardsSection, getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { Colours, Style } from "@styles";
import { useSelector, useDispatch } from "react-redux";
import { updateRewardsGameMode } from "@redux/rewards-tab/rewards-tab.actions";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { PurchasesIcon } from "@atoms/icon/purchases-icon";
import { PressableWithDelay } from "@molecules";
import { t } from "@locale";
import Animated, { Easing, FadeInLeft, FadeInRight, FadeOutLeft, FadeOutRight } from "react-native-reanimated";

interface IProps {
  title: string;
  description: string;
  textColor: string;
  handlePurchasesButtonPress: () => void;
  showTitle: boolean;
  shouldAnimate: boolean;
}

const RewardsTab = ({
  title,
  handlePurchasesButtonPress,
  showTitle,
  shouldAnimate,
  description,
  textColor,
}: IProps) => {
  const dispatch = useDispatch();
  const tabsSettings = useSelector(getRewardsTabSettings);
  const selectedSection = useSelector(getActiveRewardsSection);

  const TABS = useMemo(
    () => [
      {
        label: t("screens.rewards.tabs.store"),
        isEnabled: tabsSettings.hasVoucherStore,
        isActive: selectedSection === RewardsSection.Store,
        onPress: () => dispatch(updateRewardsGameMode(RewardsSection.Store)),
      },
      {
        label: t("screens.rewards.tabs.donations"),
        isEnabled: tabsSettings.hasDonationBattlepass,
        isActive: selectedSection === RewardsSection.Donations,
        onPress: () => dispatch(updateRewardsGameMode(RewardsSection.Donations)),
      },
      {
        label: t("screens.rewards.tabs.premium"),
        isEnabled: tabsSettings.hasUnlockableBattlepassVouchers,
        isActive: selectedSection === RewardsSection.Premium,
        onPress: () => dispatch(updateRewardsGameMode(RewardsSection.Premium)),
      },
    ],
    [tabsSettings, selectedSection, dispatch]
  );

  const activeTabs = useMemo(() => TABS.filter((tab) => tab.isEnabled), [TABS]);

  return (
    <>
      {showTitle ? (
        <Animated.View
          key="animation-title"
          {...(shouldAnimate
            ? {
                entering: FadeInLeft.duration(300).easing(Easing.inOut(Easing.quad)),
                exiting: FadeOutLeft.duration(300).easing(Easing.inOut(Easing.quad)),
              }
            : {})}
        >
          <TextTemplate type="b1b" color={textColor}>
            {title}
          </TextTemplate>
          {!description ? null : (
            <TextTemplate type="l1" color={textColor}>
              {description}
            </TextTemplate>
          )}
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
          <Box gap={Style.adjust(10)} flexDirection="row">
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
    </>
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
    position: "absolute",
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.n250,
    right: 0,
    borderRadius: Style.adjust(21),
  },
});

export default memo(RewardsTab);
