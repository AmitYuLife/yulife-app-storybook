import * as React from "react";
import { SFC } from "react";
import { Image, Platform, SafeAreaView, StatusBar, View } from "react-native";
import { ChallengesList, IChallengesListProps } from "../../../../molecules";
import ChallengesListBackground from "./challenges-list-background/challenges-list-background";
import styles from "./challenges-list.screen.styles";

type Props = IChallengesListProps;

const ChallengesListScreen: SFC<Props> = ({ challenges }) => (
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
    </SafeAreaView>
);

export default ChallengesListScreen;
