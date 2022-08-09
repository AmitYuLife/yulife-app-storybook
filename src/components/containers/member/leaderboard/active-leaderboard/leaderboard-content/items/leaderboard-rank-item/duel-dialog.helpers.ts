import moment from "moment";
import { Alert } from "react-native";
import Logger from "@services/logging/logger";
import { MODALS, ROUTES } from "@navigation/constants";
import { GetDuels_getDuels } from "@graphql/_core/schema";
import { showYuModal } from "@navigation/root";
import { DATE_FORMAT_WITH_TZ } from "@utils";

export interface ValidDuel {
  id: string;
  name: { firstName?: string; lastName?: string };
  userId?: string;
  startDateTime?: moment.Moment;
  status: string;
  isOpponentInviter: boolean;
}

const calendarOptions = {
  sameDay: "[today]",
  nextDay: "[tomorrow]",
};
const buttons = [
  {
    text: "Go back",
  },
];

type DuelRequestLocation = "inspect" | "search_list" | "recents";

const getPage = (requestLocation: DuelRequestLocation) => {
  switch (requestLocation) {
    case "recents":
    case "search_list":
      return ROUTES.duelsSearch;
    case "inspect":
      return ROUTES.inspect;
    default:
      return "";
  }
};

export const validDuels = (duels: GetDuels_getDuels[], currentUserId: string): ValidDuel[] => {
  const now = moment();
  return duels.reduce((acc, duel) => {
    if (["accepted", "pending"].includes(duel.status)) {
      const opponentIndex = duel.opponents.findIndex((dueller) => dueller.userId !== currentUserId);
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
};

const navigateToDuelInvite = async (
  opponentId: string,
  leaderboardPlacement: number,
  requestLocation: DuelRequestLocation
) => {
  await showYuModal({
    component: {
      id: MODALS.duelInvite,
      name: MODALS.duelInvite,
      passProps: {
        opponentId,
        requestLocation,
        leaderboardPlacement,
      },
    },
  });
};

export const onDuelPress = async (
  duels: GetDuels_getDuels[],
  currentUserId: string,
  opponentId: string,
  leaderboardPlacement: number,
  requestLocation: DuelRequestLocation
) => {
  const existingDuel = validDuels(duels, currentUserId).find(({ userId: duelistId }) => duelistId === opponentId);
  if (existingDuel) {
    const shouldShowDuelRespond = existingDuel.isOpponentInviter && existingDuel.status === "pending";
    if (shouldShowDuelRespond) {
      await showYuModal({
        component: {
          id: MODALS.duelRespond,
          name: MODALS.duelRespond,
          passProps: {
            duelId: existingDuel.id,
            requestLocation,
            leaderboardPlacement,
          },
        },
      });
    } else {
      showExistingDuelAlert(existingDuel, requestLocation);
    }

    return;
  }

  await navigateToDuelInvite(opponentId, leaderboardPlacement, requestLocation);
};

export const showExistingDuelAlert = (existingDuel: ValidDuel, requestLocation: DuelRequestLocation) => {
  const now = moment();
  const name = existingDuel.name.firstName || "your colleague";
  const duelStart = existingDuel.startDateTime.calendar(now.startOf("day"), calendarOptions);
  const isAlreadyAccepted = existingDuel.status === "accepted";
  const title = isAlreadyAccepted ? "It’s already on!" : "Hang on a sec!";
  const description = isAlreadyAccepted
    ? `Your duel with ${name} will take place ${duelStart}. You can challenge them to a rematch afterwards, or challenge another friend now.`
    : `You’ve already invited ${name} to duel. Wait for them to respond, or challenge another friend now.`;

  const page = getPage(requestLocation);
  const mixpanelName = isAlreadyAccepted ? `${page}.DuelItsAlreadyOn` : `${page}.DuelHangOnASec`;
  Logger.logMixpanelEvent("screen_view", { name: mixpanelName });
  Alert.alert(title, description, buttons);
};
