

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChallengesList
// ====================================================

export interface ChallengesList_getChallenges_milestones {
  id: string | null;
  target: (number | null)[] | null;
  coins: number | null;
}

export interface ChallengesList_getChallenges {
  id: string | null;
  type: string | null;
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
// GraphQL mutation operation: loginUser
// ====================================================

export interface loginUser_loginUser_user_userStatus {
  totalCoins: number | null;
}

export interface loginUser_loginUser_user_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface loginUser_loginUser_user {
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