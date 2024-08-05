import { BattlePassGenericModal, showFloatingModal } from "@components/modals";
import BattlePassLevelUpModal from "@components/modals/battle-pass-level-up/battle-pass-level-up.modal";
import { GetMobileGameBattlePassQuery, MobileGameBattlePassProgressInfoFragment } from "@graphql/__generated";
import { t } from "@locale";
import { Navigation } from "@navigation/main";

export const getUpdatedProgress = (
  progress: MobileGameBattlePassProgressInfoFragment,
  amount: number,
  openModals: boolean = false,
  nextReward?: GetMobileGameBattlePassQuery["getMobileGameBattlePass"]["rewards"][0]
) => {
  const { level, steps, step, currentBalance, status } = progress;
  if (!amount) {
    return null;
  }

  if (currentBalance - amount < 0 && openModals) {
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

  if (step + amount >= steps) {
    showLevelUpModal({ reward: nextReward });

    return {
      level: level + 1,
      step: step + amount - steps,
      currentBalance: currentBalance - amount,
    };
  }

  return {
    currentBalance: progress.currentBalance - amount,
    step: progress.step + amount,
  };
};

const showLevelUpModal = ({
  reward,
}: {
  reward: GetMobileGameBattlePassQuery["getMobileGameBattlePass"]["rewards"][0];
}) => {
  Navigation.showOverlayWithChild(
    <BattlePassLevelUpModal
      rewardTitle={reward.title}
      onClose={() => {
        Navigation.dismissAllOverlays();
      }}
    />,
    false
  );
};
