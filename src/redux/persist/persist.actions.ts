import { IReduxState } from "@redux/_core/reducers";
import { createAction } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

export const rehydrateAction = createAction<IReduxState, "persist/REHYDRATE">(REHYDRATE);
