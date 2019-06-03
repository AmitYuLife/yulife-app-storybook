import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { ILabel } from "../components/molecules";
import { getIntro } from "../services/storage";
import { Style } from "../styles";
import { bottomTabs, ROUTES } from "./constants";

// tslint:disable-next-line
const icon = require("../../assets/icons/clock.png");

const bottomTab = {
    icon
};

export interface IMainTabsProps {
    componentId?: string;
    labels: ILabel[];
    onLeftMenuPress: () => void;
}

const onLeftMenuPress = () => {
    Navigation.mergeOptions(ROUTES.menu, {
        sideMenu: {
            left: {
                enabled: true,
                visible: true
            }
        },
        statusBar: {
            drawBehind: false,
            visible: true
        }
    });
};

export const labels = [
    {
        name: "yucoin",
        onPress: () => {
            Navigation.mergeOptions(ROUTES.dailySteps, {
                bottomTabs: {
                    currentTabIndex: 0
                },
                statusBar: {
                    drawBehind: false,
                    visible: true
                }
            });
        }
    },
    {
        name: "quests",
        onPress: () => {
            Navigation.mergeOptions(ROUTES.quests, {
                bottomTabs: {
                    currentTabIndex: 1
                },
                statusBar: {
                    drawBehind: false,
                    visible: true
                }
            });
        }
    },
    {
        name: "leaderboard",
        onPress: () => {
            Navigation.mergeOptions(ROUTES.leaderboards, {
                bottomTabs: {
                    currentTabIndex: 2
                },
                statusBar: {
                    drawBehind: false,
                    visible: true
                }
            });
        }
    },
    {
        name: "rewards",
        onPress: () => {
            Navigation.mergeOptions(ROUTES.rewards, {
                bottomTabs: {
                    currentTabIndex: 3
                },
                statusBar: {
                    drawBehind: false,
                    visible: true
                }
            });
        }
    }
];

export const setAuthenticatedRoot = async () => {
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
                                                passProps: {
                                                    labels,
                                                    onLeftMenuPress
                                                },
                                                options: { bottomTabs }
                                            }
                                        }
                                    ],
                                    options: { bottomTabs, bottomTab }
                                }
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                id: ROUTES.quests,
                                                name: ROUTES.quests,
                                                passProps: {
                                                    labels,
                                                    onLeftMenuPress
                                                },
                                                options: { bottomTabs }
                                            }
                                        }
                                    ],
                                    options: { bottomTabs, bottomTab }
                                }
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                id: ROUTES.leaderboards,
                                                name: ROUTES.leaderboards,
                                                passProps: {
                                                    labels,
                                                    onLeftMenuPress
                                                },
                                                options: { bottomTabs }
                                            }
                                        }
                                    ],
                                    options: { bottomTabs, bottomTab }
                                }
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                id: ROUTES.rewards,
                                                name: ROUTES.rewards,
                                                passProps: {
                                                    labels,
                                                    onLeftMenuPress
                                                },
                                                options: { bottomTabs }
                                            }
                                        }
                                    ],
                                    options: { bottomTabs, bottomTab }
                                }
                            }
                        ]
                    }
                },
                left: {
                    component: {
                        id: ROUTES.menu,
                        name: ROUTES.menu
                    }
                },
                options: {
                    bottomTabs,
                    sideMenu: {
                        left: Platform.select({
                            android: {
                                enabled: false,
                                width: Style.DEVICE_WIDTH
                            },
                            ios: {
                                enabled: false
                            }
                        })
                    },
                    topBar: {
                        drawBehind: true,
                        visible: false
                    }
                }
            }
        }
    });

    if (Platform.OS === "ios") {
        await Navigation.mergeOptions(ROUTES.menu, {
            sideMenu: {
                left: {
                    width: Style.DEVICE_WIDTH
                } as any
            }
        });
    }
};

export const setUnauthenticatedRoot = async (passProps?: any) =>
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            id: ROUTES.login,
                            name: ROUTES.login,
                            passProps
                        }
                    }
                ]
            }
        }
    });

export const setIntroRoot = async () =>
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            id: ROUTES.onboardingIntro,
                            name: ROUTES.onboardingIntro
                        }
                    }
                ]
            }
        }
    });

export const setNoAccessRoot = async () =>
    Navigation.setRoot({
        root: {
            component: {
                id: ROUTES.noAccess,
                name: ROUTES.noAccess
            }
        }
    });

export const setLoadingRoot = async () =>
    Navigation.setRoot({
        root: {
            component: {
                id: ROUTES.loading,
                name: ROUTES.loading
            }
        }
    });

export const setNextRoot = async () => {
    const hasSeenIntro = await getIntro();

    if (hasSeenIntro) {
        setAuthenticatedRoot();
    } else {
        setIntroRoot();
    }
};
