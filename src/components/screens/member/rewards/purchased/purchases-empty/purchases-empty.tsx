import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "../../../../../atoms";
import data from "./purchases-empty.data";
import styles from "./purchases-empty.styles";

interface IProps {
    onCtaPress: () => void;
}

const PurchasesEmpty: SFC<IProps> = ({ onCtaPress }) => (
    <View style={styles.wrapper}>
        <Image style={styles.image} source={require("./assets/rewards-empty.png")} />
        <View style={styles.contentWrapper}>
            <Text style={styles.text}>{data.contentLine1}</Text>
            <Text style={styles.text}>{data.contentLine2}</Text>
        </View>
        <Button type={Button.Types.SECONDARY_MEDIUM} label={data.ctaLabel} onPress={onCtaPress} />
    </View>
);

export default PurchasesEmpty;
