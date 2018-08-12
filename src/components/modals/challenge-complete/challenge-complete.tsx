import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "../../atoms";
import data from "./challenge-complete.data";
import styles from "./challenge-complete.styles";

interface IProps {
    onCtaPress: () => void;
}

const ChallengeComplete: SFC<IProps> = ({ onCtaPress }) => (
    <View style={styles.wrapper}>
        <Image source={require("./assets/timeup.png")} />
        <View style={styles.headingWrapper}>
            <Text bold={true} style={styles.text}>{data.heading}</Text>
        </View>
        <Button
            wrapperStyle={styles.ctaWrapper}
            onPress={onCtaPress}
            label={data.cta}
            type={Button.Types.PRIMARY_SMALL}
        />
    </View>
);

export default ChallengeComplete;
