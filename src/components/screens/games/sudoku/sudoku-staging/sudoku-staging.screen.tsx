import { Button } from "@components/molecules";
import {
  GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails,
  GetSudokuBoard,
  GetSudokuLeaderboard_getSudokuLeaderboard,
} from "@graphql/_core/schema";
import { memo, useCallback, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { MODALS } from "@navigation/constants";
import { TopBarAbsolute } from "@organisms";
import { useSelector } from "react-redux";
import SudokuPersonalBestIcon from "@atoms/icon/sudoku-personal-best-svg";
import SudokuStats from "@components/games/sudoku/sudoku-stats";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import moment from "moment";
import SudokuHowToPlayIcon from "@atoms/icon/sudoku-how-to-play-svg";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import { showYuModal } from "@navigation/root";
import { useTranslation } from "@hooks";
import { getCurrentWorldName } from "@utils";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import SudokuActionButton from "@components/games/sudoku/sudoku-action-button";
import SudokuStagingHeader from "@components/games/sudoku/sudoku-staging-header";
import { SUDOKU_DATE_FORMAT, SUDOKU_PLANET_STYLES, SUDOKU_YUNIVERSAL_STYLES } from "../sudoku-game/sudoku.config";

interface IProps {
  reward: string;
  data: GetSudokuBoard;
  hasLeaderboardConsent?: boolean;
  onClose: () => void;
  onLeaderboardPress: () => void;
  levelDetails: GetQuestMapLevelChallengeDetails_getQuestMapLevelChallengeDetails;
  onBack: () => void;
  onStart: () => void;
  leaderboard: GetSudokuLeaderboard_getSudokuLeaderboard[];
}

const SudokuStagingScreen = ({
  onStart,
  hasLeaderboardConsent,
  onLeaderboardPress,
  data,
  onBack,
  levelDetails,
  reward,
  leaderboard,
}: IProps) => {
  const t = useTranslation([
    "sudoku.title",
    "sudoku.difficulty.easy",
    "sudoku.difficulty.medium",
    "sudoku.difficulty.hard",
    "sudoku.staging.howToPlay",
    "sudoku.staging.continueGame",
    "sudoku.staging.startGame",
    "sudoku.staging.todaysLeaderboard",
    "sudoku.staging.alreadyDone",
    "sudoku.staging.dailyLeaderboard",
    "sudoku.staging.joinDailyLeaderboard",
  ]);

  const leaderboardOptedIn = !!data?.getSudokuBoard?.stats?.leaderboardId;
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const sudokuState = useSelector(getSudokuState);

  const currentStyle = useMemo(() => {
    if (yuniversalMap) {
      return SUDOKU_YUNIVERSAL_STYLES;
    }

    const worldName = getCurrentWorldName(currentLevel);
    return SUDOKU_PLANET_STYLES[worldName];
  }, [currentLevel, yuniversalMap]);

  const onHelp = useCallback(() => {
    showYuModal({
      component: {
        id: MODALS.sudokuHelp,
        name: MODALS.sudokuHelp,
      },
    });
  }, []);

  return (
    <ScrollView
      style={styles.scrollView}
      contentInsetAdjustmentBehavior="never"
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
    >
      <View style={styles.wrapper}>
        <View>
          <SudokuStagingHeader
            leaderboardOptedIn={leaderboardOptedIn}
            leaderboard={leaderboard}
            showLeaderboard={true}
            onOpenLeaderboard={onLeaderboardPress}
            backgroundColor={levelDetails?.backgroundColour}
            backgroundUrl={levelDetails?.assets?.backgroundImage?.uri}
            date={moment(data?.getSudokuBoard?.date).format(SUDOKU_DATE_FORMAT)}
          />
          <View style={styles.outerWrapper}>
            <SudokuStats
              reward={reward}
              savedData={sudokuState}
              results={data?.getSudokuBoard?.results}
              stats={data?.getSudokuBoard?.stats}
              date={data?.getSudokuBoard?.date}
            />
            <SudokuActionButton label={t["sudoku.staging.howToPlay"]} onPress={onHelp} icon={<SudokuHowToPlayIcon />} />
            <SudokuActionButton
              label={
                hasLeaderboardConsent ? t["sudoku.staging.dailyLeaderboard"] : t["sudoku.staging.joinDailyLeaderboard"]
              }
              onPress={onLeaderboardPress}
              icon={<SudokuPersonalBestIcon />}
            />
          </View>
          {!data?.getSudokuBoard?.results?.adjustedTime ? null : (
            <View style={styles.completedContainer}>
              <TextTemplate type="b2" textAlign="center">
                {t["sudoku.staging.alreadyDone"]}
              </TextTemplate>
            </View>
          )}
        </View>

        <View style={styles.buttons}>
          {!sudokuState.board || data?.getSudokuBoard?.results ? null : (
            <Button onPress={onStart} label={t["sudoku.staging.continueGame"]} />
          )}

          {sudokuState.board || data?.getSudokuBoard?.results ? null : (
            <Button onPress={onStart} label={t["sudoku.staging.startGame"]} />
          )}
        </View>
      </View>
      <TopBarAbsolute
        leftIcon={LeftIcon.BACK}
        onPressLeftIcon={onBack}
        type={currentStyle.topBarType}
        rightIcon={null}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: Style.adjust(20),
    minHeight: Style.DEVICE_HEIGHT,
  },
  scrollView: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: Colours.neutral.n50,
    justifyContent: "space-between",
    flex: 1,
  },
  buttons: {
    justifyContent: "flex-end",
  },
  outerWrapper: {
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(5),
  },
  completedContainer: {
    marginTop: Style.adjust(15),
  },
});

export default memo(SudokuStagingScreen);
