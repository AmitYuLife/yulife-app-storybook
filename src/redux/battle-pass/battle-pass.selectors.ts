import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["battlePass"];
const reducer = (state: IReduxState) => state.battlePass;

const isBattlePassActive = (state: State) => state.isBattlePassActive;
export const getIsBattlePassActive = createSelector(reducer, isBattlePassActive);
