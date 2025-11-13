import { Colours, Style } from "@styles";
import { IThemeScreens } from "../theme.types";
import { commonStyles, fullImageStyle, LINE_COLOR } from "./_util";

export const earth: { [key: number]: IThemeScreens } = {
  [0]: {
    dailyStepsScreen: {
      online: {
        backgroundImage: require("@assets/daily-screen/planets/earth/forest.webp"),
        style: { ...fullImageStyle, backgroundColor: "#FFFCD7" },
        isLottie: false,
        isFullScreen: true,
      },
      eventPanel: {
        fontColor: Colours.neutral.n900,
        borderColor: "#EDEDD1",
        backgroundColor: "#FFFFE5",
      },
      hasWhiteGlow: false,
      isLight: false,
      streakType: "forest",
      topBarType: "default",
      textStyle: { color: Colours.neutral.n900 },
    },
    challengeListScreen: {
      backgroundImage: require("@assets/challenge-list/planets/earth/forest.webp"),
      style: { ...fullImageStyle, backgroundColor: "#FFFABF" },
      tileBackgroundColour: "#FFEE95",
      durationBackgroundColour: "#FFFAFA",
      topBarType: "default",
    },
    challengeSuccessScreen: {
      isFullScreen: true,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/forest.webp"),
      style: { ...fullImageStyle, backgroundColor: "#FFFABF" },
      textStyle: { color: Colours.neutral.n900 },
      lineColour: LINE_COLOR,
    },
    challengeFailedScreen: {
      isFullScreen: false,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/forest.webp"),
      style: { ...fullImageStyle, backgroundColor: "#FFFABF" },
      textStyle: { color: Colours.neutral.n900 },
      lineColour: Colours.neutral.n900,
    },
    offlineScreen: {
      isFullScreen: false,
      isLottie: false,
      textColour: Colours.darkGray,
      backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
      style: {
        ...commonStyles,
        backgroundColor: Colours.backgrounds.lightGray,
        height: Style.adjust(344),
      },
    },
    questsOfflineScreen: {
      backgroundImage: require("@assets/quests-offline/forest.png"),
    },
  },
  [1]: {
    dailyStepsScreen: {
      online: {
        backgroundImage: require("@assets/daily-screen/planets/earth/ocean.webp"),
        style: { ...fullImageStyle, backgroundColor: "#013BA0" },
        isLottie: false,
        isFullScreen: true,
      },
      eventPanel: {
        fontColor: Colours.neutral.white,
        borderColor: "#0048AF",
        backgroundColor: "#0C62DF",
      },
      hasWhiteGlow: false,
      isLight: true,
      streakType: "ocean",
      topBarType: "white",
      textStyle: { color: Colours.neutral.white },
    },
    challengeListScreen: {
      backgroundImage: require("@assets/challenge-list/planets/earth/ocean.webp"),
      style: { ...fullImageStyle, backgroundColor: "#0043CA" },
      tileBackgroundColour: "#0233E566",
      durationBackgroundColour: "#EEFEFF",
      topBarType: "white",
    },
    challengeSuccessScreen: {
      isFullScreen: true,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/ocean.webp"),
      style: { ...fullImageStyle, backgroundColor: "#0043CA" },
      textStyle: { color: Colours.neutral.n900 },
      lineColour: LINE_COLOR,
    },
    challengeFailedScreen: {
      isFullScreen: true,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/ocean.webp"),
      style: { ...fullImageStyle, backgroundColor: "#0043CA" },
      textStyle: { color: Colours.darkestGray },
      lineColour: Colours.neutral.n900,
    },
    offlineScreen: {
      isFullScreen: false,
      isLottie: false,
      textColour: Colours.neutral.white,
      backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
      style: {
        ...commonStyles,
        backgroundColor: Colours.backgrounds.mediumGray,
      },
    },
    questsOfflineScreen: {
      backgroundImage: require("@assets/quests-offline/ocean.png"),
    },
  },
  [2]: {
    dailyStepsScreen: {
      online: {
        backgroundImage: require("@assets/daily-screen/planets/earth/desert.webp"),
        style: { ...fullImageStyle, backgroundColor: "#B6E1FF" },
        isLottie: false,
        isFullScreen: true,
      },
      eventPanel: {
        fontColor: Colours.neutral.n900,
        borderColor: "#FFDA73",
        backgroundColor: "#FEFFAB",
      },
      hasWhiteGlow: true,
      isLight: false,
      streakType: "desert",
      topBarType: "default",
      textStyle: { color: Colours.neutral.n900 },
    },
    challengeListScreen: {
      backgroundImage: require("@assets/challenge-list/planets/earth/desert.webp"),
      style: { ...fullImageStyle, backgroundColor: "#94D3FF" },
      tileBackgroundColour: "#FCFCFC66",
      durationBackgroundColour: "#F0FFFF",
      topBarType: "desert",
    },
    challengeSuccessScreen: {
      isFullScreen: true,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/desert.webp"),
      style: { ...fullImageStyle, backgroundColor: "#94D3FF" },
      textStyle: { color: Colours.neutral.n900 },
      lineColour: LINE_COLOR,
    },
    challengeFailedScreen: {
      isFullScreen: true,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/desert.webp"),
      style: { ...fullImageStyle, backgroundColor: "#94D3FF" },
      textStyle: { color: Colours.neutral.n900 },
      lineColour: Colours.neutral.n900,
    },
    offlineScreen: {
      isFullScreen: false,
      isLottie: false,
      textColour: Colours.darkGray,
      backgroundImage: require("@assets/offline-screen/planets/earth/desert.png"),
      style: {
        ...commonStyles,
        backgroundColor: "rgb(235,235,235)",
      },
    },
    questsOfflineScreen: {
      backgroundImage: require("@assets/quests-offline/desert.png"),
    },
  },
  [3]: {
    dailyStepsScreen: {
      online: {
        backgroundImage: require("@assets/daily-screen/planets/earth/mountain.webp"),
        style: { ...fullImageStyle, backgroundColor: "#DBF1FF" },
        isLottie: false,
        isFullScreen: false,
      },
      eventPanel: {
        fontColor: Colours.neutral.n900,
        borderColor: "#F4D1DB",
        backgroundColor: "#FFE7EC",
      },
      hasWhiteGlow: true,
      isLight: false,
      streakType: "mountain",
      topBarType: "default",
      textStyle: { color: Colours.neutral.n900 },
    },
    challengeListScreen: {
      backgroundImage: require("@assets/challenge-list/planets/earth/mountain.webp"),
      style: { ...fullImageStyle, backgroundColor: "#DBF1FF" },
      tileBackgroundColour: "#8FD3FF66",
      durationBackgroundColour: "#F4FFFF",
      topBarType: "mountain",
    },
    challengeSuccessScreen: {
      isFullScreen: true,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/mountain.webp"),
      style: { ...fullImageStyle, backgroundColor: "#DBF1FF" },
      textStyle: { color: Colours.neutral.n900 },
      lineColour: LINE_COLOR,
    },
    challengeFailedScreen: {
      isFullScreen: true,
      isLottie: false,
      backgroundImage: require("@assets/challenge-success/planets/earth/mountain.webp"),
      style: { ...fullImageStyle, backgroundColor: "#DBF1FF" },
      textStyle: { color: Colours.neutral.n900 },
      lineColour: Colours.neutral.n900,
    },
    offlineScreen: {
      isFullScreen: false,
      isLottie: false,
      textColour: Colours.darkGray,
      backgroundImage: require("@assets/offline-screen/planets/earth/mountain.png"),
      style: {
        ...commonStyles,
        backgroundColor: "rgb(235,235,235)",
      },
    },
    questsOfflineScreen: {
      backgroundImage: require("@assets/quests-offline/mountain.png"),
    },
  },
};
