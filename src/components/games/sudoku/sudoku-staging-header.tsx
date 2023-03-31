import { Image, TextTemplate } from "@atoms";
import {
  SUDOKU_PLANET_STYLES,
  SUDOKU_YUNIVERSAL_STYLES,
} from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { useTranslation } from "@hooks";
import { GenericHeadingPad } from "@organisms";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getCurrentWorldName } from "@utils";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import SudokuLeaderboardBox from "./sudoku-leaderboard-box";
import { GetSudokuLeaderboard_getSudokuLeaderboard } from "@graphql/_core/schema";
import { Colours, Style } from "@styles";

interface IProps {
  date?: string;
  showLeaderboard?: boolean;
  leaderboardOptedIn?: boolean;
  onOpenLeaderboard?: () => void;
  leaderboard?: GetSudokuLeaderboard_getSudokuLeaderboard[];
  backgroundColor: string;
  backgroundUrl: string;
}

export const SudokuStagingHeader = ({
  date,
  showLeaderboard,
  leaderboard,
  leaderboardOptedIn,
  onOpenLeaderboard,
  backgroundColor,
  backgroundUrl,
}: IProps) => {
  const t = useTranslation(["sudoku.title", "sudoku.staging.todaysLeaderboard"]);

  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);

  const currentStyle = useMemo(() => {
    if (yuniversalMap) {
      return SUDOKU_YUNIVERSAL_STYLES;
    }

    const worldName = getCurrentWorldName(currentLevel);
    return SUDOKU_PLANET_STYLES[worldName];
  }, [currentLevel, yuniversalMap]);

  const headerStyles = useMemo(() => {
    return [styles.headerContainer, { backgroundColor }];
  }, [backgroundColor]);

  return (
    <View style={headerStyles}>
      <GenericHeadingPad />
      <View style={styles.planetIcon}>
        <Image source={{ uri: backgroundUrl }} width={Style.adjust(375)} />
      </View>
      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <TextTemplate color={currentStyle.color} type="b1b">
            {t["sudoku.title"]}
          </TextTemplate>
        </View>
        {showLeaderboard && leaderboardOptedIn ? (
          <TextTemplate type="b1" color={currentStyle.color}>
            {t["sudoku.staging.todaysLeaderboard"]}
          </TextTemplate>
        ) : null}
        <View style={styles.dateContainer}>
          <View style={styles.dateWrapper}>
            <TextTemplate type="l1">{date}</TextTemplate>
          </View>
        </View>
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
