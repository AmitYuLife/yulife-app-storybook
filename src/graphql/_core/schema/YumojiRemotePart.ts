/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { AvatarPartType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YumojiRemotePart
// ====================================================

export interface YumojiRemotePart_remoteUrl {
  id: string;
  uri: string | null;
}

export interface YumojiRemotePart {
  id: string;
  hidesPartTypes: AvatarPartType[];
  remoteUrl: YumojiRemotePart_remoteUrl;
}
