import { Easing } from "react-native-reanimated";
import { Colours, Style } from "@styles";
import { IGameConfig } from "./hooks";
import { GameValue } from "./game";
import { Game2048GameState, Game2048StateModal, GameSkin } from "./types";
import { GameOptions } from "@containers/game/2048/gameContext";
import { SpotlightProps } from "@organisms/spotlight/spotlight";
import { t } from "@locale";

export const DEFAULT_GAME_CONFIG: IGameConfig = {
  finalScore: 1024,
  mode: "normal",
  boardSize: 4,
  enableHaptics: true,
};

export const DEFAULT_GAME_OPTIONS: GameOptions = {
  timer: {
    enableMinutePulseAnimation: true,
    enableMinuteAdditionAnimation: true,
    enableMinuteHapticsImpact: true,
    displayColor: Colours.neutral.white,
  },
};

export const theme = {
  backgroundPrimary: "#5727C83D",
  backgroundSecondary: "#290163",
  backgroundTertiary: "#CCC1B3",
  textPrimary: "#766E65",
  fonts: {
    bold: Style.FONT_FAMILY_PRIMARY_BOLD,
    regular: Style.FONT_FAMILY_PRIMARY,
  },
};

export const MARGIN = 5;

export const BOARD_WIDTH_MULTIPLIER = 0.95;

export const BOARD_SIZE = 5;

export const CELL_COLORS: Record<number, string> = {
  2: "#fcefe6",
  4: "#f2e8cb",
  8: "#f5b682",
  16: "#f29446",
  32: "#ff775c",
  64: "#e64c2e",
  128: "#ede291",
  256: "#fce130",
  512: "#ffdb4a",
  1024: "#f0b922",
  2048: "#fad74d",
};

export const CELL_NUMBER_COLORS: Record<number, string> = {
  2: "#695c57",
  4: "#695c57",
  8: "#ffffff",
  16: "#ffffff",
  32: "#ffffff",
  64: "#ffffff",
  128: "#ffffff",
  256: "#ffffff",
  512: "#ffffff",
  1024: "#ffffff",
  2048: "#ffffff",
};

export const CELL_NUMBER_FONT_SIZE: Record<number, number> = {
  2: 225 / BOARD_SIZE,
  4: 225 / BOARD_SIZE,
  8: 225 / BOARD_SIZE,
  16: 200 / BOARD_SIZE,
  32: 200 / BOARD_SIZE,
  64: 200 / BOARD_SIZE,
  128: 150 / BOARD_SIZE,
  256: 150 / BOARD_SIZE,
  512: 150 / BOARD_SIZE,
  1024: 100 / BOARD_SIZE,
  2048: 100 / BOARD_SIZE,
};

export const TILES: Record<GameSkin, Record<GameValue, string>> = {
  numerical: {
    2: require("./components/assets/tiles/numerical/2.png"),
    4: require("./components/assets/tiles/numerical/4.png"),
    8: require("./components/assets/tiles/numerical/8.png"),
    16: require("./components/assets/tiles/numerical/16.png"),
    32: require("./components/assets/tiles/numerical/32.png"),
    64: require("./components/assets/tiles/numerical/64.png"),
    128: require("./components/assets/tiles/numerical/128.png"),
    256: require("./components/assets/tiles/numerical/256.png"),
    512: require("./components/assets/tiles/numerical/512.png"),
    1024: require("./components/assets/tiles/numerical/1024.png"),
    2048: require("./components/assets/tiles/numerical/2048.png"),
  },
  symbols: {
    2: require("./components/assets/tiles/symbols/2.png"),
    4: require("./components/assets/tiles/symbols/4.png"),
    8: require("./components/assets/tiles/symbols/8.png"),
    16: require("./components/assets/tiles/symbols/16.png"),
    32: require("./components/assets/tiles/symbols/32.png"),
    64: require("./components/assets/tiles/symbols/64.png"),
    128: require("./components/assets/tiles/symbols/128.png"),
    256: require("./components/assets/tiles/symbols/256.png"),
    512: require("./components/assets/tiles/symbols/512.png"),
    1024: require("./components/assets/tiles/symbols/1024.png"),
    2048: require("./components/assets/tiles/symbols/2048.png"),
  },
};

export const ANIMATION_DURATION = 200;

export const EASING = Easing.elastic(0.8);

export const DEFAULT_GAME_STATE_MODALS: Partial<Record<Game2048GameState, Game2048StateModal>> = {
  [Game2048GameState.Win]: {
    displayImage: "trophy",
    allowRestart: true,
    copy: {
      title: t("2048.victory.title"),
      info: t("2048.victory.info"),
    },
    spotlight: JSON.stringify({
      rays: {
        opacity: 0.4,
      },
      glow: {
        radius: 120,
        color: "#D2A935",
        duration: 4000,
      },
      stars: {
        starSize: 10,
        dynamicStarCount: {
          initialCount: 15,
          minCount: 10,
          maxCount: 30,
        },
        radius: 200,
        shootingSpeed: [200, 1500],
        minDistance: 100,
        colors: ["#FFF", "#FCE93D"],
        fadeOutStartFraction: 0.7,
      },
    } as SpotlightProps),
  },
  [Game2048GameState.Lose]: {
    displayImage: "gameTiles",
    allowRestart: true,
    copy: {
      title: t("2048.lost.title"),
      info: t("2048.lost.info"),
    },
  },
};
