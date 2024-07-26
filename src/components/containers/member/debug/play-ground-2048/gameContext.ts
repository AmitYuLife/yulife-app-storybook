import { createContext, useContext } from "react";
import { BoardCell, Direction, GameState } from "./hooks";

export interface IGame2048Context {
  logBoard: () => void;
  board: BoardCell[];
  score: number;
  move: (direction: Direction) => void;
  startGame: () => void;
  state: GameState;
  moveNumber: number;
}
export const Game2048Context = createContext<IGame2048Context>({
  logBoard: () => {
    // ignore
  },
  board: [],
  move: () => {
    // ignore
  },
  startGame: () => {
    // ignore
  },
  state: "active",
  moveNumber: 0,
  score: 0,
});

export const useGame2048Context = () => useContext(Game2048Context);
