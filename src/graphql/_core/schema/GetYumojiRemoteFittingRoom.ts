/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, YuWorld, AvatarPartType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYumojiRemoteFittingRoom
// ====================================================

export interface GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts {
  id: string;
  partType: AvatarPartType;
  remoteUrl: GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts_remoteUrl;
}

export interface GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds {
  id: YuWorld;
  title: string;
  mainColor: string;
  secondaryColor: string;
  yumojiParts: GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts[];
}

export interface GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom {
  id: string;
  selectedYuWorld: YuWorld;
  yuWorlds: GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds[];
}

export interface GetYumojiRemoteFittingRoom {
  /**
   * Used for personal products when needed to try on a new armour piece
   */
  getYumojiRemoteFittingRoom: GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom;
}

export interface GetYumojiRemoteFittingRoomVariables {
  customerProductId: string;
  coverType: CoverType;
}
