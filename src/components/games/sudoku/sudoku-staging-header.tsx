import { Image, TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { GenericHeadingPad } from "@organisms";
import React, { useMemo } from "react";
import { View } from "react-native";
import SudokuLeaderboardBox from "./sudoku-leaderboard-box";
import { Colours, Style, StyleSheet } from "@styles";
import SudokuDate from "./sudoku-date";
import { ISudokuLeaderboardItem } from "./sudoku.interface";

interface IProps {
  date?: string;
  showLeaderboard?: boolean;
  leaderboardOptedIn?: boolean;
  onOpenLeaderboard?: () => void;
  leaderboard?: ISudokuLeaderboardItem[];
  backgroundColor: string;
  backgroundUrl: string;
  color?: string;
}

export const SudokuStagingHeader = ({
  date,
  showLeaderboard,
  leaderboard,
  color,
  leaderboardOptedIn,
  onOpenLeaderboard,
  backgroundColor,
  backgroundUrl,
}: IProps) => {
  const t = useTranslation(["sudoku.title", "sudoku.staging.todaysLeaderboard"]);

  const headerStyles = useMemo(() => {
    return [styles.headerContainer, { backgroundColor }];
  }, [backgroundColor]);

  return (
    <View style={headerStyles}>
      <GenericHeadingPad />
      <View style={styles.planetIcon}>
        <Image source={{ uri: backgroundUrl }} width={Style.adjust(375)} suppressLoadingUi={true} />
      </View>
      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <TextTemplate color={color} type="b1b">
            {t["sudoku.title"]}
          </TextTemplate>
        </View>
        {showLeaderboard && leaderboardOptedIn ? (
          <TextTemplate type="b1" color={color}>
            {t["sudoku.staging.todaysLeaderboard"]}
          </TextTemplate>
        ) : null}
        <SudokuDate date={date} />
      </View>
      {showLeaderboard && leaderboardOptedIn ? (
        <SudokuLeaderboardBox onPress={onOpenLeaderboard} leaderboard={leaderboard} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    overflow: "hidden",
    minHeight: Style.adjust(180),
  },
  planetIcon: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  headerWrapper: {
    padding: Style.adjust(20),
  },
  dateWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(4),
    padding: Style.adjust(5),
    paddingHorizontal: Style.adjust(7),
  },
  dateContainer: {
    marginTop: Style.adjust(15),
    flexDirection: "row",
  },
  titleWrapper: {
    marginBottom: Style.adjust(5),
  },
});

export default SudokuStagingHeader;
