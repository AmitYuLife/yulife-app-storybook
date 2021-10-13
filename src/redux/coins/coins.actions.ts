export const UPDATE_TOTAL_COINS = "UPDATE_TOTAL_COINS";

export const totalCoinsUpdated = (payload: number) => ({
  payload,
  type: UPDATE_TOTAL_COINS as typeof UPDATE_TOTAL_COINS,
});
