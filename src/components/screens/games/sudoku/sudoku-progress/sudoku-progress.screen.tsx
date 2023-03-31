import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Button, SecondaryButton } from "@molecules";
import { useQuery } from "@apollo/client";
import { GetQuestMapLevelChallengeDetails, GetSudokuBoard } from "@graphql/_core/schema";
import { useSelector } from "react-redux";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import { SUDOKU_DATE_FORMAT, SUDOKU_PLANET_STYLES, SUDOKU_YUNIVERSAL_STYLES } from "../sudoku-game/sudoku.config";
import { getCurrentWorldName } from "@utils";
import SudokuStats from "@components/games/sudoku/sudoku-stats";
import { GQL_QUERY_GET_SUDOKU_BOARDS } from "@graphql/brainGames/sudoku/getSudokuBoards.gql";
import { Colours, Style } from "@styles";
import moment from "moment";
import SudokuStagingHeader from "@components/games/sudoku/sudoku-staging-header";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS } from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import { useTranslation } from "@hooks";

interface IProps extends IConnectedScreenProps {
  levelSlotId: string;
  reward?: number;
  onDismissPress: () => void;
}

function SudokuProgressScreen({ levelSlotId, onDismissPress, onLeftMenuPress, reward }: IProps) {
  const t = useTranslation(["labels.cta.cancel", "sudoku.progress.resume"]);
  const { data: sudokuData } = useQuery<GetSudokuBoard>(GQL_QUERY_GET_SUDOKU_BOARDS, {
    fetchPolicy: "no-cache",
  });

  const { data: levelDetails } = useQuery<GetQuestMapLevelChallengeDetails>(GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS, {
    variables: { levelSlotId: levelSlotId },
  });

  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const sudokuState = useSelector(getSudokuState);

  const onResumePress = useCallback(() => {
    Navigation.push(ROUTES.quests, {
      component: {
        id: ROUTES.sudokuGame,
        name: ROUTES.sudokuGame,
        passProps: {
          levelSlotId,
        },
      },
    });
  }, [levelSlotId]);

  const currentStyle = useMemo(() => {
    if (yuniversalMap) {
      return SUDOKU_YUNIVERSAL_STYLES;
    }

    const worldName = getCurrentWorldName(currentLevel);
    return SUDOKU_PLANET_STYLES[worldName];
  }, [currentLevel, yuniversalMap]);

  return (
    <View style={styles.wrapper}>
      <SudokuStagingHeader
        date={moment(sudokuData?.getSudokuBoard?.date).format(SUDOKU_DATE_FORMAT)}
        showLeaderboard={false}
        backgroundColor={levelDetails?.getQuestMapLevelChallengeDetails?.backgroundColour}
        backgroundUrl={levelDetails?.getQuestMapLevelChallengeDetails?.assets?.backgroundImage?.uri}
      />

      <View style={styles.contentContainer}>
        <View>
          <SudokuStats
            reward={reward}
            savedData={sudokuState}
            stats={sudokuData?.getSudokuBoard?.stats}
            date={sudokuData?.getSudokuBoard?.date}
          />

          <GenericHeadingPad />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={onResumePress}
            label={t["sudoku.progress.resume"]}
            size="Medium"
            wrapperStyle={styles.leftButton}
          />

          <SecondaryButton
            onPress={onDismissPress}
            wrapperStyle={styles.rightButton}
            label={t["labels.cta.cancel"]}
            size="Medium"
          />
        </View>
      </View>

      <TopBarAbsolute type={currentStyle.topBarType} onPressLeftIcon={onLeftMenuPress} />
      <NavBar activeIndex={1} additionalBottom={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: Style.adjust(20),
    overflow: "hidden",
  },
  buttonsContainer: {
    flexDirection: "row",
    // Allow for the bottom bar
    paddingBottom: Style.adjust(100),
  },
  leftButton: {
    marginRight: Style.adjust(10),
    flex: 1,
  },
  rightButton: {
    flex: 1,
    marginLeft: Style.adjust(10),
  },
  planetIcon: {
    right: 0,
    top: 0,
    position: "absolute",
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: Style.adjust(20),
    justifyContent: "space-between",
  },
  wrapper: {
    minHeight: Style.DEVICE_HEIGHT,
  },
});

export default memo(SudokuProgressScreen);
