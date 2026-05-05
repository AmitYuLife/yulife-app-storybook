export interface IGoalCompletionBannerEvent {
  id: string;
  messageKey:
    | "screens.pathways.goals.banner.first_completed"
    | "screens.pathways.goals.banner.halfway"
    | "screens.pathways.goals.banner.default";
}
