import { memo, useCallback, useContext, useMemo } from "react";
import { GiftingManagerContext } from "./context/gifting-manager.context";
import GiftingSearchScreen from "./screens/gifting-search.screen";
import { useSocialGroupUserSearch } from "@hooks";
import { useQuery } from "@apollo/client";
import { gql, SocialGroupLeaderboardSearchType } from "@graphql/__generated";
import { UserSearchItem } from "@redux/_core/types";

const GiftingSearchContainer = () => {
  const context = useContext(GiftingManagerContext);
  const selectedUsers = useMemo(
    () => ({ array: context?.targetUsers ? Object.values(context.targetUsers) : [] }),
    [context]
  );
  const { isFilteredSearch, data, loading, handleChangeText } = useSocialGroupUserSearch({
    searchType: SocialGroupLeaderboardSearchType.Gifting,
    allowUnfilteredSearch: true,
  });
  const { data: referralRewardAmountData } = useQuery(gql("GetReferralRewardAmountDocument"), {
    fetchPolicy: "cache-only",
  });

  const handlePress = useCallback((item: UserSearchItem) => {
    context.setTargetUsers({
      ...item,
      avatar: { id: item.avatar.id, uri: item.avatar.uri || null },
    });
  }, []);

  return (
    <GiftingSearchScreen
      selectedUsers={selectedUsers.array}
      data={data?.searchLeaderboardUser || []}
      loading={loading}
      onPressItem={handlePress}
      onChangeText={handleChangeText}
      referralAmount={referralRewardAmountData?.getReferralRewardAmount?.yuCoinAmount ?? 0}
      isFilteredSearch={isFilteredSearch}
    />
  );
};

export default memo(GiftingSearchContainer);
