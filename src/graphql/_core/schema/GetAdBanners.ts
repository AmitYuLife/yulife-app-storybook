/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAdBanners
// ====================================================

export interface GetAdBanners_getAdBanners_imageUrl {
  uri: string | null;
}

export interface GetAdBanners_getAdBanners {
  id: string;
  imageUrl: GetAdBanners_getAdBanners_imageUrl;
  navigateTo: string;
  startDate: string;
  endDate: string | null;
  height: number | null;
  width: number | null;
}

export interface GetAdBanners {
  getAdBanners: (GetAdBanners_getAdBanners | null)[] | null;
}

export interface GetAdBannersVariables {
  place?: string | null;
}
