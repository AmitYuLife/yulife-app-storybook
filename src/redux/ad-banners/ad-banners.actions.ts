import { GetAdBanners_getAdBanners } from "@graphql/_core/schema";

export const ADD_AD_BANNERS = "ADD_AD_BANNERS";

export const addAdBanners = (payload: GetAdBanners_getAdBanners[]) => ({
  payload,
  type: ADD_AD_BANNERS,
});
