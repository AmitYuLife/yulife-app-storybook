import { createAction } from "@reduxjs/toolkit";
import { AdBanner } from "./ad-banners.types";

export const ADD_AD_BANNERS = "ADD_AD_BANNERS";

export const addAdBanners = createAction<AdBanner[], "ADD_AD_BANNERS">(ADD_AD_BANNERS);
