import { Pad, Text } from "@atoms/index";
import { COLOURS, NavBar, TopBar } from "@molecules/index";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import styles from "./quests-offline.styles";

type Props = IConnectedScreenProps & { currentLevel: number };

export default function QuestsScreenOffline({ currentLevel, totalCoins, labels, onLeftMenuPress }: Props) {
    const { image, navBarType } = getWorldStyle(currentLevel);

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.backgroundWrapper}>
                <Image resizeMode="cover" style={styles.background} source={image} />
            </View>
            <View style={styles.headingWrapper}>
                <View>
                    <Text style={styles.heading} bold={true}>
                        you’re offline
                    </Text>
                </View>
                <Text>Check your internet connection.</Text>
                <Pad height={60} />
            </View>
            <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
            <View style={styles.navBarWrapper}>
                <NavBar activeIndex={1} colour={navBarType} hasNotification={false} labels={labels} />
            </View>
        </SafeAreaView>
    );
}

function getWorldStyle(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
        case 2:
            return {
                image: require("../../../../../../assets/quests-offline/desert.png"),
                navBarType: COLOURS.DARK
            };
        case 1:
            return {
                image: require("../../../../../../assets/quests-offline/ocean.png"),
                navBarType: COLOURS.LIGHT
            };
        case 0:
        default:
            return {
                image: require("../../../../../../assets/quests-offline/forest.png"),
                navBarType: COLOURS.LIGHT
            };
    }
}
