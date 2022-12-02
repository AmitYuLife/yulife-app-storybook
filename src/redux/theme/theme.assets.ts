import { StyleSheet } from "react-native";
import { Colours } from "@styles";
import { Planets } from "@utils";
import themeStyles from "./theme.styles";

export const themeObject = {
  [Planets.EARTH]: {
    forest: {
      dailyStepsScreen: {
        offline: { backgroundImage: "gray_forest", style: { backgroundColor: "rgb(235, 235, 235)" } },
        online: {
          backgroundImage: require("@assets/centred-screen/planets/earth/forest.png"),
          style: { backgroundColor: "rgb(255, 252, 216)", ...themeStyles.backgroundImageWrapper, },
          eventPanel: {
            fontColor: Colours.neutral.n800,
            borderColor: "#EDEDD1",
            backgroundColor: "#FFFFE5",
          },
        },
        hasWhiteGlow: false,
        isLight: false,
        streakType: "forest",
        textStyle: { color: Colours.neutral.n900 },
        topBarType: "default",
        showPanel: false,
      },
      challengeListScreen: {
        backgroundImage: require("@assets/challenges/planets/earth/forest.png"),
        style: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgb(154, 231, 216)",
        },
        topBarType: "default",
      },

      challengeSuccessScreen: {
        backgroundImage: require("@assets/centred-screen/challenge_success_forest.png"),
        isLottie: false,
        style: {
          backgroundColor: "rgb(255, 251, 205)",
          ...themeStyles.backgroundImageWrapper,
          ...themeStyles.challengeSuccess,
        },
      },
    },
    ocean: {
      dailyScreen: {
        backgroundColor: "rgb(1,62,116)",
      },
      eventPanel: {
        fontColor: Colours.neutral.white,
        borderColor: Colours.ocean.up202,
        backgroundColor: Colours.ocean.up203,
      },
    },
    desert: {
      dailyScreen: {
        backgroundColor: "rgb(255,249,225)",
      },
      eventPanel: {
        fontColor: Colours.neutral.n800,
        borderColor: "#F3EDD1",
        backgroundColor: "#FFFBE9",
      },
    },
    mountain: {
      dailyScreen: {
        backgroundColor: "rgb(248, 212, 219)",
      },
      eventPanel: {
        fontColor: Colours.neutral.n800,
        borderColor: "#F4D1DB",
        backgroundColor: "#FFE7EC",
      },
    },
  },
  [Planets.RED]: {
    forest: {
      dailyScreen: {
        backgroundColor: "#FFE8E8",
      },
      eventPanel: {
        fontColor: Colours.neutral.n800,
        borderColor: "#EFD5D8",
        backgroundColor: "#FFEFF1",
      },
    },
    ocean: {
      dailyScreen: {
        backgroundColor: "#35DBFF",
      },
      eventPanel: {
        fontColor: Colours.neutral.n800,
        borderColor: "#44D2F1",
        backgroundColor: "#85E9FF",
      },
    },
    desert: {
      dailyScreen: {
        backgroundColor: "#FFE2C8",
      },
      eventPanel: {
        fontColor: Colours.neutral.n800,
        borderColor: "#F6DFD2",
        backgroundColor: "#FFF9E9",
      },
    },
    mountain: {
      dailyScreen: {
        backgroundColor: "#FFE2C8",
      },
      eventPanel: {
        fontColor: Colours.neutral.n800,
        borderColor: "#EFD5D8",
        backgroundColor: "#FFEFF1",
      },
    },
  },
};
