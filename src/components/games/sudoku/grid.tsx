import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { SUDOKU_BOARD_SIZE, SUDOKU_DIMENSIONS } from "@components/screens/games/sudoku/sudoku-game/sudoku.config";
import { Colours, Style } from "@styles";
import Cell from "./cell";

const SUDOKU_GRID = Array.from({ length: SUDOKU_DIMENSIONS }).map(() => Array.from({ length: SUDOKU_DIMENSIONS }));

const Grid = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.grid}>
        {SUDOKU_GRID.map((row, rowIndex) => (
          <View key={`${rowIndex}`} style={styles.row}>
            {row.map((__, columnIndex) => (
              <Cell key={`${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default memo(Grid);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    borderRadius: Style.adjust(10),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: Style.adjust(2),
    width: SUDOKU_BOARD_SIZE + Style.adjust(5),
    height: SUDOKU_BOARD_SIZE + Style.adjust(5),
    borderColor: Colours.sudoku.gridThickColor,
  },
  row: {
    flexDirection: "row",
  },
});
