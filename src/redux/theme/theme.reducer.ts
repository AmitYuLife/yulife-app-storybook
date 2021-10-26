// tslint:disable-next-line
import { CenteredScreenImages } from "@atoms/centred-screen/centred-screen";
import { StreakTypes } from "@organisms/streak/streak";
import { GetCurrentUser, LoginUser } from "@graphql/_core/schema";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import { getCurrentWorld } from "@utils";
import { SyncAction } from "../_core/types";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import moment from "moment";
import { Colours } from "@styles";

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
    streakType: StreakTypes;
    textStyle: { color: string };
    topBarType: TopBarTypes;
  };
  questsOfflineScreen: {
    image: string;
  };
}

export const getInitialState = (newBackgroundAssets = false): IThemeStore => ({
  dailyStepsScreen: {
    centredScreen: {
      offline: { image: "gray_forest", style: { backgroundColor: "rgb(235, 235, 235)" } },
      online: {
        image: newBackgroundAssets ? "new_forest" : "large_forest",
        style: { backgroundColor: "rgb(255, 252, 216)" },
      },
    },
    hasWhiteGlow: false,
    isLight: false,
    streakType: "forest",
    textStyle: { color: Colours.neutral.n900 },
    topBarType: "default",
  },
  questsOfflineScreen: {
    image: "forest",
  },
});

const themeReducer = (state: IThemeStore = getInitialState(), action: SyncAction) => {
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
  let newBackgroundAssets = false;
  let currentLevel = 0;

  if (type === GET_USER_SUCCESS) {
    const { getCurrentUser } = data as GetCurrentUser;
    const { currentLevel: level, nextLevelAvailableAt } = getCurrentUser.coinLedger;
    const hasChangedYuniverse = currentLevel % 200 === 1;
    const isBeforeNextLevel = nextLevelAvailableAt && moment().isBefore(moment(nextLevelAvailableAt));
    const shouldStickWithCurrentWorld = !hasChangedYuniverse && isBeforeNextLevel;

    currentLevel = level;

    if (shouldStickWithCurrentWorld) {
      currentLevel = currentLevel - 1;
    }

    newBackgroundAssets = !!getCurrentUser.userFeatures.find((f) => f.name === "newBackgroundAssets" && f.value);
  } else {
    const { loginUser } = data as LoginUser;
    currentLevel = loginUser.user.coinLedger.currentLevel;
    newBackgroundAssets = !!loginUser.user.userFeatures.find((f) => f.name === "newBackgroundAssets" && f.value);
  }

  const currentWorld = getCurrentWorld(currentLevel);

  switch (currentWorld) {
    case 3:
      return {
        dailyStepsScreen: {
          centredScreen: {
            offline: { image: "gray_mountain", style: { backgroundColor: "rgb(235,235,235)" } },
            online: {
              image: newBackgroundAssets ? "new_mountain" : "mountain",
              style: { backgroundColor: "rgb(248, 212, 219)" },
            },
          },
          hasWhiteGlow: true,
          isLight: false,
          streakType: "mountain",
          textStyle: { color: Colours.neutral.n900 },
          topBarType: "default",
        },
        questsOfflineScreen: {
          image: "mountain",
        },
      };
    case 2:
      return {
        dailyStepsScreen: {
          centredScreen: {
            offline: { image: "gray_desert", style: { backgroundColor: "rgb(235,235,235)" } },
            online: {
              image: newBackgroundAssets ? "new_desert" : "desert",
              style: { backgroundColor: "rgb(255,249,225)" },
            },
          },
          hasWhiteGlow: true,
          isLight: false,
          streakType: "desert",
          textStyle: { color: Colours.neutral.n900 },
          topBarType: "default",
        },
        questsOfflineScreen: {
          image: "desert",
        },
      };
    case 1:
      return {
        dailyStepsScreen: {
          centredScreen: {
            offline: { image: "gray_ocean", style: { backgroundColor: "#747474" } },
            online: { image: newBackgroundAssets ? "new_ocean" : "ocean", style: { backgroundColor: "rgb(1,62,116)" } },
          },
          hasWhiteGlow: false,
          isLight: true,
          streakType: "ocean",
          textStyle: { color: Colours.neutral.white },
          topBarType: "white",
        },
        questsOfflineScreen: {
          image: "ocean",
        },
      };
    case 0:
    default:
      return getInitialState(newBackgroundAssets);
  }
};

export default themeReducer;
