import { Platform } from "react-native";
import { Navigation } from "@navigation/main";
import { clearToken } from "@services/storage";
import { Style } from "../styles";
import { bottomTabs, MODALS, ROUTES } from "./constants";
import { ILabel } from "@components/organisms/nav-bar/nav-bar.helpers";
import { IUpdateContainerProps } from "@components/containers/update/update.container";
import { ReviewModalProps } from "@components/modals/app-review/app-review.modal";
import { setScreenViewForBurgerMenu } from "@navigation/utils";
import { store } from "@redux/_core/store";
import { IReduxState } from "@redux/_core/reducers";
import { Layout } from "react-native-navigation";
import { MobileTabs } from "@graphql/__generated";
import { getRNNStatusBarStyle } from "@styles/status-bar.styles";

const icon = require("@assets/icons/clock.png");

const bottomTab = {
  icon,
};

export interface IMainTabsProps {
  componentId?: string;
  labels: ILabel[];
  onLeftMenuPress: () => void;
}

export function generateOnLeftMenuPress(route: string) {
  return () => {
    setScreenViewForBurgerMenu();
    Navigation.mergeOptions(route, {
      sideMenu: {
        left: {
          enabled: true,
          visible: true,
        },
      },
      statusBar: getRNNStatusBarStyle(),
    });
  };
}

export const labels = [
  {
    id: ROUTES.dailySteps,
    name: MobileTabs.DailySteps,
    onPress: () => {
      Navigation.mergeOptions(ROUTES.dailySteps, {
        bottomTabs: {
          currentTabIndex: 0,
        },
        statusBar: getRNNStatusBarStyle(),
      });
    },
  },
  {
    id: ROUTES.quests,
    name: MobileTabs.Quests,
    onPress: () => {
      Navigation.mergeOptions(ROUTES.quests, {
        bottomTabs: {
          currentTabIndex: 1,
        },
        statusBar: getRNNStatusBarStyle(),
      });
    },
  },
  {
    id: ROUTES.yuScreen,
    name: MobileTabs.YuScreen,
    onPress: () => {
      Navigation.mergeOptions(ROUTES.yuScreen, {
        bottomTabs: {
          currentTabIndex: 2,
        },
        statusBar: getRNNStatusBarStyle(),
      });
    },
  },
  {
    id: ROUTES.leaderboard,
    name: MobileTabs.Leaderboard,
    onPress: () => {
      Navigation.mergeOptions(ROUTES.leaderboard, {
        bottomTabs: {
          currentTabIndex: 3,
        },
        statusBar: getRNNStatusBarStyle(),
      });
    },
  },
  {
    id: ROUTES.rewards,
    name: MobileTabs.Rewards,
    onPress: () => {
      Navigation.mergeOptions(ROUTES.rewards, {
        bottomTabs: {
          currentTabIndex: 4,
        },
        statusBar: getRNNStatusBarStyle(),
      });
    },
  },
];

export const TAB_ROUTES = labels.map(({ id }) => id);

export async function setAuthenticatedRoot(dispatchAuthenticatedEvent?: () => void) {
  await Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: ROUTES.dailySteps,
                        name: ROUTES.dailySteps,
                        options: { bottomTabs },
                      },
                    },
                  ],
                  options: { bottomTabs, bottomTab },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: ROUTES.quests,
                        name: ROUTES.quests,
                        options: { bottomTabs },
                      },
                    },
                  ],
                  options: { bottomTabs, bottomTab },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: ROUTES.yuScreen,
                        name: ROUTES.yuScreen,
                        options: { bottomTabs },
                      },
                    },
                  ],
                  options: { bottomTabs, bottomTab },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: ROUTES.leaderboard,
                        name: ROUTES.leaderboard,
                        options: { bottomTabs },
                      },
                    },
                  ],
                  options: { bottomTabs, bottomTab },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: ROUTES.rewards,
                        name: ROUTES.rewards,
                        options: { bottomTabs },
                      },
                    },
                  ],
                  options: { bottomTabs, bottomTab },
                },
              },
            ],
          },
        },
        left: {
          component: {
            id: ROUTES.menu,
            name: ROUTES.menu,
          },
        },
        options: {
          bottomTabs,
          sideMenu: {
            left: Platform.select({
              android: {
                enabled: false,
                width: Style.DEVICE_WIDTH,
              },
              ios: {
                enabled: false,
              },
            }),
          },
          topBar: {
            drawBehind: true,
            visible: false,
          },
        },
      },
    },
  });

  await Navigation.mergeOptions(ROUTES.menu, {
    sideMenu: {
      left: {
        width: Style.DEVICE_WIDTH,
      } as any,
    },
  });

  if (dispatchAuthenticatedEvent) {
    dispatchAuthenticatedEvent();
  }
}

export async function setUnauthenticatedRoot(passProps: any = {}) {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: ROUTES.login,
              name: ROUTES.login,
              passProps,
            },
          },
        ],
      },
    },
  });
}

export const showYuModal = async <P>(props: Layout<P>) => {
  Navigation.showModal({
    ...props,
    component: {
      ...props?.component,
      options: {
        ...props?.component?.options,
        statusBar: {
          ...props?.component?.options?.statusBar,
        },
      },
    },
  });
};

export const pushToScreen = <P>(componentId: string, props: Layout<P>) => {
  const state = store.getState() as IReduxState;

  if (state?.app?.activeRoute === props?.component.id) {
    return;
  }

  Navigation.push(componentId, props);
};

export async function showAppReviewModal(reviewModalProps: ReviewModalProps) {
  const { id, title, body, rejectedTitle, rejectedBody, image } = reviewModalProps;
  showYuModal({
    component: {
      id: MODALS.appReview,
      name: MODALS.appReview,
      passProps: {
        title,
        body,
        rejectedTitle,
        rejectedBody,
        image,
        id,
      },
    },
  });
}

export async function showUpdateAppModal(heading: string, subheading: string) {
  showYuModal({
    component: {
      id: MODALS.mobileUpdate,
      name: MODALS.mobileUpdate,
      passProps: {
        heading,
        subheading,
      },
    },
  });
}

export async function setForceUpdateRoot(passProps: IUpdateContainerProps) {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: ROUTES.update,
              name: ROUTES.update,
              passProps,
            },
          },
        ],
      },
    },
  });
}

export async function setNoAccessRoot() {
  Navigation.setRoot({
    root: {
      component: {
        id: ROUTES.noAccess,
        name: ROUTES.noAccess,
      },
    },
  });
}

export async function setOfflineRoot() {
  await Navigation.setRoot({
    root: {
      component: {
        id: ROUTES.offline,
        name: ROUTES.offline,
      },
    },
  });
}

export async function setDuelsScreen(currentRoute: string) {
  if (currentRoute === ROUTES.duelsHub) {
    return;
  }

  await labels[3].onPress();
  await pushToScreen(ROUTES.leaderboard, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });
}

export async function expireSession() {
  await clearToken();
  await setUnauthenticatedRoot({ hasSessionExpiredError: true });
}
