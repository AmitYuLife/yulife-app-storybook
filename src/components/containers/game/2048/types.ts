import { GameOptions } from "@containers/game/2048/gameContext";
import { VariableRemoteImage } from "@redux/_core/types";

export type GameSkin = "numerical" | "symbols";

export type GameEarlyExitHandle = {
  /**
   * @returns true if handler handled the event
   */
  onEarlyExit: () => boolean;
};

type DisplayImage = "gameTiles" | "trophy" | "heart";

type GameStateCopy = {
  title?: string;
  info?: string;
  description?: string;
};

export type Game2048StateModal = {
  image?: VariableRemoteImage;
  displayImage?: DisplayImage;

  spotlight?: string; // SpotlightProps
  copy?: GameStateCopy;
  allowRestart?: boolean;
};

export enum Game2048GameState {
  Win = "WIN",
  Lose = "LOSE",
  Exiting = "EXITING",
}

type Game2048ScreensOverlay = Game2048StateModal & {
  state: Game2048GameState;
  timer?: {
    min?: number;
    max?: number;
  };
};

export type Game2048Options = GameOptions & {
  screens: {
    overlays: Game2048ScreensOverlay[];
  };
};
