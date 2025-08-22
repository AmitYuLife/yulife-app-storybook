import { createSelector } from "@reduxjs/toolkit";
import { IPrizesStore, IPrizeHintPopup } from "./prizes.types";
import { IReduxState } from "@redux/_core/reducers";

const reducer = (state: IReduxState): IPrizesStore => state.prizes;

const prizeHintQueueSelector = (state: IPrizesStore): IPrizeHintPopup[] => state.prizeHintQueue;
export const getPrizeHintQueue = createSelector(reducer, prizeHintQueueSelector);

const currentPrizeHintSelector = (state: IPrizesStore): IPrizeHintPopup | null => state.currentPrizeHint;
export const getCurrentPrizeHint = createSelector(reducer, currentPrizeHintSelector);
