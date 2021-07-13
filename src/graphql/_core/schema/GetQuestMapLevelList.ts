/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetQuestMapLevelList
// ====================================================

export interface GetQuestMapLevelList_getQuestMapLevelList {
  id: string;
  __typename: "QuestMapLevelListItem";
  level: number;
  rating: number | null;
  levelChest: string | null;
}

export interface GetQuestMapLevelList {
  getQuestMapLevelList: GetQuestMapLevelList_getQuestMapLevelList[];
}
