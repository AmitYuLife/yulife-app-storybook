import { memo, useMemo } from "react";
import { BoardCell } from "@containers/game/2048/game";
import { GameSkin } from "@containers/game/2048/types";
import { Box } from "@atoms";
import { ImageBackground } from "react-native";
import { CellsDisplay } from "./components/Cells";
import { generatePreviewBoard } from "@containers/game/2048/generateBoard";
import { Style, StyleSheet } from "@styles";

const PREVIEW_BOARD_SIZE = 4;
const MARGIN = 7;
const PREVIEW_SIZE = Style.adjust(200);
const CELL_SIZE = Style.adjust(86);
const GAME_TILES_GRID = require("./components/assets/grid_2.png");

type GameTilesProps = {
  board: BoardCell[];
  skin: GameSkin;
};

const GameTiles = ({ board, skin }: GameTilesProps) => {
  const previewBoard = useMemo(() => generatePreviewBoard(board), [board]);

  return (
    <Box w={PREVIEW_SIZE} h={PREVIEW_SIZE}>
      <ImageBackground resizeMode="contain" source={GAME_TILES_GRID} style={styles.imageBackground} />
      <Box w={PREVIEW_SIZE} h={PREVIEW_SIZE} position="absolute" left={-MARGIN} top={-MARGIN}>
        <CellsDisplay
          board={previewBoard}
          boardSize={PREVIEW_BOARD_SIZE}
          skin={skin}
          cellSize={Style.adjust(CELL_SIZE)}
          margin={Style.adjust(MARGIN)}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
  },
});

export default memo(GameTiles);
