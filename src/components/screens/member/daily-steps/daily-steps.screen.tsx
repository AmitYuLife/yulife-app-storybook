import { Style } from "@styles/index";
import * as React from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { IConnectedScreenProps } from "../../../../typings";
import { CentredScreen, Pad } from "../../../atoms";
import { COLOURS, NavBar, Streak, TopBar } from "../../../molecules";
import YuCoin from "./assets/yu-coin";
import DailyStepsFitKitAuthorise from "./daily-steps-fitkit-authorise";
import DailyStepsFitKitUnavailable from "./daily-steps-fitkit-unavailable";
import DailyStepsLoading from "./daily-steps-loading";
import DailyStepsOffline, { IProps as IDailyStepsOfflineProps } from "./daily-steps-offline";
import DailyStepsOnline, { IProps as IDailyStepsOnlineProps } from "./daily-steps-online";
import styles from "./daily-steps.screen.styles";

interface IProps extends IConnectedScreenProps {
    currentStreak?: number;
    currentWorld?: number;
    displayStreak?: boolean;
    fitKitAvailable: boolean;
    hasNotification?: boolean;
    hasPermission: boolean;
    isDoneToday?: boolean;
    isLoading: boolean;
    isOnline: boolean;
    maxStreak?: number;
    onAuthoriseFitKitPress: () => void;
    onCoinPress: () => void;
    onStreakPress?: () => void;
}

type Props = IProps & IDailyStepsOnlineProps & IDailyStepsOfflineProps;

export default function DailyStepsScreen({
    coinsToday,
    currentStreak,
    currentWorld = 0,
    displayStreak = false,
    fitKitAvailable,
    hasNotification = false,
    hasPermission,
    isDoneToday,
    isLoading,
    isOnline,
    labels,
    lastUpdate,
    maxStreak,
    onAuthoriseFitKitPress,
    onCoinPress,
    onCtaPress,
    onLeftMenuPress,
    onStreakPress,
    steps,
    totalCoins
}: Props) {
    const { centredScreen, hasWhiteGlow, isLight, topBarType, navBar, streakType, textStyle } = getStyle(
        currentWorld
    ) as any;

    return (
        <CentredScreen
            footerImage={!isOnline || !hasPermission ? centredScreen.offline.image : centredScreen.online.image}
            style={isOnline ? centredScreen.online.style : centredScreen.offline.style}
        >
            <TopBar coins={totalCoins} type={topBarType} onPressLeftIcon={onLeftMenuPress} />
            <Pad height={getPadHeight(displayStreak)} />
            <TouchableOpacity onPress={onCoinPress} activeOpacity={1}>
                <YuCoin
                    hasWhiteGlow={hasWhiteGlow}
                    isLoading={isLoading}
                    isGrayScale={!hasPermission || (!isOnline && !isLoading)}
                />
            </TouchableOpacity>
            {isLoading ? (
                <DailyStepsLoading />
            ) : !fitKitAvailable ? (
                <DailyStepsFitKitUnavailable />
            ) : !hasPermission ? (
                <DailyStepsFitKitAuthorise onPress={onAuthoriseFitKitPress} />
            ) : !isOnline ? (
                <DailyStepsOffline isLight={isLight} lastUpdate={lastUpdate} />
            ) : (
                <DailyStepsOnline
                    coinsToday={coinsToday}
                    steps={steps}
                    onCtaPress={displayStreak ? null : onCtaPress}
                    textStyle={textStyle}
                />
            )}
            {displayStreak && (
                <Streak
                    isFinished={isDoneToday}
                    isOnline={isOnline}
                    onPress={onStreakPress}
                    currentStreak={currentStreak}
                    maxStreak={maxStreak}
                    type={streakType}
                />
            )}
            <View style={styles.navBarWrapper}>
                <NavBar
                    activeIndex={0}
                    colour={!fitKitAvailable || !hasPermission || !isOnline ? navBar.offline : navBar.online}
                    hasNotification={hasNotification}
                    labels={labels}
                />
            </View>
        </CentredScreen>
    );
}

function getStyle(currentWorld: number) {
    switch (currentWorld) {
        case 2:
            return {
                centredScreen: {
                    offline: { image: "gray_desert", style: { backgroundColor: "rgb(235,235,235)" } },
                    online: { image: "desert", style: { backgroundColor: "rgb(255,249,225)" } }
                },
                hasWhiteGlow: true,
                isLight: false,
                navBar: {
                    offline: COLOURS.DARKER,
                    online: COLOURS.DESERT
                },
                streakType: "desert",
                textStyle: { color: "rgb(108,59,38)" },
                topBarType: "desert"
            };
        case 1:
            return {
                centredScreen: {
                    offline: { image: "gray_ocean", style: { backgroundColor: "#747474" } },
                    online: { image: "ocean", style: { backgroundColor: "rgb(1,62,116)" } }
                },
                hasWhiteGlow: false,
                isLight: true,
                navBar: {
                    offline: COLOURS.LIGHT,
                    online: COLOURS.LIGHT
                },
                streakType: "ocean",
                textStyle: { color: "white" },
                topBarType: "white"
            };
        case 0:
        default:
            return {
                centredScreen: {
                    offline: { image: "gray_forest", style: { backgroundColor: "#FFF" } },
                    online: { image: "large_forest", style: { backgroundColor: "#FFF" } }
                },
                hasWhiteGlow: false,
                isLight: false,
                navBar: {
                    offline: COLOURS.DARKER,
                    online: COLOURS.LIGHT
                },
                streakType: "forest",
                textStyle: { color: "#333333" },
                topBarType: "default"
            };
    }
}

function getPadHeight(displayStreak: boolean) {
    if (isIphoneX()) {
        return displayStreak ? 120 : 100;
    }
    if (Platform.OS === "ios") {
        return displayStreak ? 80 : 60;
    }
    if (Style.isShortToMediumAndroid()) {
        return displayStreak ? 60 : 40;
    }
    return displayStreak ? 100 : 80;
}
