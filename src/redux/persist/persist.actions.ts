import { IReduxState } from "@redux/_core/reducers";
import { createAction } from "@reduxjs/toolkit";
import { REHYDRATE, PURGE } from "redux-persist";

export const rehydrateAction = createAction<IReduxState, typeof REHYDRATE>(REHYDRATE);
export const purgeAction = createAction<IReduxState, typeof PURGE>(PURGE);
