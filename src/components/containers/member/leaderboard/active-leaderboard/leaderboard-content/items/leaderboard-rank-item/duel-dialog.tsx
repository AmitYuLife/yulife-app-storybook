import React, { useEffect, memo, FunctionComponent, useMemo } from "react";
import { Animated } from "react-native";
import { styles } from "./duel-dialog.styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Button } from "@atoms";
import { GetDuels } from "@graphql/_core/schema";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { DATE_FORMAT_WITH_TZ } from "@services/utils";
import { showExistingDuelAlert } from "./duel-dialog.helpers";
import moment from "moment";
import { GQL_QUERY_GET_DUELS } from "@graphql/duels";

interface Props {
  id: string;
}

export interface ValidDuel {
  name: { firstName?: string; lastName?: string };
  userId?: string;
  startDateTime?: moment.Moment;
  status: string;
}

const _DuelDialog: FunctionComponent<Props> = ({ id }) => {
  const userId = useSelector(getCurrentUserId);
  const opacity = new Animated.Value(0.15);
  const height = new Animated.Value(0);

  const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  });

  const grow = Animated.timing(height, {
    toValue: 1,
    duration: 150,
    useNativeDriver: true,
  });

  useEffect(() => {
    fadeIn.start();
    grow.start();

    return () => {
      fadeIn.stop();
      grow.stop();
    };
  }, [fadeIn, grow]);

  const { data } = useQuery<GetDuels>(GQL_QUERY_GET_DUELS, {
    fetchPolicy: "cache-only",
  });

  const opponentId = id.replace("lead_", "");
  const duels = data?.getDuels || [];

  const validDuels: ValidDuel[] = useMemo(() => {
    const now = moment();
    return duels.reduce((acc, duel) => {
      if (["accepted", "pending"].includes(duel.status)) {
        const opponent = duel.opponents.find((dueller) => dueller.userId !== userId);
        const startDateTime = moment(duel.opponents[0].startDateTime, DATE_FORMAT_WITH_TZ);

        if (startDateTime.isAfter(now, "day")) {
          acc.push({ userId: opponent.userId, name: opponent.name, startDateTime, status: duel.status });
        }
      }

      return acc;
    }, []);
  }, [duels, userId]);

  return (
    <Animated.View style={[styles.centered, { opacity, transform: [{ scaleY: height }] }]}>
      <Button
        label="challenge to duel"
        type="Primary"
        size="Large"
        onPress={async () => {
          const existingDuel = validDuels.find(({ userId: duelistId }) => duelistId === opponentId);
          if (existingDuel) {
            showExistingDuelAlert(existingDuel);
            return;
          }

          await Navigation.showModal({
            component: {
              id: MODALS.duelInvite,
              name: MODALS.duelInvite,
              passProps: {
                opponentId: id.replace("lead_", ""),
              },
            },
          });
        }}
      />
    </Animated.View>
  );
};

export const DuelDialog = memo(_DuelDialog);
