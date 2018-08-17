import * as React from "react";
import { View, Image } from "react-native";
import { Text, Button } from "../../../../../atoms";
import styles from "./purchases-empty.styles";
import data from "./purchases-empty.data";

interface IProps {
    onCtaPress: () => void;
}

const RewardsEmpty: React.SFC<IProps> = ({ onCtaPress }) => (
    <View style={styles.wrapper}>
        <Image style={styles.image} source={require("./assets/rewards-empty.png")} />
        <View style={styles.contentWrapper}>
            <Text style={styles.text}>{data.contentLine1}</Text>
            <Text style={styles.text}>{data.contentLine2}</Text>
        </View>
        <Button type={Button.Types.SECONDARY_MEDIUM} label={data.ctaLabel} onPress={onCtaPress} />
    </View>
);

export default RewardsEmpty;
