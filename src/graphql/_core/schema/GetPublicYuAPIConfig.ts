/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPublicYuAPIConfig
// ====================================================

export interface GetPublicYuAPIConfig_config_urls {
  members: string;
  website: string;
  privacyPolicy: string;
  rewardsPolicy: string;
}

export interface GetPublicYuAPIConfig_config_intercom {
  appId: string;
  ios: string;
  android: string;
}

export interface GetPublicYuAPIConfig_config_leanplum {
  appId: string;
  prodKey: string;
  devKey: string | null;
}

export interface GetPublicYuAPIConfig_config {
  language: string;
  stripeKey: string;
  mixpanelKey: string;
  urls: GetPublicYuAPIConfig_config_urls;
  intercom: GetPublicYuAPIConfig_config_intercom;
  leanplum: GetPublicYuAPIConfig_config_leanplum;
}

export interface GetPublicYuAPIConfig {
  config: GetPublicYuAPIConfig_config;
}
