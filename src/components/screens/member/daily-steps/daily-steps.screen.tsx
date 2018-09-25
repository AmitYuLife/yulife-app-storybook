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
    displayStreak?: boolean;
    fitKitAvailable: boolean;
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
    displayStreak = false,
    fitKitAvailable,
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
    return (
        <CentredScreen
            footerImage={
                (isOnline || isLoading) && hasPermission
                    ? CentredScreen.FooterImages.LARGE_FOREST
                    : CentredScreen.FooterImages.GRAY_FOREST
            }
        >
            <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
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
                <DailyStepsOffline lastUpdate={lastUpdate} />
            ) : (
                <DailyStepsOnline coinsToday={coinsToday} steps={steps} onCtaPress={onCtaPress} />
            )}
            {displayStreak && (
                <Streak
                    isFinished={isDoneToday}
                    onPress={onStreakPress}
                    currentStreak={currentStreak}
                    maxStreak={maxStreak}
                />
            )}
            <View style={styles.navBarWrapper}>
                <NavBar
                    activeIndex={0}
                    colour={!fitKitAvailable || !hasPermission || !isOnline ? COLOURS.DARKER : COLOURS.LIGHT}
                    hasNotification={false}
                    labels={labels}
                />
            </View>
        </CentredScreen>
    );
};

export default DailyStepsScreen;
