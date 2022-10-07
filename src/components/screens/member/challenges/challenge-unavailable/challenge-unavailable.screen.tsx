import * as React from "react";
import { Image, View } from "react-native";
import { Text } from "@atoms";
import { Button } from "@molecules";
import assets from "./assets";
import styles from "./challenge-unavailable.styles";
import { CHALLENGE_UNAVAILABLE } from "@ids";
import { t } from "@locale";

interface IProps {
  isYuniversalLevel?: boolean;
  onPressCta: () => void;
  timeRemaining: string;
}

const ChallengeUnavailableScreen = ({ onPressCta, timeRemaining, isYuniversalLevel }: IProps) => {
  return (
    <View style={styles.wrapper} testID={CHALLENGE_UNAVAILABLE}>
      <View style={styles.imageWrapper}>
        <Image source={assets.challengeUnavailable} />
      </View>
      <Text bold={true} style={styles.text}>
        {t(isYuniversalLevel ? "screens.challenge_unavailable.stage" : "screens.challenge_unavailable.level")}
      </Text>
      <Text bold={true} style={styles.heading}>
        {t("screens.challenge_unavailable.next", { timeRemaining })}
      </Text>
      <Button size="Medium" label={t("screens.challenge_unavailable.cta_label")} onPress={onPressCta} />
    </View>
  );
};

export default ChallengeUnavailableScreen;
