import { createReducer } from "@reduxjs/toolkit";
import { fitkitAuthoriseFailed, fitkitAuthoriseStart, fitkitAuthoriseSucceeded, fitkitSetup } from "./fitkit.actions";
import { IFitkitStore } from "./fitkit.types";

export const getInitialState = (): IFitkitStore => ({
  authorised: true,
  healthApp: "",
  available: true,
  initialized: false,
  loading: true,
});

const fitkitReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(fitkitAuthoriseFailed, (state, action) => ({
    ...state,
    authorised: state.healthApp === action.payload.healthApp ? false : state.authorised,
    healthApp: state.healthApp === action.payload.healthApp ? "" : state.healthApp,
    loading: false,
  }));
  builder.addCase(fitkitAuthoriseSucceeded, (state, action) => ({
    ...state,
    authorised: true,
    initialized: true,
    healthApp: action.payload.healthApp,
    loading: false,
  }));
  builder.addCase(fitkitAuthoriseStart, (state) => {
    state.loading = true;
  });
  builder.addCase(fitkitSetup, (state, action) => ({
    ...state,
    ...action.payload,
    initialized: true,
    loading: false,
  }));
  builder.addDefaultCase((state) => state);
});

export default fitkitReducer;
