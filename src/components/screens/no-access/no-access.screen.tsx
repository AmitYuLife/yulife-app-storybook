import { Text } from "@atoms/index";
import * as React from "react";
import { Image, View } from "react-native";
import styles from "./no-access.screen.styles";

export default function NoAccessScreen() {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={require("../../../../assets/purchases-empty/rewards-empty.png")} />
            <View style={styles.contentWrapper}>
                <Text style={styles.text}>Sorry!</Text>
                <Text style={styles.text}>You are not able to use this app at the moment</Text>
            </View>
        </View>
    );
}
