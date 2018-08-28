import * as React from "react";
import { SFC } from "react";
import {
    StyleSheet,
    Text,
    View,
    ViewStyle
} from "react-native";
import styles from "./blurb.styles";

interface IProps {
    label: string;
    wrapperStyle?: ViewStyle;
}

const Blurb: SFC<IProps> = ({ label, wrapperStyle }) => (
    <View
        style={StyleSheet.flatten([
            styles.wrapper,
            wrapperStyle
        ])}
    >
        <Text style={styles.base}>{label}</Text>
    </View>
);

export default Blurb;
