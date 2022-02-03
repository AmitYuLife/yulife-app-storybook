import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "./constants";
import { WebViewContainerProps } from "@components/containers/web-view/web-view.container";
import Logger from "@services/logging/logger";
import { showYuModal } from "@navigation/root";

export function handleNavigateBack(componentId: string) {
  return function () {
    Navigation.pop(componentId);
  };
}

export function handleOpenWebView(props: WebViewContainerProps) {
  try {
    return showYuModal({
      component: {
        id: ROUTES.webView,
        name: ROUTES.webView,
        passProps: props,
      },
    });
  } catch (error) {
    Logger.logEvent("web_view_failed", { message: props ? `Link: ${props.uri}` : "Missing args" });
  }
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

export function showGenericModal(
  heading: string,
  subheading: string,
  cta?: () => void,
  ctaLabel?: string,
  ctaLabelSecondary: string = "Close",
  onPressSecondary: () => void = () => Navigation.dismissModal(MODALS.generic)
) {
  showYuModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: cta,
        isPrimaryOnePressOnly: true,
        heading,
        subheading,
        ctaLabel,
        ctaLabelSecondary,
        onPressSecondary,
      },
    },
  });
}

export const setScreenViewForBurgerMenu = () => Logger.logMixpanelEvent("screen_view", { name: "burger_menu" });
