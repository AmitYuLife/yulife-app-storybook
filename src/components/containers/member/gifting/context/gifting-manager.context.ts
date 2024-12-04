import { createContext, Dispatch } from "react";
import { GIFTING_MANAGER_INITIAL_STATE } from "./gifting-manager.reducer";
import { IGiftingManagerState, IGiftingManagerAction } from "./gifting-manager.types";

interface IGiftingManagerContext {
  state: IGiftingManagerState;
  dispatch: Dispatch<IGiftingManagerAction>;
}

export const GiftingManagerContext = createContext<IGiftingManagerContext>({
  state: GIFTING_MANAGER_INITIAL_STATE,
  dispatch: () => {
    // ignore
  },
});
