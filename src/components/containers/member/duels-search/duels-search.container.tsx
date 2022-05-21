import { MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback, useMemo } from "react";
import { View, Keyboard } from "react-native";
import { Navigation } from "react-native-navigation";
import { DUELS_SEARCH } from "@ids";
import styles from "./duels-search.styles";
import { GQL_QUERY_SEARCH_FOR_DUEL_OPPONENT } from "@graphql/duels/searchForDuelOpponents.gql";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import {
  SearchForDuelOpponent,
  SearchForDuelOpponentVariables,
  SearchForDuelOpponent_searchForDuelOpponent,
} from "@graphql/_core/schema/SearchForDuelOpponent";
import RecentOpponents from "./subcomponents/recent-opponents";
import { useQuery } from "@apollo/react-hooks";
import { GetDuels } from "@graphql/_core/schema";
import { GQL_QUERY_GET_DUELS } from "@graphql/duels";
import { ValidDuel } from "../leaderboard/active-leaderboard/leaderboard-content/items/leaderboard-rank-item/duel-dialog";
import moment from "moment";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import { showExistingDuelAlert } from "../leaderboard/active-leaderboard/leaderboard-content/items/leaderboard-rank-item/duel-dialog.helpers";
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

  const validDuels: ValidDuel[] = useMemo(() => {
    const now = moment();
    return duels.reduce((acc, duel) => {
      if (["accepted", "pending"].includes(duel.status)) {
        const opponentIndex = duel.opponents.findIndex((dueller) => dueller.userId !== userId);
        const opponent = duel.opponents[opponentIndex];
        const isOpponentInviter = opponentIndex === 0;
        const startDateTime = moment(duel.opponents[0].startDateTime, DATE_FORMAT_WITH_TZ);

        if (startDateTime.isAfter(now, "day")) {
          acc.push({
            id: duel.id,
            userId: opponent.userId,
            name: opponent.name,
            startDateTime,
            status: duel.status,
            isOpponentInviter,
          });
        }
      }

      return acc;
    }, []);
  }, [duels, userId]);

  const onPress = useCallback(
    async (opponentId: string, requestLocation: "search_list" | "recents") => {
      const existingDuel = validDuels.find(({ userId: duelistId }) => duelistId === opponentId);

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
    [validDuels]
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
      <View style={styles.topbarFiller} />
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
