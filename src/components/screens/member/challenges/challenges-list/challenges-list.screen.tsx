import { ChallengesList, IChallengesListProps, ILabel, NavBar, TopBar } from "@molecules/index";
import * as React from "react";
import { SafeAreaView, View } from "react-native";
import ChallengesBackground from "../challenges-background/challenges-background";
import styles from "./challenges-list.screen.styles";

interface IProps extends IChallengesListProps {
    currentLevel?: number;
    labels: ILabel[];
    name: string;
    onPressLeftIcon: () => void;
    totalCoins: number;
}

export default function ChallengesListScreen({
    challenges,
    currentLevel,
    labels,
    onPressLeftIcon,
    totalCoins,
    name
}: IProps) {
    const worldStyle = getWorldStyle(currentLevel);

    return (
        <SafeAreaView style={styles.wrapper}>
            <SafeAreaView style={styles.backgroundWrapper}>
                <ChallengesBackground currentLevel={currentLevel} />
            </SafeAreaView>
            <View style={styles.challengeSetWrapper}>
                <ChallengesList challenges={challenges} />
            </View>
            <TopBar
                isLight={worldStyle.isTopBarLight}
                leftIcon="Back"
                menuLabel="map"
                name={name}
                coins={totalCoins}
                onPressLeftIcon={onPressLeftIcon}
            />
            <View style={styles.navBarWrapper}>
                <NavBar activeIndex={1} labels={labels} />
            </View>
        </SafeAreaView>
    );
}

function getWorldStyle(currentLevel: number) {
    switch (true) {
        case currentLevel > 50:
            return {
                isTopBarLight: true
            };
        case currentLevel > 0:
        default:
            return {
                isTopBarLight: false
            };
    }
}
