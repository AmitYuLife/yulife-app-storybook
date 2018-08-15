import * as React from "react";
import { SFC } from "react";
import { Image, Platform, SafeAreaView, StatusBar, View } from "react-native";
import { ChallengesList, IChallengesListProps, ILabel, NavBar, TopBar } from "../../../../molecules";
import ChallengesListBackground from "./challenges-list-background/challenges-list-background";
import styles from "./challenges-list-screen.styles";

interface IMemberScreenProps {
    showTopBar?: boolean;
    showNavBar?: boolean;
    coinsTotal: number;
    hasNotification: boolean;
    labels: ILabel[];
    onMenuPress: () => void;
}

type Props = IChallengesListProps & IMemberScreenProps;

const ChallengesListScreen: SFC<Props> = ({
    showTopBar = true,
    showNavBar = true,
    challenges,
    hasNotification,
    labels,
    onMenuPress,
    coinsTotal,
}) => (
    <SafeAreaView style={styles.wrapper}>
        <StatusBar />
        <SafeAreaView style={styles.backgroundWrapper}>
            {Platform.OS === "ios" ? (
                <ChallengesListBackground />
            ) : (
                <Image
                    resizeMethod="scale"
                    resizeMode="contain"
                    source={require("./challenges-list-background/challenges-list-background.png")}
                    style={styles.background}
                />
            )}
        </SafeAreaView>
        <View style={styles.challengeSetWrapper}>
            <ChallengesList challenges={challenges} />
        </View>
        {showTopBar && (
            <View style={styles.topBarWrapper}>
                <TopBar coins={coinsTotal} onPress={onMenuPress} />
            </View>
        )}
        {showNavBar && (
            <View style={styles.navBarWrapper}>
                <NavBar scale={0.5} activeIndex={1} hasNotification={hasNotification} labels={labels} />
            </View>
        )}
    </SafeAreaView>
);

export default ChallengesListScreen;
