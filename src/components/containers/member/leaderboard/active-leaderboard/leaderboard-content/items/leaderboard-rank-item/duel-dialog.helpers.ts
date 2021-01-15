import moment from "moment";
import { Alert } from "react-native";
import { ValidDuel } from "./duel-dialog";

const calendarOptions = {
  sameDay: "[today]",
  nextDay: "[tomorrow]",
};
const buttons = [
  {
    text: "Go back",
  },
];

export const showExistingDuelAlert = (existingDuel: ValidDuel) => {
  const now = moment();
  const name = existingDuel.name.firstName || "your colleague";
  const duelStart = existingDuel.startDateTime.calendar(now.startOf("day"), calendarOptions);
  const isAlreadyAccepted = existingDuel.status === "accepted";
  const title = isAlreadyAccepted ? "It’s already on!" : "Hang on a sec!";
  const description = isAlreadyAccepted
    ? `Your duel with ${name} will take place ${duelStart}. You can challenge them to a rematch afterwards, or challenge another friend now.`
    : `You’ve already invited ${name} to duel. Wait for them to respond, or challenge another friend now.`;

  Alert.alert(title, description, buttons);
};
