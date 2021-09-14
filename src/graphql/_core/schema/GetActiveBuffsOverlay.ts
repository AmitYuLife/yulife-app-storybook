/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BuffArea } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetActiveBuffsOverlay
// ====================================================

export interface GetActiveBuffsOverlay_getActiveBuffsOverlay_icon {
  id: string;
  uri: string | null;
}

export interface GetActiveBuffsOverlay_getActiveBuffsOverlay_image {
  id: string;
  uri: string | null;
}

export interface GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment_buffs_icon {
  id: string;
  uri: string | null;
}

export interface GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment_buffs {
  icon: GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment_buffs_icon;
  title: string;
  description: string;
}

export interface GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment {
  slotUri: string;
  iconUri: string;
  buffs: GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment_buffs[];
}

export interface GetActiveBuffsOverlay_getActiveBuffsOverlay {
  icon: GetActiveBuffsOverlay_getActiveBuffsOverlay_icon;
  image: GetActiveBuffsOverlay_getActiveBuffsOverlay_image;
  title: string;
  equipment: GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment[];
}

export interface GetActiveBuffsOverlay {
  getActiveBuffsOverlay: GetActiveBuffsOverlay_getActiveBuffsOverlay;
}

export interface GetActiveBuffsOverlayVariables {
  buffTypes: BuffArea[];
}
