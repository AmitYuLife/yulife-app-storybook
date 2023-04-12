import { ImageSourcePropType, ViewStyle } from "react-native";
import { StreakTypes } from "@organisms/game-icon-button/streak.button";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import { Planets } from "@utils";
import { Source } from "react-native-fast-image";

export interface IScreen {
  backgroundImage: ImageSourcePropType & Source & string;
  style: ViewStyle;
  isLottie: boolean;
  isFullScreen: boolean;
}
export interface IThemeScreens {
  dailyStepsScreen: {
    offline: IScreen;
    online: IScreen;
    hasWhiteGlow?: boolean;
    isLight?: boolean;
    streakType: StreakTypes;
    textStyle: { color: string };
    topBarType: TopBarTypes;
    eventPanel: {
      fontColor: string;
      borderColor: string;
      backgroundColor: string;
    };
  };
  challengeListScreen: {
    backgroundImage: ImageSourcePropType & Source & string;
    style: ViewStyle;
    topBarType: TopBarTypes;
  };
  challengeSuccessScreen: {
    backgroundImage: ImageSourcePropType & Source & string;
    isLottie: boolean;
    isFullScreen: boolean;
    style: ViewStyle;
    textStyle: { color: string };
    lineColour: string;
  };
  challengeFailedScreen: {
    backgroundImage: ImageSourcePropType & Source & string;
    isLottie: boolean;
    isFullScreen: boolean;
    style: ViewStyle;
    textStyle: { color: string };
    lineColour: string;
  };
  challengeHistoryScreen: {
    backgroundImage: ImageSourcePropType;
    style: ViewStyle;
    topBarType: TopBarTypes;
  };
  offlineScreen: IScreen & { textColour: string };
  questsOfflineScreen: {
    backgroundImage: ImageSourcePropType;
  };
}

export interface ITheme {
  [Planets.EARTH]: {
    [key: number]: IThemeScreens;
  };
  [Planets.RED]: {
    [key: number]: IThemeScreens;
  };
  [Planets.BRIGHT]: {
    [key: number]: IThemeScreens;
  };
}
