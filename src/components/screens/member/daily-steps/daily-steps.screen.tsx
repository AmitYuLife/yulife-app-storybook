import * as React from "react";
import { SFC } from "react";
import { Button, CentredScreen, Pad, Text } from "../../../atoms";
import { Streak } from "../../../molecules";
import YuCoin from "./assets/yu-coin";
import styles from "./daily-steps.screen.styles";

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

type Props = IDailyStepsScreenProps;

const DailyStepsScreen: SFC<Props> = ({
    coinsToday,
    currentStreak,
    displayStreak = false,
    isDoneToday,
    maxStreak,
    onCtaPress,
    onStreakPress,
    steps,
}) => (
    <CentredScreen footerImage={CentredScreen.FooterImages.LARGE_FOREST}>
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
    </CentredScreen>
);

export default DailyStepsScreen;
