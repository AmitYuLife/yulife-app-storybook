import { IReduxState } from "../_core/reducers";

export const getActiveProviderSelector = (state: IReduxState) => state.yuHealth.activeProvider;
