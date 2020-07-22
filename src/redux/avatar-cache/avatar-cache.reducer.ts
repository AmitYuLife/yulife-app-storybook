import { SyncAction } from "../_core/types";
import {
  SAVE_AVATAR_TO_CACHE,
  INVALIDATE_USER_AVATAR_CACHE,
  ISaveAvatarToCache,
  IInvalidateUserAvatarCachePayload,
} from "./avatar-cache.actions";

export interface IAvatarCacheStore {
  [key: string]: ISaveAvatarToCache;
}

export const initialState: IAvatarCacheStore = {};

const avatarCacheReducer = (state: IAvatarCacheStore = initialState, action: SyncAction) => {
  switch (action.type) {
    case INVALIDATE_USER_AVATAR_CACHE:
      return invalidateUserCache(state, action.payload);
    case SAVE_AVATAR_TO_CACHE:
      return saveAvatarToCache(state, action.payload);
    default:
      return state;
  }
};

export default avatarCacheReducer;

const invalidateUserCache = (
  state: IAvatarCacheStore,
  payload: IInvalidateUserAvatarCachePayload
): IAvatarCacheStore => ({
  ...state,
  [convertUriToKey(payload.uri)]: undefined,
});

const saveAvatarToCache = (state: IAvatarCacheStore, payload: ISaveAvatarToCache): IAvatarCacheStore => ({
  ...state,
  [convertUriToKey(payload.uri)]: payload,
});

export const convertUriToKey = (uri: string) => uri.split(".svg")[0].replace(/[^0-9a-zA-Z]/gi, "");
