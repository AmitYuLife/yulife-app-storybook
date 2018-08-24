import * as React from "react";
import { SFC } from "react";
import { TouchableOpacity } from "react-native";
import { CentredScreen, Pad } from "../../../atoms";
import { Streak } from "../../../molecules";
import YuCoin from "./assets/yu-coin";
import DailyStepsOnline, { IProps as IDailyStepsOnlineProps } from "./daily-steps-online";
import DailyStepsOffline, { IProps as IDailyStepsOfflineProps } from "./daily-steps-offline";
import DailyStepsFitKitAuthorise from "./daily-steps-fitkit-authorise";
import DailyStepsLoading from "./daily-steps-loading";
import DailyStepsFitKitUnavailable from "./daily-steps-fitkit-unavailable";

interface IProps {
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

type Props = IProps &
    IDailyStepsOnlineProps &
    IDailyStepsOfflineProps;

const DailyStepsScreen: SFC<Props> = ({
    coinsToday,
    currentStreak,
    displayStreak = false,
    fitKitAvailable,
    hasPermission,
    isDoneToday,
    isLoading,
    isOnline,
    lastUpdate,
    maxStreak,
    onAuthoriseFitKitPress,
    onCoinPress,
    onCtaPress,
    onStreakPress,
    steps
}) => {
    return (
        <CentredScreen
            footerImage={
                (isOnline || isLoading) && hasPermission
                    ? CentredScreen.FooterImages.LARGE_FOREST
                    : CentredScreen.FooterImages.GRAY_FOREST}
        >
            {displayStreak && <Streak
                isFinished={isDoneToday}
                onPress={onStreakPress}
                currentStreak={currentStreak}
                maxStreak={maxStreak}
            />}
            <Pad height={!isOnline ? 0 : 60} />
            <TouchableOpacity
                onPress={onCoinPress}
                activeOpacity={1}
            >
                <YuCoin
                    isLoading={isLoading}
                    isGrayScale={!hasPermission || (!isOnline && !isLoading)}
                />
            </TouchableOpacity>
            {
                isLoading ? (
                    <DailyStepsLoading />
                ) : !fitKitAvailable ? (
                    <DailyStepsFitKitUnavailable />
                ) : !hasPermission ? (
                    <DailyStepsFitKitAuthorise onPress={onAuthoriseFitKitPress} />
                ) : !isOnline ? (
                    <DailyStepsOffline lastUpdate={lastUpdate} />
                ) : (
                    <DailyStepsOnline
                        coinsToday={coinsToday}
                        steps={steps}
                        onCtaPress={onCtaPress}
                    />
                )
            }
        </CentredScreen>
    );
};

export default DailyStepsScreen;
