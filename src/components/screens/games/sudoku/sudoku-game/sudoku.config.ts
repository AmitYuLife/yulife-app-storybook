import { ISudokuConfig } from "@components/games/sudoku/sudoku.interface";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { Colours, Style } from "@styles";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import { WorldName } from "@utils";
import { PixelRatio } from "react-native";

// Cap the board height on near-square viewports (e.g. unfolded foldables) so the
// keypad below stays on screen. Keypad rows are square buttons sized board/5,
// so two rows ≈ 0.4 * board; the 1.9 divisor leaves headroom for the in-screen
// SudokuHeader (timer/date/mistakes), keypad paddings, and bottom safe area.
const sudokuAvailableHeight = Style.DEVICE_HEIGHT - TOP_BAR_WITH_PAD;
const sudokuHeightBasedBoardSize = sudokuAvailableHeight / 1.9;

// Board size
export const SUDOKU_BOARD_SIZE = PixelRatio.roundToNearestPixel(
  Math.min(Style.DEVICE_WIDTH * 0.95, sudokuHeightBasedBoardSize)
);

// Amount of cells per row/column
export const SUDOKU_DIMENSIONS = 9;

// Cell size
export const SUDOKU_CELL_SIZE = PixelRatio.roundToNearestPixel(SUDOKU_BOARD_SIZE / SUDOKU_DIMENSIONS);

// Cell animation speed
export const SUDOKU_CELL_TRANSITION_TIME = 250;

// How long before you activate a cell does its same-value cells become active
export const SUDOKU_SAME_VALUE_CELL_DELAY_TIME = 100;

// Animation for number entering/exiting animation
export const SODUKU_NUMBER_ANIMATION_TIME = 200;

// Aniamtion for penalty duration
export const SODUKU_PENALTY_ANIMATION_TIME = 1500;

// Animation for number scale wave when row/column completed
export const SUDOKU_NUMBER_WAVE_SCALE = 0.7;
export const SUDOKU_NUMBER_WAVE_SCALE_DURATION_MULT = 50;
export const SUDOKU_NUMBER_WAVE_SCALE_DURATION_REDUCE = -150;
export const SUDOKU_NUMBER_WAVE_SCALE_DURATION = 300;

// Date formatting
export const SUDOKU_PAUSE_ANIMATION_DURATION = 500;

export const SUDOKU_DEFAULT_CONFIG: ISudokuConfig = {
  PENALTY_HINT: 30,
  MISTAKES_BEFORE_PENALTY: 3,
  MISTAKE_PENALTY_TIME: 30,
  HINT_COOLDOWN: 60,
};

// Amount of cells per quadrant
export const SUDOKU_QUADRANT_DIMENSIONS = 3;

// Theme
export const SUDOKU_PLANET_STYLES = {
  [WorldName.forest]: {
    topBarType: TOP_BAR_TYPES.DEFAULT,
    color: Colours.neutral.n900,
  },
  [WorldName.ocean]: {
    topBarType: TOP_BAR_TYPES.WHITE,
    color: Colours.neutral.white,
  },
  [WorldName.desert]: {
    topBarType: TOP_BAR_TYPES.DEFAULT,
    color: Colours.neutral.n900,
  },
  [WorldName.mountain]: {
    topBarType: TOP_BAR_TYPES.DEFAULT,
    color: Colours.neutral.n900,
  },
};

export const SUDOKU_YUNIVERSAL_STYLES = {
  topBarType: TOP_BAR_TYPES.WHITE,
  color: Colours.neutral.white,
};
