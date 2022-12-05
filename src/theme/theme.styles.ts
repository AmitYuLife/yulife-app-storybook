import { Colours, Style } from "@styles";
import { Planets } from "@utils";
import { StyleSheet, ViewStyle } from "react-native";
import { ITheme, IThemeScreens } from "./theme.types";

const commonStyles = {
  width: "100%",
  height: Style.SCALE_UP_AND_DOWN(300),
};

const challengeSuccessAndFailedStyle = {
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
} as ViewStyle;

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
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgb(61, 1, 57)",
    },
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
        backgroundImage: require("@assets/challenge-list/planets/earth/forest.png"),
        style: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgb(154, 231, 216)",
        },
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
        textStyle: { color: null },
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
        backgroundImage: require("@assets/challenge-list/planets/earth/ocean.png"),
        style: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgb(87,155,193)",
        },
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
        textStyle: { color: null },
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
        backgroundImage: require("@assets/challenge-list/planets/earth/desert.png"),
        style: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgb(254,251,205)",
        },
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
        textStyle: { color: null },
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
        backgroundImage: require("@assets/challenge-list/planets/earth/mountain.png"),
        style: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgb(59,123,209)",
        },
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
        textStyle: { color: null },
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
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#FFE8E8",
        },
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
        textStyle: { color: null },
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
        topBarType: "white",
        textStyle: { color: Colours.neutral.white },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/ocean.png"),
        style: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#35DBFF",
        },
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
        textStyle: { color: null },
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
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#FFE2C8",
        },
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
        textStyle: { color: null },
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
            backgroundColor: "#FFE2C8",
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
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#FFE2C8",
        },
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
        textStyle: { color: null },
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
    },
  },
};
