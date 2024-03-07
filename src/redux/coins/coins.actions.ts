import { createAction } from "@reduxjs/toolkit";
export const UPDATE_TOTAL_COINS = "UPDATE_TOTAL_COINS";
export const REFRESH_TOTAL_COINS = "REFRESH_TOTAL_COINS";

export const totalCoinsUpdated = createAction<number>(UPDATE_TOTAL_COINS);

export const refreshTotalCoins = createAction(REFRESH_TOTAL_COINS);
