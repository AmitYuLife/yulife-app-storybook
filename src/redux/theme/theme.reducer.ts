// tslint:disable-next-line
import { ProgressBarTypes } from "@app/components/screens/member/challenges/challenge-progress/subcomponents/progress-bar";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { CenteredScreenImages } from "../../components/atoms/centred-screen/centred-screen";
import { COLOURS, IColours, NavBar } from "../../components/molecules";
import { StreakTypes } from "../../components/molecules/streak/streak";
import { TopBarTypes } from "../../components/molecules/top-bar/top-bar";
import { GetCurrentUser, LoginUser } from "../../graphql/_core/schema";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../../redux/user/user.actions";
import { getCurrentWorld } from "../../services/utils";
import { Style } from "../../styles";
import { SyncAction } from "../_core/types";
import styles from "./initial-theme.styles";

interface IStyleSet {
    backgroundColour: string;
    instructionTextColour?: string;
    topBarType: TopBarTypes;
    navBarType: IColours;
    progressBarType: ProgressBarTypes;
    source: any;
    style: any;
}

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
    challengeFailedScreen: {
        backgroundImage: CenteredScreenImages;
        backgroundStyle: { backgroundColor: string } | null;
        footerStyle: TextStyle;
    };
    challengeProgressScreen: {
        "brisk walk": IStyleSet;
        "short stroll": IStyleSet;
        "long walk": IStyleSet;
        meditation: IStyleSet;
    };
    challengeListScreen: {
        backgroundImage: string;
        backgroundWrapperStyle: StyleProp<ViewStyle>;
        navBarType: IColours;
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
    challengeFailedScreen: {
        backgroundImage: "challenge_failed_forest",
        backgroundStyle: null,
        footerStyle: styles.footerGray
    },
    challengeProgressScreen: {
        "brisk walk": {
            backgroundColour: "rgb(255,255,255)",
            navBarType: "light",
            progressBarType: "black",
            source: "squirrel",
            style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(450) }]),
            topBarType: "default"
        },
        "short stroll": {
            backgroundColour: "rgb(255,255,255)",
            navBarType: "light",
            progressBarType: "black",
            source: "elephant",
            style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(450) }]),
            topBarType: "default"
        },
        "long walk": {
            backgroundColour: "rgb(255,255,255)",
            navBarType: "light",
            progressBarType: "black",
            source: "ostrich",
            style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
            topBarType: "default"
        },
        "meditation": {
            backgroundColour: "rgb(255,255,255)",
            instructionTextColour: "rgb(136,136,136)",
            navBarType: "light",
            progressBarType: "black",
            source: "bird",
            style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
            topBarType: "default"
        }
    },
    challengeListScreen: {
        backgroundImage: "forest",
        backgroundWrapperStyle: StyleSheet.flatten([
            StyleSheet.absoluteFillObject,
            { backgroundColor: "rgb(154, 231, 216)" }
        ]),
        navBarType: NavBar.Colours.LIGHT,
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
                challengeFailedScreen: {
                    backgroundImage: "challenge_failed_desert",
                    backgroundStyle: { backgroundColor: "#fffbcd" },
                    footerStyle: styles.footerGray
                },
                challengeProgressScreen: {
                    "brisk walk": {
                        backgroundColour: "#fffbcd",
                        navBarType: "desert",
                        progressBarType: "desert-brown",
                        source: "meerkat",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
                        topBarType: "default"
                    },
                    "short stroll": {
                        backgroundColour: "#fffbcd",
                        navBarType: "desert",
                        progressBarType: "desert-brown",
                        source: "bighornSheep",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
                        topBarType: "default"
                    },
                    "long walk": {
                        backgroundColour: "#425f81",
                        navBarType: "desert",
                        progressBarType: "ocean-white",
                        source: "desertFox",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
                        topBarType: "white"
                    },
                    "meditation": {
                        backgroundColour: "#aedaec",
                        instructionTextColour: "rgb(80,142,205)",
                        navBarType: "desert",
                        progressBarType: "ocean-black",
                        source: "camel",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
                        topBarType: "default"
                    }
                },
                challengeListScreen: {
                    backgroundImage: "desert",
                    backgroundWrapperStyle: StyleSheet.flatten([
                        StyleSheet.absoluteFillObject,
                        { backgroundColor: "rgb(254,251,205)" }
                    ]),
                    navBarType: NavBar.Colours.DESERT,
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
                challengeFailedScreen: {
                    backgroundImage: "challenge_failed_ocean",
                    backgroundStyle: null,
                    footerStyle: styles.footerWhite
                },
                challengeProgressScreen: {
                    "brisk walk": {
                        backgroundColour: "rgb(0,81,143)",
                        navBarType: "light",
                        progressBarType: "ocean-white",
                        source: "otter",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }]),
                        topBarType: "white"
                    },
                    "short stroll": {
                        backgroundColour: "rgb(255,255,255)",
                        navBarType: "light",
                        progressBarType: "black",
                        source: "tortoise",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }]),
                        topBarType: "default"
                    },
                    "long walk": {
                        backgroundColour: "rgb(124,215,237)",
                        navBarType: "light",
                        progressBarType: "ocean-black",
                        source: "whale",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(650) }]),
                        topBarType: "default"
                    },
                    "meditation": {
                        backgroundColour: "rgb(255,255,255)",
                        instructionTextColour: "rgb(136,136,136)",
                        navBarType: "light",
                        progressBarType: "black",
                        source: "dolphin",
                        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(650) }]),
                        topBarType: "default"
                    }
                },
                challengeListScreen: {
                    backgroundImage: "ocean",
                    backgroundWrapperStyle: StyleSheet.flatten([
                        StyleSheet.absoluteFillObject,
                        { backgroundColor: "rgb(87,155,193)" }
                    ]),
                    navBarType: NavBar.Colours.LIGHT,
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
