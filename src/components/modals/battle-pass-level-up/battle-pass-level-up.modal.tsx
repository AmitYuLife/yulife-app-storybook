import { useFragment } from "@apollo/client/react/hooks";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks/useSduiCallbackFunctionOrReduxAction";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { GoalRewardStatus, MobileGameBattlePassReward, gql } from "@graphql/__generated";
import { useTrack } from "@hooks";
import { DONATION_LEVEL_UP_MODAL } from "@ids";
import { t } from "@locale";
import { ItemDetailsReward } from "@organisms";
import Logger from "@services/logging/logger";
import { Style } from "@styles";
import * as Haptics from "expo-haptics";
import { memo, useCallback, useEffect, useMemo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import BattlePassBlurredRaysWrapper, {
  BATTLE_PASS_BLURRED_RAYS_Y_OFFSET,
} from "@organisms/battle-pass-blurred-rays-wrapper/battle-pass-blurred-rays-wrapper";

interface IBattlePassLevelUpModalProps {
  onClose: () => void;
  reward: MobileGameBattlePassReward;
  onClaim?: (reward: MobileGameBattlePassReward) => VoidFunctionOrSduiActionPayload;
}

const { height: screenHeight } = Dimensions.get("screen");
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
    return [
      styles.imageWrapper,
      {
        top: screenHeight / 2.2 - BATTLE_PASS_BLURRED_RAYS_Y_OFFSET / 1.9 - REWARD_IMAGE_SIZE / 2,
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
    <BattlePassBlurredRaysWrapper
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
    >
      <View style={imageWrapperStyles}>
        <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.animatedImageWrapper}>
          <ItemDetailsReward size={180} source={reward.overlayIcon} delay={ANIMATION_START_DELAY} />
        </Animated.View>
      </View>
    </BattlePassBlurredRaysWrapper>
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
    left: 0,
    right: 0,
  },
});

export default memo(BattlePassLevelUpModal);
