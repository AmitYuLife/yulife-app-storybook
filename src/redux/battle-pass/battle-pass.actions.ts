import { createAction } from "@reduxjs/toolkit";

export const TOGGLE_GAME_MODE = "TOGGLE_GAME_MODE";

export const toggleGameMode = createAction<undefined, typeof TOGGLE_GAME_MODE>(TOGGLE_GAME_MODE);
