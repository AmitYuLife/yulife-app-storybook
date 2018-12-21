import * as React from "react";
import { SFC } from "react";
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { NavBar, TopBar } from "../../../../molecules";
import {
    getBackgroundColor,
    getBackgroundImageAndStyle,
    getProgressBarType,
    hasLightTopBar
} from "./challenge-progress.screen.helpers";
import styles from "./challenge-progress.screen.styles";
import ProgressBar from "./subcomponents/progress-bar";

export type ChallengeType = "short stroll" | "meditation" | "day walk" | "long walk" | "brisk walk";

interface IProps extends IConnectedScreenProps {
    challengeType: ChallengeType;
    currentWorld?: number;
    endDateTime: string;
    userProgress: number;
    progressTargets: number[];
    unit: "steps" | "minutes";
    onCalmPress?: () => void;
    onDismissPress: () => void;
    onHeadspacePress?: () => void;
}

const ChallengeProgressScreen: SFC<IProps> = ({
    challengeType,
    currentWorld = 0,
    endDateTime,
    labels,
    onCalmPress,
    onDismissPress,
    onHeadspacePress,
    onLeftMenuPress,
    progressTargets,
    unit,
    userProgress,
    totalCoins
}) => (
    <SafeAreaView
        style={StyleSheet.flatten([
            styles.wrapper,
            { backgroundColor: getBackgroundColor(challengeType, currentWorld) }
        ])}
    >
        <Image resizeMethod="resize" resizeMode="cover" {...getBackgroundImageAndStyle(challengeType, currentWorld)} />
        <TopBar
            coins={totalCoins}
            isLight={hasLightTopBar(challengeType, currentWorld)}
            menuLabel={challengeType}
            onPressLeftIcon={onLeftMenuPress}
            timer={endDateTime}
        />
        <View style={styles.progressBarWrapper}>
            <ProgressBar
                amount={userProgress}
                goals={progressTargets}
                styleType={getProgressBarType(challengeType, currentWorld)}
                type={unit}
            />
        </View>
        {challengeType !== "meditation" ? null : (
            <View style={styles.instructionWrapper}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.instruction}>Complete a meditation session with</Text>
                    <TouchableOpacity onPress={onCalmPress} style={{ paddingLeft: 4 }}>
                        <Text style={styles.instructionBold}>Calm</Text>
                    </TouchableOpacity>
                    <Text style={styles.instruction}>,</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={onHeadspacePress} style={{ paddingRight: 4 }}>
                        <Text style={styles.instructionBold}>Headspace</Text>
                    </TouchableOpacity>
                    <Text style={styles.instruction}>or any other meditation app</Text>
                </View>
                <Text style={styles.instruction}>
                    that integrates with {Platform.OS === "ios" ? "apple health" : "google fit"}, within the next hour.
                    Results will be shown here.
                </Text>
            </View>
        )}
        <View style={styles.navBarWrapper}>
            <NavBar activeIndex={1} hasNotification={false} onDismissPress={onDismissPress} labels={labels} />
        </View>
    </SafeAreaView>
);

export default ChallengeProgressScreen;
