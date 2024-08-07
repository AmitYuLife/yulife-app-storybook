import { createContext, useContext } from "react";

type NavigationContext = {
  componentId: string;
  onLeftMenuPress?: () => void;
};

const navigationInitialState: NavigationContext = {
  componentId: "",
};

export const NavigationContext = createContext(navigationInitialState);

export const useNavigation = () => {
  return useContext(NavigationContext);
};
