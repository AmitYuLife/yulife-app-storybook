/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubmitSduiJourneyAction } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitSduiJourney
// ====================================================

export interface SubmitSduiJourney {
  submitSduiJourney: boolean | null;
}

export interface SubmitSduiJourneyVariables {
  journeyId: string;
  stepId: string;
  action: SubmitSduiJourneyAction;
  data: string;
}
