import * as React from "react";
import { SFC } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { NavBar, TopBar } from "../../../../molecules";
import { getBackgroundImage, getBackgroundImageHeight } from "./challenge-progress.screen.helpers";
import styles from "./challenge-progress.screen.styles";
import ProgressBar from "./subcomponents/progress-bar";

export type ChallengeType =
    | "short stroll"
    | "meditation"
    | "day walk"
    | "long walk"
    | "brisk walk";

interface IProps extends IConnectedScreenProps {
    challengeType: ChallengeType;
    endDateTime: string;
    userProgress: number;
    progressTargets: number[];
    unit: "steps" | "minutes";
}

const ChallengeProgressScreen: SFC<IProps> = ({
    challengeType,
    endDateTime,
    labels,
    onLeftMenuPress,
    progressTargets,
    unit,
    userProgress,
    totalCoins
}) => (
    <SafeAreaView style={styles.wrapper}>
        <Image
            resizeMethod="resize"
            resizeMode="cover"
            source={getBackgroundImage(challengeType)}
            style={StyleSheet.flatten([styles.backgroundImage, { height: getBackgroundImageHeight(challengeType) }])}
        />
        <TopBar coins={totalCoins} menuLabel={challengeType} onPressLeftIcon={onLeftMenuPress} timer={endDateTime} />
        <View style={styles.progressBarWrapper}>
            <ProgressBar
                amount={userProgress}
                goals={progressTargets}
                type={unit}
            />
        </View>
        <View style={styles.navBarWrapper}>
            <NavBar
                activeIndex={1}
                hasNotification={false}
                labels={labels}
            />
        </View>
    </SafeAreaView>
);

export default ChallengeProgressScreen;
