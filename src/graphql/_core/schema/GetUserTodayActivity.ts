/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserTodayActivity
// ====================================================

export interface GetUserTodayActivity_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface GetUserTodayActivity {
  todayActivity: (GetUserTodayActivity_todayActivity | null)[] | null;
}
