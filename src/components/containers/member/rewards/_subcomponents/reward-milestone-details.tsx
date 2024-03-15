import { GiftUnlockedStarsSvg } from "@atoms/icon/gift-unlocked-stars";
import { HeroLockedIcon } from "@atoms/icon/hero-locked-icon";
import Hint from "@components/molecules/hint/hint";
import { RewardCard } from "@components/molecules/reward-card/reward-card";
import { QuestDetailModal } from "@components/screens/member/quests/quests-scroll-screen/quest-detail-modal/quest-detail-modal.component";
import { RemoteImage } from "@graphql/_core/schema";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { pushToScreen } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { Style } from "@styles";
import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

type RewardMilestoneDetailsProps = {
  target: number;
  progress: number;
  rewardQuantity: number;
  rewardTitle: string;
  primaryColor: string;
  secondaryColor: string;
  overlayColor: string;
  rewardImage: RemoteImage;
};

export const RewardMilestoneDetails = memo(
  ({
    target,
    progress,
    rewardQuantity,
    rewardTitle,
    primaryColor,
    secondaryColor,
    overlayColor,
    rewardImage,
  }: RewardMilestoneDetailsProps) => {
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
      <QuestDetailModal
        heading={t("screens.locked_reward_modal.heading")}
        HeaderIcon={HeroLockedIcon}
        ctaLabel={t("screens.locked_reward_modal.heading")}
        onPressClose={Navigation.dismissOverlayWithChild}
        onPressCta={Navigation.dismissOverlayWithChild}
      >
        <View style={styles.space} />
        <RewardCard
          target={target}
          progress={progress}
          rewardQuantity={rewardQuantity}
          rewardTitle={rewardTitle}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          overlayColor={overlayColor}
          rewardImage={rewardImage}
        />
        <View style={styles.space} />
        <Hint
          label={t("screens.locked_reward_modal.hint.label")}
          description=""
          markdownDescription={t("screens.locked_reward_modal.hint.descriptionMarkdown")}
          image={calculated.hintImage}
          onPress={calculated.hintPress}
        />
      </QuestDetailModal>
    );
  }
);

const styles = StyleSheet.create({
  space: {
    height: Style.adjust(8),
  },
});
