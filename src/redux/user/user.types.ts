import { SduiActionType } from "@redux/_core/types";
import { features } from "./features.data";

export type UserConnection = Connections & { isLoading?: boolean };

type FeatureKey = typeof features[number];

export type IFeature = Record<FeatureKey, boolean>;

export type SurgeActivity = "steps" | "meditation" | "all" | null;

export interface Connections {
  name: string;
  isConnected: boolean;
  lastUpdated: number;
}

export interface SurgeLottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: SurgeLottieStyles[];
  onAnimationEnd: OnAnimationEnd;
  aspectRatio: number;
}

export interface SurgeLottieStyles {
  property: string;
  value: string;
}

export interface OnAnimationEnd {
  type: SduiActionType;
  payload: string;
}

export interface Events {
  id: string;
  /**
   * @deprecated
   */
  stageId: string;
  participationId: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: UserProfileEventStatus;
  challenges: EventsChallenges[];
  tags: EventsTags;
  joined: boolean;
  badge: EventsBadge;
  progressBar: EventsProgressBar;
  milestones: EventsMilestones[];
}

export enum UserProfileEventStatus {
  active = "active",
  completed = "completed",
}

export interface Icon {
  uri: string;
}

export interface EventsChallenges {
  description: string;
  icon: Icon;
}

export interface EventsTags {
  tag: string;
  joined: string;
  icon: Icon;
}

export interface EventsBadge {
  text: string;
  icon: Icon;
  backgroundColor: string;
}

export interface EventsProgressBar {
  max: number;
  current: number;
}

export interface EventsMilestones {
  targetValue: number;
  image: Icon;
  animated: boolean;
  rewardId: string;
  rewardClaimed: boolean;
  isClaimable: boolean;
}
