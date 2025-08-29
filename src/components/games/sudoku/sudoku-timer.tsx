// eslint-disable-next-line no-restricted-imports
import { View, Text } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { useSudokuContext } from "@screens/games/sudoku/sudoku-game/sudoku.context";
import { memo, useCallback, useEffect, useState } from "react";
import Animated, { FadeOutUp } from "react-native-reanimated";
import { SODUKU_PENALTY_ANIMATION_TIME } from "@screens/games/sudoku/sudoku-game/sudoku.config";
import PauseIcon from "@atoms/icon/pause-svg";
import { TextTemplate } from "@atoms";
import { DETOX_ENABLED } from "@services/socket";
import { SUDOKU_PAUSE, SUDOKU_PENALTY_TIME } from "@ids";
import { useTranslation } from "@hooks";
import { TouchableOpacityWithDelay } from "@molecules";

const AnimatedView = Animated.createAnimatedComponent(View);

interface IProps {
  invert: boolean;
}

const PENALTY_TIME = DETOX_ENABLED ? 5000 : SODUKU_PENALTY_ANIMATION_TIME;

interface IPenaltyView {
  value: number;
  index: number;
  started: number;
}

const SudokuTimer = ({ invert }: IProps) => {
  const [timeAgo, setTimeAgo] = useState<string>("00:00");
  const { startTime, pause, endTime, penalties, getDurationText, lastPauseTime } = useSudokuContext();
  const [shownPenalties, setShownPenalties] = useState<number>(penalties?.length ?? 0);
  const [activePenalties, setActivePenalties] = useState<IPenaltyView[]>([]);
  const t = useTranslation(["time_units.short_seconds"]);

  useEffect(() => {
    const newPenalties = penalties.slice(shownPenalties);

    const newPenaltyObjects = newPenalties.map((penalty, index) => ({
      value: penalty,
      started: Date.now(),
      index: penalties.length + index,
    }));

    setActivePenalties((penaltiesActive) => [...penaltiesActive, ...newPenaltyObjects]);
    setShownPenalties((count) => count + newPenalties.length);
  }, [penalties, shownPenalties]);

  const updateTime = useCallback(() => {
    setTimeAgo(getDurationText());
  }, [setTimeAgo, getDurationText]);

  const clearCompletedPenalties = useCallback(() => {
    // This should be called by a worklet in useCallback with runOnJs
    // But there is issues with it crashing animations on certain Android devices
    const expiryDate = Date.now() - PENALTY_TIME;
    setActivePenalties((penaltiesActive) => penaltiesActive.filter((penalty) => penalty.started >= expiryDate));
  }, []);

  useEffect(() => {
    updateTime();
    const intervalId: ReturnType<typeof setInterval> = setInterval(
      () => {
        if (lastPauseTime) {
          return clearInterval(intervalId);
        }

        clearCompletedPenalties();
        updateTime();
      },
      DETOX_ENABLED ? 10000 : 1000
    );

    return () => clearInterval(intervalId);
  }, [startTime, penalties, updateTime, getDurationText, lastPauseTime, clearCompletedPenalties]);

  return (
    <View>
      <TouchableOpacityWithDelay
        style={styles.wrapper}
        onPress={endTime ? undefined : pause}
        testID={SUDOKU_PAUSE}
        activeOpacity={0.8}
      >
        <PauseIcon color={invert ? Colours.neutral.white : undefined} />
        <View style={styles.text}>
          {activePenalties
            .filter((penalty) => penalty.value !== 0)
            .map((penalty) => {
              return (
                <AnimatedView
                  entering={FadeOutUp.duration(DETOX_ENABLED ? 5000 : SODUKU_PENALTY_ANIMATION_TIME)}
                  style={styles.penaltyWrapper}
                  key={penalty.index}
                  testID={SUDOKU_PENALTY_TIME(penalty.value)}
                >
                  <Text allowFontScaling={false} style={styles.penalty}>
                    +{penalty.value}
                    {t["time_units.short_seconds"]}
                  </Text>
                </AnimatedView>
              );
            })}
          <TextTemplate numberOfLines={1} type="b2b" color={invert ? Colours.neutral.white : undefined}>
            {timeAgo}
          </TextTemplate>
        </View>
      </TouchableOpacityWithDelay>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: Style.adjust(50),
    alignItems: "center",
    minWidth: Style.adjust(100),
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colours.sudoku.timerColor,
    height: Style.adjust(40),
    paddingHorizontal: Style.adjust(20),
  },
  penalty: {
    color: "red",
    fontSize: Style.adjust(14),
    fontWeight: "600",
    flex: 1,
  },
  penaltyWrapper: {
    flex: 1,
    top: -18,
    zIndex: 9,
    position: "absolute",
    justifyContent: "center",
  },
  text: {
    color: Colours.sudoku.gridThickColor,
    fontWeight: "600",
    minWidth: Style.adjust(50),
    marginStart: Style.adjust(14),
  },
});

export default memo(SudokuTimer);
