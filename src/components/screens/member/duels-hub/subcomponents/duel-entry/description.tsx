import React, { FC } from "react";
import { Text } from "@atoms";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { addCommasToNumber } from "@services/utils";
import { GetDuelsTomorrow_getDuelsTomorrow, GetDuelsToday_getDuelsToday } from "@graphql/_core/schema";
import moment from "moment";
import { Colours, Style } from "@styles";
import { DUEL_DESCRIPTION } from "@ids";

interface IProps {
  duel: GetDuelsTomorrow_getDuelsTomorrow | GetDuelsToday_getDuelsToday;
  type: "today" | "tomorrow" | "completed";
  userId: string;
  dailySteps?: number;
}

const Description: FC<IProps> = ({ duel, type, userId }) => {
  const opponent = duel.opponents.find((dueller) => dueller.userId !== userId);
  const user = duel.opponents.find((dueller) => dueller.userId === userId);
  if (type === "today") {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{addCommasToNumber(opponent.score || 0)} </Text>
        <Text style={[styles.text, styles.syncText]}>
          (synced {moment((duel as GetDuelsToday_getDuelsToday).updatedAt).fromNow()})
        </Text>
      </View>
    );
  }

  if (type === "completed") {
    if (duel.status === "pending_submission") {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.text}>In progress</Text>
        </View>
      );
    }

    return (
      <View style={styles.wrapper}>
        <Text style={styles.text} testID={DUEL_DESCRIPTION(opponent.score, user.score)}>
          {addCommasToNumber(opponent.score || 0)} vs. {addCommasToNumber(user.score || 0)} steps
        </Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
  } as TextStyle,
  syncText: {
    color: Colours.neutral.n600,
  } as TextStyle,
});

export default Description;
