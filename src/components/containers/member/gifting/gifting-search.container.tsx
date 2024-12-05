import { memo, useCallback, useContext, useMemo } from "react";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import { toggleGiftingTargetUser } from "./context/gifting-manager.actions";
import GiftingSearchScreen from "./screens/gifting-search.screen";
import { useSocialGroupUserSearch } from "@hooks";
import { useQuery } from "@apollo/client";
import { gql, SocialGroupLeaderboardSearchType } from "@graphql/__generated";
import { UserSearchItem } from "@redux/_core/types";

const GiftingSearchContainer = () => {
  const context = useContext(GiftingManagerContext);
  const selectedUsers = useMemo(
    () => ({ array: context?.state?.targetUsers ? Object.values(context.state.targetUsers) : [] }),
    [context]
  );
  const { isSearchTextEmpty, data, loading, handleChangeText } = useSocialGroupUserSearch(
    SocialGroupLeaderboardSearchType.Gifting
  );
  const { data: referralRewardAmountData } = useQuery(gql("GetReferralRewardAmountDocument"), {
    fetchPolicy: "network-only",
  });

  const handlePress = useCallback((item: UserSearchItem) => {
    context.dispatch(
      toggleGiftingTargetUser({
        ...item,
        avatar: { id: item.avatar.id, uri: item.avatar.uri || null },
      })
    );
  }, []);

  return (
    <GiftingSearchScreen
      selectedUsers={selectedUsers.array}
      data={data?.searchLeaderboardUser || []}
      loading={loading}
      onPressItem={handlePress}
      onChangeText={handleChangeText}
      referralAmount={referralRewardAmountData?.getReferralRewardAmount?.yuCoinAmount ?? 0}
      isSearchTextEmpty={isSearchTextEmpty}
    />
  );
};

export default memo(GiftingSearchContainer);
