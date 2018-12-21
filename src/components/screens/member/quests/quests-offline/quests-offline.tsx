import React, { SFC } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { Pad, Text } from "../../../../atoms";
import { NavBar, TopBar } from "../../../../molecules";
import styles from "./quests-offline.styles";

const QuestsScreenOffline: SFC<IConnectedScreenProps & { currentLevel: number }> = ({
    currentLevel,
    totalCoins,
    labels,
    onLeftMenuPress
}) => {
    const worldStyle = getWorldStyle(currentLevel);

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
};

export default QuestsScreenOffline;

const getWorldStyle = (currentLevel: number) => {
    const currentWorld = Math.floor(currentLevel / 50);
    switch (currentWorld) {
        case 1:
            return {
                image: require("../../../../../../assets/quests-offline/ocean.png")
            };
        case 0:
        default:
            return {
                image: require("../../../../../../assets/quests-offline/forest.png")
            };
    }
};
