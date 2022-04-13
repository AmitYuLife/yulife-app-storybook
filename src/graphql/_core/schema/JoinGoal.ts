/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinGoal
// ====================================================

export interface JoinGoal_joinGoal_challenges_icon {
  uri: string | null;
}

export interface JoinGoal_joinGoal_challenges {
  description: string;
  icon: JoinGoal_joinGoal_challenges_icon;
}

export interface JoinGoal_joinGoal_tags_icon {
  uri: string | null;
}

export interface JoinGoal_joinGoal_tags {
  tag: string;
  joined: string | null;
  icon: JoinGoal_joinGoal_tags_icon;
}

export interface JoinGoal_joinGoal_badge_icon {
  uri: string | null;
}

export interface JoinGoal_joinGoal_badge {
  text: string;
  icon: JoinGoal_joinGoal_badge_icon;
  backgroundColor: string | null;
}

export interface JoinGoal_joinGoal_progressBar {
  max: number;
  current: number;
}

export interface JoinGoal_joinGoal_milestones_image {
  uri: string | null;
}

export interface JoinGoal_joinGoal_milestones {
  targetValue: number;
  image: JoinGoal_joinGoal_milestones_image | null;
  animated: boolean | null;
  rewardId: string | null;
  rewardClaimed: boolean | null;
}

export interface JoinGoal_joinGoal {
  id: string;
  stageId: string;
  title: string;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  challenges: JoinGoal_joinGoal_challenges[];
  tags: JoinGoal_joinGoal_tags;
  joined: boolean | null;
  badge: JoinGoal_joinGoal_badge | null;
  progressBar: JoinGoal_joinGoal_progressBar;
  milestones: JoinGoal_joinGoal_milestones[];
}

export interface JoinGoal {
  joinGoal: JoinGoal_joinGoal | null;
}

export interface JoinGoalVariables {
  goalId: string;
}
