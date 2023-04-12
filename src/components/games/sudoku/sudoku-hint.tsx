import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colours, Style } from "@styles";
import { useSudokuContext } from "@screens/games/sudoku/sudoku-game/sudoku.context";
import moment from "moment";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SODUKU_HINT_COOLDOWN } from "@screens/games/sudoku/sudoku-game/sudoku.config";
import HintIcon from "@atoms/icon/hint-svg";
import { TextTemplate } from "@atoms";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { SudokuHintPopup } from "./SudokuHintPopup";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  invert: boolean;
}

const SudokuHint = ({ invert }: IProps) => {
  const [timeAgo, setTimeAgo] = useState<number>(0);
  const containerRef = useRef<TouchableOpacity>(null);
  const { lastHintTime, selectedCell, getHint } = useSudokuContext();
  const { startTime, penalties, getDurationText, lastPauseTime } = useSudokuContext();

  const updateTime = useCallback(() => {
    const differenceSeconds = SODUKU_HINT_COOLDOWN - moment().diff(moment(lastHintTime), "seconds");
    setTimeAgo(lastHintTime ? differenceSeconds : 0);

    return differenceSeconds;
  }, [lastHintTime]);

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(
      () => {
        if (timeAgo < 0) {
          clearInterval(intervalId);
        }

        updateTime();
      },
      DETOX_ENABLED ? 3000 : 1000
    );

    return () => clearInterval(intervalId);
  }, [startTime, penalties, timeAgo, lastHintTime, updateTime, getDurationText, lastPauseTime]);

  const onGetHint = useCallback(() => {
    if (selectedCell) {
      getHint(selectedCell);
    }
  }, [selectedCell, getHint]);

  const openPopUp = useCallback(() => {
    const popup = ({ onClose }: { onClose: () => void }) => <SudokuHintPopup onClose={onClose} onGetHint={onGetHint} />;

    showTooltipPopupRelativeToView({
      viewRef: containerRef,
      beakPosition: "bottomRight",
      style: {
        maxWidth: Style.DEVICE_WIDTH / 1.5,
      },
      children: popup,
    });
  }, [onGetHint]);

  const isHintCooldown = timeAgo > 0;
  const style = useMemo(() => [styles.hintWrapper, ...(isHintCooldown ? [styles.hintCooldown] : [])], [isHintCooldown]);
  const color = useMemo(() => (invert ? Colours.neutral.white : undefined), [invert]);

  return (
    <View style={styles.rightSectionWrapper}>
      {isHintCooldown ? (
        <View style={style}>
          <TextTemplate type="b2b" color={color}>
            {timeAgo}s
          </TextTemplate>
        </View>
      ) : (
        <TouchableOpacity onPress={openPopUp} style={style} activeOpacity={0.8} ref={containerRef}>
          <HintIcon color={color} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rightSectionWrapper: {
    flex: 1,
    alignItems: "flex-end",
  },
  hintCooldown: {
    width: Style.adjust(60),
    paddingHorizontal: Style.adjust(12),
  },
  hintWrapper: {
    borderColor: Colours.sudoku.timerColor,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Style.adjust(20),
    width: Style.adjust(40),
    height: Style.adjust(40),
  },
});

export default memo(SudokuHint);
