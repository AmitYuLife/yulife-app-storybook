import * as React from "react";
import { Image, View } from "react-native";
import { Text } from "@atoms";
import { Button } from "@molecules";
import assets from "./assets";
import styles from "./challenge-unavailable.styles";
import { CHALLENGE_UNAVAILABLE } from "@ids";

interface IProps {
  onPressCta: () => void;
  timeRemaining: string;
}

const ChallengeUnavailableScreen = ({ onPressCta, timeRemaining }: IProps) => {
  return (
    <View style={styles.wrapper} testID={CHALLENGE_UNAVAILABLE}>
      <View style={styles.imageWrapper}>
        <Image source={assets.challengeUnavailable} />
      </View>
      <Text bold={true} style={styles.text}>
        You have just completed a level
      </Text>
      <Text bold={true} style={styles.heading}>
        The next level will be available in {timeRemaining}
      </Text>
      <Button size="Medium" label="got it" onPress={onPressCta} />
    </View>
  );
};

export default ChallengeUnavailableScreen;
