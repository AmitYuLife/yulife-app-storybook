import { createAction } from "@reduxjs/toolkit";
import { FitkitAuthorisePayload, FitkitSetupPayload } from "./fitkit.types";

const FITKIT_AUTHORISE_FAILED = "FITKIT_AUTHORISE_FAILED";
const FITKIT_AUTHORISE_SUCCEEDED = "FITKIT_AUTHORISE_SUCCEEDED";
const FITKIT_AUTHORISE_START = "FITKIT_AUTHORISE_START";
const FITKIT_SET_UP = "FITKIT_SET_UP";

export const fitkitAuthoriseFailed = createAction<FitkitAuthorisePayload, typeof FITKIT_AUTHORISE_FAILED>(
  FITKIT_AUTHORISE_FAILED
);
export const fitkitAuthoriseSucceeded = createAction<FitkitAuthorisePayload, typeof FITKIT_AUTHORISE_SUCCEEDED>(
  FITKIT_AUTHORISE_SUCCEEDED
);
export const fitkitAuthoriseStart = createAction(FITKIT_AUTHORISE_START);

export const fitkitSetup = createAction<FitkitSetupPayload, typeof FITKIT_SET_UP>(FITKIT_SET_UP);
