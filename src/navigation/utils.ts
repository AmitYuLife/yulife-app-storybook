import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { bottomTabs, MODALS, ROUTES } from "./constants";
import { WebViewContainerProps } from "@components/containers/web-view/web-view.container";
import Logger from "@services/logging/logger";
import { getRNNStatusBarStyle } from "@styles/status-bar.styles";

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

type TakeAChallengeHandlerParams = {
  currentLevel?: number;
  yuniversalLevel?: number;
  yuniversalMap?: number;
  hasDoneChallengeToday?: boolean;
  isChallengeActive?: boolean;
  allowDirectNavigation?: boolean; // Feature toggle "tempTakeAChallengeDirectV2"
};
export async function handleTakeAChallengeCTA(params: TakeAChallengeHandlerParams) {
  const {
    currentLevel,
    yuniversalLevel,
    yuniversalMap,
    hasDoneChallengeToday,
    isChallengeActive,
    allowDirectNavigation,
  } = params;

  if (isChallengeActive || !allowDirectNavigation) {
    return handleNavigateToQuestsTab();
  }

  if (!currentLevel && !yuniversalLevel) {
    return handleNavigateToQuestsTab();
  }

  const isFirstLevel = currentLevel === 1;
  const isUnityLevel = currentLevel % 50 === 0;
  const isLastYuniversalLevel = yuniversalLevel === 7;

  // Special rules when we want users to see quests map
  if (isFirstLevel || isUnityLevel || isLastYuniversalLevel) {
    return handleNavigateToQuestsTab();
  }

  const levelOffset = hasDoneChallengeToday ? -1 : 0;
  const level = (yuniversalLevel || currentLevel) + levelOffset;

  return goToQuestChallengesList({
    level,
    yuniversalMap: yuniversalLevel ? yuniversalMap : undefined,
  });
}

function handleNavigateToQuestsTab() {
  Navigation.mergeOptions(ROUTES.quests, {
    bottomTabs: {
      currentTabIndex: 1,
    },
    statusBar: getRNNStatusBarStyle(),
  });
}

type GoToQuestChallengesListParams = {
  level: number;
  yuniversalMap: number;
  levelName?: string;
};
async function goToQuestChallengesList({ level, yuniversalMap }: GoToQuestChallengesListParams) {
  await Navigation.popToRoot(ROUTES.quests);

  await Navigation.push(ROUTES.quests, {
    component: {
      id: ROUTES.questsChallengesList,
      name: ROUTES.questsChallengesList,
      passProps: {
        level,
        yuniversalMap,
      },
      options: { bottomTabs, animations: { push: { waitForRender: false } } },
    },
  });

  await handleNavigateToQuestsTab();
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
