import { memo, useContext, useMemo } from "react";
import { GiftingManagerContext, YuCoinDenominationChoice } from "./context";
import GiftingYuCoinScreen from "./screens/gifting-yu-coin.screen";

type Props = {
  options: Array<YuCoinDenominationChoice>;
  selectedAmount: YuCoinDenominationChoice;
  onSelect: (id: YuCoinDenominationChoice) => void;
};

const GiftingYuCoinContainer = ({ options, selectedAmount, onSelect }: Props) => {
  const context = useContext(GiftingManagerContext);
  const selectedUsers = useMemo(
    () => ({ array: context?.targetUsers ? Object.values(context.targetUsers) : [] }),
    [context]
  );

  return (
    <GiftingYuCoinScreen
      options={options}
      selectedUsers={selectedUsers.array}
      onSelect={onSelect}
      selectedAmount={selectedAmount}
    />
  );
};

export default memo(GiftingYuCoinContainer);
