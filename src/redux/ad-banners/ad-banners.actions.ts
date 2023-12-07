import { GetAdBannersQuery } from "@graphql/__generated";

export const ADD_AD_BANNERS = "ADD_AD_BANNERS";

export const addAdBanners = (payload: GetAdBannersQuery["getAdBanners"]) => ({
  payload,
  type: ADD_AD_BANNERS,
});
