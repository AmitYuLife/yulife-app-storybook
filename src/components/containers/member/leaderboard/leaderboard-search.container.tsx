import { UserSearchScreen } from "@components/screens";
import { SocialGroupLeaderboardSearchType } from "@graphql/__generated";
import { useSocialGroupUserSearch, useUserFeatures } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { UserSearchItem } from "@redux/_core/types";
import { addLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.actions";
import { getLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.selectors";
import { memo, useCallback } from "react";
import { Keyboard } from "react-native";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";

export interface ILeaderboardSearchContainerProps {
  heading: string;
  subHeading: string;
  socialGroupId?: string;
  socialGroupLeaderboardId?: string;
  onItemPress?: (userId: string) => void;
  referralAmount: number;
}

const LeaderboardSearchContainer = ({
  heading,
  subHeading,
  onItemPress,
  referralAmount,
}: ILeaderboardSearchContainerProps) => {
  const dispatch = useDispatch();
  const recentSearch = useSelector(getLeaderboardRecentSearch);
  const { showReferrals } = useUserFeatures();

  const { isFilteredSearch, data, loading, handleChangeText } = useSocialGroupUserSearch({
    searchType: SocialGroupLeaderboardSearchType.Leaderboard,
    allowUnfilteredSearch: true,
  });

  const handlePress = useCallback(
    (item: UserSearchItem) => {
      dispatch(
        addLeaderboardRecentSearch({
          item: { ...item, avatar: { id: item.avatar.id, uri: item.avatar.uri || null } },
        })
      );

      onItemPress?.(item.id);
    },
    [onItemPress]
  );

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.leaderboardSearch);
  }, []);

  return (
    <UserSearchScreen
      data={!isFilteredSearch ? recentSearch : data?.searchLeaderboardUser || []}
      loading={loading}
      heading={heading}
      subheading={subHeading}
      onItemPress={handlePress}
      onChangeText={handleChangeText}
      onClose={onClose}
      referralAmount={referralAmount}
      isFilteredSearch={isFilteredSearch}
      showReferral={showReferrals}
    />
  );
};

export default memo(LeaderboardSearchContainer);
