import * as React from "react";
import { SFC } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
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

const DailyStepsScreen: SFC<Props> = ({
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
}) => {
    const { centredScreen, hasWhiteText, isTopBarLight, navBar, streakType } = getStyle(currentWorld) as any;

    return (
        <CentredScreen
            footerImage={
                !isOnline || !hasPermission ? centredScreen.offline.image : centredScreen.online.image
            }
            style={isOnline ? centredScreen.online.style : centredScreen.offline.style}
        >
            <TopBar coins={totalCoins} isLight={isTopBarLight} onPressLeftIcon={onLeftMenuPress} />
            <Pad height={Platform.OS === "ios" ? 60 : 80} />
            <TouchableOpacity onPress={onCoinPress} activeOpacity={1}>
                <YuCoin isLoading={isLoading} isGrayScale={!hasPermission || (!isOnline && !isLoading)} />
            </TouchableOpacity>
            {isLoading ? (
                <DailyStepsLoading />
            ) : !fitKitAvailable ? (
                <DailyStepsFitKitUnavailable />
            ) : !hasPermission ? (
                <DailyStepsFitKitAuthorise onPress={onAuthoriseFitKitPress} />
            ) : !isOnline ? (
                <DailyStepsOffline hasWhiteText={hasWhiteText} lastUpdate={lastUpdate} />
            ) : (
                <DailyStepsOnline
                    coinsToday={coinsToday}
                    hasWhiteText={hasWhiteText}
                    steps={steps}
                    onCtaPress={onCtaPress}
                />
            )}
            {displayStreak && (
                <Streak
                    isFinished={isDoneToday}
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
};

export default DailyStepsScreen;

const getStyle = (currentWorld: number) => {
    switch (currentWorld) {
        case 1:
            return {
                centredScreen: {
                    offline: { image: "gray_ocean", style: { backgroundColor: "#747474" } },
                    online: { image: "ocean", style: { backgroundColor: "rgb(1,62,116)" } }
                },
                hasWhiteText: true,
                isTopBarLight: true,
                navBar: {
                    offline: COLOURS.LIGHT,
                    online: COLOURS.LIGHT
                },
                streakType: "ocean"
            };
        case 0:
        default:
            return {
                centredScreen: {
                    offline: { image: "gray_forest", style: { backgroundColor: "#FFF" } },
                    online: { image: "large_forest", style: { backgroundColor: "#FFF" } }
                },
                hasWhiteText: false,
                isTopBarLight: false,
                navBar: {
                    offline: COLOURS.DARKER,
                    online: COLOURS.LIGHT
                },
                streakType: "forest"
            };
    }
};
