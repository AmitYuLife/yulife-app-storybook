import { memo } from "react";
import { Box } from "@atoms";
import { GamePrizeType } from "@graphql/__generated/graphql";
import { FashionIcon } from "./icons/fashion";
import { WalletIcon } from "./icons/wallet";
import { BackpackIcon } from "./icons/backpack";
import { t } from "@locale";
import Hint from "@components/molecules/hint/hint";

const POWER_UP_REWARD_TYPES = new Set([
  GamePrizeType.ChallengeBoost,
  GamePrizeType.ChallengeSurge,
  GamePrizeType.PowerUp,
]);
const YUMOJI_REWARD_TYPES = new Set([GamePrizeType.InventoryItem]);
const WALLET_REWARD_TYPES = new Set([GamePrizeType.CoreReward, GamePrizeType.Coupon]);

interface IArgs {
  rewardTypes: GamePrizeType[];
}

const RewardInfoCard = ({ rewardTypes }: IArgs) => {
  const reward = getRewardInfoCard(rewardTypes);

  if (!reward) {
    return null;
  }

  const { icon: Icon, title, description } = reward;

  return (
    <Box w="90%">
      <Hint label={title} description={description} image={{ Element: <Icon /> }} />
    </Box>
  );
};

const getRewardInfoCard = (rewardType: GamePrizeType[]) => {
  // we do this to show the proper info card when there are multiple rewards (mystery box)
  const hasPowerUpReward = rewardType.some((type) => POWER_UP_REWARD_TYPES.has(type));
  const hasYumojiReward = rewardType.some((type) => YUMOJI_REWARD_TYPES.has(type));
  const hasWalletReward = rewardType.some((type) => WALLET_REWARD_TYPES.has(type));

  if (hasWalletReward) {
    return {
      icon: WalletIcon,
      title: t("modals.open_random_chest.info_card.wallet.title"),
      description: t("modals.open_random_chest.info_card.wallet.description"),
    };
  }

  if (hasPowerUpReward) {
    return {
      icon: BackpackIcon,
      title: t("modals.open_random_chest.info_card.power_up_inventory.title"),
      description: t("modals.open_random_chest.info_card.power_up_inventory.description"),
    };
  }

  if (hasYumojiReward) {
    return {
      icon: FashionIcon,
      title: t("modals.open_random_chest.info_card.yumoji_inventory.title"),
      description: t("modals.open_random_chest.info_card.yumoji_inventory.description"),
    };
  }
};

export default memo(RewardInfoCard);
