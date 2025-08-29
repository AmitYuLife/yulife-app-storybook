import { Button } from "@components/molecules";
import { memo, useMemo } from "react";
import { ScrollView, View } from "react-native";
import {
  GetMobileSocialGroupLeaderboardItemsQuery,
  GetMobileQuestLevelChallengeDetailsQuery,
  GetSudokuBoardQuery,
} from "@graphql/__generated";
import { GenericHeadingAbsolute } from "@organisms";
import { useSelector } from "react-redux";
import SudokuStats from "@components/games/sudoku/sudoku-stats";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import moment from "moment";
import SudokuHowToPlayIcon from "@atoms/icon/sudoku-how-to-play-svg";
import { getSudokuState } from "@redux/sudoku/sudoku.selectors";
import { useTranslation } from "@hooks";
import SudokuActionButton from "@components/molecules/action-button/action-button";
import SudokuStagingHeader from "@components/games/sudoku/sudoku-staging-header";
import {
  SUDOKU_HOWTOPLAY_BUTTON,
  SUDOKU_JOINLEADERBOARD_BUTTON,
  SUDOKU_PRACTICE_BUTTON,
  SUDOKU_STAGING_SCREEN_SCROLL,
} from "@ids";
import SudokuSecondAttemptDisclaimer from "@components/games/sudoku/SudokuSecondAttemptDisclaimer";
import SudokuPracticeIcon from "@atoms/icon/sudoku-practice-icon";
import { MedalIcon } from "@atoms/icon/medal-icon";

interface IProps {
  reward: string;
  onBack: () => void;
  onHelp: () => void;
  onClose: () => void;
  onStart: () => void;
  data: GetSudokuBoardQuery;
  onStartPractice: () => void;
  onLeaderboardPress: () => void;
  hasLeaderboardConsent?: boolean;
  showSecondAttemptDisclaimer?: boolean;
  leaderboard: GetMobileSocialGroupLeaderboardItemsQuery["getMobileSocialGroupLeaderboardItems"];
  levelDetails: GetMobileQuestLevelChallengeDetailsQuery["getMobileQuestLevelChallengeDetails"];
  isStartingChallenge: boolean;
  error?: string;
}

const SudokuStagingScreen = ({
  data,
  onHelp,
  onBack,
  reward,
  onStart,
  leaderboard,
  levelDetails,
  onStartPractice,
  onLeaderboardPress,
  hasLeaderboardConsent,
  showSecondAttemptDisclaimer,
  isStartingChallenge,
  error,
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
    "sudoku.staging.practiceGame",
    "format.date_readable",
  ]);

  const leaderboardOptedIn = !!data?.getSudokuBoard?.stats?.leaderboardId;
  const sudokuState = useSelector(getSudokuState);
  const date = useMemo(
    () => moment(data?.getSudokuBoard?.date).format(t["format.date_readable"]),
    [data?.getSudokuBoard?.date, t]
  );

  return (
    <ScrollView
      style={styles.scrollView}
      contentInsetAdjustmentBehavior="never"
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}
      testID={SUDOKU_STAGING_SCREEN_SCROLL}
    >
      <View style={styles.wrapper}>
        <View>
          <SudokuStagingHeader
            leaderboardOptedIn={leaderboardOptedIn}
            showLeaderboard={true}
            leaderboard={leaderboard}
            color={levelDetails?.progressBar?.progressTextColor}
            onOpenLeaderboard={onLeaderboardPress}
            backgroundColor={levelDetails?.backgroundColour}
            backgroundUrl={levelDetails?.assets?.backgroundImage?.uri}
            date={date}
          />
          <View style={styles.outerWrapper}>
            {showSecondAttemptDisclaimer ? <SudokuSecondAttemptDisclaimer /> : null}
            <SudokuStats
              reward={reward}
              savedData={sudokuState}
              results={data?.getSudokuBoard?.results}
              stats={data?.getSudokuBoard?.stats}
              date={data?.getSudokuBoard?.date}
            />
            <SudokuActionButton
              label={t["sudoku.staging.howToPlay"]}
              onPress={onHelp}
              icon={<SudokuHowToPlayIcon />}
              testID={SUDOKU_HOWTOPLAY_BUTTON}
            />
            <SudokuActionButton
              label={
                hasLeaderboardConsent ? t["sudoku.staging.dailyLeaderboard"] : t["sudoku.staging.joinDailyLeaderboard"]
              }
              onPress={onLeaderboardPress}
              icon={<MedalIcon position={1} />}
              testID={SUDOKU_JOINLEADERBOARD_BUTTON}
            />
            {data?.getSudokuBoard?.results ? null : (
              <SudokuActionButton
                label={t["sudoku.staging.practiceGame"]}
                onPress={onStartPractice}
                icon={<SudokuPracticeIcon />}
                testID={SUDOKU_PRACTICE_BUTTON}
              />
            )}
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
          {data?.getSudokuBoard?.results ? null : (
            <Button
              size="Fill"
              onPress={onStart}
              translationKey="sudoku.staging.startGame"
              isLoading={isStartingChallenge}
            />
          )}

          {!error ? null : (
            <TextTemplate textAlign="center" type="l2b">
              {error}
            </TextTemplate>
          )}
        </View>
      </View>

      <GenericHeadingAbsolute
        logo="yulife"
        onLeftIconPress={onBack}
        backgroundColor="transparent"
        color={levelDetails?.progressBar?.progressTextColor}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: Style.adjust(20),
    minHeight: Style.DEVICE_HEIGHT - Style.adjust(40),
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  },
  wrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
  buttons: {
    justifyContent: "flex-end",
    paddingHorizontal: Style.adjust(20),
    marginTop: Style.adjust(10),
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
