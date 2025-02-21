import { logOutSuccess } from "../user/user.actions";
import { createReducer } from "@reduxjs/toolkit";
import { IPrizeExplainedPayload, IPrizesStore } from "./prizes.types";
import { prizeTypeExplained } from "./prizes.actions";

export const getInitialPrizesState = (): IPrizesStore => ({
  explainedPrizeTypes: {},
});

const prizesReducer = createReducer(getInitialPrizesState(), (builder) => {
  builder.addCase(logOutSuccess, getInitialPrizesState);
  builder.addCase(prizeTypeExplained, (state, action) => setPrizeTypeExplained(state, action.payload));
});

const setPrizeTypeExplained = (state: IPrizesStore, payload: IPrizeExplainedPayload) => ({
  ...state,
  explainedPrizeTypes: {
    ...state.explainedPrizeTypes,
    [payload.prizeType]: true,
  },
});

export default prizesReducer;
