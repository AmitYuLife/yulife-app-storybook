import { CHALLENGE_SCREEN } from "@ids";
import { ChallengesList, IChallengesListProps, ILabel, NavBar, TopBar } from "@molecules/index";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
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
    const { backgroundWrapperStyle, backgroundImage, navBarType, topBarType } = getWorldStyle(currentLevel) as any;

    return (
        <SafeAreaView style={styles.wrapper} testID={CHALLENGE_SCREEN}>
            <SafeAreaView style={backgroundWrapperStyle}>
                <Image resizeMode="cover" style={styles.background} source={backgroundImage} />
            </SafeAreaView>
            <View style={styles.challengeSetWrapper}>
                <ChallengesList challenges={challenges} />
            </View>
            <TopBar
                type={topBarType}
                leftIcon="Back"
                menuLabel="map"
                name={name}
                coins={totalCoins}
                onPressLeftIcon={onPressLeftIcon}
            />
            <View style={styles.navBarWrapper}>
                <NavBar activeIndex={1} colour={navBarType} labels={labels} />
            </View>
        </SafeAreaView>
    );
}

function getWorldStyle(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
        case 3:
            return {
                backgroundImage: require("../../../../../../assets/challenges/mountain.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(59,123,209)" }
                ]),
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "mountain"
            };
        case 2:
            return {
                backgroundImage: require("../../../../../../assets/challenges/desert.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(254,251,205)" }
                ]),
                navBarType: NavBar.Colours.DESERT,
                topBarType: "desert"
            };
        case 1:
            return {
                backgroundImage: require("../../../../../../assets/challenges/ocean.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(87,155,193)" }
                ]),
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "white"
            };
        case 0:
        default:
            return {
                backgroundImage: require("../../../../../../assets/challenges/forest.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(154, 231, 216)" }
                ]),
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "default"
            };
    }
}
