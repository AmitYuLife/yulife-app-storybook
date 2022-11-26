/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetQuestMap
// ====================================================

export interface GetQuestMap_levels {
  id: string;
  __typename: "QuestMapLevelListItem";
  level: number;
  rating: number | null;
  levelChest: string | null;
}

export interface GetQuestMap {
  levels: GetQuestMap_levels[];
}
