import { StyleSheet, TouchableOpacity, View } from "react-native";
import NumberInput from "./number-input";
import { useSudokuContext } from "@components/screens/games/sudoku/sudoku-game/sudoku.context";
import UndoIcon from "@atoms/icon/undo-svg";
import { Colours, Style } from "@styles";
import { memo, useCallback } from "react";
import { useTranslation } from "@hooks";
import { TextTemplate } from "@atoms";

const NumbersInput = () => {
  const { putNumber, undo, selectedCell } = useSudokuContext();
  const t = useTranslation(["sudoku.game.undo"]);

  const onNumberPress = useCallback(
    (value: number) => {
      putNumber({ number: value, row: selectedCell?.row, column: selectedCell?.column });
    },
    [selectedCell, putNumber]
  );

  return (
    <View style={styles.grid}>
      <View style={styles.row}>
        {Array.from({ length: 5 }).map((_, index) => {
          const value = index + 1;
          return <NumberInput value={value} key={index} onPress={onNumberPress} />;
        })}
      </View>
      <View style={styles.row}>
        {Array.from({ length: 4 }).map((_, index) => {
          const value = index + 1 + 5;
          return <NumberInput value={value} key={index} onPress={() => onNumberPress(value)} />;
        })}

        <TouchableOpacity activeOpacity={0.8} onPress={undo}>
          <View style={styles.undoButtonWrapper}>
            <UndoIcon size={Style.adjust(19)} />
            <View style={styles.undoText}>
              <TextTemplate type="l2b">{t["sudoku.game.undo"]}</TextTemplate>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  undoButtonWrapper: {
    width: Style.adjust(65),
    height: Style.adjust(59),
    borderWidth: 1,
    alignItems: "center",
    borderColor: Colours.sudoku.timerColor,
    backgroundColor: Colours.neutral.white,
    justifyContent: "center",
    borderRadius: Style.adjust(16),
  },
  undoText: {
    marginTop: Style.adjust(4),
  },
  grid: {
    width: Style.DEVICE_WIDTH,
    padding: Style.adjust(15),
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    width: "100%",
    marginBottom: Style.adjust(5),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default memo(NumbersInput);
