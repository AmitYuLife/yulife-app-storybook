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
    tileBackgroundColour: Colours.yuniversal.tilePurple,
    durationBackgroundColour: Colours.yuniversal.durationPurple,
    durationTextColour: Colours.neutral.white,
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
    backgroundImage: require("@assets/offline-screen/planets/earth/forest.webp"),
    style: {
      ...commonStyles,
      backgroundColor: Colours.backgrounds.lightGray,
      height: Style.adjust(344),
    },
  },
};

export const planetStyles: ITheme = {
  [Planets.EARTH]: earth,
  [Planets.RED]: {
    [0]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/forest.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
          height: Style.adjust(344),
        },
      },
    },
    [1]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/ocean.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.mediumGray,
        },
      },
    },
    [2]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/desert.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
    [3]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/red/mountain.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
  },
  [Planets.BRIGHT]: {
    [0]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/forest.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
          height: Style.adjust(344),
        },
      },
    },
    [1]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/ocean.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.mediumGray,
        },
      },
    },
    [2]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/desert.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
    [3]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/bright/mountain.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
  },
  [Planets.ORANGE]: {
    [0]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/orange/forest.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
          height: Style.adjust(344),
        },
      },
    },
    [1]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/orange/ocean.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.planetThemes.blueLight,
          backgroundColor: Colours.planetThemes.blueLighter,
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
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
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.mediumGray,
        },
      },
    },
    [2]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/orange/desert.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanVeryLight,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.planetThemes.orangeLight,
          backgroundColor: Colours.planetThemes.orangeLighter,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
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
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
    [3]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/orange/mountain.webp"),
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
        backgroundImage: require("@assets/offline-screen/planets/earth/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
  },
  [Planets.PURPLE]: {
    [0]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/purple/forest.webp"),
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
          borderColor: Colours.planetThemes.greenLight,
          backgroundColor: Colours.planetThemes.greenLighter,
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/purple/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.planetThemes.purpleLighter,
        },
        tileBackgroundColour: Colours.overlay.purpleFade1,
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
          height: Style.adjust(344),
        },
      },
    },
    [1]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/purple/ocean.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanPrimary,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.planetThemes.purpleLight1,
          backgroundColor: Colours.planetThemes.purpleLighter,
        },
        hasWhiteGlow: false,
        isLight: true,
        streakType: "ocean",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n800 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/purple/ocean.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.planetThemes.purpleBright,
        },
        tileBackgroundColour: Colours.overlay.purpleFade2,
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.mediumGray,
        },
      },
    },
    [2]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/purple/desert.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanVeryLight,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.planetThemes.yellowGold,
          backgroundColor: Colours.planetThemes.yellowGoldLight,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "desert",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
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
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
    [3]: {
      dailyStepsScreen: {
        online: {
          backgroundImage: require("@assets/daily-screen/planets/purple/mountain.webp"),
          style: {
            backgroundColor: Colours.gradients.cyanUltraLight,
            width: "100%",
          },
          isLottie: false,
          isFullScreen: true,
        },
        eventPanel: {
          fontColor: Colours.neutral.n800,
          borderColor: Colours.planetThemes.purpleLight1,
          backgroundColor: Colours.planetThemes.purpleLighter,
        },
        hasWhiteGlow: true,
        isLight: false,
        streakType: "mountain",
        topBarType: "default",
        textStyle: { color: Colours.neutral.n900 },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/purple/mountain.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.planetThemes.purplePale,
        },
        tileBackgroundColour: Colours.overlay.purpleFade3,
        topBarType: "default",
      },
      challengeSuccessScreen: {
        isFullScreen: true,
        isLottie: false,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
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
          borderColor: Colours.planetThemes.greenLight,
          backgroundColor: Colours.planetThemes.greenLighter,
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-list/planets/ring/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.planetThemes.purpleLighter,
        },
        tileBackgroundColour: Colours.overlay.purpleFade4,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
          height: Style.adjust(344),
        },
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
          borderColor: Colours.planetThemes.purpleLight1,
          backgroundColor: Colours.planetThemes.purpleLighter,
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
          backgroundColor: Colours.planetThemes.purpleBright,
        },
        tileBackgroundColour: Colours.overlay.purpleFade5,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.mediumGray,
        },
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
          borderColor: Colours.planetThemes.yellowGold,
          backgroundColor: Colours.planetThemes.yellowGoldLight,
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
        tileBackgroundColour: Colours.overlay.purpleFade6,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
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
          borderColor: Colours.planetThemes.purpleLight1,
          backgroundColor: Colours.planetThemes.purpleLighter,
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
          backgroundColor: Colours.planetThemes.purplePale,
        },
        tileBackgroundColour: Colours.overlay.purpleFade3,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
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
          borderColor: Colours.planetThemes.blueBright,
          backgroundColor: Colours.planetThemes.blueBrighter,
        },
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenge-success/planets/lunar/forest.webp"),
        style: {
          ...fullImageStyle,
          backgroundColor: Colours.planetThemes.purpleLighter,
        },
        tileBackgroundColour: Colours.overlay.purpleFade7,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/forest.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
          height: Style.adjust(344),
        },
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
          borderColor: Colours.planetThemes.bluePurple1,
          backgroundColor: Colours.planetThemes.purpleMedium,
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
          backgroundColor: Colours.planetThemes.purpleBright,
        },
        tileBackgroundColour: Colours.overlay.purpleFade8,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/ocean.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.mediumGray,
        },
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
          borderColor: Colours.planetThemes.pinkLight,
          backgroundColor: Colours.planetThemes.pinkLighter,
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
        tileBackgroundColour: Colours.overlay.purpleFade9,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/desert.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
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
          borderColor: Colours.planetThemes.blueCyan,
          backgroundColor: Colours.planetThemes.blueCyanLight,
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
          backgroundColor: Colours.planetThemes.purplePale,
        },
        tileBackgroundColour: Colours.overlay.purpleFade10,
        durationBackgroundColour: Colours.planetThemes.white,
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
        backgroundImage: require("@assets/offline-screen/planets/earth/mountain.webp"),
        style: {
          ...commonStyles,
          backgroundColor: Colours.backgrounds.lightGray,
        },
      },
    },
  },
};
