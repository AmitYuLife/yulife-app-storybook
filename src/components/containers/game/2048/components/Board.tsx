import { Style } from "@styles";
import React, { memo } from "react";
import { ImageBackground, ImageSourcePropType, StyleSheet, View } from "react-native";
import { BOARD_WIDTH_MULTIPLIER, MARGIN } from "../constants";
import Cells from "./Cells";
import { GameBoardSize } from "../game";
import { GameSkin } from "../types";

const backgroundGrid: Record<number, ImageSourcePropType> = {
  4: require("./assets/grid_4.png"),
  5: require("./assets/grid_5.png"),
  6: require("./assets/grid_6.png"),
};

interface IBoardProps {
  boardSize: GameBoardSize;
  skin: GameSkin;
}

const Board = ({ boardSize, skin }: IBoardProps) => {
  const backgroundImage = backgroundGrid[boardSize];
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} resizeMode="contain" source={backgroundImage} />
      <Cells skin={skin} boardSize={boardSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: "auto",
    marginEnd: "auto",
    borderRadius: 4,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: MARGIN,
    position: "relative",
    width: Style.DEVICE_WIDTH * BOARD_WIDTH_MULTIPLIER,
    height: Style.DEVICE_WIDTH * BOARD_WIDTH_MULTIPLIER,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});

export default memo(Board);
