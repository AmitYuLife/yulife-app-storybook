import { createContext, Dispatch, SetStateAction } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface IRewardsManagerContext {
  showTitle: boolean;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  setDynamicProps: Dispatch<SetStateAction<{ title: string; description: string }>>;
}

export const RewardsManagerContext = createContext<IRewardsManagerContext>({
  showTitle: false,
  onScroll: () => {
    // ignore
  },
  setDynamicProps: () => {
    // ignore
  },
});
