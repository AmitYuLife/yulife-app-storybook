import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    time: {

    } as ImageStyle
});

const Clock = () => (
    <Image
        resizeMethod="resize"
        resizeMode="contain"
        style={styles.time}
        source={require("../../../../assets/clock/clock.png")}
    />
);

export default Clock;
