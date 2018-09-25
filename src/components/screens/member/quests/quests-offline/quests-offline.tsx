import React, { SFC } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { Pad, Text } from "../../../../atoms";
import { NavBar, TopBar } from "../../../../molecules";
import styles from "./quests-offline.styles";

const QuestsScreenOffline: SFC<IConnectedScreenProps> = ({ totalCoins, labels, onLeftMenuPress }) => (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.backgroundWrapper}>
            <Image
                resizeMode="cover"
                style={styles.background}
                source={require("../../../../../../assets/quests-offline/challenge-offline.png")}
            />
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
            <NavBar
                activeIndex={1}
                hasNotification={false}
                labels={labels}
            />
        </View>
    </SafeAreaView>
);

export default QuestsScreenOffline;
