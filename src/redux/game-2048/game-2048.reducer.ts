import { createReducer } from "@reduxjs/toolkit";
import { updateGame2048HighScore } from "./game-2048.actions";

export interface IGame2048Store {
  highScore: number;
}

const DEFAULT_2048_STORE: IGame2048Store = {
  highScore: 0,
};

export const getInitialState = (): IGame2048Store => ({ ...DEFAULT_2048_STORE });

export const game2048Reducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateGame2048HighScore, (state, action) => ({ ...state, highScore: action.payload }));
  builder.addDefaultCase((state) => state);
});

export default game2048Reducer;
