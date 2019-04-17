import { ChallengesList, IChallengesListProps, ILabel, NavBar, TopBar } from "@molecules/index";
import * as React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { IThemeStore } from "../../../../../redux/theme/theme.reducer";
import styles from "./challenges-list.screen.styles";

interface IProps extends IChallengesListProps {
    labels: ILabel[];
    name: string;
    onPressLeftIcon: () => void;
    totalCoins: number;
    theme: IThemeStore["challengeListScreen"];
}

export default function ChallengesListScreen({
    challenges,
    labels,
    onPressLeftIcon,
    totalCoins,
    name,
    theme: { backgroundWrapperStyle, backgroundImage, navBarType, topBarType }
}: IProps) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <SafeAreaView style={backgroundWrapperStyle}>
                <Image resizeMode="cover" style={styles.background} source={getBackgroundImageAsset(backgroundImage)} />
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

function getBackgroundImageAsset(backgroundImage: string) {
    switch (backgroundImage) {
        case "desert":
            return require("../../../../../../assets/challenges/desert.png");
        case "ocean":
            return require("../../../../../../assets/challenges/ocean.png");
        case "forest":
        default:
            return require("../../../../../../assets/challenges/forest.png");
    }
}
