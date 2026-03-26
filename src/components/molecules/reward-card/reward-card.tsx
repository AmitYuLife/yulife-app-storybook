import { useMemo } from "react";
import { View } from "react-native";
import { Image, TextTemplate, WorldCard } from "@atoms";
import { t } from "@locale";
import { Style, StyleSheet } from "@styles";
import { MAX_PROGRESS_WIDTH, MAX_UI_PROGRESS_PERCENTAGE, rewardCardStyles as styles } from "./reward-card.styles";
import { ProgressMilestoneComplete } from "../progress-milestone/progress-milestone-complete";
import { ProgressMilestoneIncomplete } from "../progress-milestone/progress-milestone-incomplete";
import LottieView from "../lottie-view/lottie-view";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

type RewardCardProps = {
  progress: number;
  target: number;
  rewardTitle: string;
  rewardQuantity: number;
  primaryColor: string;
  secondaryColor: string;
  overlayColor: string;
  rewardImage: {
    id: string;
    uri?: string;
  };
  overlayImage?: {
    id: string;
    uri?: string;
  };
  showSparks?: boolean;
};

export const RewardCard = ({
  progress,
  target,
  rewardTitle,
  rewardQuantity,
  primaryColor,
  secondaryColor,
  rewardImage,
  showSparks,
  overlayColor,
  overlayImage,
}: RewardCardProps) => {
  const { theme } = useTheme();
  const calculated = useMemo(() => {
    const filledBarWidth = {
      width: Math.max(0, MAX_PROGRESS_WIDTH * Math.min(MAX_UI_PROGRESS_PERCENTAGE, progress / target)),
    };
    const isMaxProgress = progress >= target;

    const barTargetWrapperStyles = {
      ...styles.barTargetWrapper,
      ...(isMaxProgress
        ? {
            backgroundColor: theme.colors.primary.p600,
            borderColor: theme.colors.primary.p600,
          }
        : {}),
    };

    return {
      filledBarWidth,
      barTargetWrapperStyles,
      isMaxProgress,
    };
  }, [progress, target, theme]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.row}>
          <View style={styles.textWrapper}>
            <TextTemplate numberOfLines={2} type="l1b">{`${
              rewardQuantity ? `${rewardQuantity} x ` : ""
            }${rewardTitle}`}</TextTemplate>
            <View style={styles.textPad} />
            <TextTemplate type="l3">
              {t("screens.locked_reward_modal.progress_status", { target, progress })}
            </TextTemplate>
          </View>
          <View style={styles.flex} />
        </View>
        <View style={styles.barWrapper}>
          <View style={[styles.emptyBar, { borderColor: theme.colors.primary.p600 }]} />
          <View style={styles.barTargetWrapperShimLeft} />
          <View style={[styles.filledBar, calculated.filledBarWidth, { backgroundColor: theme.colors.primary.p600 }]} />
          <View style={styles.progressMilestoneWrapper}>
            {progress >= target ? (
              <ProgressMilestoneComplete color={theme.colors.primary.p600} />
            ) : (
              <ProgressMilestoneIncomplete
                starColor={theme.colors.primary.p60}
                borderColor={theme.colors.primary.p600}
                index={0}
                target={1}
              />
            )}
          </View>
        </View>
      </View>
      {!rewardImage?.uri ? null : (
        <View style={styles.worldCardWrapper}>
          <WorldCard mainColor={primaryColor} shadowColor={secondaryColor} />
          <View style={styles.imageWrapper}>
            <Image suppressLoadingUi={true} width={Style.adjust(56)} source={{ uri: rewardImage.uri }} />
          </View>
          <View
            style={StyleSheet.flatten([
              styles.imageOverlay,
              { borderColor: secondaryColor, backgroundColor: overlayColor },
            ])}
          />
          {!overlayImage ? null : (
            <View style={styles.overlayImageWrapper}>
              <Image suppressLoadingUi={true} width={Style.adjust(42)} source={{ uri: overlayImage.uri }} />
            </View>
          )}
        </View>
      )}
      {!showSparks ? null : (
        <LottieView source={require("./assets/sparkles.json")} style={styles.sparks} autoPlay={true} loop={true} />
      )}
    </View>
  );
};
