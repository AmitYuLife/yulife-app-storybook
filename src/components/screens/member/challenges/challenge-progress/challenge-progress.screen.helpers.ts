import { IColours, NavBar } from "@molecules/index";
import { TopBarTypes } from "@molecules/top-bar/top-bar";
import { StyleSheet } from "react-native";
import { Style } from "../../../../../styles";
import assets from "./assets";
import { ChallengeType } from "./challenge-progress.screen";
import styles from "./challenge-progress.screen.styles";
import { ProgressBarTypes } from "./subcomponents/progress-bar";

interface IStyleSet {
    backgroundColour: string;
    instructionTextColour?: string;
    topBarType: TopBarTypes;
    navBarType: IColours;
    progressBarType: ProgressBarTypes;
    source: any;
    style: any;
}

const BRISK_WALK: IStyleSet[] = [
    {
        backgroundColour: "rgb(255,255,255)",
        navBarType: "light",
        progressBarType: "black",
        source: assets.squirrel,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(450) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "rgb(0,81,143)",
        navBarType: "light",
        progressBarType: "ocean-white",
        source: assets.otter,
        style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }]),
        topBarType: "white"
    },
    {
        backgroundColour: "#fffbcd",
        navBarType: "desert",
        progressBarType: "desert-brown",
        source: assets.meerkat,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "rgb(255, 183, 192)",
        navBarType: NavBar.Colours.LIGHT,
        progressBarType: "mountain-pink",
        source: assets.wolf,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
        topBarType: "default"
    }
];
const SHORT_STROLL: IStyleSet[] = [
    {
        backgroundColour: "rgb(255,255,255)",
        navBarType: "light",
        progressBarType: "black",
        source: assets.elephant,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(450) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "rgb(255,255,255)",
        navBarType: "light",
        progressBarType: "black",
        source: assets.tortoise,
        style: StyleSheet.flatten([styles.backgroundImage, { height: "100%" }]),
        topBarType: "default"
    },
    {
        backgroundColour: "#fffbcd",
        navBarType: "desert",
        progressBarType: "desert-brown",
        source: assets.bighornSheep,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "rgb(255, 183, 192)",
        navBarType: NavBar.Colours.LIGHT,
        progressBarType: "mountain-pink",
        source: assets.whiteBighornSheep,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(580) }]),
        topBarType: "default"
    }
];
const LONG_WALK: IStyleSet[] = [
    {
        backgroundColour: "rgb(255,255,255)",
        navBarType: "light",
        progressBarType: "black",
        source: assets.ostrich,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(500) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "rgb(124,215,237)",
        navBarType: "light",
        progressBarType: "ocean-black",
        source: assets.whale,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(650) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "#425f81",
        navBarType: "desert",
        progressBarType: "ocean-white",
        source: assets.desertFox,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
        topBarType: "white"
    },
    {
        backgroundColour: "rgb(160, 232, 252)",
        navBarType: NavBar.Colours.LIGHT,
        progressBarType: "mountain-black",
        source: assets.deer,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
        topBarType: "default"
    }
];
const MEDITATION: IStyleSet[] = [
    {
        backgroundColour: "rgb(255,255,255)",
        instructionTextColour: "rgb(136,136,136)",
        navBarType: "light",
        progressBarType: "black",
        source: assets.bird,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "rgb(255,255,255)",
        instructionTextColour: "rgb(136,136,136)",
        navBarType: "light",
        progressBarType: "black",
        source: assets.dolphin,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(650) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "#aedaec",
        instructionTextColour: "rgb(80,142,205)",
        navBarType: "desert",
        progressBarType: "ocean-black",
        source: assets.camel,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(550) }]),
        topBarType: "default"
    },
    {
        backgroundColour: "rgb(167, 210, 255)",
        instructionTextColour: "rgb(80, 142, 205)",
        navBarType: NavBar.Colours.LIGHT,
        progressBarType: "mountain-black",
        source: assets.owl,
        style: StyleSheet.flatten([styles.backgroundImage, { height: Style.SCALE_UP_AND_DOWN(428) }]),
        topBarType: "default"
    }
];

export function getWorldStyle(challengeType: ChallengeType, currentWorld = 0): IStyleSet {
    switch (challengeType) {
        case "brisk walk":
            return BRISK_WALK[currentWorld] || BRISK_WALK[0];
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
                navBarType: "light",
                progressBarType: "black",
                source: null,
                style: StyleSheet.flatten([styles.backgroundImage, { height: "auto" }]),
                topBarType: "default"
            };
    }
}
