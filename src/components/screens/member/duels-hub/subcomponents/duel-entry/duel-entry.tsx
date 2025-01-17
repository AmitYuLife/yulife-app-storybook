import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { DuelImage } from "../";
import { Style } from "@styles";
import Description from "./description";
import DuelIcon from "./duel-icon";
import { DUEL_ENTRY } from "@ids";
import { formatOpponentName } from "@utils/duels";
import { GetDuelsTodayQuery, GetDuelsTomorrowQuery } from "@graphql/__generated";

interface IProps {
  duel: GetDuelsTomorrowQuery["getDuelsTomorrow"][0] | GetDuelsTodayQuery["getDuelsToday"][0];
  type: "today" | "tomorrow" | "completed";
  userId: string;
  confirmDuelEnabled?: boolean;
  stepsSynced?: boolean;
}

const DuelEntry = ({ duel, type, userId, confirmDuelEnabled, stepsSynced }: IProps) => {
  const opponent = duel.opponents.find((user) => user.userId !== userId);

  return (
    <Box flexDirection="row" flex={1} height={DUEL_ENTRY_HEIGHT}>
      <DuelImage uri={opponent.avatar} />
      <Box flex={1} flexDirection={"column"} justifyContent={"center"}>
        <TextTemplate
          type={"b2b"}
          lineHeight={Style.adjust(18)}
          testID={DUEL_ENTRY(opponent.name.firstName, opponent.name.lastName, duel.yucoin, duel.status)}
        >
          {formatOpponentName(opponent?.name?.fullName)}
        </TextTemplate>
        <Description
          duel={duel}
          type={type}
          userId={userId}
          confirmDuelEnabled={confirmDuelEnabled}
          stepsSynced={stepsSynced}
        />
      </Box>
      <DuelIcon duel={duel} type={type} userId={userId} />
    </Box>
  );
};

export const DUEL_ENTRY_HEIGHT = Style.adjust(48);

export default memo(DuelEntry);
