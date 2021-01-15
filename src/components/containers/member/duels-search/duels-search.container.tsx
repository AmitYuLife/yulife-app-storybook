import { MODALS, ROUTES } from "@navigation/constants";
import React, { useCallback } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";
import { DUELS_SEARCH } from "@ids";
import SearchInput from "./subcomponents/search-input";
import styles from "./duels-search.styles";
import SearchList from "./subcomponents/search-list";
import { GQL_QUERY_SEARCH_FOR_DUEL_OPPONENT } from "@graphql/duels/searchForDuelOpponents.gql";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { useDebouncedQuery } from "@services/hooks/useDebouncedQuery";
import {
  SearchForDuelOpponent,
  SearchForDuelOpponentVariables,
  SearchForDuelOpponent_searchForDuelOpponent,
} from "@graphql/_core/schema/SearchForDuelOpponent";
import RecentOpponents from "./subcomponents/recent-opponents";

export interface SearchedOpponent extends SearchForDuelOpponent_searchForDuelOpponent {
  onPress: () => Promise<void>;
}

function navigateBack() {
  Navigation.popTo(ROUTES.duelsHub);
}

const DEBOUNCE = 750;

const inviteToDuel = async (opponentId: string) => {
  await Navigation.showModal({
    component: {
      id: MODALS.duelInvite,
      name: MODALS.duelInvite,
      passProps: {
        opponentId,
        isDuelsHubInNavigationStack: true,
      },
    },
  });
};

function DuelsSearchContainer() {
  const [query, setQuery] = React.useState("");

  const [search, { loading, data, networkStatus }] = useDebouncedQuery<
    SearchForDuelOpponent,
    SearchForDuelOpponentVariables
  >(GQL_QUERY_SEARCH_FOR_DUEL_OPPONENT, { fetchPolicy: "cache-and-network" }, DEBOUNCE, { query: "" });

  const onChangeText = useCallback(
    (text: string) => {
      setQuery(text);
      search({ query: text });
    },
    [search]
  );

  const onRefresh = useCallback(async () => {
    search({ query });
  }, [search, query]);

  const opponents = (data?.searchForDuelOpponent || []).map((opponent) => ({
    ...opponent,
    onPress: () => inviteToDuel(opponent.customerId),
  }));

  return (
    <View style={styles.wrapper} testID={DUELS_SEARCH}>
      <View style={styles.topbarFiller} />
      <RecentOpponents inviteToDuel={inviteToDuel} />
      <SearchInput title="Search for a friend:" query={query} onChangeText={onChangeText} />
      <SearchList
        data={opponents}
        networkStatus={networkStatus}
        onRefresh={onRefresh}
        emptyText={loading ? "" : "We could not find the friend you’re looking for."}
        loading={loading}
      />
      <TopBarAbsolute hasShadow={true} hasWhiteBackground={true} onPressLeftIcon={navigateBack} leftIcon="Back" />
    </View>
  );
}

export default DuelsSearchContainer;
