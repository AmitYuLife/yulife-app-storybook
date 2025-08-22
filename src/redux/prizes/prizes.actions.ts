import { createAction } from "@reduxjs/toolkit";
import { AddPrizeHintToQueuePayload, IPrizeAwardedPayload, IPrizeExplainedPayload } from "./prizes.types";

export const PRIZE_AWARDED = "PRIZE_AWARDED";
export const PRIZE_EXPLAINED = "PRIZE_EXPLAINED";
export const ADD_PRIZE_HINT_TO_QUEUE = "ADD_PRIZE_HINT_TO_QUEUE";
export const CLEAR_CURRENT_PRIZE_HINT = "CLEAR_CURRENT_PRIZE_HINT";

export const prizesAwarded = createAction<IPrizeAwardedPayload, typeof PRIZE_AWARDED>(PRIZE_AWARDED);
export const prizeTypeExplained = createAction<IPrizeExplainedPayload, typeof PRIZE_EXPLAINED>(PRIZE_EXPLAINED);
export const addPrizeHintToQueue = createAction<AddPrizeHintToQueuePayload, typeof ADD_PRIZE_HINT_TO_QUEUE>(
  ADD_PRIZE_HINT_TO_QUEUE
);

export const clearCurrentPrizeHint = createAction(CLEAR_CURRENT_PRIZE_HINT);
