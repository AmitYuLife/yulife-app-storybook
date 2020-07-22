import { SyncAction } from "../_core/types";
import { CACHE_AVATAR_SVG, IAvatarCacheItem } from "./avatar-cache.actions";

export interface IAvatarCacheStore {
  [key: string]: IAvatarCacheItem;
}

export const initialState: IAvatarCacheStore = {};

const avatarCacheReducer = (state: IAvatarCacheStore = initialState, action: SyncAction) => {
  switch (action.type) {
    case CACHE_AVATAR_SVG:
      return {
        ...state,
        [action.payload.key]: {
          isLoading: false,
          xml: action.payload.xml,
        },
      };
    default:
      return state;
  }
};

export default avatarCacheReducer;
