import React, { PureComponent } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../atoms";
import Assets, { BoxedHeart, Coins } from "./assets";
import styles from "./picker.styles";

const ICONS: { [name: string]: Icon } = {
    HEART: "heart",
    COINS: "coins"
};

type Icon = "heart" | "coins";

interface IProps {
    onPress: () => void;
    label: string;
    icon: Icon;
    placeholder: string;
}

class Picker extends PureComponent<IProps> {
    public static Icons = ICONS;
    public render() {
        const { onPress, label, icon, placeholder = "" } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={StyleSheet.flatten([styles.wrapper, label ? styles.wrapperFilled : {}])}
            >
                {icon === "coins" ? <Coins scale={0.4} /> : <BoxedHeart scale={0.5} />}
                <View style={styles.textWrapper}>
                    <Text style={styles.label}>{label || placeholder}</Text>
                </View>
                <Image style={styles.arrow} source={Assets.v} />
                {label ? null : <View style={styles.overlay} />}
            </TouchableOpacity>
        );
    }
}

export default Picker;
