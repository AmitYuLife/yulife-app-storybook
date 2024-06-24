import { updateIsSwitchingLocale as updateIsSwitchingLocaleAction } from "./detox.actions";
import { IDetoxStore } from "./detox.types";
import { createReducer } from "@reduxjs/toolkit";

export const getInitialState = (): IDetoxStore => ({
  isSwitchingLocale: false,
});

const detoxReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateIsSwitchingLocaleAction, (state, action) => updateIsSwitchingLocale(state, action.payload));

  builder.addDefaultCase((state) => state);
});

const updateIsSwitchingLocale = (state: IDetoxStore, isSwitchingLocale: boolean): IDetoxStore => ({
  ...state,
  isSwitchingLocale,
});

export default detoxReducer;
