// tslint:disable-next-line
import { CenteredScreenImages } from "../../components/atoms/centred-screen/centred-screen";
import { StreakTypes } from "../../components/molecules/streak/streak";
import { GetCurrentUser, LoginUser } from "../../graphql/_core/schema";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import { getCurrentWorld } from "../../services/utils";
import { SyncAction } from "../_core/types";
import { TopBarTypes } from "@components/organisms/top-bar/top-bar.helpers";

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

export const initialState: IThemeStore = {
  dailyStepsScreen: {
    centredScreen: {
      offline: { image: "gray_forest", style: { backgroundColor: "rgb(235, 235, 235)" } },
      online: { image: "large_forest", style: { backgroundColor: "rgb(255, 252, 216)" } },
    },
    hasWhiteGlow: false,
    isLight: false,
    streakType: "forest",
    textStyle: { color: "#333333" },
    topBarType: "default",
  },
  questsOfflineScreen: {
    image: "forest",
  },
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
            online: { image: "mountain", style: { backgroundColor: "rgb(248, 212, 219)" } },
          },
          hasWhiteGlow: true,
          isLight: false,
          streakType: "mountain",
          textStyle: { color: "rgb(51, 51, 51)" },
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
            online: { image: "desert", style: { backgroundColor: "rgb(255,249,225)" } },
          },
          hasWhiteGlow: true,
          isLight: false,
          streakType: "desert",
          textStyle: { color: "rgb(108,59,38)" },
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
            online: { image: "ocean", style: { backgroundColor: "rgb(1,62,116)" } },
          },
          hasWhiteGlow: false,
          isLight: true,
          streakType: "ocean",
          textStyle: { color: "white" },
          topBarType: "white",
        },
        questsOfflineScreen: {
          image: "ocean",
        },
      };
    case 0:
    default:
      return initialState;
  }
};

export default themeReducer;
