import { ImageStyle, ViewStyle } from "react-native";
import { StreakTypes } from "@organisms/game-icon-button/streak.button";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import { Planets } from "@utils";
import { Source } from "@atoms";

export interface IScreen {
  backgroundImage: Source;
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
      boldTextColor?: string;
    };
  };
  challengeListScreen: {
    backgroundImage: Source;
    style: ImageStyle;
    tileBackgroundColour?: string;
    durationBackgroundColour?: string;
    durationTextColour?: string;
    topBarType: TopBarTypes;
  };
  challengeSuccessScreen: {
    backgroundImage: Source;
    isLottie: boolean;
    isFullScreen: boolean;
    style: ViewStyle;
    textStyle: { color: string };
    lineColour: string;
  };
  challengeFailedScreen: {
    backgroundImage: Source;
    isLottie: boolean;
    isFullScreen: boolean;
    style: ViewStyle;
    textStyle: { color: string };
    lineColour: string;
  };
  offlineScreen: IScreen & { textColour: string };
  questsOfflineScreen: {
    backgroundImage: Source;
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
  [Planets.ORANGE]: {
    [key: number]: IThemeScreens;
  };
  [Planets.PURPLE]: {
    [key: number]: IThemeScreens;
  };
  [Planets.RING]: {
    [key: number]: IThemeScreens;
  };
  [Planets.LUNAR]: {
    [key: number]: IThemeScreens;
  };
}
