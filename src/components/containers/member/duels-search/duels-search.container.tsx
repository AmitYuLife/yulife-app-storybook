import { MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback } from "react";
import { View, Keyboard } from "react-native";
import { Navigation } from "@navigation/main";
import { DUELS_SEARCH } from "@ids";
import { GenericHeadingPad, TopBarAbsolute } from "@organisms";
import styles from "./duels-search.styles";
import { GQL_QUERY_SEARCH_FOR_DUEL_OPPONENT } from "@graphql/duels/searchForDuelOpponents.gql";
import {
  SearchForDuelOpponent,
  SearchForDuelOpponentVariables,
  SearchForDuelOpponent_searchForDuelOpponent,
} from "@graphql/_core/schema/SearchForDuelOpponent";
import RecentOpponents from "./subcomponents/recent-opponents";
import { useQuery } from "@apollo/client";
import { GetDuels } from "@graphql/_core/schema";
import { GQL_QUERY_GET_DUELS } from "@graphql/duels";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import {
  showExistingDuelAlert,
  validDuels,
} from "../leaderboard/active-leaderboard/leaderboard-content/items/leaderboard-rank-item/duel-dialog.helpers";
import { useBackHandler, useDebouncedQuery } from "@hooks";
import { SearchInput, SearchList } from "@molecules";
import DuelsSearchItem from "./subcomponents/search-item";
import { showYuModal } from "@navigation/root";

export interface SearchedOpponent extends SearchForDuelOpponent_searchForDuelOpponent {
  onPress: () => Promise<void>;
}

function navigateBack() {
  Keyboard.dismiss();
  Navigation.popTo(ROUTES.duelsHub);
  return true;
}

function keyExtractor(item: SearchedOpponent, index: number) {
  return `${item.customerId} - ${index}`;
}

const DEBOUNCE = 750;

const inviteToDuel = async (opponentId: string, requestLocation: "search_list" | "recents") => {
  await showYuModal({
    component: {
      id: MODALS.duelInvite,
      name: MODALS.duelInvite,
      passProps: {
        opponentId,
        isDuelsHubInNavigationStack: true,
        requestLocation,
      },
    },
  });
};

const showDuelRespond = async (duelId: string, requestLocation: "search_list" | "recents") => {
  await showYuModal({
    component: {
      id: MODALS.duelRespond,
      name: MODALS.duelRespond,
      passProps: {
        duelId: duelId,
        requestLocation,
      },
    },
  });
};

function _DuelsSearchContainer() {
  const [query, setQuery] = React.useState("");
  const userId = useSelector(getCurrentUserId);

  useBackHandler(navigateBack);
  const [search, { loading, data, networkStatus }] = useDebouncedQuery<
    SearchForDuelOpponent,
    SearchForDuelOpponentVariables
  >(GQL_QUERY_SEARCH_FOR_DUEL_OPPONENT, { fetchPolicy: "cache-and-network" }, DEBOUNCE, { query: "" });

  const getDuels = useQuery<GetDuels>(GQL_QUERY_GET_DUELS, {
    fetchPolicy: "cache-and-network",
  });

  const duels = getDuels?.data?.getDuels || [];

  const onPress = useCallback(
    async (opponentId: string, requestLocation: "search_list" | "recents") => {
      const existingDuel = validDuels(duels, userId).find(({ userId: duelistId }) => duelistId === opponentId);

      if (existingDuel) {
        const shouldShowDuelRespond = existingDuel.isOpponentInviter && existingDuel.status === "pending";

        if (shouldShowDuelRespond) {
          showDuelRespond(existingDuel.id, requestLocation);
        } else {
          showExistingDuelAlert(existingDuel, requestLocation);
        }

        return;
      }

      await inviteToDuel(opponentId, requestLocation);
    },
    [validDuels, duels, userId]
  );

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
    onPress: () => onPress(opponent.customerId, "search_list"),
  }));

  return (
    <View style={styles.wrapper} testID={DUELS_SEARCH}>
      <GenericHeadingPad />
      <View style={styles.searchContainer}>
        <RecentOpponents inviteToDuel={onPress} />
        <SearchInput title="Search for a friend:" query={query} onChangeText={onChangeText} />
      </View>
      <SearchList
        data={opponents}
        networkStatus={networkStatus}
        onRefresh={onRefresh}
        emptyText={loading ? "" : "We could not find the friend you’re looking for."}
        loading={loading}
        searchItem={DuelsSearchItem}
        keyExtractor={keyExtractor}
      />
      <TopBarAbsolute hasWhiteBackground={false} onPressLeftIcon={navigateBack} leftIcon="Back" />
    </View>
  );
}

const DuelsSearchContainer = memo(_DuelsSearchContainer);

export default DuelsSearchContainer;
