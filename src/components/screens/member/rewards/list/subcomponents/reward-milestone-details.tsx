import { GiftUnlockedStarsSvg } from "@atoms/icon/gift-unlocked-stars/gift-unlocked-stars";
import { HeroLockedIcon } from "@atoms/icon/hero-locked-icon";
import { ScrollableContentOverlay } from "@components/modals/scrollable-content-overlay/scrollable-content-overlay";
import Hint from "@components/molecules/hint/hint";
import { RewardCard } from "@components/molecules/reward-card/reward-card";
import { RemoteImage } from "@graphql/__generated";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { pushToScreen } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { Style } from "@styles";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

type RewardMilestoneDetailsProps = {
  target: number;
  progress: number;
  rewardQuantity: number;
  rewardTitle: string;
  primaryColor: string;
  secondaryColor: string;
  rewardImage: RemoteImage;
  hint?: {
    label?: string;
    description?: string;
  };
  modalTitle: string | null;
};

export const RewardMilestoneDetails = ({
  target,
  progress,
  rewardQuantity,
  rewardTitle,
  primaryColor,
  secondaryColor,
  rewardImage,
  hint,
  modalTitle,
}: RewardMilestoneDetailsProps) => {
  const hasCompleteRewardCardInfo =
    target && rewardQuantity && rewardTitle && primaryColor && secondaryColor && rewardImage;
  const currentRoute = useSelector(getRouteState);

  const calculated = useMemo(() => {
    return {
      hintPress: () => {
        pushToScreen(currentRoute, {
          component: {
            id: ROUTES.sduiStatic,
            name: ROUTES.sduiStatic,
            passProps: {
              stepId: "game_mechanics_information",
              dynamicId: currentRoute,
            },
          },
        });
        Navigation.dismissOverlayWithChild();
      },
      hintImage: {
        Element: <GiftUnlockedStarsSvg />,
      },
    };
  }, [currentRoute]);

  return (
    <ScrollableContentOverlay
      heading={modalTitle ?? t("screens.locked_reward_modal.heading")}
      HeaderIcon={HeroLockedIcon}
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
          />
        </>
      )}
      <View style={styles.space} />
      {!hint ? null : (
        <Hint
          label={hint.label || t("screens.locked_reward_modal.hint.label")}
          description=""
          markdownDescription={hint.description || t("screens.locked_reward_modal.hint.descriptionMarkdown")}
          image={calculated.hintImage}
          onPress={calculated.hintPress}
        />
      )}
    </ScrollableContentOverlay>
  );
};

const styles = StyleSheet.create({
  space: {
    height: Style.adjust(8),
  },
});
