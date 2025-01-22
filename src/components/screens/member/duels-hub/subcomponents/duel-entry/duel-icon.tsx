import { memo } from "react";
import { TextTemplate } from "@atoms";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Colours } from "@styles";
import YuCoin from "./yucoin";
import Award from "./award";
import { DUEL_ICON } from "@ids";
import { t } from "@locale";
import { GetDuelsTodayQuery, GetDuelsTomorrowQuery } from "@graphql/__generated";
interface IProps {
  duel: GetDuelsTomorrowQuery["getDuelsTomorrow"][0] | GetDuelsTodayQuery["getDuelsToday"][0];
  type: "today" | "tomorrow" | "completed";
  userId: string;
  dailySteps?: number;
}

const DuelIcon = ({ duel, type, userId }: IProps) => {
  const opponent = duel.opponents.find((dueller) => dueller.userId !== userId);
  const user = duel.opponents.find((dueller) => dueller.userId === userId);
  const hasWon = user?.score > opponent?.score;
  const hasDrawn = user?.score === opponent?.score;
  const colorStyle = hasWon ? Colours.forest.fp305 : hasDrawn ? Colours.neutral.n400 : Colours.ds106;
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
          <TextTemplate type="b1b" color={colorStyle}>
            {hasDrawn ? "-" : duel.yucoin === 0 ? t("modals.duels.hub.br") : duel.yucoin}
          </TextTemplate>
          <View style={styles.iconWrapper}>{duel.yucoin === 0 ? <Award /> : <YuCoin />}</View>
        </View>
        <TextTemplate type="l1" color={colorStyle}>
          {hasWon
            ? t("modals.duels.hub.you_won")
            : hasDrawn
            ? t("modals.duels.hub.you_drew")
            : t("modals.duels.hub.you_lost")}
        </TextTemplate>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <TextTemplate type="b1b">{duel?.yucoin > 0 ? duel.yucoin : null}</TextTemplate>
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
  completedWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
  } as ViewStyle,
});

export default memo(DuelIcon);
