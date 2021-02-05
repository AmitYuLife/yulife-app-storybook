import React, { FC } from "react";
import { Text } from "@atoms";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import YuCoin from "./yucoin";
import Award from "./award";
import { GetDuelsTomorrow_getDuelsTomorrow, GetDuelsToday_getDuelsToday } from "@graphql/_core/schema";
import { DUEL_ICON } from "@ids";
interface IProps {
  duel: GetDuelsTomorrow_getDuelsTomorrow | GetDuelsToday_getDuelsToday;
  type: "today" | "tomorrow" | "completed";
  userId: string;
  dailySteps?: number;
}

const DuelIcon: FC<Partial<IProps>> = ({ duel, type, userId }) => {
  const opponent = duel.opponents.find((dueller) => dueller.userId !== userId);
  const user = duel.opponents.find((dueller) => dueller.userId === userId);
  const hasWon = user?.score > opponent?.score;
  const hasDrawn = user?.score === opponent?.score;
  const colorStyle = hasWon ? styles.greenText : hasDrawn ? styles.grayText : styles.redText;
  if (type === "completed") {
    if (duel.status === "pending_submission") {
      return null;
    }

    return (
      <View
        style={styles.completedWrapper}
        testID={DUEL_ICON(opponent.name.firstName, opponent.name.lastName, hasWon || hasDrawn)}
      >
        <View style={styles.wrapper}>
          <Text style={[styles.yucoin, colorStyle]} bold={true}>
            {hasDrawn ? "-" : duel.yucoin === 0 ? "BR" : duel.yucoin}
          </Text>
          <View style={styles.iconWrapper}>{duel.yucoin === 0 ? <Award /> : <YuCoin />}</View>
        </View>
        <Text style={[styles.text, colorStyle]}>{hasWon ? "you won!" : hasDrawn ? "you drew" : "you lost"}</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.yucoin}>
        {duel?.yucoin > 0 ? duel.yucoin : null}
      </Text>
      <View style={styles.iconWrapper}>{duel?.yucoin === 0 ? <Award /> : <YuCoin />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  iconWrapper: {
    marginLeft: 4,
  } as ViewStyle,
  greenText: {
    color: Colours.forest.fp305,
  } as TextStyle,
  redText: {
    color: Colours.ds106,
  } as TextStyle,
  grayText: {
    color: Colours.neutral.n400,
  } as TextStyle,
  yucoin: {
    fontSize: Style.adjust(18),
    lineHeight: Style.adjust(22),
  } as TextStyle,
  text: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(18),
  } as TextStyle,
  completedWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
  } as ViewStyle,
});

export default DuelIcon;
