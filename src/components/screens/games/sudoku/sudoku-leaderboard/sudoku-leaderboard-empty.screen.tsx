import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { TextTemplate, Wrapper } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { useTranslation } from "@hooks";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import LeaderboardEmptyImage from "@components/games/sudoku/leaderboard/LeaderboardEmptyImage";
import { BUTTON_CLOSE_RIGHT_ID } from "@ids";

interface IProps {
  date: string;
  onClose: () => void;
}

const IMAGE_WIDTH = Style.DEVICE_WIDTH / 2;

const SudokuLeaderboardEmptyScreen = ({ date, onClose }: IProps) => {
  const t = useTranslation([
    "sudoku.leaderboard.empty_description",
    "sudoku.leaderboard.title",
    "sudoku.leaderboard.start",
  ]);

  return (
    <GenericOverlay
      onClose={onClose}
      headingProps={{ rightIconTestID: BUTTON_CLOSE_RIGHT_ID }}
      heading={
        <View style={styles.heading}>
          <TextTemplate type="b2b">{t["sudoku.leaderboard.title"]}</TextTemplate>
          <TextTemplate type="l1">{date}</TextTemplate>
        </View>
      }
    >
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Wrapper alignItems="center">
          <View style={styles.contentWrapper}>
            <LeaderboardEmptyImage size={IMAGE_WIDTH} />
            <View style={styles.textWrapper}>
              <View style={styles.titleWrapper}>
                <TextTemplate type={"b2"} textAlign="center">
                  {t["sudoku.leaderboard.empty_description"]}
                </TextTemplate>
              </View>
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </GenericOverlay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: Style.DEVICE_HEIGHT / 1.5,
  },
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Style.adjust(20),
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    paddingHorizontal: 25,
  },
  titleWrapper: {
    marginTop: Style.adjust(30),
  },
});

export default memo(SudokuLeaderboardEmptyScreen);
