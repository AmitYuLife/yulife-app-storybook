import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colours, Style } from "@styles";
import { useSudokuContext } from "@screens/games/sudoku/sudoku-game/sudoku.context";
import { memo, useCallback, useEffect, useState } from "react";
import Animated, { FadeOutUp, runOnJS } from "react-native-reanimated";
import { SODUKU_PENALTY_ANIMATION_TIME } from "@screens/games/sudoku/sudoku-game/sudoku.config";
import PauseIcon from "@atoms/icon/pause-svg";
import { TextTemplate } from "@atoms";
import { DETOX_ENABLED } from "@services/socket";
import { SUDOKU_PAUSE } from "@ids";

const AnimatedView = Animated.createAnimatedComponent(View);

interface IProps {
  invert: boolean;
}

const SudokuTimer = ({ invert }: IProps) => {
  const [timeAgo, setTimeAgo] = useState<string>("00:00");
  const { startTime, pause, initialPenalties, penalties, getDurationText, lastPauseTime } = useSudokuContext();
  const [shownPenalties, setShownPenalties] = useState<number[]>(initialPenalties || []);
  const [activePenalties, setActivePenalties] = useState<number[]>(initialPenalties?.map(() => 0) || []);

  useEffect(() => {
    const newPenalties = penalties.slice(shownPenalties.length);
    setShownPenalties((pen) => [...pen, ...newPenalties]);
    setActivePenalties((pen) => [...pen, ...newPenalties]);
  }, [penalties, shownPenalties?.length]);

  const onEnd = (index: number) => {
    setActivePenalties((pen) => pen.map((penalty, i) => (i === index ? 0 : penalty)));
  };

  const updateTime = useCallback(() => {
    setTimeAgo(getDurationText());
  }, [setTimeAgo, getDurationText]);

  useEffect(() => {
    updateTime();
    const intervalId: ReturnType<typeof setInterval> = setInterval(
      () => {
        if (lastPauseTime) {
          return clearInterval(intervalId);
        }

        updateTime();
      },
      DETOX_ENABLED ? 10000 : 1000
    );

    return () => clearInterval(intervalId);
  }, [startTime, penalties, updateTime, getDurationText, lastPauseTime]);

  return (
    <View>
      <TouchableOpacity style={styles.wrapper} onPress={pause} testID={SUDOKU_PAUSE}>
        <PauseIcon color={invert ? Colours.neutral.white : undefined} />
        <View style={styles.text}>
          {activePenalties
            .filter((penalty) => penalty !== 0)
            .map((penalty, index) => {
              return (
                <AnimatedView
                  entering={FadeOutUp.duration(DETOX_ENABLED ? 5000 : SODUKU_PENALTY_ANIMATION_TIME).withCallback(
                    () => {
                      "worklet";
                      runOnJS(onEnd)(index);
                    }
                  )}
                  style={styles.penaltyWrapper}
                  key={index}
                >
                  <Text allowFontScaling={false} style={styles.penalty}>
                    +{penalty}s
                  </Text>
                </AnimatedView>
              );
            })}
          <TextTemplate numberOfLines={1} type="b2b" color={invert ? Colours.neutral.white : undefined}>
            {timeAgo}
          </TextTemplate>
        </View>
      </TouchableOpacity>
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
    marginLeft: Style.adjust(14),
  },
});

export default memo(SudokuTimer);
