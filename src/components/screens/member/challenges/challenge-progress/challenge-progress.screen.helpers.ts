import { TopBarTypes } from "@molecules/top-bar/top-bar";
import { StyleSheet } from "react-native";
import { Style } from "../../../../../styles";
import assets from "./assets";
import { ChallengeType } from "./challenge-progress.screen";
import styles from "./challenge-progress.screen.styles";
import { ProgressBarTypes } from "./subcomponents/progress-bar";

interface IStyleSet {
  backgroundColour: string;
  topBarType: TopBarTypes;
  progressBarType: ProgressBarTypes;
  source: any;
  style: any;
  exitChallenge: {
    primaryColour: string;
    secondaryColour: string;
  };
}

const BRISK_WALK: IStyleSet[] = [
  {
    backgroundColour: "rgb(242, 190, 177)",
    progressBarType: "forest-brisk-walk",
    source: assets.squirrel,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(399) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#F38784",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(0,81,143)",
    progressBarType: "ocean-white",
    source: assets.otter,
    style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }]),
    topBarType: "white",
    exitChallenge: {
      primaryColour: "#023966",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "#fffbcd",
    progressBarType: "desert-brown",
    source: assets.meerkat,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#FDD377",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(255, 183, 192)",
    progressBarType: "mountain-pink",
    source: assets.wolf,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#E77479",
      secondaryColour: "white",
    },
  },
];
const SHORT_STROLL: IStyleSet[] = [
  {
    backgroundColour: "rgb(255,240,156)",
    progressBarType: "forest-yellow",
    source: assets.snail,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(600) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#FBCC07",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(255,255,255)",
    progressBarType: "black",
    source: assets.tortoise,
    style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#8FD3EC",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "#fffbcd",
    progressBarType: "desert-brown",
    source: assets.bighornSheep,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#FDD377",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(255, 183, 192)",
    progressBarType: "mountain-pink",
    source: assets.whiteBighornSheep,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(580) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#E77479",
      secondaryColour: "white",
    },
  },
];
const LONG_WALK: IStyleSet[] = [
  {
    backgroundColour: "rgb(40,118,74)",
    progressBarType: "forest-white",
    source: assets.rabbit,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(615) }]),
    topBarType: "white",
    exitChallenge: {
      primaryColour: "#195139",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(124,215,237)",
    progressBarType: "ocean-black",
    source: assets.whale,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(539) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#4278A5",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "#425f81",
    progressBarType: "ocean-white",
    source: assets.desertFox,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(475) }]),
    topBarType: "white",
    exitChallenge: {
      primaryColour: "#394F69",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(160, 232, 252)",
    progressBarType: "mountain-black",
    source: assets.deer,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#74D6F1",
      secondaryColour: "white",
    },
  },
];
const MEDITATION: IStyleSet[] = [
  {
    backgroundColour: "rgb(254,252,218)",
    progressBarType: "forest-yellow",
    source: assets.bird,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(668) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#96E2B5",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(255,255,255)",
    progressBarType: "black",
    source: assets.dolphin,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(665) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#CCCCCC",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "#aedaec",
    progressBarType: "ocean-black",
    source: assets.camel,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(332) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#6AA3DC",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "rgb(167, 210, 255)",
    progressBarType: "mountain-black",
    source: assets.owl,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(428) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#569DE9",
      secondaryColour: "white",
    },
  },
];

const CYCLING: IStyleSet[] = [
  {
    backgroundColour: "#FBE0DD",
    progressBarType: "forest-yellow",
    source: assets.hedgehog,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(667) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#F38784",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "#61C5F9",
    progressBarType: "ocean-light-blue",
    source: assets.hedgehogFish,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(667) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#4278A5",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "#FAD5C9",
    progressBarType: "desert-pink",
    source: assets.chameleon,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(667) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#E77479",
      secondaryColour: "white",
    },
  },
  {
    backgroundColour: "#FFDDDE",
    progressBarType: "mountain-pink",
    source: assets.bear,
    style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(667) }]),
    topBarType: "default",
    exitChallenge: {
      primaryColour: "#E77479",
      secondaryColour: "white",
    },
  },
];

export function getWorldStyle(challengeType: ChallengeType, currentWorld = 0): IStyleSet {
  switch (challengeType) {
    case "brisk walk":
      return BRISK_WALK[currentWorld] || BRISK_WALK[0];
    case "cycling":
      return CYCLING[currentWorld] || CYCLING[0];
    case "day walk":
    case "short stroll":
      return SHORT_STROLL[currentWorld] || SHORT_STROLL[0];
    case "long walk":
      return LONG_WALK[currentWorld] || LONG_WALK[0];
    case "meditation":
      return MEDITATION[currentWorld] || MEDITATION[0];
    default:
      return {
        backgroundColour: "rgb(255,255,255)",
        progressBarType: "black",
        source: null,
        style: StyleSheet.flatten([styles.backgroundImage, { height: "auto" }]),
        topBarType: "default",
        exitChallenge: {
          primaryColour: "white",
          secondaryColour: "#BCBCBC",
        },
      };
  }
}
