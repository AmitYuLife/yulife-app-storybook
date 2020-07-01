import { Navigation } from "react-native-navigation";

export function handleNavigateBack(componentId: string) {
  return function () {
    Navigation.pop(componentId);
  };
}
