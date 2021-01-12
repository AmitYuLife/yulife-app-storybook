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

export const showExistingDuelAlert = ({ existingDuel }: { existingDuel: ValidDuel }) => {
  const now = moment();
  const name = existingDuel.name.firstName || "your colleague";
  const duelStart = existingDuel.startDateTime.calendar(now.startOf("day"), calendarOptions);

  Alert.alert(
    "It’s already on!",
    `Your duel with ${name} will take place ${duelStart}. You can challenge them to a rematch afterwards, or challenge another friend now.`,
    buttons
  );
};
