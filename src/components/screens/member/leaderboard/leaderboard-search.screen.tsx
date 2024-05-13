import { SearchInputWithIcon, FindAFriend } from "@components/molecules";
import { Pad, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import { memo, useCallback, useMemo, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import ListItem from "@organisms/list-item/list-item";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { t } from "@locale";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.selectors";
import { addLeaderboardRecentSearch } from "@redux/leaderboards/leaderboards.actions";
import { LEADERBOARD_SEARCH_CLOSE, LEADERBOARD_SEARCH_RESULTS } from "@ids";
import { SearchLeaderboardUserQuery, SearchLeaderboardUserQueryVariables } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import LeaderboardReferColleagueComponent from "./leaderboard-refer-colleague-component";

type SearchLeaderboardUser = SearchLeaderboardUserQuery["searchLeaderboardUser"][number];

interface IProps {
  heading: string;
  subHeading: string;
  socialGroupId?: string;
  socialGroupLeaderboardId?: string;
  data: SearchLeaderboardUserQuery;
  loading: boolean;
  searchLeaderboardUser: (variables: SearchLeaderboardUserQueryVariables) => void;
  onClose: () => void;
  onItemPress: (userId: string) => void;
  referralAmount: number;
}

const LeaderboardSearchScreen = ({
  data,
  loading,
  heading,
  subHeading,
  socialGroupId,
  socialGroupLeaderboardId,
  searchLeaderboardUser,
  onClose,
  onItemPress,
  referralAmount,
}: IProps) => {
  const dispatch = useDispatch();
  const [searchTextEmpty, setSearchTextEmpty] = useState(true);
  const recentSearch = useSelector(getLeaderboardRecentSearch);
  const keyboardBehavior = Platform.select<"padding" | null>({ ios: "padding", android: null });
  const items = useMemo(
    () => (searchTextEmpty ? recentSearch : data?.searchLeaderboardUser || []),
    [searchTextEmpty, data?.searchLeaderboardUser, recentSearch]
  );

  const onChangeText = useCallback(
    async (text: string) => {
      setSearchTextEmpty(text.length < 1);

      if (text.length < 1) {
        return;
      }

      searchLeaderboardUser({ name: text, socialGroupId, socialGroupLeaderboardId });
    },
    [searchLeaderboardUser, socialGroupId, socialGroupLeaderboardId]
  );

  const handleClose = useCallback(() => {
    Keyboard.dismiss();
    onClose();
  }, [onClose]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SearchLeaderboardUser>) => (
      <View style={styles.listItemWrapper}>
        <ListItem
          name={item.name}
          uri={item.avatar?.uri}
          type="search"
          onPress={() => {
            Keyboard.dismiss();
            dispatch(
              addLeaderboardRecentSearch({
                item: { ...item, avatar: { id: item.avatar.id, uri: item.avatar.uri || null } },
              })
            );
            onItemPress(item.id);
          }}
        />
      </View>
    ),
    [addLeaderboardRecentSearch, dispatch, onItemPress]
  );

  const Heading = useMemo(
    () => (
      <View style={styles.heading}>
        <TextTemplate type="l1" numberOfLines={1}>
          {heading}
        </TextTemplate>
        <TextTemplate type="b2b">{subHeading}</TextTemplate>
      </View>
    ),
    [heading, subHeading]
  );

  const goToReferralInformation = useCallback(async () => {
    await Navigation.dismissModal(MODALS.leaderboardSearch);

    await Navigation.push(ROUTES.leaderboard, {
      component: {
        id: ROUTES.referralInformation,
        name: ROUTES.referralInformation,
      },
    });
  }, []);

  return (
    <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.wrapper}>
      <GenericHeadingPad />
      <SearchInputWithIcon
        placeholder={t("screens.leaderboard.search.search_placeholder")}
        onChangeText={onChangeText}
        wrapperStyles={styles.searchIcon}
        textInputStyle={styles.textInput}
      />
      <Pad height={Style.adjust(searchTextEmpty ? 16 : 24)} />
      {!searchTextEmpty ? null : (
        <>
          <TextTemplate type={"b2b"}>{t("screens.leaderboard.search.recent")}</TextTemplate>
          <Pad height={Style.adjust(16)} />
        </>
      )}

      {(loading || !data?.searchLeaderboardUser.length) && !searchTextEmpty ? (
        <FindAFriend loading={loading} onPress={goToReferralInformation} records={data?.searchLeaderboardUser} />
      ) : (
        <>
          <FlashList
            data={items}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={Style.adjust(45)}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled"
            testID={LEADERBOARD_SEARCH_RESULTS(items.map((i) => i.name).sort())}
          />
          <View style={styles.referralWrapper}>
            <LeaderboardReferColleagueComponent
              referralAmount={referralAmount}
              onReferralsButtonPress={goToReferralInformation}
            />
          </View>
        </>
      )}
      <GenericHeadingAbsolute
        onRightIconPress={handleClose}
        heading={Heading}
        rightIconTestID={LEADERBOARD_SEARCH_CLOSE}
      />
    </KeyboardAvoidingView>
  );
};

const keyExtractor = (item: SearchLeaderboardUser) => item.id;

export default memo(LeaderboardSearchScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  },
  heading: {
    alignItems: "center",
  },
  searchIcon: {
    marginTop: Style.adjust(16),
  },
  listItemWrapper: {
    height: Style.adjust(45),
    marginBottom: Style.adjust(14),
  },
  textInput: {
    color: "#5C5757",
  },
  referralWrapper: {
    marginBottom: Style.adjust(32),
  },
});
