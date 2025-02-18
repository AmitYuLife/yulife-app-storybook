import * as React from "react";
import { Blurb, Heading, Pad } from "@atoms";
import { Button } from "@molecules";
import styles from "./signup-reward.screen.styles";
import { CoinConfetti, CentredScreen } from "@molecules";
import { useTranslation } from "@hooks";
import { BUTTON_BASE } from "@ids";

interface IProps {
  isLoading: boolean;
  onCollectPress: () => void;
  yuCoin: number;
}

const SignUpRewardScreen: React.FC<IProps> = ({ isLoading, onCollectPress, yuCoin }) => {
  const translations = useTranslation([
    "screens.signup_reward.title",
    "screens.signup_reward.description",
    "labels.cta.lets_go",
  ]);

  return (
    <CentredScreen backgroundImage={require("@assets/centred-screen/forestBackground.png")} style={styles.wrapper}>
      <Pad height={74} />
      <CoinConfetti coins={yuCoin} />
      <Heading style={styles.heading} bold={true} label={translations["screens.signup_reward.title"]} />
      <Pad height={16} />
      <Blurb
        textStyle={styles.message}
        wrapperStyle={styles.messageWrapper}
        label={translations["screens.signup_reward.description"]}
      />
      <Pad height={40} />
      <Button
        testID={BUTTON_BASE("SIGN_UP_REWARD_SCREEN", isLoading)}
        translationKey="labels.cta.lets_go"
        onPress={onCollectPress}
        isLoading={isLoading}
        disabled={isLoading}
      />
    </CentredScreen>
  );
};

export default React.memo(SignUpRewardScreen);
