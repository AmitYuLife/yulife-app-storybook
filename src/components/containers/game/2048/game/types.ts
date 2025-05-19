export type Direction = "up" | "down" | "left" | "right";
export type GameMode = "normal" | "hard" | "extreme";
export type GameValue = 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;

export type GameBoardSize = 4 | 5 | 6;

export type BoardCell = {
  id: string;
  value: GameValue;
  x: number;
  y: number;
};
