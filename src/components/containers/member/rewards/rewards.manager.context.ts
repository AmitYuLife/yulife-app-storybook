import { createContext, Dispatch } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { REWARDS_MANAGER_INITIAL_STATE } from "./rewards.manager.reducer";
import { IRewardsManagerState, IRewardsManagerAction } from "./rewards.types";

interface IRewardsManagerContext {
  state: IRewardsManagerState;
  dispatch: Dispatch<IRewardsManagerAction>;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export const RewardsManagerContext = createContext<IRewardsManagerContext>({
  state: REWARDS_MANAGER_INITIAL_STATE,
  dispatch: () => {
    // ignore
  },
  onScroll: () => {
    // ignore
  },
});
