import * as React from "react";
import { SFC } from "react";
import { SafeAreaView, View } from "react-native";
import { ChallengesList, IChallengesListProps, TopBar } from "../../../../molecules";
import NavBar from "../../../../molecules/nav-bar/nav-bar";
import { ILabel } from "../../../../molecules/nav-bar/nav-bar";
import ChallengesBackground from "../challenges-background/challenges-background";
import styles from "./challenges-list.screen.styles";

interface IProps extends IChallengesListProps {
    currentWorld?: number;
    labels: ILabel[];
    name: string;
    onPressLeftIcon: () => void;
    totalCoins: number;
}

const ChallengesListScreen: SFC<IProps> = ({ challenges, currentWorld, labels, onPressLeftIcon, totalCoins, name }) => {
    const worldStyle = getWorldStyle(currentWorld);

    return (
        <SafeAreaView style={styles.wrapper}>
            <SafeAreaView style={styles.backgroundWrapper}>
                <ChallengesBackground currentWorld={currentWorld} />
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
};

export default ChallengesListScreen;

const getWorldStyle = (currentWorld: number) => {
    switch (currentWorld) {
        case 1:
            return {
                isTopBarLight: true
            };
        case 0:
        default:
            return {
                isTopBarLight: false
            };
    }
};
