import { Text } from "@atoms/index";
import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import styles from "./general-info-card.styles";

interface IProps {
    title: string;
    titleColor: string;
    value: string;
    unit?: string;
}
const GeneralInfoCard: SFC<IProps> = ({ titleColor, title, value, unit }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={StyleSheet.flatten([styles.title, { color: titleColor }])}>{title}</Text>
            <View style={styles.valueWrapper}>
                <Text style={styles.value}>{value}</Text>
                <View>{unit ? <Text style={styles.unit}>{unit}</Text> : null}</View>
            </View>
        </View>
    );
};

export default GeneralInfoCard;
