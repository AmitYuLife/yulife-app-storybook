import { createAction } from "@reduxjs/toolkit";
import { IPrizeAwardedPayload, IPrizeExplainedPayload } from "./prizes.types";

export const PRIZE_AWARDED = "PRIZE_AWARDED";
export const PRIZE_EXPLAINED = "PRIZE_EXPLAINED";

export const prizesAwarded = createAction<IPrizeAwardedPayload, typeof PRIZE_AWARDED>(PRIZE_AWARDED);
export const prizeTypeExplained = createAction<IPrizeExplainedPayload, typeof PRIZE_EXPLAINED>(PRIZE_EXPLAINED);
