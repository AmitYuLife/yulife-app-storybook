import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "../../../atoms";
import { COLOURS, ILabel, NavBar, TopBar } from "../../../molecules";
import assets from "./assets";
import styles from "./leaderboards.screen.styles";

interface IProps {
    labels: ILabel[];
    hasNotification: boolean;
    totalCoins: number;
    onLeftMenuPress: () => void;
    navbarColour: COLOURS;
}

export default function LeaderboardOfflineScrreen({
    hasNotification,
    totalCoins,
    labels,
    onLeftMenuPress,
    navbarColour
}: IProps) {
    return (
        <SafeAreaView style={StyleSheet.flatten([styles.wrapper, styles.grayscaleWrapper])}>
            <View style={styles.topBarWrapper}>
                <TopBar coins={totalCoins} type="default" onPressLeftIcon={onLeftMenuPress} />
            </View>
            <View style={StyleSheet.flatten([styles.leaderboardOfflineWrapper, styles.listWrapperMargin])}>
                <Text style={styles.leaderboardOfflineText} bold={true}>
                    oops, you appear to be offline
                </Text>
            </View>
            <Image style={styles.leaderboardOfflineImage} source={assets.offline} />
            <View style={styles.navbarWrapper}>
                <NavBar
                    activeIndex={2}
                    hasNotification={hasNotification}
                    labels={labels}
                    colour={navbarColour}
                />
            </View>
        </SafeAreaView>
    );
}
