import { createAction } from "@reduxjs/toolkit";
import { AdBanner } from "./ad-banners.types";

const ADD_AD_BANNERS = "ADD_AD_BANNERS";

export const addAdBanners = createAction<AdBanner[], typeof ADD_AD_BANNERS>(ADD_AD_BANNERS);
