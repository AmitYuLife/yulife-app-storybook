import { HourglassIcon } from "@atoms/icon/hourglass-icon";
import { Button } from "@components/molecules";
import { View } from "react-native";
import { memo, useCallback, useMemo } from "react";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { useTranslation } from "@hooks";
import { Colours, Style, StyleSheet } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SudokuPauseModal = ({ onClose }: { onClose: () => void }) => {
  const { unpause, getDurationText, config, mistakes } = useSudokuContext();
  const pauseTime = getDurationText();
  const { bottom } = useSafeAreaInsets();

  const t = useTranslation([
    "sudoku.pause.title",
    "sudoku.pause.time",
    "sudoku.pause.mistakes",
    "sudoku.pause.difficulty",
    "sudoku.pause.resume",
    "sudoku.difficulty.easy",
  ]);

  const stats = useMemo(
    () => [
      { label: t["sudoku.pause.mistakes"], value: `${mistakes ?? 0} / ${config.MISTAKES_BEFORE_PENALTY}` },
      { label: t["sudoku.pause.time"], value: pauseTime ?? "00:00" },
      { label: t["sudoku.pause.difficulty"], value: t["sudoku.difficulty.easy"] },
    ],
    [config, mistakes, pauseTime, t]
  );

  const onResumePress = useCallback(() => {
    unpause();
    onClose();
  }, [unpause, onClose]);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <HourglassIcon />
          <View style={styles.pauseText}>
            <TextTemplate type="h3">{t["sudoku.pause.title"]}</TextTemplate>
          </View>
          <View style={styles.statsWrapper}>
            {stats.map(({ label, value }) => (
              <View style={styles.statWrapper} key={label}>
                <View>
                  <TextTemplate type="b2">{label}</TextTemplate>
                </View>
                <View style={styles.statValue}>
                  <TextTemplate type="b2b">{value}</TextTemplate>
                </View>
              </View>
            ))}
          </View>
          <Box pb={bottom + Style.adjust(30)} disableAutoAdjust={true}>
            <Button translationKey="sudoku.pause.resume" onPress={onResumePress} />
          </Box>
        </View>
      </View>
    </>
  );
};

export default memo(SudokuPauseModal);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    zIndex: 99,
    paddingHorizontal: Style.adjust(16),
  },
  pauseText: {
    fontSize: 24,
    marginBottom: Style.adjust(35),
    fontWeight: "600",
    color: Colours.neutral.n900,
    marginVertical: Style.adjust(20),
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  statsWrapper: {
    flexDirection: "row",
    padding: Style.adjust(18),
    borderRadius: Style.adjust(25),
    backgroundColor: "#F5F5F5",
    marginBottom: Style.adjust(30),
  },
  statWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statValue: {
    marginTop: Style.adjust(6),
  },
});
