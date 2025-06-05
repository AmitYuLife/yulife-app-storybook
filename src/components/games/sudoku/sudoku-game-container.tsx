import SudokuManager, { ISudokuStateChangedArgs } from "./sudoku-manager";
import { SudokuGame } from "./sudoku-game";
import { ISudokuStore } from "@redux/sudoku/sudoku.types";
import { ISudokuBoard, ISudokuConfig, ISudokuResults } from "./sudoku.interface";

export interface ISudokuGameContainerProps {
  board: ISudokuBoard;
  savedState?: ISudokuStore;
  gameIdentifier?: string;
  invertHeader?: boolean;
  onPause?: () => void;
  onResume?: () => void;
  config?: ISudokuConfig;
  detectCheats?: boolean;
  onGameComplete: (params: ISudokuResults) => void;
  onStateUpdate?: (args: ISudokuStateChangedArgs) => void;
}

export const SudokuGameContainer = ({
  board,
  config,
  onPause,
  onResume,
  savedState,
  invertHeader,
  detectCheats,
  onStateUpdate,
  onGameComplete,
  gameIdentifier,
}: ISudokuGameContainerProps) => {
  return (
    <SudokuManager
      config={config}
      onPause={onPause}
      onResume={onResume}
      initialBoard={board}
      savedState={savedState}
      detectCheats={detectCheats}
      onStateUpdate={onStateUpdate}
      onGameComplete={onGameComplete}
      gameIdentifier={gameIdentifier}
    >
      <SudokuGame invertHeader={invertHeader} />
    </SudokuManager>
  );
};
