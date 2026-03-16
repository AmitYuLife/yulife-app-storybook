import React, { memo, useCallback, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { initialWindowMetrics, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { t } from "@locale";
import { Box } from "@atoms";
import { Rays } from "@organisms";
import { DETOX_ENABLED } from "@services/socket";
import { VoidFunction, VoidFunctionOrPromise } from "@utils";
import { default as SmokingCelebration, SmokingCelebrationProps } from "./subcomponents/smoking-celebration";

type Page = "streakIncrease" | "milestone";

interface ISmokingStreakCelebrationModalProps {
  onClose?: VoidFunctionOrPromise;
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
  closeOverlay?: VoidFunction; // Set from BlurredOverlay
}

const SmokingStreakCelebrationModal = ({ onClose, smokingData, closeOverlay }: ISmokingStreakCelebrationModalProps) => {
  const celebration = smokingData?.streakCheckInOverlay?.celebration;
  const [page, setPage] = useState<Page>("streakIncrease");

  const milestoneData = useMemo(() => {
    const { showMilestoneUnlocked, milestoneUnlocked, showLastMilestoneCelebration, lastMilestoneCelebration } =
      smokingData?.streakCheckInOverlay || {};

    if (showMilestoneUnlocked && milestoneUnlocked) {
      return milestoneUnlocked;
    }

    if (showLastMilestoneCelebration && lastMilestoneCelebration) {
      return lastMilestoneCelebration;
    }

    return null;
  }, [smokingData?.streakCheckInOverlay]);

  const onCtaPress = useCallback(async () => {
    if (page === "streakIncrease" && milestoneData) {
      setPage("milestone");
      return;
    }

    await onClose?.();
    closeOverlay?.();
  }, [closeOverlay, milestoneData, onClose, page]);

  const smokingCelebrationPageData = useMemo(() => {
    if (page === "streakIncrease" && celebration) {
      return {
        id: "celebration",
        title: celebration.title,
        daysHeading: t("screens.smoking_modals.days_title", { days: smokingData.currentStreak }),
        yuCoin: celebration.yuCoinAwarded,
        description: celebration.description,
        tips: celebration.tips,
        ctaLabel: celebration.cta,
        onPress: onCtaPress,
      } as SmokingCelebrationProps;
    }

    if (page === "milestone" && milestoneData) {
      return {
        id: "milestoneUnlocked",
        title:
          smokingData.currentStreak >= smokingData.maxStreak
            ? t("screens.smoking_modals.all_milestones_passed")
            : t("screens.smoking_modals.milestone_passed"),
        daysHeading:
          smokingData.currentStreak >= smokingData.maxStreak
            ? t("screens.smoking_modals.milestones")
            : t("screens.smoking_modals.milestone"),
        image: milestoneData.image?.uri ? milestoneData.image : undefined,
        description: milestoneData.description,
        tips: milestoneData.tips,
        ctaLabel: milestoneData.cta,
        onPress: onCtaPress,
      } as SmokingCelebrationProps;
    }
  }, [page, celebration, milestoneData, smokingData.currentStreak, smokingData.maxStreak, onCtaPress]);

  const insets = useSafeAreaInsets();

  if (!smokingCelebrationPageData) {
    onCtaPress();
    return null;
  }

  return (
    <Box flex={1} bg="rgba(0,0,0,.5)">
      <Box w="100%" h="100%" position="absolute" opacity={0.4}>
        <Box forceAnimated={true} w="100%" h="100%" position="absolute" top={-130}>
          {!DETOX_ENABLED ? <Rays backgroundColor="transparent" style="alternate" /> : null}
        </Box>
      </Box>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        contentContainerStyle={{ flexGrow: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        <SmokingCelebration {...smokingCelebrationPageData} />
      </ScrollView>
    </Box>
  );
};

const SmokingStreakCelebrationModalWithProviders = (props: ISmokingStreakCelebrationModalProps) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SmokingStreakCelebrationModal {...props} />
    </SafeAreaProvider>
  );
};

export default memo(SmokingStreakCelebrationModalWithProviders);
