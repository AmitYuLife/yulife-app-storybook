import { IReduxState } from "../_core/reducers";

export const getSduiLoadingForKey = (key: string) => (state: IReduxState) => state.sdui[key as keyof typeof state.sdui];
export const getSduiLoading = (state: IReduxState) => state.sdui;
