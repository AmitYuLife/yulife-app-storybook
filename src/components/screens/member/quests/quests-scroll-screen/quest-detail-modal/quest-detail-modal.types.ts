import { VoidFunction } from "@utils";

export type QuestDetailModalType = "unavailable" | "chest" | "next";

type GoalMilestone = {
  goalId: string;
  milestoneId: string;
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

export type QuestDetailModalProps = {
  onPressCta: VoidFunction;
  onPressClose: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  heading?: string;
  HeaderIcon: (props: any) => JSX.Element;
  ctaLabel?: string;
  dismissLabel?: string;
  children?: React.ReactNode;
  nextAvailableAt?: string;
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
