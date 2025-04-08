import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["fitkit"];
export const fitkitSelector = (state: IReduxState) => state.fitkit;

const fitkitIsAuthorisedSelector = (fitkit: State) => fitkit.authorised;
export const getFitkitIsAuthorised = createSelector(fitkitSelector, fitkitIsAuthorisedSelector);

const fitkitAvailableSelector = (fitkit: State) => fitkit.available;
export const getFitkitAvailable = createSelector(fitkitSelector, fitkitAvailableSelector);

const fitkitInitializedSelector = (fitkit: State) => fitkit.initialized;
export const getFitkitInitilized = createSelector(fitkitSelector, fitkitInitializedSelector);

const fitkitLoadingSelector = (fitkit: State) => fitkit.loading;
export const getFitkitLoading = createSelector(fitkitSelector, fitkitLoadingSelector);

const fitkitHealthApp = (fitkit: State) => fitkit.healthApp;
export const getFitkitHealthApp = createSelector(fitkitSelector, fitkitHealthApp);
