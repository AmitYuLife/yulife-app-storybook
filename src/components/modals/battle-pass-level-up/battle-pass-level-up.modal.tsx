import { useFragment } from "@apollo/client/react/hooks";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks/useSduiCallbackFunctionOrReduxAction";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { GoalRewardStatus, MobileGameBattlePassReward, gql } from "@graphql/__generated";
import { useTrack } from "@hooks";
import { DONATION_LEVEL_UP_MODAL } from "@ids";
import { t } from "@locale";
import { ItemDetailsReward } from "@organisms";
import Logger from "@services/logger/logger";
import { Style, StyleSheet } from "@styles";
import * as Haptics from "expo-haptics";
import { memo, useCallback, useEffect, useMemo } from "react";
import { FadeInDown } from "react-native-reanimated";
import BlurredRaysWrapper from "@organisms/blurred-rays-wrapper/blurred-rays-wrapper";
import RaysSpotlightFocal from "@organisms/rays/rays-spotlight-focal";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import { isAndroid } from "@utils";
import { Box } from "@atoms";

interface IBattlePassLevelUpModalProps {
  onClose: () => void;
  reward: MobileGameBattlePassReward;
  onClaim?: (reward: MobileGameBattlePassReward) => VoidFunctionOrSduiActionPayload;
}

const ANIMATION_START_DELAY = 300;

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
        Logger.notify(e, { event: "@battle_pass_level_up_modal" });
      } finally {
        onClose();
      }
    }
  }, [handleSduiAction, onClose, reward.id, reward.title, track]);

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
      <RaysSpotlightFocal style={styles.animatedImageWrapper}>
        <Box
          alignItems="center"
          w={REWARD_IMAGE_SIZE}
          h={REWARD_IMAGE_SIZE}
          justifyContent="center"
          entering={FadeInDown.delay(300).duration(600)}
        >
          <ItemDetailsReward size={REWARD_IMAGE_SIZE} source={reward.overlayIcon} delay={ANIMATION_START_DELAY} />
        </Box>
      </RaysSpotlightFocal>
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
