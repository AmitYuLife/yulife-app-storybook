import { VoidFunction } from "@utils";
import { memo, useContext, useMemo } from "react";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import { GiftingListItem } from "@organisms/list-item/gifting-list-item";

type Props = {
  id: string;
  name: string;
  uri: string;
  onPress: VoidFunction;
  disabledReason?: string;
};

const GiftingSearchItemContainer = memo(({ id, name, uri, onPress, disabledReason }: Props) => {
  const context = useContext(GiftingManagerContext);
  const selectedUsers = useMemo(() => {
    const targetUsersArray = context?.targetUsers ? Object.values(context.targetUsers) : [];
    const targetUsersMap = context?.targetUsers || {};
    const hasSelectedMax = targetUsersArray.length >= context.maxTarget;
    const isSelected = !targetUsersMap[id];
    const shouldDisableItem = hasSelectedMax && isSelected;

    return {
      array: targetUsersArray,
      map: targetUsersMap,
      addingDisabled: !isFinite(context?.maxTarget) || shouldDisableItem,
    };
  }, [context, id]);

  return (
    <GiftingListItem
      disabled={!selectedUsers.map[id] && selectedUsers.addingDisabled}
      onPress={onPress}
      checked={!!selectedUsers.map[id]}
      name={name}
      uri={uri}
      disabledReason={disabledReason}
    />
  );
});

export default memo(GiftingSearchItemContainer);
