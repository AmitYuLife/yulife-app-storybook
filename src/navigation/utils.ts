import { Navigation } from "react-native-navigation";
import { ROUTES } from "./constants";
import { WebViewContainerProps } from "@components/containers/web-view/web-view.container";

export function handleNavigateBack(componentId: string) {
  return function () {
    Navigation.pop(componentId);
  };
}

export function handleOpenWebView(componentId: string, props: WebViewContainerProps) {
  Navigation.push<WebViewContainerProps>(componentId, {
    component: {
      id: ROUTES.webView,
      name: ROUTES.webView,
      passProps: props,
    },
  });
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
