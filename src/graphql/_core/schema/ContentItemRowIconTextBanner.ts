/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemRowIconTextBannerType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemRowIconTextBanner
// ====================================================

export interface ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface ContentItemRowIconTextBanner {
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: ContentItemRowIconTextBanner_bannerIcon;
  styles: ContentItemRowIconTextBanner_styles[] | null;
}
