import React, { useEffect, memo, FC, useMemo, useCallback } from "react";
import { Animated } from "react-native";
import { styles } from "./duel-dialog.styles";
import { MODALS, ROUTES } from "@navigation/constants";
import { Button } from "@molecules";
import { GetDuels } from "@graphql/_core/schema";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { getCurrentUserId, getUserFeatures } from "@redux/user/user.selectors";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { showExistingDuelAlert } from "./duel-dialog.helpers";
import moment from "moment";
import { GQL_QUERY_GET_DUELS } from "@graphql/duels";
import { showYuModal } from "@navigation/root";
import { Navigation } from "react-native-navigation";
import { t } from "@locale";

interface Props {
  id: string;
  index: number;
}

export interface ValidDuel {
  id: string;
  name: { firstName?: string; lastName?: string };
  userId?: string;
  startDateTime?: moment.Moment;
  status: string;
  isOpponentInviter: boolean;
}

const _DuelDialog: FC<Props> = ({ id, index }) => {
  const userId = useSelector(getCurrentUserId);
  const features = useSelector(getUserFeatures);
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
  const label = features.showInspect
    ? t("screens.leaderboard.actionButton.inspect")
    : t("screens.leaderboard.actionButton.challengeDuel");

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

  const navigateToDuelInvite = useCallback(async () => {
    await showYuModal({
      component: {
        id: MODALS.duelInvite,
        name: MODALS.duelInvite,
        passProps: {
          opponentId: id.replace("lead_", ""),
          requestLocation: "leaderboads",
          leaderboardPlacement: index + 1,
        },
      },
    });
  }, [id, index]);

  const onPress = useCallback(async () => {
    const existingDuel = validDuels.find(({ userId: duelistId }) => duelistId === opponentId);
    if (existingDuel) {
      const shouldShowDuelRespond = existingDuel.isOpponentInviter && existingDuel.status === "pending";
      if (shouldShowDuelRespond) {
        await showYuModal({
          component: {
            id: MODALS.duelRespond,
            name: MODALS.duelRespond,
            passProps: {
              duelId: existingDuel.id,
              requestLocation: "leaderboads",
              leaderboardPlacement: index + 1,
            },
          },
        });
      } else {
        showExistingDuelAlert(existingDuel, "leaderboards");
      }

      return;
    }

    await navigateToDuelInvite();
  }, [opponentId, index, validDuels, navigateToDuelInvite]);

  const onButtonPress = useCallback(async () => {
    if (features.showInspect) {
      return Navigation.push(ROUTES.leaderboards, {
        component: {
          id: ROUTES.inspect,
          name: ROUTES.inspect,
          passProps: {
            userId: id.replace("lead_", ""),
            challengeDuel: onPress,
          },
        },
      });
    }

    onPress();
  }, [id, onPress]);

  return (
    <Animated.View style={[styles.centered, { opacity, transform: [{ scaleY: height }] }]}>
      <Button label={label} size="Large" onPress={onButtonPress} />
    </Animated.View>
  );
};

export const DuelDialog = memo(_DuelDialog);
