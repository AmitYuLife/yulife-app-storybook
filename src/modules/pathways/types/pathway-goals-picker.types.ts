export interface IPathwayGoalsPickerOption {
  id: string;
  itemId: string;
  title: string;
  score: number;
}

export enum PathwayGoalsPickerMode {
  Picking = "picking",
  Recap = "recap",
}

export enum PathwayGoalsPickerChoice {
  Accept = "accept",
  Skip = "skip",
}

export const PATHWAY_GOALS_PICKER_MAX_SELECTION = 3;

export interface IPathwayGoalCardColors {
  background: string;
  shadow: string;
}

// TODO: temporary — colours will come from the server alongside each goal.
const CARD_COLOR_CYCLE: IPathwayGoalCardColors[] = [
  { background: "#1675FF", shadow: "#0F4FB8" },
  { background: "#00B8DE", shadow: "#0084A0" },
  { background: "#28A87F", shadow: "#1B7256" },
];

export const getPathwayGoalCardColors = (index: number): IPathwayGoalCardColors => {
  const safeIndex = ((index % CARD_COLOR_CYCLE.length) + CARD_COLOR_CYCLE.length) % CARD_COLOR_CYCLE.length;
  return CARD_COLOR_CYCLE[safeIndex];
};
