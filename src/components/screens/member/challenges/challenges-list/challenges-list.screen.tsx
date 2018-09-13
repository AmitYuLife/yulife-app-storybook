import * as React from "react";
import { SFC } from "react";
import { Image, Platform, SafeAreaView, StatusBar, View } from "react-native";
import { ChallengesList, IChallengesListProps, TopBar } from "../../../../molecules";
import NavBar from "../../../../molecules/nav-bar/nav-bar";
import { ILabel } from "../../../../molecules/nav-bar/nav-bar";
import ChallengesListBackground from "./challenges-list-background/challenges-list-background";
import styles from "./challenges-list.screen.styles";

interface IProps extends IChallengesListProps {
    labels: ILabel[];
    name: string;
    onPressLeftIcon: () => void;
    totalCoins: number;
}

const ChallengesListScreen: SFC<IProps> = ({ challenges, labels, onPressLeftIcon, totalCoins, name }) => (
    <SafeAreaView style={styles.wrapper}>
        <StatusBar />
        <SafeAreaView style={styles.backgroundWrapper}>
            {Platform.OS === "ios" ? (
                <ChallengesListBackground />
            ) : (
                <Image
                    resizeMethod="scale"
                    resizeMode="contain"
                    source={require("../../../../../../assets/challenges-list/challenges-list-background.png")}
                    style={styles.background}
                />
            )}
        </SafeAreaView>
        <View style={styles.challengeSetWrapper}>
            <ChallengesList challenges={challenges} />
        </View>
            <TopBar leftIcon="Back" menuLabel="map" name={name} coins={totalCoins} onPressLeftIcon={onPressLeftIcon} />
        <View style={styles.navBarWrapper}>
            <NavBar activeIndex={1} labels={labels} />
        </View>
    </SafeAreaView>
);

export default ChallengesListScreen;
