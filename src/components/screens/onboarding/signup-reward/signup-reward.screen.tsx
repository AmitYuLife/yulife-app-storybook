import * as React from "react";
import { Blurb, Heading, Pad } from "@atoms";
import { Button } from "@molecules";
import styles from "./signup-reward.screen.styles";
import { CoinConfetti, CentredScreen } from "@molecules";
import { useTranslation } from "@hooks";

interface IProps {
  isLoading: boolean;
  onCollectPress: () => void;
  yuCoin: number;
}

const SignUpRewardScreen: React.FC<IProps> = ({ isLoading, onCollectPress, yuCoin }) => {
  const translations = useTranslation([
    "screens.signup_reward.heading",
    "screens.signup_reward.subheading",
    "screens.signup_reward.cta_label",
    "screens.signup_reward.cta_accessibility",
    "screens.signup_reward.subheading_accessibility",
  ]);

  return (
    <CentredScreen backgroundImage={require("@assets/centred-screen/forestBackground.png")} style={styles.wrapper}>
      <Pad height={74} />
      <CoinConfetti coins={yuCoin} />
      <Heading style={styles.heading} bold={true} label={translations["screens.signup_reward.heading"]} />
      <Pad height={16} />
      <Blurb
        textStyle={styles.message}
        wrapperStyle={styles.messageWrapper}
        label={translations["screens.signup_reward.subheading"]}
        accessibilityLabel={translations["screens.signup_reward.subheading_accessibility"]}
        accessible={true}
      />
      <Pad height={40} />
      <Button
        label={translations["screens.signup_reward.cta_label"]}
        accessibilityLabel={translations["screens.signup_reward.cta_accessibility"]}
        onPress={onCollectPress}
        isLoading={isLoading}
        disabled={isLoading}
      />
    </CentredScreen>
  );
};

export default React.memo(SignUpRewardScreen);
