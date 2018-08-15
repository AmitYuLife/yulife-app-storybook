import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { Button, CentredScreen, Pad, Text } from "../../../atoms";
import { ILabel, NavBar, Streak, TopBar } from "../../../molecules";
import YuCoin from "./assets/yu-coin";
import styles from "./daily-steps-screen.styles";

interface IMemberScreenProps {
    coinsTotal: number;
    hasNotification: boolean;
    labels: ILabel[];
    onMenuPress: () => void;
}

interface IDailyStepsScreenProps {
    showTopBar?: boolean;
    showNavBar?: boolean;
    coinsToday: number;
    currentStreak: number;
    displayStreak?: boolean;
    isDoneToday: boolean;
    maxStreak: number;
    onCtaPress: () => void;
    onStreakPress: () => void;
    steps: number;
}

type Props = IMemberScreenProps & IDailyStepsScreenProps;

const DailyStepsScreen: SFC<Props> = ({
    showTopBar = true,
    showNavBar = true,
    coinsToday,
    coinsTotal,
    currentStreak,
    displayStreak = false,
    hasNotification,
    isDoneToday,
    labels,
    maxStreak,
    onCtaPress,
    onMenuPress,
    onStreakPress,
    steps,
}) => (
    <CentredScreen footerImage={CentredScreen.FooterImages.LARGE_FOREST}>
        {showTopBar && <TopBar coins={coinsTotal} onPress={onMenuPress} />}
        {displayStreak && (
            <Streak
                isFinished={isDoneToday}
                onPress={onStreakPress}
                currentStreak={currentStreak}
                maxStreak={maxStreak}
            />
        )}
        <Pad height={60} />
        <YuCoin scale={0.5} />
        <Text>{steps || 0} steps</Text>
        <Pad height={8} />
        <Text>
            <Text style={styles.heading}>{`${coinsToday || 0} `}</Text>
            <Text style={styles.heading} bold={true}>
                yu
            </Text>
            <Text style={styles.heading}>{`coin `}</Text>
            <Text style={styles.heading}>today</Text>
        </Text>
        <Pad height={22} />
        <Button onPress={onCtaPress} type={Button.Types.PRIMARY_MEDIUM} label="earn more" />
        {showNavBar && (
            <View style={styles.navBarWrapper}>
                <NavBar activeIndex={0} hasNotification={hasNotification} labels={labels} scale={0.5} />
            </View>
        )}
    </CentredScreen>
);

export default DailyStepsScreen;
