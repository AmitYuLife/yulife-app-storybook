import { setLoadingState } from "./sdui.actions";
import { createReducer } from "@reduxjs/toolkit";
import { ISduiStore } from "./sdui.types";

export const getInitialState = (): ISduiStore => ({ __disabled: false });

const serverDrivenUIReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(setLoadingState, (_state, action) => ({
    ...action.payload,
  }));

  builder.addDefaultCase((state) => state);
});

export default serverDrivenUIReducer;
