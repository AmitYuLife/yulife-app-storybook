import { useFragment } from "@apollo/client/react/hooks";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks/useSduiCallbackFunctionOrReduxAction";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { GoalRewardStatus, MobileGameBattlePassReward, gql } from "@graphql/__generated";
import { useTrack } from "@hooks";
import { DONATION_LEVEL_UP_MODAL } from "@ids";
import { t } from "@locale";
import { ItemDetailsReward } from "@organisms";
import Logger from "@services/logging/logger";
import { Style, StyleSheet } from "@styles";
import * as Haptics from "expo-haptics";
import { memo, useCallback, useEffect, useMemo } from "react";
import { View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import BlurredRaysWrapper from "@organisms/blurred-rays-wrapper/blurred-rays-wrapper";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import { isAndroid } from "@utils";

interface IBattlePassLevelUpModalProps {
  onClose: () => void;
  reward: MobileGameBattlePassReward;
  onClaim?: (reward: MobileGameBattlePassReward) => VoidFunctionOrSduiActionPayload;
}

const ANIMATION_START_DELAY = 700;

const BattlePassLevelUpModal = ({ onClose, reward: pendingReward, onClaim }: IBattlePassLevelUpModalProps) => {
  const track = useTrack();
  const { data: reward, complete } = useFragment<MobileGameBattlePassReward>({
    fragment: gql("MobileGameBattlePassRewardFragmentDoc"),
    fragmentName: "MobileGameBattlePassReward",
    from: pendingReward,
  });

  const onClaimRewards = useMemo(() => {
    if (onClaim && complete) {
      return onClaim(reward);
    }
  }, [complete, onClaim, reward]);

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onClaimRewards);

  const onButtonPress = useCallback(async () => {
    track("button_pressed", {
      button_id: "battlePass_claim",
      reward_title: reward.title,
      reward_id: reward.id,
      battle_pass_type: "esg",
    });

    if (handleSduiAction) {
      try {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        await handleSduiAction();
      } catch (e) {
        Logger.error(e, { event: "@battle_pass_level_up_modal" });
      } finally {
        onClose();
      }
    }
  }, [handleSduiAction, onClose, reward.id, reward.title, track]);

  const imageWrapperStyles = useMemo(() => {
    // rays height is Style.DEVICE_WIDTH
    // rays top is 100
    // rays wrapper top in blurred rays wrapper is 130
    // -20 due to slight offset on the rays
    const raysCenterY = Style.adjust(100) + Style.DEVICE_WIDTH / 2 - Style.adjust(130) - Style.adjust(20);
    return [
      styles.imageWrapper,
      {
        // REWARD_IMAGE_SIZE is 180
        top: raysCenterY + 180 / 2,
      },
    ];
  }, []);

  useEffect(() => {
    track("battlepass_level_up", { level_achieved: reward.position });
  }, [reward.position, track]);

  if (!reward) {
    return null;
  }

  return (
    <BlurredRaysWrapper
      testID={DONATION_LEVEL_UP_MODAL}
      title={t("screens.battle_pass.level_up.title")}
      rollingTextProps={{
        previousValue: `${Math.max(reward.position - 1, 0)}`.padStart(2, "0"),
        newValue: `${reward.position}`.padStart(2, "0"),
      }}
      buttonLabel={reward.buttonLabel}
      buttonTestID="battle-pass-level-up-modal-claim-button"
      acceessibilityLabelTitle={t("screens.battle_pass.level_up.accessibility_title", { level: reward.position })}
      isLoading={reward.status !== GoalRewardStatus.Completed}
      onButtonPress={onButtonPress}
      titlePaddingTop={isAndroid() ? TOP_BAR_WITH_PAD : 40}
    >
      <View style={imageWrapperStyles}>
        <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.animatedImageWrapper}>
          <ItemDetailsReward size={180} source={reward.overlayIcon} delay={ANIMATION_START_DELAY} />
        </Animated.View>
      </View>
    </BlurredRaysWrapper>
  );
};

const REWARD_IMAGE_SIZE = Style.adjust(180);

const styles = StyleSheet.create({
  animatedImageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: REWARD_IMAGE_SIZE,
    height: REWARD_IMAGE_SIZE,
  },
  imageWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    start: 0,
    end: 0,
  },
});

export default memo(BattlePassLevelUpModal);
