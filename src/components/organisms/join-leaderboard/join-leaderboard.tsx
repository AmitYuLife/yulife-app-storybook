import React, { memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

interface IProps {
  onPress: () => void;
}

const JoinLeaderboard = ({ onPress }: IProps) => (
  <View style={styles.wrapper}>
    <TextTemplate type="b2b" textAlign="center">
      {t("screens.leaderboard.turn_board_on.heading")}
    </TextTemplate>
    <View style={styles.description}>
      <TextTemplate textAlign="center" type="b2">
        {t("screens.leaderboard.turn_board_on.description")}
      </TextTemplate>
    </View>
    <Button translationKey="screens.leaderboard.turn_board_on.confirm" onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(30),
    paddingHorizontal: Style.adjust(30),
  },
  description: {
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(32),
  },
});

export default memo(JoinLeaderboard);
