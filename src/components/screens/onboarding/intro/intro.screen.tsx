import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { IConnectedScreenProps } from "@app/typings";
import { DAILY_STEPS_SCREEN } from "@ids";
import { Streak, Tooltip, TouchableOpacityWithState } from "@molecules/index";
import { IUserStore } from "@redux/user/user.reducer";
import { Style } from "@styles/index";
import * as React from "react";
import { LayoutChangeEvent, Platform, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";
import { GetMobileCopy_getMobileCopy_screens_intro } from "../../../../graphql/_core/schema";
import { CentredScreen, Pad } from "../../../atoms";
import { NavBar, TopBar } from "../../../molecules";
import YuCoin from "../../member/daily-steps/assets/yu-coin";
import DailyStepsOnline, { IProps as IDailyStepsOnlineProps } from "../../member/daily-steps/daily-steps-online";
import { getHighlightedLabel, getTooltipProps } from "./intro.helpers";
import styles, { tooltipStyles } from "./intro.styles";

interface IProps extends Partial<IConnectedScreenProps> {
    displayStreak: boolean;
    showCounter?: boolean;
    currentStreak?: number;
    isDoneToday?: boolean;
    isLoading: boolean;
    maxStreak?: number;
    onCoinPress: () => void;
    onSetIntroDone: () => void;
    onStreakPress?: () => void;
    theme: IThemeStore["dailyStepsScreen"];
    copy: GetMobileCopy_getMobileCopy_screens_intro;
    shouldDisplaySurge: boolean;
    surgeIntro: IUserStore["surgeIntro"];
    showIntro: boolean;
    isShowingPassiveMeditation: boolean;
    totalCoins: number;
}

type Props = IProps & IDailyStepsOnlineProps;

export default function IntroScreen({
    coinsToday,
    currentStreak,
    displayStreak,
    isDoneToday,
    isLoading,
    maxStreak,
    onCoinPress,
    onCtaPress,
    onStreakPress,
    showCounter = false,
    steps,
    onSetIntroDone,
    theme: { centredScreen, streakType, textStyle, topBarType },
    copy,
    shouldDisplaySurge,
    showIntro,
    surgeIntro,
    isShowingPassiveMeditation,
    totalCoins
}: Props) {
    const [dailyStepsPosition, setDailyStepsPosition] = React.useState(0);
    const [yucoinPosition, setYucoinPosition] = React.useState(0);
    const [activeIndex, setActiveIndex] = React.useState(
        shouldDisplaySurge && surgeIntro.visibility && !showIntro ? 8 : 0
    );
    const onPressCta = () => {
        const stopIndex = showIntro && !surgeIntro.visibility ? 7 : 8;
        return activeIndex === stopIndex ? onSetIntroDone() : setActiveIndex(activeIndex + 1);
    };
    const tooltipProps = getTooltipProps(activeIndex, dailyStepsPosition, yucoinPosition);
    return (
        <Animatable.View duration={750} animation="fadeIn" style={{ flex: 1 }}>
            <CentredScreen
                footerImage={centredScreen.online.image}
                style={centredScreen.online.style}
                testID={DAILY_STEPS_SCREEN}
            >
                <View
                    style={StyleSheet.flatten([
                        tooltipStyles.highlightWrapper,
                        activeIndex === 1 ? styles.zIndex : null
                    ])}
                >
                    <TopBar coins={totalCoins} type={topBarType} shouldHighlightCoins={activeIndex === 1} />
                </View>
                <Pad height={getPadHeight(true)} />
                <View
                    style={activeIndex === 8 || activeIndex === 4 || activeIndex === 2 ? styles.zIndex : null}
                    onLayout={(event: LayoutChangeEvent) =>
                        setYucoinPosition(event.nativeEvent.layout.height + event.nativeEvent.layout.y + 10)
                    }
                >
                    <TouchableOpacityWithState onPress={onCoinPress} activeOpacity={1}>
                        <YuCoin hasWhiteGlow={true} isLoading={isLoading} isGrayScale={false} />
                    </TouchableOpacityWithState>
                </View>
                <View
                    style={StyleSheet.flatten([
                        tooltipStyles.highlightWrapper,
                        activeIndex === 2 ? styles.zIndex : null
                    ])}
                    onLayout={(event: LayoutChangeEvent) =>
                        setDailyStepsPosition(event.nativeEvent.layout.height + event.nativeEvent.layout.y + 10)
                    }
                >
                    <DailyStepsOnline
                        coinsToday={coinsToday}
                        showCounter={showCounter}
                        steps={steps}
                        onCtaPress={onCtaPress}
                        textStyle={textStyle}
                    />
                </View>
                <View style={styles.dim} />
                <NavBar
                    highlightedLabel={getHighlightedLabel(activeIndex)}

                    activeIndex={0}
                />
                <Streak
                    isFinished={isDoneToday}
                    isOnline={true}
                    isDim={activeIndex !== 6}
                    onPress={displayStreak ? onStreakPress : () => null}
                    currentStreak={currentStreak}
                    maxStreak={maxStreak}
                    type={streakType}
                />
                {dailyStepsPosition && activeIndex >= 0 && activeIndex <= 8 ? (
                    <Tooltip
                        copy={copy}
                        {...tooltipProps}
                        onPressCta={onPressCta}
                        surgeIntro={surgeIntro}
                        isShowingPassiveMeditation={isShowingPassiveMeditation}
                    />
                ) : null}
            </CentredScreen>
        </Animatable.View>
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
