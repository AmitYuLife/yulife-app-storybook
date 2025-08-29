import { Block, TextTemplate } from "@atoms";
import FullHistoryIcon from "@atoms/icon/full-history-icon";
import { SudokuHistoryButtonContainer } from "@components/games/sudoku/sudoku-history-button/sudoku-history-button.container";
import { ActionButton } from "@components/molecules";
import { GetQuestMapLevelQuery } from "@graphql/__generated";
import { useTranslation } from "@hooks";
import { CHALLENGE_HISTORY_NEW_SLOT, SUDOKU_HOWTOPLAY_BUTTON } from "@ids";
import { ActivityProgress, GenericHeadingAbsolute, GenericHeadingPad, MoreChallengesBanner } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Style, StyleSheet } from "@styles";
import React, { memo, useMemo } from "react";
import { View } from "react-native";

interface IProps {
  onBack?: () => void;
  level?: GetQuestMapLevelQuery["getQuestMapLevel"];
  onPressActivityHistory: () => void;
  name?: string;
  componentId?: string;
  leaderboardDate?: string;
  showSudokuLeaderboard?: boolean;
}

const ChallengesHistoryScreenNew = ({
  onBack,
  level,
  componentId,
  leaderboardDate,
  showSudokuLeaderboard,
  onPressActivityHistory,
  name,
}: IProps) => {
  const hasChallenges = useMemo(() => {
    return level?.slots?.some((slot) => (slot?.challenges?.length ?? 0) > 0);
  }, [level?.slots]);

  const t = useTranslation([
    "screens.challenges.history.completed_challenges",
    "screens.challenges.history.full_button_label",
  ]);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <GenericHeadingAbsolute heading={name} onLeftIconPress={onBack} leftIcon={LeftIcon.BACK} />
      <MoreChallengesBanner />
      {hasChallenges ? (
        <Block style={styles.completedChallengesContainer}>
          <TextTemplate type="b2b">{t["screens.challenges.history.completed_challenges"]}</TextTemplate>
          <View style={styles.progressWrapper}>
            {level.slots.map((slot) =>
              slot.challenges.map((challenge) => (
                <View
                  style={styles.activityWrapper}
                  key={challenge.id}
                  testID={CHALLENGE_HISTORY_NEW_SLOT(challenge.label, challenge.reward, challenge.rating)}
                >
                  <ActivityProgress
                    key={challenge.id}
                    yuCoinSubTotal={challenge.reward}
                    activitySubTotal={challenge.label}
                    iconUrl={challenge.iconUrl?.uri}
                    rating={challenge.rating}
                  />
                </View>
              ))
            )}
          </View>
        </Block>
      ) : null}
      <ActionButton
        label={t["screens.challenges.history.full_button_label"]}
        onPress={onPressActivityHistory}
        icon={<FullHistoryIcon />}
        testID={SUDOKU_HOWTOPLAY_BUTTON}
      />
      {leaderboardDate && showSudokuLeaderboard ? (
        <SudokuHistoryButtonContainer componentId={componentId} date={leaderboardDate} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(20),
    paddingBottom: Style.adjust(10),
  },
  completedChallengesContainer: {
    marginTop: Style.adjust(10),
    paddingHorizontal: Style.adjust(14),
    paddingVertical: Style.adjust(14),
    paddingBottom: Style.adjust(7),
  },
  activityWrapper: {
    marginVertical: Style.adjust(7),
  },
  progressWrapper: {
    marginTop: Style.adjust(10),
  },
});

export default memo(ChallengesHistoryScreenNew);
