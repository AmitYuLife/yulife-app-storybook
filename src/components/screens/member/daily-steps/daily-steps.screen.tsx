import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { DAILY_STEPS_SCREEN } from "@ids";
import { TouchableOpacityWithState } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { Platform, View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise } from "../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../typings";
import { CentredScreen, Pad } from "../../../atoms";
import { NavBar, Streak, TopBar } from "../../../molecules";
import YuCoin from "./assets/yu-coin";
import DailyStepsFitKitAuthorise from "./daily-steps-fitkit-authorise";
import DailyStepsFitKitUnavailable from "./daily-steps-fitkit-unavailable";
import DailyStepsLoading from "./daily-steps-loading";
import DailyStepsOffline, { IProps as IDailyStepsOfflineProps } from "./daily-steps-offline";
import DailyStepsOnline, { IProps as IDailyStepsOnlineProps } from "./daily-steps-online";
import styles from "./daily-steps.screen.styles";

interface IProps extends IConnectedScreenProps {
    showCounter?: boolean;
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
    theme: IThemeStore["dailyStepsScreen"];
    copy: GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise;
}

type Props = IProps & IDailyStepsOnlineProps & IDailyStepsOfflineProps;

export default function DailyStepsScreen({
    coinsToday,
    currentStreak,
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
    showCounter = false,
    steps,
    totalCoins,
    theme: { centredScreen, hasWhiteGlow, isLight, topBarType, navBar, streakType, textStyle },
    copy
}: Props) {
    return (
        <CentredScreen
            footerImage={!isOnline || !hasPermission ? centredScreen.offline.image : centredScreen.online.image}
            style={isOnline ? centredScreen.online.style : centredScreen.offline.style}
            testID={DAILY_STEPS_SCREEN}
        >
            <TopBar coins={totalCoins} type={topBarType} onPressLeftIcon={onLeftMenuPress} />
            <Pad height={getPadHeight(displayStreak)} />
            <TouchableOpacityWithState onPress={onCoinPress} activeOpacity={1}>
                <YuCoin
                    hasWhiteGlow={hasWhiteGlow}
                    isLoading={isLoading}
                    isGrayScale={!hasPermission || (!isOnline && !isLoading)}
                />
            </TouchableOpacityWithState>
            {isLoading ? (
                <DailyStepsLoading />
            ) : !fitKitAvailable ? (
                <DailyStepsFitKitUnavailable />
            ) : !hasPermission ? (
                <DailyStepsFitKitAuthorise onPress={onAuthoriseFitKitPress} copy={copy} />
            ) : !isOnline ? (
                <DailyStepsOffline isLight={isLight} lastUpdate={lastUpdate} />
            ) : (
                <DailyStepsOnline
                    coinsToday={coinsToday}
                    showCounter={showCounter}
                    steps={steps}
                    onCtaPress={onCtaPress}
                    textStyle={textStyle}
                />
            )}
            {!displayStreak ? null : (
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
