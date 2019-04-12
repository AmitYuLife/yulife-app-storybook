import * as React from "react";
import { Image, View } from "react-native";
import { Button, Text } from "../../../../atoms";
import assets from "./assets";
import styles from "./challenge-unavailable.styles";

interface IProps {
    onPressCta: () => void;
    timeRemaining: string;
}

const ChallengeUnavailableScreen = ({ onPressCta, timeRemaining }: IProps) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                <Image source={assets.challengeUnavailable} />
            </View>
            <Text bold={true} style={styles.text}>
                You have just completed a level
            </Text>
            <Text bold={true} style={styles.heading}>
                The next level will be available in {timeRemaining}
            </Text>
            <Button type={Button.Types.PRIMARY_MEDIUM} label="got it" onPress={onPressCta} />
        </View>
    );
};

export default ChallengeUnavailableScreen;
