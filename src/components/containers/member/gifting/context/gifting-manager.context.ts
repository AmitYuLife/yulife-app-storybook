import { createContext } from "react";
import { IGiftingManagerState } from "./gifting-manager.types";
import { UserSearchItem } from "@redux/_core/types";

interface IGiftingManagerContext extends IGiftingManagerState {
  setTargetUsers: (payload: UserSearchItem) => void;
}

export const GiftingManagerContext = createContext<IGiftingManagerContext>({
  maxTarget: 0,
  maxDailySend: 0,
  targetUsers: {},
  setTargetUsers: () => ({}),
});
