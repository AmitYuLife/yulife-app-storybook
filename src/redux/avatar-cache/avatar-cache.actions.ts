export const CACHE_AVATAR_SVG = "CACHE_AVATAR_SVG";
export const INVALIDATE_USER_AVATAR_CACHE = "INVALIDATE_USER_AVATAR_CACHE";

export interface IAvatarCacheItem {
  isLoading: boolean;
  xml: string;
}

export const cacheAvatar = (payload: { key: string; xml: string }) => ({
  payload,
  type: CACHE_AVATAR_SVG,
});

export const invalidateUserAvatarCache = (key: string) => ({
  payload: { key },
  type: INVALIDATE_USER_AVATAR_CACHE,
});
