export const CACHE_AVATAR_SVG = "CACHE_AVATAR_SVG";

export interface IAvatarCacheItem {
  isLoading: boolean;
  xml: string;
}

export const cacheAvatar = (payload: { key: string; xml: string }) => ({
  payload,
  type: CACHE_AVATAR_SVG,
});
