import { Colours, Style } from "@styles";
import { Planets } from "@utils";
import { ImageStyle, ViewStyle } from "react-native";
import { ITheme, IThemeScreens } from "./theme.types";

const commonStyles: Pick<ViewStyle, "width" | "height"> = {
  width: "100%",
  height: Style.SCALE_UP_AND_DOWN(300),
};

const fullImageStyle: Pick<ImageStyle, "width" | "height"> = {
  width: "100%",
  height: Style.DEVICE_HEIGHT,
};

const challengeSuccessAndFailedStyle: ViewStyle = {
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
};

const LINE_COLOR = "rgb(251, 207, 39)";

export const yuniversalStyles: IThemeScreens = {
  dailyStepsScreen: {
    offline: {
      backgroundImage: require("@assets/yuniversal/gray_yuniversal_1.png"),
      isLottie: false,
      isFullScreen: true,
      style: null,
    },
    online: {
      backgroundImage: require("@assets/yuniversal/yuniversal_1.json"),
      isLottie: true,
      isFullScreen: false,
      style: null,
    },
    eventPanel: {
      fontColor: Colours.neutral.white,
      borderColor: "#300774",
      backgroundColor: "#370888",
    },
    hasWhiteGlow: true,
    isLight: false,
    streakType: "yuniversal_1",
    topBarType: "white",
    textStyle: { color: Colours.neutral.white },
  },
  challengeListScreen: {
    backgroundImage: require("@assets/yuniversal/yuniversal_1.png"),
    style: {
      ...fullImageStyle,
      height: "100%",
      backgroundColor: "rgb(61, 1, 57)",
    },
    tileBackgroundColour: "#5727C8",
    durationBackgroundColour: "#9048F3",
    durationTextColour: "white",
    topBarType: "white",
  },
  challengeSuccessScreen: {
    backgroundImage: require("@assets/yuniversal/yuniversal_1.json"),
    isLottie: true,
    isFullScreen: false,
    style: null,
    textStyle: { color: Colours.neutral.white },
    lineColour: Colours.neutral.white,
  },
  challengeFailedScreen: {
    backgroundImage: require("@assets/yuniversal/yuniversal_1.json"),
    isLottie: true,
    isFullScreen: false,
    style: null,
    textStyle: { color: Colours.neutral.white },
    lineColour: Colours.neutral.white,
  },
  offlineScreen: {
    isFullScreen: false,
    isLottie: false,
    textColour: Colours.darkGray,
    backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
    style: {
      ...commonStyles,
      backgroundColor: "rgb(235, 235, 235)",
      height: Style.adjust(344),
    },
  },
  questsOfflineScreen: {
    backgroundImage: require("@assets/yuniversal/gray_yuniversal_1.png"),
  },
};

export const planetStyles: ITheme = {
  [Planets.EARTH]: {
    [0]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-forest.png"),
          style: { backgroundColor: "rgb(235, 235, 235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/earth/forest.png"),
          style: {
            ...commonStyles,
            backgroundColor: "rgb(255, 252, 216)",
            height: Style.adjust(344),
          },
          isLottie: false,
          isFullScreen: false,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
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
        backgroundImage: require("@assets/daily-screen/planets/earth/forest.png"),
        style: {
          ...fullImageStyle,
          height: Style.adjust(344),
          backgroundColor: "rgb(255, 252, 216)",
        },
        tileBackgroundColour: "#FFEF99",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: "rgb(255, 251, 205)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-failed/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#FFFDD4",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235, 235, 235)",
          height: Style.adjust(344),
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/forest.png"),
      },
    },
    [1]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-ocean.png"),
          style: { backgroundColor: "#747474", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/earth/ocean.png"),
          style: {
            backgroundColor: "rgb(1,62,116)",
            ...commonStyles,
          },
          isLottie: false,
          isFullScreen: false,
        },
        eventPanel: {
          fontColor: Colours.neutral.white,
          borderColor: Colours.ocean.up202,
          backgroundColor: Colours.ocean.up203,
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "white",
        textStyle: { color: Colours.neutral.white },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/daily-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(1,62,116)",
        },
        tileBackgroundColour: "#0067D4",
        durationBackgroundColour: "#84C1EB",
        topBarType: "white",
      },
      challengeSuccessScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.neutral.white,
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#747474",
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-desert.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/earth/desert.png"),
          style: {
            backgroundColor: "rgb(255,249,225)",
            ...commonStyles,
          },
          isLottie: false,
          isFullScreen: false,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#F3EDD1",
          backgroundColor: "#FFFBE9",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/daily-screen/planets/earth/desert.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(255,249,225)",
        },
        tileBackgroundColour: "#FFEF99",
        durationBackgroundColour: "#FFFED6",
        topBarType: "desert",
      },
      challengeSuccessScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/earth/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "rgb(255, 251, 205)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-failed/planets/earth/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#fffbcd",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-mountain.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/earth/mountain.png"),
          style: {
            backgroundColor: "rgb(248, 212, 219)",
            ...commonStyles,
          },
          isLottie: false,
          isFullScreen: false,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
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
        backgroundImage: require("@assets/daily-screen/planets/earth/mountain.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(248, 212, 219)",
        },
        tileBackgroundColour: "#FFC3D4",
        durationBackgroundColour: "#FFF2F7",
        topBarType: "mountain",
      },
      challengeSuccessScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/earth/mountain.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(255, 226, 230)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: false,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/earth/mountain.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "rgb(255, 226, 230)",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
  },
  [Planets.RED]: {
    [0]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-forest.png"),
          style: { backgroundColor: "rgb(235, 235, 235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/forest.png"),
          style: { backgroundColor: "#FFE8E8", width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#EFD5D8",
          backgroundColor: "#FFEFF1",
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/forest.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFE8E8",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: "rgb(255, 251, 205)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#FFFDD4",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235, 235, 235)",
          height: Style.adjust(344),
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/forest.png"),
      },
    },
    [1]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-ocean.png"),
          style: { backgroundColor: "#747474", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/ocean.png"),
          style: {
            backgroundColor: "#35DBFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#44D2F1",
          backgroundColor: "#85E9FF",
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/ocean.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#35DBFF",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.neutral.white,
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#747474",
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-desert.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/desert.png"),
          style: {
            backgroundColor: "#FFE2C8",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#F6DFD2",
          backgroundColor: "#FFF9E9",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/desert.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFE2C8",
        },
        topBarType: "desert",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "rgb(255, 251, 205)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#fffbcd",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-mountain.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/mountain.png"),
          style: {
            backgroundColor: "#FFE2E6",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#EFD5D8",
          backgroundColor: "#FFEFF1",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/mountain.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFE2E6",
        },
        topBarType: "mountain",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/mountain.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(255, 226, 230)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/mountain.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "rgb(255, 226, 230)",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
  },
  [Planets.BRIGHT]: {
    [0]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-forest.png"),
          style: { backgroundColor: "rgb(235, 235, 235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/forest.png"),
          style: { backgroundColor: "#FFE8E8", width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#AAF5F4",
          backgroundColor: "#EEFFFF",
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/forest.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFF7CC",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: "rgb(255, 251, 205)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#FFFDD4",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235, 235, 235)",
          height: Style.adjust(344),
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/forest.png"),
      },
    },
    [1]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-ocean.png"),
          style: { backgroundColor: "#747474", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/ocean.png"),
          style: {
            backgroundColor: "#35DBFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#82E9FF",
          backgroundColor: "#DBFFFF",
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/ocean.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#C8FFFF",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.neutral.white,
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#747474",
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-desert.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/desert.png"),
          style: {
            backgroundColor: "#D7FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#FFE39A",
          backgroundColor: "#FFFCDE",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/desert.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#D7FFFF",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "rgb(255, 251, 205)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#fffbcd",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-mountain.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/mountain.png"),
          style: {
            backgroundColor: "#D6FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#A4EEEE",
          backgroundColor: "#F0FFFF",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/mountain.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#D6FFFF",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/mountain.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(255, 226, 230)",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/mountain.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "rgb(255, 226, 230)",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
  },
  [Planets.ORANGE]: {
    [0]: {
      dailyStepsScreen: {
        offline: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-forest.png"),
          style: { backgroundColor: "rgb(235, 235, 235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/forest.png"),
          style: { backgroundColor: "#FFE8E8", width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#FFC451",
          backgroundColor: "#FFF0BB",
        },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/orange/forest.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#B0FAFF",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        // TODO: Replace with webps
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235, 235, 235)",
          height: Style.adjust(344),
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/forest.png"),
      },
    },
    [1]: {
      dailyStepsScreen: {
        offline: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-ocean.png"),
          style: { backgroundColor: "#747474", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/ocean.png"),
          style: {
            backgroundColor: "#35DBFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#98D4FF",
          backgroundColor: "#C0FBFF",
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/orange/ocean.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#C8FFFF",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.neutral.white,
        // TODO: Replace with webps
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#747474",
        },
      },
      questsOfflineScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        offline: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-desert.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/desert.png"),
          style: {
            backgroundColor: "#D7FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#FFB37B",
          backgroundColor: "#FFEAC2",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/orange/desert.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFEF9A",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        // TODO: Replace with webps
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235,235,235)",
        },
      },
      questsOfflineScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/quests-offline/desert.png"),
      },
    },
    [3]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-mountain.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/mountain.png"),
          style: {
            backgroundColor: "#D6FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#FFD089",
          backgroundColor: "#FFF9E0",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/orange/mountain.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFE7A8",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/mountain.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/mountain.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        // TODO: Replace with webps
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
  },
  [Planets.PURPLE]: {
    [0]: {
      dailyStepsScreen: {
        offline: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-forest.png"),
          style: { backgroundColor: "rgb(235, 235, 235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/forest.png"),
          style: { backgroundColor: "#FFE8E8", width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#AAE089",
          backgroundColor: "#E9FEDD",
        },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/purple/forest.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#F9E2FF",
        },
        tileBackgroundColour: "rgba(237, 170, 254, 0.5)",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        // TODO: this is the same as challenge list? remove one asset?
        backgroundImage: require("@assets/challenge-success/planets/purple/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/forest.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        // TODO: Replace with webps
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235, 235, 235)",
          height: Style.adjust(344),
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/forest.png"),
      },
    },
    [1]: {
      dailyStepsScreen: {
        offline: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-ocean.png"),
          style: { backgroundColor: "#747474", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/ocean.png"),
          style: {
            backgroundColor: "#35DBFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#DDA5FF",
          backgroundColor: "#F9E3FF",
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/purple/ocean.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#D4E5FF",
        },
        tileBackgroundColour: "rgba(161, 199, 255, 0.5)",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/ocean.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.neutral.white,
        // TODO: Replace with webps
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#747474",
        },
      },
      questsOfflineScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        offline: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-desert.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/desert.png"),
          style: {
            backgroundColor: "#D7FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#FFCA43",
          backgroundColor: "#FFEBB7",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/purple/desert.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFEF9A",
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/desert.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        // TODO: Replace with webps
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235,235,235)",
        },
      },
      questsOfflineScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/quests-offline/desert.png"),
      },
    },
    [3]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-mountain.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/mountain.png"),
          style: {
            backgroundColor: "#D6FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#DDA5FF",
          backgroundColor: "#F9E3FF",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/purple/mountain.png"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#F1E4FF",
        },
        tileBackgroundColour: "rgba(219, 186, 252, 0.5)",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/mountain.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/mountain.png"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        // TODO: Replace with webps
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
  },
  [Planets.RING]: {
    [0]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-forest.png"),
          style: { backgroundColor: "rgb(235, 235, 235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/ring/forest.webp"),
          style: { backgroundColor: "#FFE8E8", width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#AAE089",
          backgroundColor: "#E9FEDD",
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/ring/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#F9E2FF",
        },
        tileBackgroundColour: "rgba(207, 188, 255, 0.5)",
        durationBackgroundColour: "#FFFFFF",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235, 235, 235)",
          height: Style.adjust(344),
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/forest.png"),
      },
    },
    [1]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-ocean.png"),
          style: { backgroundColor: "#747474", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/ring/ocean.webp"),
          style: {
            backgroundColor: "#35DBFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#DDA5FF",
          backgroundColor: "#F9E3FF",
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/ring/ocean.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#D4E5FF",
        },
        tileBackgroundColour: "rgba(222, 197, 255, 0.5)",
        durationBackgroundColour: "#FFFFFF",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.neutral.white,
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#747474",
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-desert.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/ring/desert.webp"),
          style: {
            backgroundColor: "#D7FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#FFCA43",
          backgroundColor: "#FFEBB7",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/ring/desert.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFEF9A",
        },
        topBarType: "default",
        tileBackgroundColour: "rgba(255, 198, 253, 0.5)",
        durationBackgroundColour: "#FFFFFF",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-mountain.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/ring/mountain.webp"),
          style: {
            backgroundColor: "#D6FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: "#DDA5FF",
          backgroundColor: "#F9E3FF",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/ring/mountain.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#F1E4FF",
        },
        tileBackgroundColour: "rgba(219, 186, 252, 0.5)",
        durationBackgroundColour: "#FFFFFF",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/mountain.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
  },
  [Planets.LUNAR]: {
    [0]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-forest.png"),
          style: { backgroundColor: "rgb(235, 235, 235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/lunar/forest.webp"),
          style: { backgroundColor: "#FFE8E8", width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n900,
          borderColor: "#43E1F5",
          backgroundColor: "#7AF0FF",
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-success/planets/lunar/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#F9E2FF",
        },
        tileBackgroundColour: "rgba(210, 215, 255, 0.5)",
        durationBackgroundColour: "#FFFFFF",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.darkGray,
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.png"),
        style: {
          ...commonStyles,
          backgroundColor: "rgb(235, 235, 235)",
          height: Style.adjust(344),
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/forest.png"),
      },
    },
    [1]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-ocean.png"),
          style: { backgroundColor: "#747474", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/lunar/ocean.webp"),
          style: {
            backgroundColor: "#35DBFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n900,
          borderColor: "#999EFF",
          backgroundColor: "#D7D8FF",
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-success/planets/lunar/ocean.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#D4E5FF",
        },
        tileBackgroundColour: "rgba(176, 178, 255, 0.5)",
        durationBackgroundColour: "#FFFFFF",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
      },
      offlineScreen: {
        isFullScreen: false,
        isLottie: false,
        textColour: Colours.neutral.white,
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.png"),
        style: {
          ...commonStyles,
          backgroundColor: "#747474",
        },
      },
      questsOfflineScreen: {
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-desert.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/lunar/desert.webp"),
          style: {
            backgroundColor: "#D7FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n900,
          borderColor: "#FF8AC2",
          backgroundColor: "#FFCBE4",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-success/planets/lunar/desert.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#FFEF9A",
        },
        topBarType: "default",
        tileBackgroundColour: "rgba(175, 119, 255, 0.5)",
        durationBackgroundColour: "#FFFFFF",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
        offline: {
          backgroundImage: require("@assets/daily-screen/planets/earth/gray-mountain.png"),
          style: { backgroundColor: "rgb(235,235,235)", ...commonStyles },
          isLottie: false,
          isFullScreen: false,
        },
        online: {
          backgroundImage: require("@assets/daily-screen/planets/lunar/mountain.webp"),
          style: {
            backgroundColor: "#D6FFFF",
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n900,
          borderColor: "#43C8FF",
          backgroundColor: "#B0E8FF",
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-success/planets/lunar/mountain.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: "#F1E4FF",
        },
        tileBackgroundColour: "rgba(140, 142, 255, 0.5)",
        durationBackgroundColour: "#FFFFFF",
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/mountain.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: "#CDFFFF",
        },
        textStyle: { color: "#333333" },
        lineColour: Colours.neutral.n800,
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
  },
};
