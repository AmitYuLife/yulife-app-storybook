/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DistanceMeasurementType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserProfile
// ====================================================

export interface GetUserProfile_getUserProfile_gameSettings {
  cyclingMeasurement: DistanceMeasurementType;
}

export interface GetUserProfile_getUserProfile {
  gameSettings: GetUserProfile_getUserProfile_gameSettings;
}

export interface GetUserProfile {
  getUserProfile: GetUserProfile_getUserProfile;
}
