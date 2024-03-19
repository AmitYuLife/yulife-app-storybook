import { SyncAction } from "../_core/types";
import { ADD_AD_BANNERS } from "./ad-banners.actions";
import { AdBanner } from "./ad-banners.types";

export interface IAdBannersStore {
  banners: AdBanner[];
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
