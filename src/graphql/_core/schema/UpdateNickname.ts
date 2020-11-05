/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateNickname
// ====================================================

export interface UpdateNickname {
  /**
   * Allows the current user to update his nickname, given the nickname is not taken.
   */
  updateNickname: boolean | null;
}

export interface UpdateNicknameVariables {
  nickname: string;
}
