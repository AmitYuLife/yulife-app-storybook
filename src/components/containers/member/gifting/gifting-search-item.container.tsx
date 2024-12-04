import { VoidFunction } from "@utils";
import { memo, useContext, useMemo } from "react";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import { GiftingListItem } from "@organisms/list-item/gifting-list-item";

type Props = {
  id: string;
  name: string;
  uri: string;
  onPress: VoidFunction;
};

const GiftingSearchItemContainer = memo(({ id, name, uri, onPress }: Props) => {
  const context = useContext(GiftingManagerContext);
  const selectedUsers = useMemo(() => {
    const targetUsersArray = context?.state?.targetUsers ? Object.values(context.state.targetUsers) : [];
    const targetUsersMap = context?.state?.targetUsers || {};
    const hasSelectedMax = targetUsersArray.length >= context.state.maxTarget;
    const isSelected = !targetUsersMap[id];
    const shouldDisableItem = hasSelectedMax && isSelected;

    return {
      array: targetUsersArray,
      map: targetUsersMap,
      addingDisabled: !isFinite(context?.state?.maxTarget) || shouldDisableItem,
    };
  }, [context, id]);

  return (
    <GiftingListItem
      disabled={!selectedUsers.map[id] && selectedUsers.addingDisabled}
      onPress={onPress}
      checked={!!selectedUsers.map[id]}
      name={name}
      uri={uri}
    />
  );
});

export default memo(GiftingSearchItemContainer);
