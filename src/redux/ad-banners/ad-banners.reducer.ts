import { GetAdBanners_getAdBanners } from "@graphql/_core/schema";
import { SyncAction } from "../_core/types";
import { ADD_AD_BANNERS } from "./ad-banners.actions";

export interface IAdBannersStore {
  banners: GetAdBanners_getAdBanners[];
}

export const getInitialAdbannersState = (): IAdBannersStore => ({
  banners: [],
});

const adBannersReducer = (state: IAdBannersStore = getInitialAdbannersState(), action: SyncAction): IAdBannersStore => {
  switch (action.type) {
    case ADD_AD_BANNERS:
      return {
        ...state,
        banners: action.payload,
      };

    default:
      return state;
  }
};

export default adBannersReducer;
