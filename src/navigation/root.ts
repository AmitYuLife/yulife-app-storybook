import { Navigation } from "react-native-navigation";
import { ILabel } from "../components/molecules";
import { getIntro } from "../services/storage";
import { Style } from "../styles";
import { MODALS, ROUTES } from "./routes";

// tslint:disable-next-line
const icon = require("../../assets/clock/clock.png");

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
        }
    });
};

const labels = [
    {
        name: "yucoin",
        onPress: () => {
            Navigation.mergeOptions(ROUTES.dailySteps, {
                bottomTabs: {
                    animate: true,
                    currentTabIndex: 0,
                    drawBehind: true,
                    visible: false
                }
            });
        }
    },
    {
        name: "quests",
        onPress: () => {
            Navigation.mergeOptions(ROUTES.quests, {
                bottomTabs: {
                    animate: true,
                    currentTabIndex: 1,
                    drawBehind: true,
                    visible: false
                }
            });
        }
    },
    {
        name: "rewards",
        onPress: () => {
            Navigation.mergeOptions(ROUTES.rewards, {
                bottomTabs: {
                    animate: true,
                    currentTabIndex: 2,
                    drawBehind: true,
                    visible: false
                }
            });
        }
    }
];

export const setAuthenticatedRoot = async () => {
    const hasSeenIntro = await getIntro();
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
                                                }
                                            }
                                        }
                                    ],
                                    options: {
                                        bottomTab: {
                                            icon
                                        }
                                    }
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
                                                }
                                            }
                                        }
                                    ],
                                    options: {
                                        bottomTab: {
                                            icon
                                        }
                                    }
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
                                                }
                                            }
                                        }
                                    ],
                                    options: {
                                        bottomTab: {
                                            icon
                                        }
                                    }
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
                    bottomTabs: {
                        animate: true,
                        drawBehind: true,
                        visible: false
                    },
                    sideMenu: {
                        left: {
                            enabled: false,
                            width: Style.DEVICE_WIDTH
                        }
                    },
                    topBar: {
                        drawBehind: true,
                        visible: false
                    }
                }
            }
        }
    });

    if (!hasSeenIntro) {
        await Navigation.showModal({
            component: {
                id: MODALS.intro,
                name: MODALS.intro
            }
        });
    }
};

export const setUnauthenticatedRoot = async () =>
    await Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            id: ROUTES.login,
                            name: ROUTES.login
                        }
                    }
                ]
            }
        }
    });
