import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";
import { IAvatarCacheStore, convertUriToKey } from "./avatar-cache.reducer";

const reducer = (state: IReduxState): IAvatarCacheStore => state.avatarCache;

export const getCachedAvatarSelector = createSelector(
  reducer,
  (_: IReduxState, uri: string) => ({ uri }),
  (state: IAvatarCacheStore, { uri }): string => state[convertUriToKey(uri)]?.xml
);

export const isInFlightSelector = createSelector(
  reducer,
  (_: IReduxState, uri: string) => ({ uri }),
  (state: IAvatarCacheStore, { uri }): boolean => !!state[convertUriToKey(uri)]?.uri
);
