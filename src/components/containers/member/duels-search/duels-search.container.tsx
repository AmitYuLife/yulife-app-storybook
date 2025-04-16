import { MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback, useRef } from "react";
import { View, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { Navigation } from "@navigation/main";
import { DUELS_SEARCH } from "@ids";
import { GenericHeadingPad, TopBarAbsolute } from "@organisms";
import styles from "./duels-search.styles";
import RecentOpponents from "./subcomponents/recent-opponents";
import { useQuery } from "@apollo/client";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import { useBackHandler, useDebouncedQuery, useUserFeatures } from "@hooks";
import { FindAFriend, SearchInput } from "@molecules";
import DuelsSearchItem from "./subcomponents/search-item";
import { showYuModal } from "@navigation/root";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { t } from "@locale";
import { showExistingDuelAlert, validDuels } from "@utils/duels";
import { SearchForDuelOpponentQuery, gql } from "@graphql/__generated";
import SearchList from "./subcomponents/search-list";

export type SearchedOpponent = SearchForDuelOpponentQuery["searchForDuelOpponent"][number] & {
  onPress: () => Promise<void>;
};

function navigateBack() {
  Keyboard.dismiss();
  Navigation.popTo(ROUTES.duelsHub);
  return true;
}

function keyExtractor(item: SearchedOpponent, index: number) {
  return `${item.customerId} - ${index}`;
}

const DEBOUNCE = 750;

const goToReferralInformation = async () => {
  await Navigation.push(ROUTES.leaderboard, {
    component: {
      id: ROUTES.referralInformation,
      name: ROUTES.referralInformation,
    },
  });
};

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

const KEYBOARD_BEHAVIOUR = Platform.select<"padding" | null>({ ios: "padding", android: null });

function _DuelsSearchContainer() {
  const userId = useSelector(getCurrentUserId);
  const queryText = useRef("");

  useBackHandler(navigateBack);
  const [search, { loading, data, networkStatus }] = useDebouncedQuery(
    gql("SearchForDuelOpponentDocument"),
    { fetchPolicy: "cache-and-network" },
    DEBOUNCE,
    { query: "" }
  );

  const getDuels = useQuery(gql("GetDuelsDocument"), {
    fetchPolicy: "cache-and-network",
  });

  const { showReferrals } = useUserFeatures();

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
      search({ query: text });
      queryText.current = text;
    },
    [search]
  );

  const onRefresh = useCallback(async () => {
    search({ query: queryText.current });
  }, [queryText.current]);

  const opponents = (data?.searchForDuelOpponent || []).map((opponent) => ({
    ...opponent,
    onPress: () => onPress(opponent.customerId, "search_list"),
  }));

  return (
    <KeyboardAvoidingView behavior={KEYBOARD_BEHAVIOUR} style={styles.wrapper} testID={DUELS_SEARCH}>
      <GenericHeadingPad />
      <View style={styles.searchContainer}>
        <RecentOpponents inviteToDuel={onPress} />
        <SearchInput title={t("modals.duels.search.title")} onChangeText={onChangeText} />
      </View>
      <SearchList
        data={opponents}
        networkStatus={networkStatus}
        onRefresh={onRefresh}
        emptyElement={
          opponents.length || !queryText.current ? null : (
            <View style={styles.emptyComponentWrapper}>
              <FindAFriend
                loading={loading}
                onPress={goToReferralInformation}
                records={opponents}
                showReferral={showReferrals}
              />
            </View>
          )
        }
        loading={loading}
        searchItem={DuelsSearchItem}
        keyExtractor={keyExtractor}
      />
      <TopBarAbsolute hasWhiteBackground={false} onPressLeftIcon={navigateBack} leftIcon={LeftIcon.BACK} />
    </KeyboardAvoidingView>
  );
}

const DuelsSearchContainer = memo(_DuelsSearchContainer);

export default DuelsSearchContainer;
