import React from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { RibbonGold } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

interface IProps {
  timeRemaining: string;
  label: string;
  isNotValidTime: boolean;
  textColor: string;
}

const StreakCompletion = ({ timeRemaining, isNotValidTime, label, textColor }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ribbonWrapper}>
        <RibbonGold text={label} />
      </View>
      {isNotValidTime ? null : (
        <>
          <TextTemplate type="b2">{t("screens.streak.completion.next_streak")}</TextTemplate>
          <View style={styles.timeRemainingWrapper}>
            <TextTemplate type="h2" color={textColor}>
              {timeRemaining}
            </TextTemplate>
          </View>
        </>
      )}
    </View>
  );
};

export default StreakCompletion;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  ribbonWrapper: {
    marginBottom: Style.adjust(24),
  },
  timeRemainingWrapper: {
    marginTop: Style.adjust(8),
  },
});
