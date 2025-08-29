import { HourglassIcon } from "@atoms/icon/hourglass-icon";
import { Button } from "@components/molecules";
import { View } from "react-native";
import { memo, useCallback, useMemo } from "react";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import { useTranslation } from "@hooks";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";

const SudokuPauseModal = ({ onClose }: { onClose: () => void }) => {
  const { unpause, getDurationText, config, mistakes } = useSudokuContext();
  const pauseTime = getDurationText();

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
    [mistakes, pauseTime, t]
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
          <Button translationKey="sudoku.pause.resume" onPress={onResumePress} />
        </View>
      </View>
    </>
  );
};

export default memo(SudokuPauseModal);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderRadius: Style.adjust(100),
    position: "absolute",
    flex: 1,
    zIndex: 99,
  },
  pauseText: {
    fontSize: 24,
    marginTop: Style.adjust(35),
    marginBottom: Style.adjust(35),
    fontWeight: "600",
    color: Colours.neutral.n900,
    marginVertical: Style.adjust(20),
  },
  container: {
    padding: Style.adjust(30),
    paddingTop: Style.adjust(40),
    alignItems: "center",
    borderTopLeftRadius: Style.adjust(25),
    borderTopRightRadius: Style.adjust(25),
    backgroundColor: "white",
    flex: 1,
  },
  statsWrapper: {
    flexDirection: "row",
    padding: Style.adjust(18),
    borderTopLeftRadius: Style.adjust(25),
    borderTopRightRadius: Style.adjust(25),
    borderRadius: Style.adjust(10),
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
