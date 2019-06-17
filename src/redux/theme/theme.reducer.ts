// tslint:disable-next-line
import { CenteredScreenImages } from "../../components/atoms/centred-screen/centred-screen";
import { COLOURS, IColours } from "../../components/molecules";
import { StreakTypes } from "../../components/molecules/streak/streak";
import { TopBarTypes } from "../../components/molecules/top-bar/top-bar";
import { GetCurrentUser, LoginUser } from "../../graphql/_core/schema";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../../redux/user/user.actions";
import { getCurrentWorld } from "../../services/utils";
import { SyncAction } from "../_core/types";

export interface ICentredScreen {
    image: CenteredScreenImages;
    style: { backgroundColor: string };
}

export interface IThemeStore {
    dailyStepsScreen: {
        centredScreen: {
            offline: ICentredScreen;
            online: ICentredScreen;
        };
        hasWhiteGlow: boolean;
        isLight: boolean;
        navBar: {
            offline: IColours;
            online: IColours;
        };
        streakType: StreakTypes;
        textStyle: { color: string };
        topBarType: TopBarTypes;
    };
    questsOfflineScreen: {
        image: string;
        navBarType: IColours;
    };
}

export const initialState: IThemeStore = {
    dailyStepsScreen: {
        centredScreen: {
            offline: { image: "gray_forest", style: { backgroundColor: "#FFF" } },
            online: { image: "large_forest", style: { backgroundColor: "#FFF" } }
        },
        hasWhiteGlow: false,
        isLight: false,
        navBar: {
            offline: COLOURS.LIGHT,
            online: COLOURS.LIGHT
        },
        streakType: "forest",
        textStyle: { color: "#333333" },
        topBarType: "default"
    },
    questsOfflineScreen: {
        image: "forest",
        navBarType: COLOURS.LIGHT
    }
};

const themeReducer = (state: IThemeStore = initialState, action: SyncAction) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
        case LOGIN_USER_SUCCESS:
            return getCurrentWorldTheme(state, action.payload, action.type);
        default:
            return state;
    }
};

const getCurrentWorldTheme = (
    _: IThemeStore,
    data: GetCurrentUser | LoginUser,
    type: SyncAction["type"]
): IThemeStore => {
    let currentLevel = 0;
    if (type === GET_USER_SUCCESS) {
        currentLevel = (data as GetCurrentUser).getCurrentUser.coinLedger.currentLevel;
    } else {
        currentLevel = (data as LoginUser).loginUser.user.coinLedger.currentLevel;
    }

    switch (getCurrentWorld(currentLevel)) {
        case 3:
            return {
                dailyStepsScreen: {
                    centredScreen: {
                        offline: { image: "gray_mountain", style: { backgroundColor: "rgb(235,235,235)" } },
                        online: { image: "mountain", style: { backgroundColor: "rgb(248, 212, 219)" } }
                    },
                    hasWhiteGlow: true,
                    isLight: false,
                    navBar: {
                        offline: COLOURS.BLUE,
                        online: COLOURS.LIGHT
                    },
                    streakType: "mountain",
                    textStyle: { color: "rgb(51, 51, 51)" },
                    topBarType: "default"
                },
                questsOfflineScreen: {
                    image: "mountain",
                    navBarType: COLOURS.LIGHT
                }
            };
        case 2:
            return {
                dailyStepsScreen: {
                    centredScreen: {
                        offline: { image: "gray_desert", style: { backgroundColor: "rgb(235,235,235)" } },
                        online: { image: "desert", style: { backgroundColor: "rgb(255,249,225)" } }
                    },
                    hasWhiteGlow: true,
                    isLight: false,
                    navBar: {
                        offline: COLOURS.DARKER,
                        online: COLOURS.DESERT
                    },
                    streakType: "desert",
                    textStyle: { color: "rgb(108,59,38)" },
                    topBarType: "desert"
                },
                questsOfflineScreen: {
                    image: "desert",
                    navBarType: COLOURS.DARK
                }
            };
        case 1:
            return {
                dailyStepsScreen: {
                    centredScreen: {
                        offline: { image: "gray_ocean", style: { backgroundColor: "#747474" } },
                        online: { image: "ocean", style: { backgroundColor: "rgb(1,62,116)" } }
                    },
                    hasWhiteGlow: false,
                    isLight: true,
                    navBar: {
                        offline: COLOURS.LIGHT,
                        online: COLOURS.LIGHT
                    },
                    streakType: "ocean",
                    textStyle: { color: "white" },
                    topBarType: "white"
                },
                questsOfflineScreen: {
                    image: "ocean",
                    navBarType: COLOURS.LIGHT
                }
            };
        case 0:
        default:
            return initialState;
    }
};

export default themeReducer;
