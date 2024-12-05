import { memo, useCallback, useContext, useMemo } from "react";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import { toggleGiftingTargetUser } from "./context/gifting-manager.actions";
import GiftingSearchScreen from "./screens/gifting-search.screen";
import { useSocialGroupUserSearch, useGetLeaderboardFull } from "@hooks";
import { UserSearchItem } from "@redux/_core/types";

const GiftingSearchContainer = () => {
  const context = useContext(GiftingManagerContext);
  const selectedUsers = useMemo(
    () => ({ array: context?.state?.targetUsers ? Object.values(context.state.targetUsers) : [] }),
    [context]
  );
  const { leaderboardItems, referralRewardAmount } = useGetLeaderboardFull({ excludeSelf: true });
  const { isSearchTextEmpty, data, loading, handleChangeText } = useSocialGroupUserSearch();

  const handlePress = useCallback((item: UserSearchItem) => {
    context.dispatch(
      toggleGiftingTargetUser({
        ...item,
        avatar: { id: item.avatar.id, uri: item.avatar.uri || null },
      })
    );
  }, []);

  const listData = useMemo(() => {
    if (isSearchTextEmpty) {
      return leaderboardItems;
    }

    return data?.searchLeaderboardUser || [];
  }, [isSearchTextEmpty, leaderboardItems, data?.searchLeaderboardUser]);

  return (
    <GiftingSearchScreen
      selectedUsers={selectedUsers.array}
      data={listData}
      loading={loading}
      onPressItem={handlePress}
      onChangeText={handleChangeText}
      referralAmount={referralRewardAmount}
      isSearchTextEmpty={isSearchTextEmpty}
    />
  );
};

export default memo(GiftingSearchContainer);
