import React from "react";
import { Platform } from "react-native";
import { G } from "react-native-svg";

import BackgroundImage1 from "./bg-1/background-image";
import Progress1 from "./bg-1/progress";
import BackgroundImage2 from "./bg-2/background-image";
import Progress2 from "./bg-2/progress";
import BackgroundImage3 from "./bg-3/";
import Progress3 from "./bg-3/progress";
import BackgroundImage4 from "./bg-4/";
import Progress4 from "./bg-4/progress";
import BackgroundImage5 from "./bg-5/";
import Progress5 from "./bg-5/progress";
import BackgroundImage6 from "./bg-6/";
import Progress6 from "./bg-6/progress";
import BackgroundImage7 from "./bg-7/";
import Progress7 from "./bg-7/progress";

import {
    episode1PathPlatformAdjustments,
    episode2PathPlatformAdjustments,
    episode3PathPlatformAdjustments,
    episode4PathPlatformAdjustments,
    episode5PathPlatformAdjustments,
    episode6PathPlatformAdjustments,
    episode7PathPlatformAdjustments
} from "./helpers";

const BackgroundOne: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage1 />
        <G {...episode1PathPlatformAdjustments}>
            <Progress1 />
            {children}
        </G>
    </G>
);

const BackgroundTwo: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage2 />
        <G {...episode2PathPlatformAdjustments}>
            <Progress2 />
            <G y="-10">{children}</G>
        </G>
    </G>
);

const BackgroundThree: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage3 />
        <G {...episode3PathPlatformAdjustments}>
            <Progress3 />
            {children}
        </G>
    </G>
);

const BackgroundFour: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage4 />
        <G {...episode4PathPlatformAdjustments}>
            <Progress4 />
            {children}
        </G>
    </G>
);

const BackgroundFive: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage5 />
        <G {...episode5PathPlatformAdjustments}>
            <Progress5 />
            {children}
        </G>
    </G>
);

const BackgroundSix: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage6 />
        <G {...episode6PathPlatformAdjustments}>
            <Progress6 />
            {/* <G y={-90}> */}
            <G y={Platform.OS === "ios" ? -84 : -90}>{children}</G>
        </G>
    </G>
);

const BackgroundSeven: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage7 />
        <G {...episode7PathPlatformAdjustments}>
            <Progress7 />
            {children}
        </G>
    </G>
);

export default [
    null, // unity
    BackgroundSeven,
    BackgroundSix,
    BackgroundFive,
    BackgroundFour,
    BackgroundThree,
    BackgroundTwo,
    BackgroundOne
];
