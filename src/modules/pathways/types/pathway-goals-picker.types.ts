import { AvailablePathwayGoal } from "@graphql/__generated/graphql";

export type IPathwayGoalsPickerOption = AvailablePathwayGoal;

export enum PathwayGoalsPickerMode {
  Picking = "picking",
  Recap = "recap",
}

export enum PathwayGoalsPickerChoice {
  Accept = "accept",
  Skip = "skip",
}
