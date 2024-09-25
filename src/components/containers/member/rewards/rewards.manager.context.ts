import { createContext, Dispatch, SetStateAction } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface IRewardsManagerContext {
  showTitle: boolean;
  activeTabsLength: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  setDynamicProps: Dispatch<SetStateAction<{ title: string; description: string }>>;
}

export const RewardsManagerContext = createContext<IRewardsManagerContext>({
  showTitle: false,
  activeTabsLength: 1,
  onScroll: () => {
    // ignore
  },
  setDynamicProps: () => {
    // ignore
  },
});
