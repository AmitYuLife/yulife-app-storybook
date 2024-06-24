import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["detox"];
const reducer = (state: IReduxState) => state.detox;

const isSwitchingLocaleSelector = (state: State) => state.isSwitchingLocale;
export const getIsSwitchingDeviceLocale = createSelector(reducer, isSwitchingLocaleSelector);
