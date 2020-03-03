import * as React from "react";
import { Image, Text, View } from "react-native";
import styles from "./stats-heading.styles";

interface IProps {
    label: string;
}

const StatsHeading = ({ label }: IProps) => (
    <View style={styles.wrapper}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.icon} source={require("../../../../assets/stats/stats.png")} />
            <Text style={styles.base}>{label}</Text>
        </View>
    </View>
);

export default StatsHeading;
