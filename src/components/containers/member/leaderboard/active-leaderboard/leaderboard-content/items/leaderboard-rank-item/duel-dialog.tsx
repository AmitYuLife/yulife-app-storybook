import React, { useEffect, memo, FunctionComponent, useMemo } from "react";
import { Animated, Platform } from "react-native";
import { styles } from "./duel-dialog.styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Button } from "@atoms";
import { GQL_QUERY_GET_CURRENT_USER } from "@graphql/user";
import { GetCurrentUser } from "@graphql/_core/schema";
import { useQuery } from "@apollo/react-hooks";
import { IntercomHashMethod } from "@graphql/_core/schema/globalTypes";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { DATE_FORMAT_WITH_TZ } from "@services/utils";
import { showExistingDuelAlert } from "./duel-dialog.helpers";
import moment from "moment";

interface Props {
  id: string;
}

export interface ValidDuel {
  name: { firstName?: string; lastName?: string };
  userId?: string;
  startDateTime?: moment.Moment;
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

  const { data } = useQuery<GetCurrentUser>(GQL_QUERY_GET_CURRENT_USER, {
    fetchPolicy: "cache-only",
    variables: {
      intercomHashMethod: Platform.OS as IntercomHashMethod,
    },
  });

  const opponentId = id.replace("lead_", "");
  const duels = data?.getDuels || [];

  const validDuels: ValidDuel[] = useMemo(() => {
    const now = moment();
    return duels.reduce((acc, duel) => {
      if (["accepted", "pending"].includes(duel.status)) {
        const opponents = duel.opponents.reduce((accumulator, opponent) => {
          const startDateTime = moment(opponent.startDateTime, DATE_FORMAT_WITH_TZ);

          if (opponent.userId !== userId && startDateTime.isAfter(now, "day")) {
            accumulator.push({ userId: opponent.userId, name: opponent.name, startDateTime });
          }

          return acc;
        }, []);
        return opponents;
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
            showExistingDuelAlert({ existingDuel });
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
