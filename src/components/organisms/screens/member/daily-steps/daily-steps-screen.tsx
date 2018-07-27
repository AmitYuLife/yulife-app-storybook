import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import {
    Button,
    CentredScreen,
    Pad,
    Streak,
    Text,
} from "../../../../atoms";
import { NavBar, TopBar } from "../../../../molecules";
import YuCoin from "./assets/yu-coin";
import styles from "./daily-steps-screen.styles";

interface IProps {
    onMenuPress: () => void;
    onCtaPress: () => void;
    onStreakPress: () => void;
    coinsTotal: number;
    coinsToday: number;
    steps: number;
    currentStreak: number;
    maxStreak: number;
    hasNotification: boolean;
    isDoneToday: boolean;
}

const DailyStepsScreen: SFC<IProps> = ({
    currentStreak,
    maxStreak,
    onStreakPress,
    onMenuPress,
    coinsTotal,
    coinsToday,
    steps,
    onCtaPress,
    hasNotification,
    isDoneToday,
}) => (
    <CentredScreen
        footerImage={
            CentredScreen.FooterImages.LARGE_FOREST
        }
    >
        <TopBar coins={coinsTotal} onPress={onMenuPress} />
        <Streak
            isFinished={isDoneToday}
            onPress={onStreakPress}
            currentStreak={currentStreak}
            maxStreak={maxStreak}
        />
        <Pad height={60} />
        <YuCoin scale={0.5} />
        <Text>{steps || 0} steps</Text>
        <Pad height={8} />
        <Text>
            <Text style={styles.heading}>{`${coinsToday ||
                0} `}</Text>
            <Text style={styles.heading} bold={true}>
                yu
            </Text>
            <Text style={styles.heading}>{`coin `}</Text>
            <Text style={styles.heading}>today</Text>
        </Text>
        <Pad height={22} />
        <Button
            onPress={onCtaPress}
            type={Button.Types.PRIMARY_MEDIUM}
            label="earn more"
        />
        <View style={styles.navBarWrapper}>
            <NavBar
                hasNotification={hasNotification}
                activeIndex={0}
                scale={0.5}
            />
        </View>
    </CentredScreen>
);

export default DailyStepsScreen;
