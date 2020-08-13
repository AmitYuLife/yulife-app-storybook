import { Navigation } from "react-native-navigation";
import { ROUTES } from "./constants";

export function handleNavigateBack(componentId: string) {
  return function () {
    Navigation.pop(componentId);
  };
}

export function handleNavigateToQuestsTab() {
  Navigation.mergeOptions(ROUTES.quests, {
    bottomTabs: {
      currentTabIndex: 1,
    },
    statusBar: {
      drawBehind: false,
      visible: true,
    },
  });
}
