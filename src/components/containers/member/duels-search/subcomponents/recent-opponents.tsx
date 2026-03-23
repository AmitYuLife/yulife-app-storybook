import React from "react";
import { View } from "react-native";
import { Loading, Text } from "@atoms";
import { useQuery } from "@apollo/client";
import { DuelImage } from "@components/screens/member/duels-hub/subcomponents";
import styles from "./recent-opponents.styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { DUEL_AVATAR } from "@ids";
import { t } from "@locale";
import { formatOpponentName } from "@utils/duels";
import { gql } from "@graphql/__generated";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface Props {
  inviteToDuel: (opponentId: string, type: "recents") => Promise<void>;
}

const _RecentOpponents = ({ inviteToDuel }: Props) => {
  const { data, loading } = useQuery(gql("GetRecentDuelOpponentsDocument"), {
    fetchPolicy: "cache-and-network",
  });

  const opponents = data?.getRecentDuelOpponents || [];
  const { theme } = useTheme();

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
                <Text bold={true} style={[styles.name, { color: theme.colors.primary.p600 }]}>
                  {formatOpponentName(opponent?.fullName)}
                </Text>
                <DuelImage size="medium" uri={opponent?.avatar} />
              </TouchableOpacityWithDelay>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const RecentOpponents = React.memo(_RecentOpponents);

export default RecentOpponents;
