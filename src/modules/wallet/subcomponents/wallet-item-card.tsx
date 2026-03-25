import { Box } from "@atoms";
import WalletCouponItem from "@components/molecules/reward-wallet/walletCouponItem";
import WalletDiscountIem from "@components/molecules/reward-wallet/walletDiscountIem";
import WalletItem from "@components/molecules/reward-wallet/walletItem";
import { MobileGameUserWalletItem, SduiAction } from "@graphql/__generated";
import { t } from "@locale";
import { Colours } from "@styles";
import { memo } from "react";

interface IWalletItemCardProps {
  item: MobileGameUserWalletItem;
  index: number;
  onPress: (action: SduiAction) => void;
  isExpired?: boolean;
}

const ITEM_TYPE_COMPONENTS: Record<string, typeof WalletItem> = {
  coupon: WalletCouponItem,
  discount: WalletDiscountIem,
};

const WalletItemCard = ({ item, index, onPress, isExpired }: IWalletItemCardProps) => {
  const isUsed = item.isMarkedAsUsed ?? false;
  const opacity = isUsed || isExpired ? 0.5 : 1;
  const usedLabel = isUsed ? t("screens.rewards.wallet.used_section.label") : undefined;
  const labelHidden = isExpired && !isUsed;
  const label = usedLabel ?? item.label;
  const displayItem = label !== item.label ? { ...item, label } : item;
  const Component = ITEM_TYPE_COMPONENTS[item.type] ?? WalletItem;

  return (
    <Box opacity={opacity}>
      <Component
        item={displayItem}
        onPress={onPress}
        index={index}
        backgroundColor={isExpired ? Colours.neutral.n150 : undefined}
        labelHidden={labelHidden}
      />
    </Box>
  );
};

export default memo(WalletItemCard);
