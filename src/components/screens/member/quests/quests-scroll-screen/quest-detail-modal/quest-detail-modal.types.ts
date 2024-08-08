import { VoidFunction } from "@utils";

type GoalMilestone = {
  goalId: string;
  milestoneId?: string;
};

export type QuestDetailModalContainerProps = {
  name?: string;
  yuniversalMap?: number;
  level: number;
  onPressCta: VoidFunction;
  onPressClose: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  ctaLabelSubmit?: string;
  ctaLabelReject?: string;
  heading?: string;
  goals: Array<GoalMilestone>;
  nextAvailableAt?: string;
  displayChestCard?: boolean;
};

export type QuestFeatureToggles = {
  useHalfModalsForQuestMap: boolean;
};

export type LegacyQuestModalProps = {
  componentId: string;
  yuniversalMap: number;
  isNext: boolean;
  level: number;
};
