import { StyleSheet } from "react-native";
import { Style } from "../../../../../styles";
import assets from "./assets";
import { ChallengeType } from "./challenge-progress.screen";
import styles from "./challenge-progress.screen.styles";

const BRISK_WALK = [
    {
        source: assets.squirrel,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(450) }])
    },
    {
        source: assets.otter,
        style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }])
    }
];
const SHORT_STROLL = [
    {
        source: assets.elephant,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(450) }])
    },
    {
        source: assets.tortoise,
        style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }])
    }
];
const LONG_WALK = [
    {
        source: assets.ostrich,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }])
    },
    {
        source: assets.whale,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(650) }])
    }
];
const MEDITATION = [
    {
        source: assets.bird,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }])
    },
    {
        source: assets.dolphin,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(650) }])
    }
];

export const getBackgroundImageAndStyle = (challengeType: ChallengeType, currentWorld = 0) => {
    switch (challengeType) {
        case "brisk walk":
            return BRISK_WALK[currentWorld];
        case "day walk":
        case "short stroll":
            return SHORT_STROLL[currentWorld];
        case "long walk":
            return LONG_WALK[currentWorld];
        case "meditation":
            return MEDITATION[currentWorld];
        default:
            return { source: null, style: StyleSheet.flatten([styles.backgroundImage, { height: "auto" }]) };
    }
};

export const getBackgroundColor = (challengeType: ChallengeType, currentWorld = 0) => {
    switch (challengeType) {
        case "brisk walk":
            return currentWorld === 1 ? "rgb(0,81,143)" : "rgb(255,255,255)";
        case "long walk":
            return currentWorld === 1 ? "rgb(124,215,237)" : "rgb(255,255,255)";
        default:
            return "rgb(255,255,255)";
    }
};

export const hasLightTopBar = (challengeType: ChallengeType, currentWorld = 0) => {
    switch (challengeType) {
        case "brisk walk":
            return currentWorld === 1 ? true : false;
        default:
            return false;
    }
};

export const getProgressBarType = (challengeType: ChallengeType, currentWorld = 0) => {
    switch (challengeType) {
        case "brisk walk":
            return currentWorld === 1 ? "ocean-white" : "black";
        case "long walk":
            return currentWorld === 1 ? "ocean-black" : "black";
        default:
            return "black";
    }
};
