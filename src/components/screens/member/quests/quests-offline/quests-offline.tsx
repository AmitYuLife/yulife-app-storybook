import * as React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { Pad, Text } from "../../../../atoms";
import { NavBar, TopBar } from "../../../../molecules";
import styles from "./quests-offline.styles";

type Props = IConnectedScreenProps & { currentLevel: number };

export default function QuestsScreenOffline({ currentLevel, totalCoins, labels, onLeftMenuPress }: Props) {
    const worldStyle = getStyle(currentLevel);

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.backgroundWrapper}>
                <Image resizeMode="cover" style={styles.background} source={worldStyle.image} />
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
                <NavBar activeIndex={1} hasNotification={false} labels={labels} />
            </View>
        </SafeAreaView>
    );
}

function getStyle(currentLevel: number) {
    switch (true) {
        case currentLevel > 50:
            return {
                image: require("../../../../../../assets/quests-offline/ocean.png")
            };
        case currentLevel > 0:
        default:
            return {
                image: require("../../../../../../assets/quests-offline/forest.png")
            };
    }
}
