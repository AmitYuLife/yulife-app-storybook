import { toggleGameMode } from "./battle-pass.actions";
import { IBattlePassStore } from "./battle-pass.types";
import { createReducer } from "@reduxjs/toolkit";

export const getInitialState = (): IBattlePassStore => ({
  isBattlePassActive: false,
});

const detoxReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(toggleGameMode, (state) => toggleIsBattlePassActive(state));

  builder.addDefaultCase((state) => state);
});

const toggleIsBattlePassActive = (state: IBattlePassStore): IBattlePassStore => ({
  ...state,
  isBattlePassActive: !state.isBattlePassActive,
});

export default detoxReducer;
