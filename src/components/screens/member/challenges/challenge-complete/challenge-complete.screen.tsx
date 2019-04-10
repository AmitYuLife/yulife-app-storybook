import * as React from "react";
import { Image, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Button, Text } from "../../../../atoms";
import data from "./challenge-complete.data";
import styles from "./challenge-complete.styles";

interface IProps {
    onCtaPress: () => void;
    isLoading?: boolean;
}

const ChallengeCompleteScreen: React.SFC<IProps> = ({ isLoading, onCtaPress }) => (
    <View style={styles.wrapper}>
        <View>
            <Animatable.Image
                style={styles.alarm}
                delay={1000}
                iterationCount="infinite"
                animation="swing"
                source={require("../../../../../../assets/challenge-complete/clock.png")}
            />
            <Image style={styles.base} source={require("../../../../../../assets/challenge-complete/base.png")} />
        </View>
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

export default ChallengeCompleteScreen;
