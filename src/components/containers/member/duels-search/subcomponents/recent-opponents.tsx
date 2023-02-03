import React from "react";
import { View } from "react-native";
import { Loading, Text } from "@atoms";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_RECENT_DUEL_OPPONENTS } from "@graphql/duels/getRecentDuelOpponents.gql";
import { GetRecentDuelOpponents } from "@graphql/_core/schema";
import { DuelImage } from "@components/screens/member/duels-hub/subcomponents";
import styles from "./recent-opponents.styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { DUEL_AVATAR } from "@ids";
import { t } from "@locale";

interface Props {
  inviteToDuel: (opponentId: string, type: "recents") => Promise<void>;
}

function _RecentOpponents({ inviteToDuel }: Props) {
  const { data, loading } = useQuery<GetRecentDuelOpponents>(GQL_QUERY_GET_RECENT_DUEL_OPPONENTS, {
    fetchPolicy: "cache-and-network",
  });

  const opponents = data?.getRecentDuelOpponents || [];

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.loadingWrapper}>
          <Loading />
        </View>
      </View>
    );
  }

  if (opponents.length < 3) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.heading} bold={true}>
          {t("modals.duels.search.recent_opponents")}
        </Text>
        <View style={styles.flexRow}>
          {opponents.map((opponent, index) => {
            const isMiddleRecentOpponent = index === 1;

            return (
              <TouchableOpacityWithDelay
                key={opponent?.customerId}
                onPress={() => inviteToDuel(opponent?.customerId, "recents")}
                style={[styles.opponent, isMiddleRecentOpponent ? styles.middleOpponent : {}]}
                testID={DUEL_AVATAR(opponent.fullName)}
              >
                <Text bold={true} style={styles.name}>
                  {opponent.fullName}
                </Text>
                <DuelImage size="medium" uri={opponent?.avatar} />
              </TouchableOpacityWithDelay>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const RecentOpponents = React.memo(_RecentOpponents);

export default RecentOpponents;
