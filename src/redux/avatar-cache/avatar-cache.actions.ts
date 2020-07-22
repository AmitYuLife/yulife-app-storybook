export const SAVE_AVATAR_TO_CACHE = "SAVE_AVATAR_TO_CACHE";
export const INVALIDATE_USER_AVATAR_CACHE = "INVALIDATE_USER_AVATAR_CACHE";
export const FETCH_AVATAR = "FETCH_AVATAR";

export const saveAvatarToCache = (payload: ISaveAvatarToCache) => ({
  payload,
  type: SAVE_AVATAR_TO_CACHE,
});

export const invalidateUserAvatarCache = (payload: IInvalidateUserAvatarCachePayload) => ({
  payload,
  type: INVALIDATE_USER_AVATAR_CACHE,
});

export const fetchAvatar = (payload: IFetchAvatarPayload) => ({
  payload,
  type: FETCH_AVATAR,
});

export interface ISaveAvatarToCache {
  uri: string;
  xml: string;
}

export interface IInvalidateUserAvatarCachePayload {
  uri: string;
}

export interface IFetchAvatarPayload {
  uri: string;
}
