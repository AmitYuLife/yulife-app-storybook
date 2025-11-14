import { Colours, Style } from "@styles";
import { Planets } from "@utils";
import { ViewStyle } from "react-native";
import { ITheme, IThemeScreens } from "./theme.types";
import { commonStyles, fullImageStyle, LINE_COLOR } from "./planets/_util";
import { earth } from "./planets/earth";

const challengeSuccessAndFailedStyle: ViewStyle = {
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
};

export const yuniversalStyles: IThemeScreens = {
  dailyStepsScreen: {
    online: {
      backgroundImage: require("@assets/yuniversal/yuniversal_1.json"),
      isLottie: true,
      isFullScreen: false,
      style: null,
    },
    eventPanel: {
      fontColor: Colours.neutral.white,
      borderColor: Colours.borders.darkPurple,
      backgroundColor: Colours.borders.deepPurple,
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
      backgroundColor: Colours.backgrounds.yuniversalDark,
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
      backgroundColor: Colours.backgrounds.lightGray,
      height: Style.adjust(344),
    },
  },
  questsOfflineScreen: {
    backgroundImage: require("@assets/yuniversal/gray_yuniversal_1.png"),
  },
};

export const planetStyles: ITheme = {
  [Planets.EARTH]: earth,
  [Planets.RED]: {
    [0]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/forest.png"),
          style: { backgroundColor: Colours.borders.lightestPink, width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.dustyRose,
          backgroundColor: Colours.borders.creamRose,
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.borders.lightestPink,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: Colours.gradients.creamYellow,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.creamYellowLight,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/red/ocean.png"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.cyan,
          backgroundColor: Colours.gradients.cyanLight,
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/ocean.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.cyanPrimary,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/ocean.webp"),
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
        backgroundImage: require("@assets/challenge-success/planets/red/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/red/desert.png"),
          style: {
            backgroundColor: Colours.gradients.peachLight,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.peach,
          backgroundColor: Colours.gradients.peachLighter,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/desert.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.peachLight,
        },
        topBarType: "desert",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.creamYellow,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.gradients.creamYellow,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/mountain.png"),
          style: {
            backgroundColor: Colours.borders.veryLightPink,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.dustyRose,
          backgroundColor: Colours.borders.creamRose,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/red/mountain.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.borders.veryLightPink,
        },
        topBarType: "mountain",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.borders.lightestPink,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/red/mountain.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.borders.lightestPink,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/forest.png"),
          style: { backgroundColor: Colours.borders.lightestPink, width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.tealLight,
          backgroundColor: Colours.gradients.cyanSoft,
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.yellowPale,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: Colours.gradients.creamYellow,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.creamYellowLight,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/bright/ocean.png"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.cyanLight,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/ocean.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.cyanPale,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/ocean.webp"),
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
        backgroundImage: require("@assets/challenge-success/planets/bright/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/bright/desert.png"),
          style: {
            backgroundColor: Colours.gradients.cyanVeryLight,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.yellowGold,
          backgroundColor: Colours.gradients.peachSoft,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/desert.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.cyanVeryLight,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.creamYellow,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.gradients.creamYellow,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/mountain.png"),
          style: {
            backgroundColor: Colours.gradients.cyanUltraLight,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.tealLight,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/bright/mountain.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.cyanUltraLight,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.borders.lightestPink,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/bright/mountain.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.borders.lightestPink,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/forest.png"),
          style: { backgroundColor: Colours.borders.lightestPink, width: "100%" },
          isLottie: false,
          isFullScreen: true,
        },
        hasWhiteGlow: false,
        streakType: "forest",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.orangeGold,
          backgroundColor: Colours.gradients.peachSoft,
        },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/orange/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.yellowSoft,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/ocean.png"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
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
        backgroundImage: require("@assets/challenge-list/planets/orange/ocean.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.gradients.cyanPale,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
          backgroundColor: Colours.backgrounds.mediumGray,
        },
      },
      questsOfflineScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/desert.png"),
          style: {
            backgroundColor: Colours.gradients.cyanVeryLight,
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
        backgroundImage: require("@assets/challenge-list/planets/orange/desert.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.borders.yellowGold,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/orange/mountain.png"),
          style: {
            backgroundColor: Colours.gradients.cyanUltraLight,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.borders.orangeGold,
          backgroundColor: Colours.gradients.peachSoft,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-list/planets/orange/mountain.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.borders.yellowGold,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/orange/mountain.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/forest.png"),
          style: { backgroundColor: Colours.borders.lightestPink, width: "100%" },
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
        backgroundImage: require("@assets/challenge-list/planets/purple/forest.webp"),
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
        backgroundImage: require("@assets/challenge-success/planets/purple/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.adjust(288),
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/forest.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/ocean.png"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
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
        backgroundImage: require("@assets/challenge-list/planets/purple/ocean.webp"),
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
        backgroundImage: require("@assets/challenge-success/planets/purple/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
          backgroundColor: Colours.backgrounds.mediumGray,
        },
      },
      questsOfflineScreen: {
        // TODO: Replace with webps
        backgroundImage: require("@assets/quests-offline/ocean.png"),
      },
    },
    [2]: {
      dailyStepsScreen: {
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/desert.png"),
          style: {
            backgroundColor: Colours.gradients.cyanVeryLight,
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
        backgroundImage: require("@assets/challenge-list/planets/purple/desert.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.borders.yellowGold,
        },
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/desert.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          // TODO: Replace with webps
          backgroundImage: require("@assets/daily-screen/planets/purple/mountain.png"),
          style: {
            backgroundColor: Colours.gradients.cyanUltraLight,
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
        backgroundImage: require("@assets/challenge-list/planets/purple/mountain.webp"),
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
        backgroundImage: require("@assets/challenge-success/planets/purple/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.n800 },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        // TODO: Replace with webps
        backgroundImage: require("@assets/challenge-success/planets/purple/mountain.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          height: Style.SCALE_UP_AND_DOWN(220),
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          backgroundImage: require("@assets/daily-screen/planets/ring/forest.webp"),
          style: { backgroundColor: Colours.borders.lightestPink, width: "100%" },
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
          backgroundColor: Colours.gradients.cyanSoft,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/ring/ocean.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.white },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/ring/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/ring/desert.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanVeryLight,
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
          backgroundColor: Colours.borders.yellowGold,
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
          backgroundColor: Colours.gradients.cyanSoft,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          backgroundImage: require("@assets/daily-screen/planets/ring/mountain.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanUltraLight,
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
          backgroundColor: Colours.gradients.cyanSoft,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          backgroundImage: require("@assets/daily-screen/planets/lunar/forest.webp"),
          style: { backgroundColor: Colours.borders.lightestPink, width: "100%" },
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
          backgroundColor: Colours.gradients.cyanSoft,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/lunar/ocean.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.neutral.white },
        lineColour: LINE_COLOR,
      },
      challengeFailedScreen: {
        isFullScreen: true,
        isLottie: false,
        backgroundImage: require("@assets/challenge-success/planets/lunar/ocean.webp"),
        style: {
          ...commonStyles,
          ...challengeSuccessAndFailedStyle,
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
        lineColour: Colours.neutral.n800,
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
          backgroundImage: require("@assets/daily-screen/planets/lunar/desert.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanVeryLight,
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
          backgroundColor: Colours.borders.yellowGold,
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
          backgroundColor: Colours.gradients.cyanSoft,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
        online: {
          backgroundImage: require("@assets/daily-screen/planets/lunar/mountain.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanUltraLight,
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
          backgroundColor: Colours.gradients.cyanSoft,
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
          backgroundColor: Colours.gradients.cyanSoft,
        },
        textStyle: { color: Colours.darkestGray },
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
