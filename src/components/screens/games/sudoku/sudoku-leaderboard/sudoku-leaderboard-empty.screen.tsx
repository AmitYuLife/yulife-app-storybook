import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate, Wrapper } from "@atoms";
import { Style } from "@styles";
import LeaderboardConsentImage from "@components/games/sudoku/leaderboard/LeaderboardConsentImage";
import { useTranslation } from "@hooks";
import { Button } from "@components/molecules";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";

interface IProps {
  onStart: () => void;
  onClose: () => void;
}

const SudokuLeaderboardEmptyScreen = ({ onStart, onClose }: IProps) => {
  const t = useTranslation(["sudoku.leaderboard.empty_description", "sudoku.leaderboard.start"]);

  return (
    <GenericOverlay onClose={onClose}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Wrapper alignItems="center">
          <View style={styles.contentWrapper}>
            <LeaderboardConsentImage width={Style.DEVICE_WIDTH} />
            <View style={styles.textWrapper}>
              <View style={styles.titleWrapper}>
                <TextTemplate type={"b2"} textAlign="center">
                  {t["sudoku.leaderboard.empty_description"]}
                </TextTemplate>
              </View>
            </View>
          </View>
          {onStart ? <Button onPress={onStart} label={t["sudoku.leaderboard.start"]} /> : null}
        </Wrapper>
      </ScrollView>
    </GenericOverlay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  contentWrapper: {
    marginBottom: Style.adjust(20),
  },
  textWrapper: {
    paddingHorizontal: 25,
  },
  titleWrapper: {
    marginTop: Style.adjust(30),
    marginBottom: Style.adjust(20),
  },
});

export default memo(SudokuLeaderboardEmptyScreen);
