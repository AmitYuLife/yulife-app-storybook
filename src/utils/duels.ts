import { t } from "@locale";
import moment from "moment";
import { Alert } from "react-native";
import EngagementTracking from "@services/logging/engagement-tracking";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "@navigation/main";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { GetDuelsQuery } from "@graphql/__generated";

export interface ValidDuel {
  id: string;
  name: { firstName?: string; lastName?: string; fullName?: string };
  userId?: string;
  startDateTime?: moment.Moment;
  status: string;
  isOpponentInviter: boolean;
}

const calendarOptions = {
  sameDay: "[today]",
  nextDay: "[tomorrow]",
};
const buildButtons = () => [
  {
    text: t("labels.cta.go_back"),
  },
];

type DuelRequestLocation = "inspect" | "search_list" | "recents";

/**
 * Format a duel opponents name
 * If the opponent has been deleted or name is missing, we return a generic name.
 */
export function formatOpponentName(fullName: string) {
  return fullName || t("labels.deleted_user_name");
}

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

export const validDuels = (duels: GetDuelsQuery["getDuels"], currentUserId: string): ValidDuel[] => {
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

export const onDuelPress = ({
  duels,
  currentUserId,
  opponentId,
  leaderboardPlacement,
  requestLocation,
  componentId,
}: {
  duels: GetDuelsQuery["getDuels"];
  currentUserId: string;
  opponentId: string;
  leaderboardPlacement: number;
  requestLocation: DuelRequestLocation;
  componentId: string;
}) => {
  const existingDuel = validDuels(duels, currentUserId).find(({ userId: duelistId }) => duelistId === opponentId);
  if (existingDuel) {
    const shouldShowDuelRespond = existingDuel.isOpponentInviter && existingDuel.status === "pending";
    if (shouldShowDuelRespond) {
      showYuModal({
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

  Navigation.push(componentId, {
    component: {
      id: ROUTES.duelInvite,
      name: ROUTES.duelInvite,
      passProps: {
        opponentId,
        requestLocation,
        leaderboardPlacement,
      },
    },
  });
};

export const showExistingDuelAlert = (existingDuel: ValidDuel, requestLocation: DuelRequestLocation) => {
  const now = moment();
  const name = existingDuel.name.firstName || t("modals.duels.dialog_helpers.alternative_name");
  const duelStart = existingDuel.startDateTime.calendar(now.startOf("day"), calendarOptions);
  const isAlreadyAccepted = existingDuel.status === "accepted";
  const title = isAlreadyAccepted
    ? t("modals.duels.dialog_helpers.title_already_accepted")
    : t("modals.duels.dialog_helpers.title_not_accepted");
  const description = isAlreadyAccepted
    ? t("modals.duels.dialog_helpers.description_already_accepted", { name, duelStart })
    : t("modals.duels.dialog_helpers.description_not_accepted", { name });

  const page = getPage(requestLocation);
  const mixpanelName = isAlreadyAccepted ? `${page}.DuelItsAlreadyOn` : `${page}.DuelHangOnASec`;
  EngagementTracking.logMixpanelEvent("screen_view", { name: mixpanelName });
  Alert.alert(title, description, buildButtons());
};
