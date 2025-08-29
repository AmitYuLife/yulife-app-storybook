import { HeroLockedIcon } from "@atoms/icon/hero-locked-icon";
import { ScrollableContentOverlay } from "@components/modals/scrollable-content-overlay/scrollable-content-overlay";
import { RewardCard } from "@components/molecules/reward-card/reward-card";
import { RemoteImage } from "@graphql/__generated";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { Style, StyleSheet } from "@styles";
import { View } from "react-native";

type RewardMilestoneDetailsProps = {
  target: number;
  progress: number;
  rewardQuantity: number;
  rewardTitle: string;
  primaryColor: string;
  secondaryColor: string;
  overlayColor: string;
  rewardImage: RemoteImage;
  overlayImage: RemoteImage;
  modalTitle: string | null;
};

export const RewardMilestoneDetails = ({
  target,
  progress,
  rewardQuantity,
  rewardTitle,
  primaryColor,
  secondaryColor,
  overlayColor,
  rewardImage,
  modalTitle,
  overlayImage,
}: RewardMilestoneDetailsProps) => {
  const hasCompleteRewardCardInfo = target && rewardTitle && primaryColor && secondaryColor && rewardImage;

  return (
    <ScrollableContentOverlay
      heading={modalTitle ?? t("screens.locked_reward_modal.heading")}
      HeaderIcon={<HeroLockedIcon />}
      ctaLabel={t("screens.locked_reward_modal.cta")}
      onPressClose={Navigation.dismissOverlayWithChild}
      onPressCta={Navigation.dismissOverlayWithChild}
    >
      {!hasCompleteRewardCardInfo ? null : (
        <>
          <View style={styles.space} />
          <RewardCard
            target={target}
            progress={progress}
            rewardQuantity={rewardQuantity}
            rewardTitle={rewardTitle}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            rewardImage={rewardImage}
            overlayColor={overlayColor}
            overlayImage={overlayImage}
          />
        </>
      )}
      <View style={styles.space} />
    </ScrollableContentOverlay>
  );
};

const styles = StyleSheet.create({
  space: {
    height: Style.adjust(8),
  },
});
