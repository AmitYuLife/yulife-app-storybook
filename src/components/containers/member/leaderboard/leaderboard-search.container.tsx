import { UserSearchScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import { useDebouncedQuery, useUserFeatures } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { UserSearchItem } from "@redux/_core/types";
import { addLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.actions";
import { getLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.selectors";
import { memo, useCallback, useState } from "react";
import { Keyboard } from "react-native";
import { Navigation } from "react-native-navigation";
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
  socialGroupId,
  socialGroupLeaderboardId,
  onItemPress,
  referralAmount,
}: ILeaderboardSearchContainerProps) => {
  const dispatch = useDispatch();
  const [isSearchTextEmpty, setSearchTextEmpty] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const recentSearch = useSelector(getLeaderboardRecentSearch);
  const { showReferrals } = useUserFeatures();
  const [searchLeaderboardUser, { data, loading }] = useDebouncedQuery(gql("SearchLeaderboardUserDocument"), {
    fetchPolicy: "network-only",
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

  const handleChangeText = useCallback(
    (text: string) => {
      setSearchTextEmpty(text.length < 1);

      if (text.length < 1) {
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      searchLeaderboardUser({ name: text, socialGroupId, socialGroupLeaderboardId });
    },
    [searchLeaderboardUser, socialGroupId, socialGroupLeaderboardId]
  );

  return (
    <UserSearchScreen
      data={isSearchTextEmpty ? recentSearch : data?.searchLeaderboardUser || []}
      loading={isSearching && loading}
      heading={heading}
      subheading={subHeading}
      onItemPress={handlePress}
      onChangeText={handleChangeText}
      onClose={onClose}
      referralAmount={referralAmount}
      isFilteredSearch={true}
      showReferral={showReferrals}
    />
  );
};

export default memo(LeaderboardSearchContainer);
