import { createReducer } from "@reduxjs/toolkit";
import { logOutSuccess } from "@redux/user/user.actions";
import { pathwayChallengeStarted, pathwayChallengeEnded } from "./pathways.actions";
import { IPathwaysStore } from "./pathways.types";

export const getInitialState = (): IPathwaysStore => ({
  pathwayChallengeId: null,
});

const pathwaysReducer = createReducer<IPathwaysStore>(getInitialState(), (builder) => {
  builder.addCase(pathwayChallengeStarted, (state, action) => {
    return {
      ...state,
      pathwayChallengeId: action.payload.pathwayChallengeId,
    };
  });
  builder.addCase(pathwayChallengeEnded, (state) => {
    return {
      ...state,
      pathwayChallengeId: null,
    };
  });
  builder.addCase(logOutSuccess, () => getInitialState());
  builder.addDefaultCase((state) => state);
});

export default pathwaysReducer;
