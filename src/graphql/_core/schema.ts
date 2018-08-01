

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChallengesList
// ====================================================

export interface ChallengesList_getChallenges_milestones {
  target: (number | null)[] | null;
  coins: number | null;
}

export interface ChallengesList_getChallenges {
  id: string | null;
  subtype: string | null;
  level: number | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  timelimit: number | null;
  unit: string | null;
  milestones: (ChallengesList_getChallenges_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface ChallengesList {
  getChallenges: (ChallengesList_getChallenges | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DailySteps
// ====================================================

export interface DailySteps_getCurrentUser_userStatus {
  totalCoins: number | null;
}

export interface DailySteps_getCurrentUser_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface DailySteps_getCurrentUser {
  userStatus: DailySteps_getCurrentUser_userStatus | null;
  userFeatures: (DailySteps_getCurrentUser_userFeatures | null)[] | null;
}

export interface DailySteps {
  getCurrentUser: DailySteps_getCurrentUser | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAlphaUser
// ====================================================

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_passive_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_passive_challengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_passive_challengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (createAlphaUser_createAlphaUser_user_userStatus_challenges_passive_challengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_passive {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (createAlphaUser_createAlphaUser_user_userStatus_challenges_passive_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
  challengeTemplate: createAlphaUser_createAlphaUser_user_userStatus_challenges_passive_challengeTemplate | null;
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_active_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_active_challengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_active_challengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (createAlphaUser_createAlphaUser_user_userStatus_challenges_active_challengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges_active {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (createAlphaUser_createAlphaUser_user_userStatus_challenges_active_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
  challengeTemplate: createAlphaUser_createAlphaUser_user_userStatus_challenges_active_challengeTemplate | null;
}

export interface createAlphaUser_createAlphaUser_user_userStatus_challenges {
  passive: createAlphaUser_createAlphaUser_user_userStatus_challenges_passive | null;
  nextActiveAvailable: number | null;
  active: createAlphaUser_createAlphaUser_user_userStatus_challenges_active | null;
}

export interface createAlphaUser_createAlphaUser_user_userStatus {
  totalCoins: number | null;
  challenges: createAlphaUser_createAlphaUser_user_userStatus_challenges | null;
}

export interface createAlphaUser_createAlphaUser_user_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface createAlphaUser_createAlphaUser_user {
  __typename: "User";
  id: string | null;
  businessAccountId: string | null;
  membershipType: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  smokerStatus: string | null;
  bmi: string | null;
  userStatus: createAlphaUser_createAlphaUser_user_userStatus | null;
  userFeatures: (createAlphaUser_createAlphaUser_user_userFeatures | null)[] | null;
}

export interface createAlphaUser_createAlphaUser {
  token: string | null;
  expiresAt: number | null;
  message: string | null;
  user: createAlphaUser_createAlphaUser_user | null;
}

export interface createAlphaUser {
  createAlphaUser: createAlphaUser_createAlphaUser | null;
}

export interface createAlphaUserVariables {
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
  dateOfBirth?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginUser
// ====================================================

export interface loginUser_loginUser_user_userStatus_challenges_passive_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface loginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface loginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (loginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface loginUser_loginUser_user_userStatus_challenges_passive {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (loginUser_loginUser_user_userStatus_challenges_passive_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
  challengeTemplate: loginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate | null;
}

export interface loginUser_loginUser_user_userStatus_challenges_active_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface loginUser_loginUser_user_userStatus_challenges_active_challengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface loginUser_loginUser_user_userStatus_challenges_active_challengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (loginUser_loginUser_user_userStatus_challenges_active_challengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface loginUser_loginUser_user_userStatus_challenges_active {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (loginUser_loginUser_user_userStatus_challenges_active_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
  challengeTemplate: loginUser_loginUser_user_userStatus_challenges_active_challengeTemplate | null;
}

export interface loginUser_loginUser_user_userStatus_challenges {
  passive: loginUser_loginUser_user_userStatus_challenges_passive | null;
  nextActiveAvailable: number | null;
  active: loginUser_loginUser_user_userStatus_challenges_active | null;
}

export interface loginUser_loginUser_user_userStatus {
  totalCoins: number | null;
  challenges: loginUser_loginUser_user_userStatus_challenges | null;
}

export interface loginUser_loginUser_user_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface loginUser_loginUser_user {
  __typename: "User";
  id: string | null;
  businessAccountId: string | null;
  membershipType: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  smokerStatus: string | null;
  bmi: string | null;
  userStatus: loginUser_loginUser_user_userStatus | null;
  userFeatures: (loginUser_loginUser_user_userFeatures | null)[] | null;
}

export interface loginUser_loginUser {
  token: string | null;
  expiresAt: number | null;
  message: string | null;
  user: loginUser_loginUser_user | null;
}

export interface loginUser {
  loginUser: loginUser_loginUser | null;
}

export interface loginUserVariables {
  email: string;
  password: string;
  method?: LoginMethod | null;
  tokenExpiration?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Challenge
// ====================================================

export interface Challenge_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface Challenge {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (Challenge_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Milestone
// ====================================================

export interface Milestone {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ChallengeTemplate
// ====================================================

export interface ChallengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface ChallengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (ChallengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface User_userStatus_currentActiveChallenge {
  challengeId: string | null;
  challengeTemplateId: string | null;
}

export interface User_userStatus {
  currentActiveChallenge: User_userStatus_currentActiveChallenge | null;
  customerId: string | null;
  totalCoins: number | null;
  totalXP: number | null;
  level: number | null;
  __typename: "UserStatus";
}

export interface User {
  id: string | null;
  businessAccountId: string | null;
  membershipType: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  smokerStatus: string | null;
  bmi: string | null;
  __typename: "User";
  userFeatures: (User_userFeatures | null)[] | null;
  userStatus: User_userStatus | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserStatus
// ====================================================

export interface UserStatus_currentActiveChallenge {
  challengeId: string | null;
  challengeTemplateId: string | null;
}

export interface UserStatus {
  currentActiveChallenge: UserStatus_currentActiveChallenge | null;
  customerId: string | null;
  totalCoins: number | null;
  totalXP: number | null;
  level: number | null;
  __typename: "UserStatus";
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LoginMethod {
  FACEBOOK = "FACEBOOK",
  OTP = "OTP",
  PASSWORD = "PASSWORD",
}

//==============================================================
// END Enums and Input Objects
//==============================================================