import { GameBoardSize, GameMode, GameValue } from "./types";
import { flatten } from "lodash";

const weightTile = (tileNumber: GameValue, weight: number): GameValue[] => Array(weight).fill(tileNumber);

export const SPAWN_WEIGHTS_4x4: Record<GameMode, GameValue[]> = {
  normal: flatten([
    weightTile(2, 9), // 2 - 90%
    weightTile(4, 1), // 4 - 10%
  ]),
  hard: flatten([
    weightTile(2, 7), // 2 - 70%
    weightTile(4, 3), // 4 - 30%
  ]), // 30% - 4
  extreme: flatten([
    weightTile(2, 7), // 2 - 70%
    weightTile(4, 2), // 4 - 20%
    weightTile(8, 1), // 8 - 10%
  ]),
};

const SPAWN_WEIGHTS_5x5: Record<GameMode, GameValue[]> = {
  normal: flatten([
    weightTile(2, 9), // 2 - 90%
    weightTile(4, 1), // 4 - 10%
  ]),
  hard: flatten([
    weightTile(2, 7), // 2 - 70%
    weightTile(4, 3), // 4 - 30%
  ]), // 30% - 4
  extreme: flatten([
    weightTile(2, 60), // 2 - 60%
    weightTile(4, 25), // 4 - 25%
    weightTile(8, 15), // 8 - 15%
  ]),
};

const SPAWN_WEIGHTS_6x6: Record<GameMode, GameValue[]> = {
  normal: flatten([
    weightTile(2, 9), // 2 - 90%
    weightTile(4, 1), // 4 - 10%
  ]),
  hard: flatten([
    weightTile(2, 7), // 2 - 70%
    weightTile(4, 3), // 4 - 30%
  ]), // 30% - 4
  extreme: flatten([
    weightTile(2, 60), // 2 - 60%
    weightTile(4, 22), // 4 - 22%
    weightTile(8, 16), // 8 - 16%
    weightTile(16, 2), // 8 - 2%
  ]),
};

export const SPAWN_WEIGHTS: Record<GameBoardSize, Record<GameMode, GameValue[]>> = {
  4: SPAWN_WEIGHTS_4x4,
  5: SPAWN_WEIGHTS_5x5,
  6: SPAWN_WEIGHTS_6x6,
};
