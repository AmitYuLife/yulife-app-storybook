import { createContext, useContext } from "react";
import uuid from "react-native-uuid";
import { GameState } from "./hooks";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { BoardCell, Direction } from "./game";

interface TimerOptions {
  enableMinuteAdditionAnimation?: boolean;
  enableMinutePulseAnimation?: boolean;
  enableMinuteHapticsImpact?: boolean;

  displayColor?: string;

  triggers?: {
    seconds: number;
    repeat?: boolean; // Repeat every <seconds> seconds
    color?: string;
    pulseColor?: boolean; // Return back to initial color
    action?: VoidFunctionOrSduiActionPayload;
  }[];
}

export interface GameOptions {
  timer?: TimerOptions;
}

export interface IGame2048Context {
  gameId: string;
  board: BoardCell[];
  score: number;
  move: (direction: Direction) => void;
  startGame: () => void;
  state: GameState;
  moveNumber: number;
  enableHaptics: boolean;
  toggleHaptics: () => void;
  startTimestamp: number | null;
  endTimestamp: number | null;
  gameOptions?: GameOptions | null;
}
export const Game2048Context = createContext<IGame2048Context>({
  gameId: uuid.v4().toString(),
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
  enableHaptics: true,
  toggleHaptics: () => {
    // ignore
  },
  startTimestamp: null,
  endTimestamp: null,
  gameOptions: null,
});

export const useGame2048Context = () => useContext(Game2048Context);
