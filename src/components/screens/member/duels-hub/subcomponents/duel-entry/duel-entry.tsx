import { FC } from "react";
import { Text } from "@atoms";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
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
  dailySteps?: number;
}

const DuelEntry: FC<IProps> = ({ duel, type, userId, dailySteps }) => {
  const opponent = duel.opponents.find((user) => user.userId !== userId);

  return (
    <View style={styles.wrapper}>
      <DuelImage uri={opponent.avatar} />
      <View style={styles.descriptionWrapper}>
        <Text
          style={styles.nameText}
          bold={true}
          testID={DUEL_ENTRY(opponent.name.firstName, opponent.name.lastName, duel.yucoin, duel.status)}
        >
          {formatOpponentName(opponent?.name?.fullName)}
        </Text>
        <Description duel={duel} type={type} userId={userId} dailySteps={dailySteps} />
      </View>
      <DuelIcon duel={duel} type={type} userId={userId} />
    </View>
  );
};

export const DUEL_ENTRY_HEIGHT = Style.adjust(48);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    height: DUEL_ENTRY_HEIGHT,
    paddingLeft: Style.adjust(8),
    marginBottom: Style.adjust(18),
  } as ViewStyle,
  descriptionWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  } as ViewStyle,
  nameText: {
    fontSize: Style.adjust(18),
    lineHeight: Style.adjust(22),
  } as TextStyle,
});

export default DuelEntry;
