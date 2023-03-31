import SudokuManager, { ISudokuStateChangedArgs } from "./sudoku-manager";
import { SudokuGame } from "./sudoku-game";
import { ISudokuStore } from "@redux/sudoku/sudoku.reducer";
import { ISudokuBoard, ISudokuResults } from "./sudoku.interface";

export interface ISudokuGameContainerProps {
  board: ISudokuBoard;
  savedState?: ISudokuStore;
  gameIdentifier?: string;
  invertHeader?: boolean;
  onPause: () => void;
  onResume: () => void;
  onGameComplete: (params: ISudokuResults) => void;
  onStateUpdate?: (args: ISudokuStateChangedArgs) => void;
}

export const SudokuGameContainer = ({
  board,
  onGameComplete,
  onPause,
  onResume,
  savedState,
  gameIdentifier,
  onStateUpdate,
  invertHeader,
}: ISudokuGameContainerProps) => {
  return (
    <SudokuManager
      initialBoard={board}
      onGameComplete={onGameComplete}
      gameIdentifier={gameIdentifier}
      onPause={onPause}
      onResume={onResume}
      savedState={savedState}
      onStateUpdate={onStateUpdate}
    >
      <SudokuGame invertHeader={invertHeader} />
    </SudokuManager>
  );
};
