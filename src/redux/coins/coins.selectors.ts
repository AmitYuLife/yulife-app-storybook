import { IReduxState } from "../_core/reducers";

export const getTotalCoins = (state: IReduxState) => state.coins.total;
