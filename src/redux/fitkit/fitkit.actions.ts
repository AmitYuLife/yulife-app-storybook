export const FITKIT_AUTHORISE_FAILED = "FITKIT_AUTHORISE_FAILED";
export const FITKIT_AUTHORISE_SUCCEEDED = "FITKIT_AUTHORISE_SUCCEEDED";
export const FITKIT_AUTHORISE_START = "FITKIT_AUTHORISE_START";
export const FITKIT_SET_UP = "FITKIT_SET_UP";

export const fitkitAuthoriseFailed = (payload: { healthApp: string }) => ({
  payload,
  type: FITKIT_AUTHORISE_FAILED,
});

export const fitkitAuthoriseSucceeded = (payload: { healthApp: string }) => ({
  payload,
  type: FITKIT_AUTHORISE_SUCCEEDED,
});

export const fitkitAuthoriseStart = () => ({
  type: FITKIT_AUTHORISE_START,
});

export const fitkitSetup = (payload: { available: boolean; authorised: boolean }) => ({
  payload,
  type: FITKIT_SET_UP,
});
