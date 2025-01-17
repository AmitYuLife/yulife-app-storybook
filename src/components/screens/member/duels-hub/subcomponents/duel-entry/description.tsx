import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { addCommasToNumber, minifiedFromNow } from "@utils";
import moment from "moment";
import { Colours } from "@styles";
import { DUEL_DESCRIPTION } from "@ids";
import { t } from "@locale";
import { GetDuelsTodayQuery, GetDuelsTomorrowQuery } from "@graphql/__generated";

interface IProps {
  duel: GetDuelsTomorrowQuery["getDuelsTomorrow"][0] | GetDuelsTodayQuery["getDuelsToday"][0];
  type: "today" | "tomorrow" | "completed";
  userId: string;
  confirmDuelEnabled: boolean;
  stepsSynced?: boolean;
}

const Description = ({ duel, type, userId, confirmDuelEnabled, stepsSynced }: IProps) => {
  const opponent = duel.opponents.find((dueller) => dueller.userId !== userId);
  const user = duel.opponents.find((dueller) => dueller.userId === userId);

  const lastTimeOpponentDataRetrieved = opponent.lastTimeOpponentDataRetrieved
    ? moment(opponent.lastTimeOpponentDataRetrieved)
    : moment().startOf("day");

  const fromNow = minifiedFromNow(lastTimeOpponentDataRetrieved).shortFormat;

  const getDescription = (userStepsSynced: boolean, confirmDuelFeatureEnabled: boolean) => {
    if (!confirmDuelFeatureEnabled) {
      return t("modals.duels.hub.waiting_user_steps_sync");
    }

    if (!userStepsSynced) {
      return t("modals.duels.hub.sync_duel_steps");
    }

    if (user.status === "pending") {
      return t("modals.duels.hub.confirm_duel_steps");
    }

    if (opponent.status === "pending") {
      return t("modals.duels.hub.waiting_for_opponent_steps_sync", { opponentName: opponent.name.firstName });
    }
  };

  if (type === "today") {
    return (
      <Box flexDirection="row">
        <TextTemplate type={"l1"}>
          {addCommasToNumber(opponent.score || 0)} {t("modals.duels.hub.steps")}
        </TextTemplate>
        <TextTemplate type={"l1"} color={Colours.neutral.n600}>
          {" "}
          ({t("modals.duels.hub.synced")} {fromNow})
        </TextTemplate>
      </Box>
    );
  }

  if (type === "completed") {
    if (duel.status === "pending_submission") {
      return (
        <Box flexDirection="column">
          <TextTemplate type={"l1"}>{getDescription(stepsSynced, confirmDuelEnabled)}</TextTemplate>
          <TextTemplate type={"l1"} color={Colours.neutral.n600}>
            {t("modals.duels.hub.score", {
              opponentScore: addCommasToNumber(opponent.score || 0),
              userScore: addCommasToNumber(user.score || 0),
            })}
          </TextTemplate>
        </Box>
      );
    }

    return (
      <Box flexDirection="row">
        <TextTemplate type={"l1"} testID={DUEL_DESCRIPTION(opponent.score, user.score)}>
          {t("modals.duels.hub.score", {
            opponentScore: addCommasToNumber(opponent.score || 0),
            userScore: addCommasToNumber(user.score || 0),
          })}
        </TextTemplate>
      </Box>
    );
  }

  return null;
};

export default memo(Description);
