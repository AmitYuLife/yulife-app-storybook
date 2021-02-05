import moment from "moment";
import { Alert } from "react-native";
import { ValidDuel } from "./duel-dialog";
import Logger from "@services/logging/logger";
import { ROUTES } from "@navigation/constants";

const calendarOptions = {
  sameDay: "[today]",
  nextDay: "[tomorrow]",
};
const buttons = [
  {
    text: "Go back",
  },
];

type DuelRequestLocation = "leaderboards" | "search_list" | "recents";

const getPage = (requestLocation: DuelRequestLocation) => {
  switch (requestLocation) {
    case "recents":
    case "search_list":
      return ROUTES.duelsSearch;
    case "leaderboards":
      return ROUTES.leaderboards;
    default:
      return "";
  }
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
