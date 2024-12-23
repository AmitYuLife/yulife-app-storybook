import { omit } from "lodash";
import { IGiftingManagerState, IGiftingManagerAction, GiftingManagerActionTypes } from "./gifting-manager.types";

export const GIFTING_MANAGER_INITIAL_STATE: IGiftingManagerState = {
  targetUsers: {},
  maxTarget: 1,
};

export const giftingManagerReducer = (
  state: IGiftingManagerState,
  action: IGiftingManagerAction
): IGiftingManagerState => {
  switch (action.type) {
    case GiftingManagerActionTypes.TOGGLE_GIFTING_TARGET_USER_ACTION: {
      const isTargetSelected = !!state.targetUsers[action.payload.id];
      const targetRemoved = omit(state.targetUsers, action.payload.id);
      const targetUsers = isTargetSelected
        ? targetRemoved
        : {
            ...state.targetUsers,
            [action.payload.id]: action.payload,
          };

      return {
        ...state,
        targetUsers,
      };
    }

    case GiftingManagerActionTypes.SET_MAX_GIFTING_TARGETS_ACTION: {
      return {
        ...state,
        maxTarget: action.payload,
      };
    }

    default:
      return state;
  }
};
