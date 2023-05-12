import SudokuManager, { ISudokuStateChangedArgs } from "./sudoku-manager";
import { SudokuGame } from "./sudoku-game";
import { ISudokuStore } from "@redux/sudoku/sudoku.reducer";
import { ISudokuBoard, ISudokuConfig, ISudokuResults } from "./sudoku.interface";

export interface ISudokuGameContainerProps {
  board: ISudokuBoard;
  savedState?: ISudokuStore;
  gameIdentifier?: string;
  invertHeader?: boolean;
  onPause: () => void;
  onResume: () => void;
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
      initialBoard={board}
      onGameComplete={onGameComplete}
      gameIdentifier={gameIdentifier}
      config={config}
      onPause={onPause}
      detectCheats={detectCheats}
      onResume={onResume}
      savedState={savedState}
      onStateUpdate={onStateUpdate}
    >
      <SudokuGame invertHeader={invertHeader} />
    </SudokuManager>
  );
};
