import React, { SFC } from "react";
import {
    Image,
    SafeAreaView,
    View
} from "react-native";
import {
    Pad,
    Text
} from "../../../../atoms";
import styles from "./quests-offline.styles";

const QuestsScreenOffline: SFC = () => (
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
                    <Text style={styles.heading} bold={true}>you’re offline</Text>
                </View>
                <Text>Check your internet connection.</Text>
                <Pad height={60} />
            </View>
        </SafeAreaView>
    );

export default QuestsScreenOffline;
