import { RibbonGold, TextTemplate } from "@atoms";
import { Style } from "@styles";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  timeRemaining: string;
  label: string;
  isNotValidTime: boolean;
}

const StreakCompletion = ({ timeRemaining, isNotValidTime, label }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ribbonWrapper}>
        <RibbonGold text={label} />
      </View>
      {isNotValidTime ? null : (
        <>
          <TextTemplate type="b2">Begin your next Streak in</TextTemplate>
          <View style={styles.timeRemainingWrapper}>
            <TextTemplate type="h2">{timeRemaining}</TextTemplate>
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
