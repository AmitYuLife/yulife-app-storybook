import { ROUTES } from "@navigation/constants";
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
import { SearchForDuelOpponent, SearchForDuelOpponentVariables } from "@graphql/_core/schema/SearchForDuelOpponent";

function navigateBack() {
  Navigation.popTo(ROUTES.duelsHub);
}

const DEBOUNCE = 750;

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

  return (
    <View style={styles.wrapper} testID={DUELS_SEARCH}>
      <View style={styles.topbarFiller} />
      <SearchInput title="Search for a friend:" query={query} onChangeText={onChangeText} />
      <SearchList
        data={data?.searchForDuelOpponent}
        networkStatus={networkStatus}
        onRefresh={onRefresh}
        emptyText="We could not find the friend you’re looking for."
        loading={loading}
      />
      <TopBarAbsolute onPressLeftIcon={navigateBack} leftIcon="Back" />
    </View>
  );
}

export default DuelsSearchContainer;
