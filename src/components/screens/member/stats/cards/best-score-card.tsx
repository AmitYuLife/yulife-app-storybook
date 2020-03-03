import { Text } from "@atoms/index";
import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import styles from "./best-score-card.styles";

interface IProps {
    title: string;
    titleColor: string;
    value: string;
    unit?: string;
    date: string;
    subTitleColor: string;
    dateText: string;
}
const BestScoreCard: SFC<IProps> = ({ titleColor, title, value, unit, date, subTitleColor, dateText }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={StyleSheet.flatten([styles.title, { color: titleColor }])}>{title}</Text>
            <Text style={StyleSheet.flatten([styles.amount, { color: subTitleColor }])}>amount</Text>
            <View style={styles.valueWrapper}>
                <Text style={styles.value}>{value}</Text>
                <View>{!unit ? null : <Text style={styles.unit}>{unit}</Text>}</View>
            </View>
            <Text style={StyleSheet.flatten([styles.dateText, { color: subTitleColor }])}>{dateText}</Text>
            <Text style={styles.dateValue}>{date}</Text>
        </View>
    );
};

export default BestScoreCard;
