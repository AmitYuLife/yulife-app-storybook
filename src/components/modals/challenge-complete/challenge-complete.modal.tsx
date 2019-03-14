import * as React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Button, Text } from "../../atoms";
import data from "./challenge-complete.modal.data";
import styles from "./challenge-complete.modal.styles";

interface IProps {
    onCtaPress: () => void;
    isLoading?: boolean;
}

const ChallengeComplete: React.SFC<IProps> = ({ isLoading, onCtaPress }) => (
    <View style={styles.wrapper}>
        <Animatable.Image
            style={styles.alarm}
            delay={1000}
            iterationCount="infinite"
            animation="swing"
            source={require("../../../../assets/challenge-complete/alarm.png")}
        />
        <View style={styles.headingWrapper}>
            <Text bold={true} style={styles.text}>
                {data.heading}
            </Text>
        </View>
        <Button
            isLoading={isLoading}
            wrapperStyle={styles.ctaWrapper}
            onPress={onCtaPress}
            label={data.cta}
            type={Button.Types.PRIMARY_SMALL}
        />
    </View>
);

export default ChallengeComplete;
