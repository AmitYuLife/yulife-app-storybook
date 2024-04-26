import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["dailyPension"];
const reducer = (state: IReduxState) => state.dailyPension;

const dailyPensionContribution = (state: State) => ({
  active: state.active,
  contribution: state.contribution || "",
});
export const getDailyPensionContribution = createSelector(reducer, dailyPensionContribution);
