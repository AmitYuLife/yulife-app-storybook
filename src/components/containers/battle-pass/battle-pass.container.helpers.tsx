import { BattlePassGenericModal, showFloatingModal } from "@components/modals";
import BattlePassLevelUpModal from "@components/modals/battle-pass-level-up/battle-pass-level-up.modal";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { GetMobileGameBattlePassQuery, MobileGameBattlePassProgressInfoFragment } from "@graphql/__generated";
import { ShowModal } from "@modules/modals/useModal";
import { t } from "@locale";
import { MixpanelEvent } from "@services/logging/types";
import { Unpacked } from "@utils";

type IBattlePassReward = Unpacked<GetMobileGameBattlePassQuery["getMobileGameBattlePass"]["rewards"]>;
interface IBattlePassProgress {
  progress: MobileGameBattlePassProgressInfoFragment;
  amount: number;
  openModals?: boolean;
  showModal: ShowModal;
  nextReward?: IBattlePassReward;
  logMixpanelEvent?: (eventName: MixpanelEvent, properties?: Record<string, unknown>) => void;
  onRewardClaim?: (reward: IBattlePassReward) => VoidFunctionOrSduiActionPayload;
}

export interface IBattlePassProgressResponse {
  level?: number;
  step: number;
  currentBalance: number;
}

export const getUpdatedBattlePassProgress = ({
  progress,
  amount,
  showModal,
  openModals = false,
  onRewardClaim,
  nextReward,
  logMixpanelEvent,
}: IBattlePassProgress): IBattlePassProgressResponse => {
  const { level, steps, step, currentBalance, status } = progress;
  if (!amount) {
    return null;
  }

  const balance = currentBalance - amount;

  if (balance < 0 && openModals) {
    logMixpanelEvent?.("modal_viewed", {
      name: "battle_pass_insufficient_coins",
    });

    showFloatingModal({
      children: (
        <BattlePassGenericModal
          title={t("modals.battle_pass.out_of_coin.title")}
          description={t("modals.battle_pass.out_of_coin.description")}
        />
      ),
      lottie: null,
      modalId: "yulife.enterprise.generic.modal",
      icon: require("./coin.png"),
    });
  }

  if (status === "completed") {
    showFloatingModal({
      children: (
        <BattlePassGenericModal
          title={t("modals.battle_pass.completed.title")}
          description={t("modals.battle_pass.completed.description")}
        />
      ),
      buttonLabel: t("modals.battle_pass.completed.button_label"),
      lottie: null,
      modalId: "yulife.enterprise.generic.modal",
      icon: require("./success.png"),
    });
  }

  if (status === "finished") {
    showFloatingModal({
      children: (
        <BattlePassGenericModal
          title={t("modals.battle_pass.finished.title")}
          description={t("modals.battle_pass.finished.description")}
        />
      ),
      buttonLabel: t("modals.battle_pass.finished.button_label"),
      lottie: null,
      modalId: "yulife.enterprise.generic.modal",
      icon: require("./success.png"),
    });
  }

  if (step + amount >= steps && balance > 0) {
    if (nextReward) {
      // TODO: This isn't auto tracked because showOverlayWithChild sets all modal IDs to 'blurredOverlay'
      // we should look into making this more streamlined
      logMixpanelEvent?.("modal_viewed", { name: "battlePass.level_up", level: level + 1 });

      showLevelUpModal({ reward: nextReward, onRewardClaim, showModal });
    }

    return {
      level: level + 1,
      step: step + amount - steps,
      currentBalance: currentBalance - amount,
    };
  }

  return {
    currentBalance: progress.currentBalance - amount,
    step: currentBalance > 0 ? progress.step + amount : progress.step,
  };
};

const showLevelUpModal = ({
  reward,
  showModal,
  onRewardClaim,
}: {
  showModal: ShowModal;
  reward: IBattlePassReward;
  onRewardClaim: (reward: IBattlePassReward) => VoidFunctionOrSduiActionPayload;
}) => {
  showModal(({ onClose }) => <BattlePassLevelUpModal reward={reward} onClose={onClose} onClaim={onRewardClaim} />);
};
