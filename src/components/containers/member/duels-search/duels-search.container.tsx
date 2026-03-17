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
import { useBackHandler, useSocialGroupUserSearch, useUserFeatures } from "@hooks";
import { FindAFriend, SearchInput } from "@molecules";
import DuelsSearchItem from "./subcomponents/search-item";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { t } from "@locale";
import { showExistingDuelAlert, validDuels } from "@utils/duels";
import { SearchLeaderboardUserQuery, SocialGroupLeaderboardSearchType, gql } from "@graphql/__generated";
import SearchList from "./subcomponents/search-list";
import { showYuModal } from "@navigation/root";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

export type SearchedOpponent = SearchLeaderboardUserQuery["searchLeaderboardUser"][number] & {
  onPress: () => Promise<void>;
  duelTextColor: string;
};

function navigateBack() {
  Keyboard.dismiss();
  Navigation.popTo(ROUTES.duelsHub);
  return true;
}

function keyExtractor(item: SearchedOpponent, index: number) {
  return `${item.id} - ${index}`;
}

const goToReferralInformation = async () => {
  await Navigation.push(ROUTES.leaderboard, {
    component: {
      id: ROUTES.referralInformation,
      name: ROUTES.referralInformation,
    },
  });
};

const inviteToDuel = ({
  opponentId,
  requestLocation,
}: {
  opponentId: string;
  requestLocation: "search_list" | "recents";
}) => {
  Navigation.push(ROUTES.duelsSearch, {
    component: {
      id: ROUTES.duelInvite,
      name: ROUTES.duelInvite,
      passProps: {
        opponentId,
        isDuelsHubInNavigationStack: true,
        requestLocation,
      },
    },
  });
};

const showDuelRespondModal = ({
  duelId,
  requestLocation,
}: {
  duelId: string;
  requestLocation: "search_list" | "recents";
}) => {
  showYuModal({
    component: {
      id: MODALS.duelRespond,
      name: MODALS.duelRespond,
      passProps: {
        duelId,
        requestLocation,
      },
    },
  });
};

const KEYBOARD_BEHAVIOUR = Platform.select<"padding" | null>({ ios: "padding", android: null });

const _DuelsSearchContainer = () => {
  const userId = useSelector(getCurrentUserId);
  const queryText = useRef("");

  useBackHandler(navigateBack);

  const { data, loading, handleChangeText, networkStatus } = useSocialGroupUserSearch({
    searchType: SocialGroupLeaderboardSearchType.Leaderboard,
    allowUnfilteredSearch: true,
  });

  const getDuels = useQuery(gql("GetDuelsDocument"), {
    fetchPolicy: "cache-and-network",
  });

  const { showReferrals } = useUserFeatures();

  const duels = getDuels?.data?.getDuels || [];

  const onPress = useCallback(
    async (opponentId: string, requestLocation: "search_list" | "recents") => {
      Keyboard.dismiss();
      const existingDuel = validDuels(duels, userId).find(({ userId: duelistId }) => duelistId === opponentId);

      if (existingDuel) {
        const shouldShowDuelRespond = existingDuel.isOpponentInviter && existingDuel.status === "pending";

        if (shouldShowDuelRespond) {
          showDuelRespondModal({ duelId: existingDuel.id, requestLocation });
        } else {
          showExistingDuelAlert(existingDuel, requestLocation);
        }

        return;
      }

      inviteToDuel({ opponentId, requestLocation });
    },
    [validDuels, duels, userId]
  );

  const onChangeText = useCallback(
    (text: string) => {
      handleChangeText(text);
      queryText.current = text;
    },
    [handleChangeText]
  );

  const onRefresh = useCallback(async () => {
    handleChangeText(queryText.current);
  }, [handleChangeText]);

  const { theme } = useTheme();

  const opponents = (data?.searchLeaderboardUser || []).map((opponent) => ({
    ...opponent,
    onPress: () => onPress(opponent.id, "search_list"),
    duelTextColor: theme.colors.primary.p600,
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
          opponents.length || !queryText.current || loading ? null : (
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
};

const DuelsSearchContainer = memo(_DuelsSearchContainer);

export default DuelsSearchContainer;
