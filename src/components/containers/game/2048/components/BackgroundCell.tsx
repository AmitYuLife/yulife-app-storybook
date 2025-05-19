import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { MARGIN, theme } from "../constants";
import { useCellSize } from "../hooks";
import { GameBoardSize } from "../game";

interface IProps {
  boardSize: GameBoardSize;
}
const BackgroundCell = ({ boardSize }: IProps) => {
  const cellWidth = useCellSize(boardSize);

  return <View style={[styles.container, { width: cellWidth, height: cellWidth }]} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundTertiary,
    margin: MARGIN,
    borderRadius: 2,
  },
});

export default memo(BackgroundCell);
