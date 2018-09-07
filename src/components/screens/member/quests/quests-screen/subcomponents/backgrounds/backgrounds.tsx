import React from "react";
import { Platform } from "react-native";
import { G, Text } from "react-native-svg";
import {
    BackgroundImage1,
    BackgroundImage2,
    BackgroundImage3,
    BackgroundImage4,
    BackgroundImage5,
    BackgroundImage6,
    BackgroundImage7,
    BackgroundImage8,
    Progress1,
    Progress2,
    Progress3,
    Progress4,
    Progress5,
    Progress6,
    Progress7
} from "./assets";
import {
    episode1PathPlatformAdjustments,
    episode2PathPlatformAdjustments,
    episode3PathPlatformAdjustments,
    episode4PathPlatformAdjustments,
    episode5PathPlatformAdjustments,
    episode6PathPlatformAdjustments,
    episode7PathPlatformAdjustments
} from "./assets/helpers";

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
            <G y="-10">
                {children}
            </G>
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
            <G y={Platform.OS === "ios" ? -84 : -90}>
                {children}
            </G>
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

const BackgroundEight: React.SFC<React.ReactNode> = ({ children }) => (
    <G>
        <BackgroundImage8 />
        <G>
            {children}
        </G>
    </G>
);

const UnityLevelLocker: React.SFC<React.ReactNode> = () => (
    <G>
        <Text>unlock at level 49</Text>
    </G>
);

const getBackgrounds = (isLockedLastLevel: boolean) => {
    return [
        isLockedLastLevel ? UnityLevelLocker : BackgroundEight,
        BackgroundSeven,
        BackgroundSix,
        BackgroundFive,
        BackgroundFour,
        BackgroundThree,
        BackgroundTwo,
        BackgroundOne
    ];
};

export default getBackgrounds;
