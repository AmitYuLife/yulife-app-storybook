import { UserSearchScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import { useDebouncedQuery } from "@hooks";
import { MODALS } from "@navigation/constants";
import { addLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.actions";
import { getLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.selectors";
import { UserSearchItem } from "@redux/user/user.types";
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
  const recentSearch = useSelector(getLeaderboardRecentSearch);
  const [searchLeaderboardUser, { data, loading }] = useDebouncedQuery(gql("SearchLeaderboardUserDocument"), {
    fetchPolicy: "network-only",
  });

  const handlePress = useCallback((item: UserSearchItem) => {
    dispatch(
      addLeaderboardRecentSearch({
        item: { ...item, avatar: { id: item.avatar.id, uri: item.avatar.uri || null } },
      })
    );

    onItemPress?.(item.id);
    Navigation.dismissAllModals();
  }, []);

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.dismissModal(MODALS.leaderboardSearch);
  }, []);

  const handleChangeText = useCallback(
    (text: string) => {
      setSearchTextEmpty(text.length < 1);

      if (text.length < 1) {
        return;
      }

      searchLeaderboardUser({ name: text, socialGroupId, socialGroupLeaderboardId });
    },
    [searchLeaderboardUser, socialGroupId, socialGroupLeaderboardId]
  );

  return (
    <UserSearchScreen
      data={data?.searchLeaderboardUser || []}
      loading={loading}
      heading={heading}
      subheading={subHeading}
      onItemPress={handlePress}
      onChangeText={handleChangeText}
      onClose={onClose}
      referralAmount={referralAmount}
      isSearchTextEmpty={isSearchTextEmpty}
      recentSearch={recentSearch}
    />
  );
};

export default memo(LeaderboardSearchContainer);
