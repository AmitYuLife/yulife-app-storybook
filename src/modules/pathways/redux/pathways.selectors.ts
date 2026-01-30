import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "@redux/_core/reducers";

const reducer = (state: IReduxState) => state.pathways;

export const getPathwayChallengeId = createSelector(reducer, (state) => state.pathwayChallengeId);
