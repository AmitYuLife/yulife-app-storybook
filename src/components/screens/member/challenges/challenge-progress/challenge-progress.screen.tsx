import { Text } from "@atoms/index";
import { NavBar, TopBar } from "@molecules/index";
import * as React from "react";
import { Image, Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import assets from "./assets";
import { getWorldStyle } from "./challenge-progress.screen.helpers";
import styles from "./challenge-progress.screen.styles";
import ProgressBar from "./subcomponents/progress-bar";

export type ChallengeType = "short stroll" | "meditation" | "day walk" | "long walk" | "brisk walk";

interface IProps extends IConnectedScreenProps {
    challengeType: ChallengeType;
    endDateTime: string;
    showCounter?: boolean;
    userProgress: number;
    currentWorld: number;
    progressTargets: number[];
    unit: "steps" | "minutes";
    onCalmPress?: () => void;
    onDismissPress: () => void;
    onHeadspacePress?: () => void;
}

export default function ChallengeProgressScreen({
    challengeType,
    currentWorld = 0,
    endDateTime,
    labels,
    onCalmPress,
    onDismissPress,
    onHeadspacePress,
    onLeftMenuPress,
    showCounter = false,
    progressTargets,
    unit,
    userProgress,
    totalCoins
}: IProps) {
    const { backgroundColour, navBarType, progressBarType, source, style, topBarType } = getWorldStyle(
        challengeType,
        currentWorld
    );

    return (
        <SafeAreaView style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}>
            <Image resizeMethod="resize" resizeMode="cover" source={source} style={style} />
            <TopBar
                coins={totalCoins}
                type={topBarType}
                menuLabel={challengeType}
                onPressLeftIcon={onLeftMenuPress}
                timer={endDateTime}
            />
            <View style={styles.progressBarWrapper}>
                <ProgressBar
                    amount={userProgress}
                    showCounter={showCounter}
                    goals={progressTargets}
                    styleType={progressBarType}
                    type={unit}
                />
            </View>
            {challengeType === "meditation" && !userProgress ? (
                <View style={styles.meditationInstructionsWrapper}>
                    <View style={styles.instructionWrapper}>
                        <Text style={styles.instructionHeading} bold={true}>
                            Choose
                        </Text>
                        <Text style={styles.instructionSubheading} bold={true}>
                            an app to start
                        </Text>
                        <Text style={styles.instructionText}>
                            Or use any meditation app that integrates with{" "}
                            {Platform.OS === "ios" ? "apple health" : "google fit"}.
                        </Text>
                        <Text style={styles.instructionText}>Results will be shown here.</Text>
                    </View>
                    <View style={styles.logoWrapper}>
                        <TouchableOpacity onPress={onHeadspacePress}>
                            <Image
                                style={StyleSheet.flatten([styles.logo, styles.headspaceBorder])}
                                source={assets.headspace}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onCalmPress}>
                            <Image style={styles.logo} source={assets.calm} />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}

            <View style={styles.navBarWrapper}>
                <NavBar
                    colour={navBarType}
                    activeIndex={1}
                    hasNotification={false}
                    onDismissPress={onDismissPress}
                    labels={labels}
                />
            </View>
        </SafeAreaView>
    );
}
